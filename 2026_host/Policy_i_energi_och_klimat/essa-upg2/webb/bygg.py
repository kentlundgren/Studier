#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
bygg.py: bygger index.html ur rapporten 261120_3000_ord.md.

Körs från vilken mapp som helst:  python bygg.py
Läser:   ../261120_3000_ord.md, mall.html, del-kalkyl.html, del-tidslinje.html
Skriver: index.html

Rapportens text visas ordagrant. Det extra (Diagram 1 och 2, ordlista, källkort)
läggs till av det här skriptet och av skript.js. Ändras md-filen: kör skriptet igen.
"""
import html
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
MD = os.path.join(HERE, '..', '261120_3000_ord.md')
LIVE = 'https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/'
GITHUB_MAPP = 'https://github.com/kentlundgren/Studier/tree/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb'
GITHUB_MD = 'https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/261120_3000_ord.md'


def lasa(namn):
    with open(os.path.join(HERE, namn), encoding='utf-8') as f:
        return f.read()


def esc(s):
    return html.escape(s, quote=False)


def slug(s):
    s = s.lower()
    for a, b in (('å', 'a'), ('ä', 'a'), ('ö', 'o'), ('é', 'e'), ('ü', 'u')):
        s = s.replace(a, b)
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s


# ---------- inline-markdown ----------
PAT = [('bold', re.compile(r'\*\*(.+?)\*\*')),
       ('link', re.compile(r'\[([^\]]+)\]\(([^)\s]+)\)')),
       ('auto', re.compile(r'<(https?://[^>\s]+)>')),
       ('ital', re.compile(r'(?<![\*\w])\*(?!\s)(.+?)(?<!\s)\*(?!\*)')),
       ('code', re.compile(r'`([^`]+)`'))]


def inline(text):
    out = []
    while text:
        best = None
        for k, p in PAT:
            m = p.search(text)
            if m and (best is None or m.start() < best[1].start()):
                best = (k, m)
        if not best:
            out.append(esc(text))
            break
        k, m = best
        if m.start() > 0:
            out.append(esc(text[:m.start()]))
        if k == 'bold':
            out.append('<strong>%s</strong>' % inline(m.group(1)))
        elif k == 'ital':
            out.append('<em>%s</em>' % inline(m.group(1)))
        elif k == 'link':
            out.append('<a href="%s" target="_blank" rel="noopener">%s</a>' % (
                html.escape(m.group(2), quote=True), inline(m.group(1))))
        elif k == 'auto':
            u = m.group(1)
            out.append('<a href="%s" target="_blank" rel="noopener">%s</a>' % (
                html.escape(u, quote=True), esc(u)))
        else:
            out.append('<code>%s</code>' % esc(m.group(1)))
        text = text[m.end():]
    return ''.join(out)


def klartext(s):
    s = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', s)
    return re.sub(r'[*`]', '', s)


# ---------- hjälpare för text utanför taggar ----------
def i_text(htmlstr, fn, hoppa=('a', 'code')):
    delar = re.split(r'(<[^>]+>)', htmlstr)
    djup = {t: 0 for t in hoppa}
    for i, d in enumerate(delar):
        if d.startswith('<'):
            m = re.match(r'<(/?)([a-zA-Z0-9]+)', d)
            if m and m.group(2).lower() in djup:
                djup[m.group(2).lower()] += -1 if m.group(1) else 1
            continue
        if any(v > 0 for v in djup.values()):
            continue
        delar[i] = fn(d)
    return ''.join(delar)


# ---------- ordlista (förklaras vid hovring, fokus och tryck) ----------
ORDLISTA = [
    {"id": "verkshojd", "re": "verkshöjd\\w*",
     "forklaring": "Verkets höjd: den högsta höjden över marken när ett rotorblad står rakt upp (4 § intäktsdelningslagen). Avståndet till en bostad mäts i antal verkshöjder (7 och 12 §§)."},
    {"id": "tillstyrkan", "re": "tillstyrkan",
     "forklaring": "Kommunens ja till en vindkraftsetablering. Tillstånd kan inte ges utan den (16 kap. 4 § miljöbalken)."},
    {"id": "promille", "re": "promille",
     "forklaring": "Tusendelar. 2,5 promille är 0,25 procent."},
    {"id": "tillstandspliktig", "re": "tillståndspliktig\\w*",
     "forklaring": "Kräver tillstånd enligt miljöbalken innan verken får byggas (21 kap. 13–14 §§ miljöprövningsförordningen)."},
    {"id": "anmalningspliktig", "re": "anmälningspliktig\\w*",
     "forklaring": "Behöver bara anmälas. Kräver varken tillstånd eller kommunens tillstyrkan (21 kap. 15 § miljöprövningsförordningen)."},
    {"id": "verksamhetsutovare", "re": "verksamhetsutövare\\w*",
     "forklaring": "Den som driver anläggningen och betalar ersättningen (5 § intäktsdelningslagen)."},
    {"id": "bygdemedel", "re": "bygdemedel\\w*",
     "forklaring": "Frivilliga medel som bolag kan erbjuda lokalsamhället. De regleras inte av intäktsdelningslagen."},
    {"id": "asymmetrisk", "re": "asymmetrisk information|informationsasymmetri",
     "forklaring": "En part vet mer än en annan. Här kan bolaget räkna ut ersättningen, medan de boende får veta den först när anläggningen tas i drift."},
    {"id": "procedurell", "re": "procedurell\\w* rättvisa|procedurella rättvisa",
     "forklaring": "Hur rättvis processen och beslutet upplevs att ha varit (Gross, 2007)."},
    {"id": "transaktionskostnad", "re": "transaktionskostnad\\w*",
     "forklaring": "Kostnaden i tid och kunskap för att få något gjort. Här: att varje år skriftligen anmäla sitt anspråk (10 §)."},
    {"id": "marknadshinder", "re": "marknadshinder\\w*",
     "forklaring": "Något som hindrar en marknad från att fungera som i teorin och som kan motivera ett styrmedel (kursens begrepp)."},
    {"id": "externalitet", "re": "externalitet\\w*",
     "forklaring": "En effekt på någon som inte är part i affären. Här: vindkraftverkens påverkan på bostadspriser, som i en svensk studie sträcker sig upp till cirka 8 kilometer."},
    {"id": "effektutvardering", "re": "effektutvärdering\\w*",
     "forklaring": "Mäter hur mycket styrmedlet ändrar utfallet, med hänsyn till free-riders och spillover (kursens definition)."},
    {"id": "processutvardering", "re": "processutvärdering\\w*",
     "forklaring": "Prövar om styrmedlets logik fungerar (kursens definition)."},
    {"id": "freerider", "re": "free-rider\\w*",
     "forklaring": "Här: att acceptansen förändras av något annat än ersättningen, så att styrmedlet får äran för något det inte orsakat."},
    {"id": "spillover", "re": "spillover",
     "forklaring": "Att aktörer utanför ersättningens radie också påverkas."},
    {"id": "formativ", "re": "formativ\\w*",
     "forklaring": "En utvärdering som pågår medan styrmedlet verkar, så att resultaten kan ändra det (avsnitt 4)."},
    {"id": "tak", "re": "\\btak(?:et)?\\b",
     "forklaring": "Verksamhetsutövaren behöver inte betala mer än 2 procent av anläggningens intäkter per år. Överstiger ersättningarna taket sätts de ned proportionellt (14 §)."},
    {"id": "viktning", "re": "viktning\\w*",
     "forklaring": "Vindkraftens vägda pris antas vara 75 procent av medelpriset (avsnitt 2.4)."},
    {"id": "mw", "re": "\\bMW\\b",
     "forklaring": "Megawatt: effekt. 1 MW är en miljon watt."},
    {"id": "gwh", "re": "\\bGWh\\b",
     "forklaring": "Gigawattimmar: energi. 1 GWh är en miljon kilowattimmar."},
]

# ---------- källkort: text i löptext som pekar på en post i referenslistan ----------
CITERINGAR = [
    ("Gross, 2007", "ref-gross-2007"),
    ("Wüstenhagen, Wolsink & Bürer, 2007|Wüstenhagen m\\.fl\\. \\(2007\\)", "ref-wustenhagen-2007"),
    ("Lindvall, 2023", "ref-lindvall-2023"),
    ("Cowell, Bristow & Munday, 2011", "ref-cowell-2011"),
    ("Knauf, 2022", "ref-knauf-2022"),
    ("Johansen & Emborg, 2018|Johansen och Emborg \\(2018\\)", "ref-johansen-2018"),
    ("le Maitre m\\.fl\\., 2023", "ref-le-maitre-2023"),
    ("Westlund & Wilhelmsson, 2021", "ref-westlund-2021"),
    ("Lundgren, 1998", "ref-lundgren-1998"),
    ("Lundgren, 2017", "ref-lundgren-2017"),
    ("Lundgren, 2021", "ref-lundgren-2021"),
    ("Lundgren, 2026", "ref-lundgren-2026"),
    ("Linköpings universitet, 2026a", "ref-linkopings-universitet-2026a"),
    ("Linköpings universitet, 2026b", "ref-linkopings-universitet-2026b"),
    ("Linköpings universitet, 2026c", "ref-linkopings-universitet-2026c"),
    ("Linköpings universitet, 2026d", "ref-linkopings-universitet-2026d"),
    ("Linköpings universitet, 2026e", "ref-linkopings-universitet-2026e"),
    ("Green Power Sweden, 2026", "ref-green-power-sweden-2026"),
    ("Kaufmann & Westander, 2026", "ref-kaufmann-2026"),
    ("Fred\\. Olsen Renewables AB, 2025", "ref-fred-olsen-renewables-ab-2025"),
    ("Gustafsson, 2025", "ref-gustafsson-2025"),
    ("Mark- och miljööverdomstolen, 2022", "ref-mark-och-miljooverdomstolen-2022"),
    ("Västanby AB, u\\.å\\.", "ref-vastanby-ab-u-a"),
    ("Regeringen, 2026c", "ref-regeringen-2026c"),
    ("bet\\. 2025/26:NU20", "ref-naringsutskottet-2026"),
    ("prop\\. 2025/26:239", "ref-regeringen-2026a"),
    ("dir\\. 2026:58", "ref-regeringen-2026b"),
    ("bet\\. 2022/23:FiU21", "ref-finansutskottet-2023"),
]


def bygg():
    rader = lasa(os.path.join('..', os.path.basename(MD))).split('\n')
    ordantal = ''
    sub = []
    toc = []
    kropp = []
    ref_ids = []
    heading_nr = {}
    vantande_cap = None
    i = 0
    i_ref = False
    seen_h1 = False
    kalkyl = lasa('del-kalkyl.html')
    tidslinje = lasa('del-tidslinje.html')
    titel = ''

    while i < len(rader):
        l = rader[i].rstrip()
        if not l.strip():
            i += 1
            continue
        m = re.match(r'^\*Brödtexten är ([\d\s ]+) ord', l)
        if m:
            ordantal = m.group(1).strip()
            i += 1
            continue
        if l.startswith('*Version '):
            i += 1
            continue
        m = re.match(r'^(#{1,3}) (.*)', l)
        if m:
            n = len(m.group(1))
            txt = m.group(2).strip()
            if n == 1:
                titel = txt
                seen_h1 = True
                i += 1
                continue
            hid = slug(txt)
            mm = re.match(r'^(\d+(?:\.\d+)?)\.?\s', txt)
            if mm:
                heading_nr[mm.group(1)] = hid
            i_ref = (txt == 'Referenser')
            toc.append((n, hid, klartext(txt)))
            kropp.append('<h%d id="%s">%s <a class="ankare" href="#%s" aria-label="Länk till avsnittet %s">#</a></h%d>' % (
                n, hid, inline(txt), hid, html.escape(klartext(txt), quote=True), n))
            i += 1
            continue
        if seen_h1 and len(sub) < 2 and not kropp:
            sub.append(klartext(l))
            i += 1
            continue
        m = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)', l)
        if m:
            src = '../' + m.group(2)
            j = i + 1
            while j < len(rader) and not rader[j].strip():
                j += 1
            cap = rader[j].strip()
            mc = re.match(r'^\*\*Figur (\d+)\.\*\*', cap)
            assert mc, 'Bild utan bildtext (Figur N.)'
            kropp.append('<figure id="Figur%s"><img src="%s" alt="%s" loading="lazy"><figcaption>%s</figcaption></figure>' % (
                mc.group(1), html.escape(src, quote=True), html.escape(m.group(1), quote=True), inline(cap)))
            i = j + 1
            continue
        mc = re.match(r'^\*\*Tabell (\d+)\.\*\*', l)
        if mc:
            vantande_cap = (mc.group(1), l)
            i += 1
            continue
        if l.startswith('|'):
            tabrader = []
            while i < len(rader) and rader[i].startswith('|'):
                celler = [c.strip() for c in rader[i].strip().strip('|').split('|')]
                if not all(re.fullmatch(r':?-{3,}:?', c) for c in celler):
                    tabrader.append(celler)
                i += 1
            assert vantande_cap, 'Tabell utan bildtext (Tabell N.)'
            nr, caption = vantande_cap
            vantande_cap = None
            t = ['<div class="tabell-ram"><table><caption id="Tabell%s">%s</caption>' % (nr, inline(caption))]
            t.append('<thead><tr>%s</tr></thead><tbody>' % ''.join('<th scope="col">%s</th>' % inline(c) for c in tabrader[0]))
            for rad in tabrader[1:]:
                celler = []
                for ci, c in enumerate(rad):
                    num = ' class="tal"' if re.fullmatch(r'[\d\s ]+(kr)?', c) else ''
                    if ci == 0:
                        celler.append('<th scope="row">%s</th>' % inline(c))
                    else:
                        celler.append('<td%s>%s</td>' % (num, inline(c)))
                t.append('<tr>%s</tr>' % ''.join(celler))
            t.append('</tbody></table></div>')
            kropp.append(''.join(t))
            continue
        # vanligt stycke
        if i_ref:
            mm = re.match(r'^(.*?)\s*\(([^)]*)\)', l)
            pre = mm.group(1)
            if ',' in pre:
                pre = pre.split(',')[0]
            rid = 'ref-' + slug(pre) + '-' + slug(mm.group(2))
            if rid.startswith('ref-kaufmann'):
                rid = 'ref-kaufmann-2026'
            ref_ids.append(rid)
            kropp.append('<p class="ref" id="%s">%s</p>' % (rid, inline(l)))
        else:
            kropp.append('<p>%s</p>' % inline(l))
            if l.startswith('Genomsnittet på cirka 18 000'):
                kropp.append(kalkyl)
            if l.startswith('**Förslag 1:'):
                kropp.append(tidslinje)
        i += 1

    # kontroller
    for _, rid in CITERINGAR:
        assert rid in ref_ids, 'Saknar referens-id: ' + rid
    assert len(set(ref_ids)) == len(ref_ids), 'Dubbla referens-id'

    body = '\n'.join(kropp)

    # Tabell N, Figur N och avsnitt N blir länkar (inte i rubriker, bildtexter eller länkar)
    def lanka(d):
        d = re.sub(r'\bTabell (\d+)\b', r'<a href="#Tabell\1">Tabell \1</a>', d)
        d = re.sub(r'\bFigur (\d+)\b', r'<a href="#Figur\1">Figur \1</a>', d)

        def av(m):
            nr = m.group(1)
            if nr in heading_nr:
                return '<a href="#%s">avsnitt %s</a>' % (heading_nr[nr], nr)
            return m.group(0)
        d = re.sub(r'(?<!239, )\bavsnitt (\d+(?:\.\d+)?)\b', av, d)
        return d

    def pa_stycken(m):
        return m.group(1) + i_text(m.group(2), lanka) + m.group(3)
    body = re.sub(r'(<p>)(.*?)(</p>)', pa_stycken, body, flags=re.S)

    # innehållsförteckning
    delar = ['<ol>']
    oppen = False
    forsta = True
    for n, hid, txt in toc:
        if n == 2:
            if oppen:
                delar.append('</ol>')
                oppen = False
            if not forsta:
                delar.append('</li>')
            delar.append('<li><a href="#%s">%s</a>' % (hid, html.escape(txt)))
            forsta = False
        else:
            if not oppen:
                delar.append('<ol>')
                oppen = True
            delar.append('<li><a href="#%s">%s</a></li>' % (hid, html.escape(txt)))
    if oppen:
        delar.append('</ol>')
    if not forsta:
        delar.append('</li>')
    delar.append('</ol>')
    t = chr(10).join(delar)

    under = titel.split(':', 1)[1].strip() if ':' in titel else titel
    under = under[:1].upper() + under[1:]
    mall = lasa('mall.html')
    ut = (mall
          .replace('{{TITEL}}', esc(titel.split(':')[0]))
          .replace('{{TITEL_HEL}}', esc(under))
          .replace('{{SUB1}}', esc(sub[0] if len(sub) > 0 else ''))
          .replace('{{SUB2}}', esc(sub[1] if len(sub) > 1 else ''))
          .replace('{{ORDANTAL}}', esc(ordantal))
          .replace('{{TOC}}', t)
          .replace('{{BODY}}', body)
          .replace('{{LIVE}}', LIVE)
          .replace('{{GITHUB_MAPP}}', GITHUB_MAPP)
          .replace('{{GITHUB_MD}}', GITHUB_MD)
          .replace('{{ORDLISTA}}', json.dumps(ORDLISTA, ensure_ascii=False).replace('</', '<\\/'))
          .replace('{{CITERINGAR}}', json.dumps([{"re": a, "id": b} for a, b in CITERINGAR], ensure_ascii=False).replace('</', '<\\/')))
    with open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8', newline='\n') as f:
        f.write(ut)
    print('index.html skriven:', len(ut), 'tecken,', len(toc), 'rubriker,', len(ref_ids), 'referenser, ord:', ordantal)


if __name__ == '__main__':
    bygg()
