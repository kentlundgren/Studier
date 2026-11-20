/*
 * skript.js: Besked före beslut (webbversion av policyrapporten, ETE409 UPG2).
 * Allt körs i webbläsaren. Ingen data skickas någonstans.
 *
 * UPPDATERING 2026-11-20: ny sida. Version 1.0.
 */
const VERSION = '1.0';
const VERSIONSDATUM = '2026-11-20';

(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const kr = n => new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 0 }).format(n).replace(/ /g, ' ') + ' kr';
  const tal = (n, d) => new Intl.NumberFormat('sv-SE', { maximumFractionDigits: d == null ? 0 : d, minimumFractionDigits: d == null ? 0 : d }).format(n).replace(/ /g, ' ');
  const avrunda100 = n => Math.round(n / 100) * 100;
  const mindreRorelse = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- version ---------- */
  $$('[data-version-rad]').forEach(e => { e.textContent = 'Version ' + VERSION + ' · ' + VERSIONSDATUM; });

  /* ---------- tema ---------- */
  const temaKnapp = $('#temaknapp');
  function arMork() {
    const t = document.documentElement.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function uppdateraTemaKnapp() {
    if (!temaKnapp) return;
    const mork = arMork();
    temaKnapp.textContent = mork ? 'Ljust läge' : 'Mörkt läge';
    temaKnapp.setAttribute('aria-pressed', mork ? 'true' : 'false');
  }
  if (temaKnapp) {
    temaKnapp.addEventListener('click', () => {
      const nytt = arMork() ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nytt);
      try { localStorage.setItem('tema', nytt); } catch (e) { /* utan lagring fungerar sidan ändå */ }
      uppdateraTemaKnapp();
    });
    uppdateraTemaKnapp();
  }

  /* ---------- läsframsteg och innehållsförteckning ---------- */
  const stapel = $('#progress');
  function framsteg() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    stapel.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
  }
  window.addEventListener('scroll', framsteg, { passive: true });
  framsteg();

  const toc = $('#toc');
  if (toc && window.innerWidth <= 980) toc.removeAttribute('open');
  const tocLankar = $$('#toc a');
  const mal = tocLankar.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if ('IntersectionObserver' in window && mal.length) {
    const io = new IntersectionObserver(poster => {
      poster.forEach(p => {
        if (p.isIntersecting) {
          tocLankar.forEach(a => a.classList.toggle('aktiv', a.getAttribute('href') === '#' + p.target.id));
        }
      });
    }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });
    mal.forEach(m => io.observe(m));
  }

  /* ---------- hjälpare: gå igenom textnoder ---------- */
  const UTESLUT = 'a, abbr, h1, h2, h3, caption, figcaption, table, code, .ref, .extra, .cit, .ankare, button, label';
  function textnoder(rot) {
    const w = document.createTreeWalker(rot, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.parentElement && !n.parentElement.closest(UTESLUT) && n.nodeValue.trim()) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const lista = [];
    while (w.nextNode()) lista.push(w.currentNode);
    return lista;
  }
  function slaIn(nod, re, skapa) {
    const m = re.exec(nod.nodeValue);
    if (!m) return false;
    const fore = nod.nodeValue.slice(0, m.index);
    const efter = nod.nodeValue.slice(m.index + m[0].length);
    const el = skapa(m[0]);
    const p = nod.parentNode;
    p.insertBefore(document.createTextNode(fore), nod);
    p.insertBefore(el, nod);
    nod.nodeValue = efter;
    return true;
  }

  const rapport = $('#rapport');

  /* ---------- källkort: hänvisningar i löptext pekar på referenslistan ---------- */
  (window.CITERINGAR || []).forEach(c => {
    const re = new RegExp(c.re);
    // länkar vars text är en hänvisning
    $$('#rapport a').forEach(a => {
      if (!a.closest('.ref') && !a.closest('.extra') && !a.closest('caption, figcaption') && re.test(a.textContent) && !a.dataset.ref) {
        a.dataset.ref = c.id;
        a.classList.add('cit');
      }
    });
    // vanlig text
    textnoder(rapport).forEach(n => {
      let guard = 0;
      let nod = n;
      while (nod && guard++ < 10) {
        const m = re.exec(nod.nodeValue);
        if (!m) break;
        const span = document.createElement('span');
        span.className = 'cit';
        span.tabIndex = 0;
        span.dataset.ref = c.id;
        span.textContent = m[0];
        const fore = nod.nodeValue.slice(0, m.index);
        const efter = nod.nodeValue.slice(m.index + m[0].length);
        const p = nod.parentNode;
        p.insertBefore(document.createTextNode(fore), nod);
        p.insertBefore(span, nod);
        const nyNod = document.createTextNode(efter);
        p.insertBefore(nyNod, nod);
        p.removeChild(nod);
        nod = nyNod;
      }
    });
  });

  /* ---------- ordlista: första förekomsten av varje term förklaras ---------- */
  (window.ORDLISTA || []).forEach(t => {
    const re = new RegExp('(?<![\\wåäöÅÄÖ])(?:' + t.re + ')(?![\\wåäöÅÄÖ])', 'i');
    for (const n of textnoder(rapport)) {
      if (slaIn(n, re, txt => {
        const a = document.createElement('abbr');
        a.tabIndex = 0;
        a.dataset.forklaring = t.forklaring;
        a.textContent = txt;
        return a;
      })) break;
    }
  });

  /* ---------- hovringsruta (hovring, fokus och tryck) ---------- */
  const tip = $('#tip');
  let tipMal = null;
  function visaTip(el) {
    let inre = '';
    if (el.dataset.forklaring) {
      inre = '<span class="tip-rubrik">' + el.textContent.replace(/</g, '&lt;') + '</span>' + el.dataset.forklaring.replace(/</g, '&lt;');
    } else if (el.dataset.ref) {
      const ref = document.getElementById(el.dataset.ref);
      if (!ref) return;
      inre = ref.innerHTML + '<a class="tip-lank" href="#' + el.dataset.ref + '">Gå till referenslistan</a>';
    } else return;
    tip.innerHTML = inre;
    tip.hidden = false;
    tipMal = el;
    const r = el.getBoundingClientRect();
    const tb = tip.offsetWidth;
    let x = r.left + window.scrollX;
    const max = window.scrollX + document.documentElement.clientWidth - tb - 8;
    x = Math.max(window.scrollX + 8, Math.min(x, max));
    let y = r.bottom + window.scrollY + 6;
    if (r.bottom + tip.offsetHeight + 12 > window.innerHeight && r.top > tip.offsetHeight + 12) {
      y = r.top + window.scrollY - tip.offsetHeight - 6;
    }
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
  function doljTip() { tip.hidden = true; tipMal = null; }
  const arTipMal = e => e.target.closest && e.target.closest('abbr[data-forklaring], .cit');
  document.addEventListener('mouseover', e => { const t = arTipMal(e); if (t) visaTip(t); });
  document.addEventListener('mouseout', e => {
    const t = arTipMal(e);
    if (t && !(e.relatedTarget && (t.contains(e.relatedTarget) || tip.contains(e.relatedTarget)))) {
      setTimeout(() => { if (tipMal === t && !tip.matches(':hover')) doljTip(); }, 120);
    }
  });
  tip.addEventListener('mouseleave', () => doljTip());
  document.addEventListener('focusin', e => { const t = arTipMal(e); if (t) visaTip(t); });
  document.addEventListener('focusout', e => { if (arTipMal(e) && !tip.contains(e.relatedTarget)) doljTip(); });
  document.addEventListener('click', e => {
    const t = arTipMal(e);
    if (t && t.tagName !== 'A') { if (tipMal === t) doljTip(); else visaTip(t); return; }
    if (!tip.contains(e.target) && !t) doljTip();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { doljTip(); stangModal(); }
  });

  /* ---------- Diagram 0: gissa först ---------- */
  const prickar = $('#prickar');
  if (prickar) {
    for (let i = 0; i < 46; i++) {
      const s = document.createElement('span');
      s.className = 'prick ' + (i < 43 ? 'stoppad' : 'fick');
      prickar.appendChild(s);
    }
  }
  const visaSvar = $('#visa-svar');
  const gissning = $('#gissning');
  function gissaKlar() {
    const svar = $('#svar');
    const v = gissning.value.trim();
    let text = '';
    if (v !== '') {
      const g = Math.max(0, Math.min(46, parseInt(v, 10) || 0));
      text = 'Du gissade ' + g + '. ';
    }
    text += 'Svaret är 43 av 46 projekt, alltså 93 procent. Åren 2021–2024 var genomsnittet 68 procent.';
    $('#svar-text').textContent = text;
    svar.hidden = false;
    requestAnimationFrame(() => {
      svar.classList.add('visad');
      $$('.prick', prickar).forEach((p, i) => {
        if (mindreRorelse) p.classList.add('visad');
        else setTimeout(() => p.classList.add('visad'), i * 25);
      });
    });
  }
  if (visaSvar) {
    visaSvar.addEventListener('click', gissaKlar);
    gissning.addEventListener('keydown', e => { if (e.key === 'Enter') gissaKlar(); });
  }

  /* ---------- Diagram 1: vad hade jag fått? ---------- */
  const STEG = [
    { till: 5, p: 2.5 },
    { till: 6, p: 2.0 },
    { till: 7, p: 1.5 },
    { till: 8, p: 1.0 },
    { till: 9, p: 0.5 }
  ];
  const GWH_PER_VERK = 23.8;   // 6,6 MW x 3 610 timmar, avrundat som i avsnitt 2.4
  const VIKTNING = 0.75;
  const TAK = 0.02;            // 14 § intäktsdelningslagen
  const kAvstand = $('#k-avstand');
  function las(id) { return parseFloat(($('#' + id).value || '').replace(',', '.')); }
  function raknaOm() {
    const avstand = las('k-avstand'), hojd = las('k-hojd'), pris = las('k-pris');
    const verk = las('k-verk'), bostader = las('k-bostader'), ar = las('k-ar');
    if ([avstand, hojd, pris, verk, bostader, ar].some(v => !isFinite(v) || v < 0) || hojd <= 0 || verk < 1 || bostader < 1) {
      $('#k-huvud').textContent = 'Fyll i alla fält med siffror.';
      $('#k-detaljer').innerHTML = '';
      $('#k-staplar').innerHTML = '';
      return;
    }
    const intaktVerk = GWH_PER_VERK * 1e6 * (pris / 100) * VIKTNING;       // kr per verk och år
    const verkshojder = avstand / hojd;
    let steg = null, stegNr = -1;
    for (let i = 0; i < STEG.length; i++) { if (verkshojder <= STEG[i].till + 1e-9) { steg = STEG[i]; stegNr = i; break; } }
    const perSteg = STEG.map(s => 2 * (s.p / 1000) * intaktVerk);          // två verk i samma steg
    const fore = steg ? perSteg[stegNr] : 0;
    const tak = TAK * intaktVerk * verk;
    const summaFore = fore * bostader;
    const faktor = summaFore > 0 ? Math.min(1, tak / summaFore) : 1;
    const efter = fore * faktor;
    const jamnt = tak / bostader;
    const detaljer = [];
    detaljer.push(['Avstånd i verkshöjder', tal(verkshojder, 1)]);
    detaljer.push(['Steg i 12 §', steg ? ('upp till ' + steg.till + ' verkshöjder, ' + tal(steg.p, 1) + ' promille per verk') : 'utanför nio verkshöjder, ingen rätt']);
    detaljer.push(['Intäkt per verk och år', tal(intaktVerk / 1e6, 1) + ' miljoner kr']);
    detaljer.push(['Ersättning före tak (två verk)', kr(avrunda100(fore))]);
    detaljer.push(['Taket, 2 procent av parkens intäkt', tal(tak / 1e6, 1) + ' miljoner kr']);
    detaljer.push(['Taket delat på ' + tal(bostader) + ' bostäder', kr(avrunda100(jamnt))]);
    if (steg && faktor < 1) {
      detaljer.push(['Om alla ' + tal(bostader) + ' bostäder låg i det här steget, efter tak', kr(avrunda100(efter))]);
    }
    if (ar > 1) detaljer.push(['Förlorad ersättning på ' + tal(ar) + ' år utan anmälan (före tak)', kr(avrunda100(fore * ar))]);
    $('#k-huvud').textContent = steg
      ? ('Cirka ' + kr(avrunda100(fore)) + ' per år före tak')
      : 'Ingen ersättning: bostaden ligger utanför nio verkshöjder';
    const dl = $('#k-detaljer');
    dl.innerHTML = '';
    detaljer.forEach(d => {
      const dt = document.createElement('dt'); dt.textContent = d[0];
      const dd = document.createElement('dd'); dd.textContent = d[1];
      dl.appendChild(dt); dl.appendChild(dd);
    });
    if (steg && faktor < 1) {
      const v = document.createElement('p');
      v.className = 'varning';
      v.textContent = 'Taket slår till: delas det på ' + tal(bostader) + ' bostäder blir det ' + kr(avrunda100(jamnt)) + ' i snitt. Besked före beslut visar skillnaden.';
      dl.appendChild(v);
    }
    const max = Math.max.apply(null, perSteg);
    const st = $('#k-staplar');
    st.innerHTML = '';
    STEG.forEach((s, i) => {
      const fran = i === 0 ? 0 : STEG[i - 1].till;
      const rad = document.createElement('div');
      rad.className = 'steg-rad' + (i === stegNr ? ' nu' : '');
      const namn = document.createElement('span');
      namn.textContent = (i === 0 ? 'Högst ' + tal(s.till * hojd) + ' m' : tal(fran * hojd) + '–' + tal(s.till * hojd) + ' m');
      const bar = document.createElement('span'); bar.className = 'bar';
      const inre = document.createElement('span'); inre.style.width = (perSteg[i] / max * 100) + '%';
      bar.appendChild(inre);
      const v = document.createElement('span'); v.className = 'v'; v.textContent = tal(avrunda100(perSteg[i]));
      rad.appendChild(namn); rad.appendChild(bar); rad.appendChild(v);
      st.appendChild(rad);
    });
  }
  if (kAvstand) {
    $$('.kalkyl input').forEach(i => i.addEventListener('input', raknaOm));
    raknaOm();
  }

  /* ---------- Diagram 2: var kommer beskedet? ---------- */
  const STEGLISTA = [
    { namn: 'Samråd', idag: 'Samrådet med de särskilt berörda hålls före ansökan (6 kap. 4 § miljöbalken). Inget krav på att ersättningen redovisas.', fors: 'Ett naturligt ställe att lämna beskedet, som dialog och inte bara som information.', idagKand: false, forsKand: false, andrat: true },
    { namn: 'Ansökan om tillstånd', idag: 'Ansökan anger verkens högsta höjd och en flyttmån, men inte vad ett hushåll får.', fors: 'Verkens layout avgör vilket avståndssteg en bostad ligger i. Beskedet kan bli ett intervall.', idagKand: false, forsKand: false, andrat: true },
    { namn: 'Kommunens beslut om tillstyrkan', idag: 'Kommunen och de boende väger projektet utan att veta vad ersättningen blir.', fors: 'Verksamhetsutövaren redovisar beräknad ersättning per bostad före beslutet (förslag 1).', idagKand: false, forsKand: true, andrat: true },
    { namn: 'Tillstånd', idag: 'Tillstånd enligt miljöbalken. Ersättningen är fortfarande okänd för de boende.', fors: 'Beloppet har varit känt sedan före kommunens beslut.', idagKand: false, forsKand: true, andrat: false },
    { namn: 'Drift', idag: 'Informationen får lämnas först nu, senast när anläggningen tas i drift (6 §).', fors: 'Informationen upprepas. Beloppet är redan känt.', idagKand: true, forsKand: true, andrat: false },
    { namn: 'Utbetalning varje år', idag: 'Ägaren måste anmäla anspråk skriftligen senast vid utgången av februari, annars upphör rätten (10 §).', fors: 'Rätten följer av fastighetsregistret och ingen årlig anmälan behövs (förslag 2).', idagKand: true, forsKand: true, andrat: true },
    { namn: 'Uppföljning', idag: 'Ingen samlad uppföljning och inget register.', fors: 'Register och uppföljning hos Energimyndigheten (förslag 3).', idagKand: true, forsKand: true, andrat: true }
  ];
  const tidLista = $('#tid-lista');
  function ritaTid(lage) {
    if (!tidLista) return;
    const forslag = lage === 'forslag';
    tidLista.innerHTML = '';
    let forsta = -1;
    STEGLISTA.forEach((s, i) => {
      const kand = forslag ? s.forsKand : s.idagKand;
      if (kand && forsta < 0) forsta = i;
      const li = document.createElement('li');
      li.className = (kand ? 'kand ' : '') + (forslag && s.andrat ? 'andrat' : '');
      const d = document.createElement('div');
      const namn = document.createElement('span');
      namn.className = 'namn';
      namn.textContent = s.namn;
      const m = document.createElement('span');
      m.className = 'emerke ' + (kand ? 'ja' : 'nej');
      m.textContent = kand ? 'Ersättningen är känd' : 'Ersättningen är okänd';
      namn.appendChild(m);
      const p = document.createElement('span');
      p.textContent = forslag ? s.fors : s.idag;
      d.appendChild(namn);
      d.appendChild(p);
      li.appendChild(d);
      tidLista.appendChild(li);
    });
    $('#tid-sammanfattning').textContent = (forslag ? 'Med förslaget' : 'Idag') +
      ': ersättningen är känd från steg ' + (forsta + 1) + ' av ' + STEGLISTA.length + ' (' + STEGLISTA[forsta].namn.toLowerCase() + ').';
  }
  $$('.vaxel-knapp').forEach(k => k.addEventListener('click', () => {
    $$('.vaxel-knapp').forEach(x => x.setAttribute('aria-pressed', x === k ? 'true' : 'false'));
    ritaTid(k.dataset.lage);
  }));
  ritaTid('idag');

  /* ---------- kopiera hänvisning ---------- */
  const kop = $('#kopiera');
  if (kop) {
    kop.addEventListener('click', () => {
      const rad = 'Lundgren, K. (2026) Besked före beslut: att förbättra intäktsdelningen från vindkraft till närboende. Policyrapport, ETE409 UPG2, Linköpings universitet. ' + location.href.split('#')[0];
      const klar = () => { kop.textContent = 'Hänvisningen är kopierad'; setTimeout(() => { kop.textContent = 'Kopiera hänvisning'; }, 2500); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(rad).then(klar, () => window.prompt('Kopiera hänvisningen:', rad));
      } else {
        window.prompt('Kopiera hänvisningen:', rad);
      }
    });
  }

  /* ---------- teknik-modal ---------- */
  const modal = $('#techModal');
  const techKnapp = $('#techBtn');
  function oppnaModal() { modal.classList.add('show'); $('#techClose').focus(); }
  function stangModal() { if (modal.classList.contains('show')) { modal.classList.remove('show'); techKnapp.focus(); } }
  techKnapp.addEventListener('click', oppnaModal);
  $('#techClose').addEventListener('click', stangModal);
  modal.addEventListener('click', e => { if (e.target === modal) stangModal(); });
})();
