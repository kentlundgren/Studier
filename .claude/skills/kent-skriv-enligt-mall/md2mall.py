#!/usr/bin/env python
"""
md2mall.py (v1.0, 2026-11-21) - fyll en föreskriven Word-mall (.docx) med innehållet från ett markdown-utkast.

Använd:  python md2mall.py UTKAST.md UT.docx MALL.docx [--author "Namn"] [--stop-at "## Rubrik"]
                         [--table-size 12] [--footer-line "text"] [--no-notes-skip]

Vad skriptet gör
  * Öppnar mallen och behåller dess formatmallar, marginaler, sidhuvud, sidfot, sidnumrering och innehållsförteckning.
  * Fyller framsidan: Undertitel, Författarens namn, Sammanfattning och Ämnesord (hämtas ur md-rubrikerna
    "## Sammanfattning" och "## Ämnesord").
  * Tar bort mallens instruktionstext (stycken efter ämnesorden och allt efter sektionsbrytningen).
  * Lägger in brödtexten med mallens egna format: "## " = Rubrik 1, "### " = Rubrik 2, "#### " = Rubrik 3,
    Blockcitat, Lista - Punkter, Lista - Nummer, Table Grid.
  * Stycken som börjar med "**Status:**", "> **Processnotering" och "> **AI-arbetslogg" hoppas över
    (arbetsnoteringar hör inte hemma i en inlämning) om inte --no-notes-skip anges.
Det gör INTE: räknar sidor, uppdaterar innehållsförteckning eller fält. Öppna filen i Word (se SKILL.md, steg 6).
"""
import re, sys, copy, argparse
from docx import Document
from docx.shared import Pt, Cm
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.text.paragraph import Paragraph

ap = argparse.ArgumentParser()
ap.add_argument("md")
ap.add_argument("out")
ap.add_argument("template")
ap.add_argument("--author", default="")
ap.add_argument("--stop-at", default="## Punkter att gå igenom")
ap.add_argument("--table-size", type=float, default=None, help="teckenstorlek i tabeller; utelämnad = mallens")
ap.add_argument("--footer-line", default="", help="extra rad i sidfoten (normalt tom: mallens sidfot gäller)")
ap.add_argument("--no-notes-skip", action="store_true")
a = ap.parse_args()

# ---------- inline-formatering (länkar, fet, kursiv, kod) ----------
def add_link(p, text, url, bold=False, ital=False):
    r_id = p.part.relate_to(url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink', is_external=True)
    h = OxmlElement('w:hyperlink'); h.set(qn('r:id'), r_id)
    r = OxmlElement('w:r'); rp = OxmlElement('w:rPr')
    c = OxmlElement('w:color'); c.set(qn('w:val'), '0563C1'); rp.append(c)
    u = OxmlElement('w:u'); u.set(qn('w:val'), 'single'); rp.append(u)
    if bold: rp.append(OxmlElement('w:b'))
    if ital: rp.append(OxmlElement('w:i'))
    r.append(rp)
    t = OxmlElement('w:t'); t.text = text; t.set(qn('xml:space'), 'preserve'); r.append(t)
    h.append(r); p._p.append(h)

TOK = re.compile(r'(\[[^\]]*\]\([^)]+\)|\*\*.+?\*\*|\*[^*\s][^*]*?\*|`[^`]+`|<br>)')

def inline(p, text, bold=False, ital=False, size=None):
    for part in TOK.split(text):
        if not part:
            continue
        m = re.fullmatch(r'\[([^\]]*)\]\(([^)]+)\)', part)
        if m:
            add_link(p, m.group(1), m.group(2), bold, ital)
            continue
        if part == '<br>':
            p.add_run().add_break()
            continue
        b, i, c = bold, ital, False
        if part.startswith('**') and part.endswith('**') and len(part) > 4:
            part = part[2:-2]; b = True
        elif part.startswith('*') and part.endswith('*') and len(part) > 2:
            part = part[1:-1]; i = True
        elif part.startswith('`') and part.endswith('`'):
            part = part[1:-1]; c = True
        for sp in re.split(r'(\[[^\]]*\]\([^)]+\))', part):
            mm = re.fullmatch(r'\[([^\]]*)\]\(([^)]+)\)', sp)
            if mm:
                add_link(p, mm.group(1), mm.group(2), b, i)
                continue
            if not sp:
                continue
            r = p.add_run(sp); r.bold = b; r.italic = i
            if c: r.font.name = 'Consolas'
            if size: r.font.size = Pt(size)

# ---------- läs md och mall ----------
lines = open(a.md, encoding='utf8').read().split("\n")
d = Document(a.template)
body = d.element.body
els = [e for e in body if e.tag != qn('w:sectPr')]

def style_of(e):
    return Paragraph(e, d).style.name if e.tag == qn('w:p') else None

def text_of(e):
    return Paragraph(e, d).text.strip() if e.tag == qn('w:p') else ''

def setp(p, text):
    p.clear(); p.add_run(text)

def md_section(h):
    try:
        i = next(k for k, l in enumerate(lines) if l.strip().startswith(h))
    except StopIteration:
        return []
    j = next((k for k in range(i + 1, len(lines)) if lines[k].startswith('## ')), len(lines))
    return [l for l in lines[i + 1:j] if l.strip()]

# ---------- framsidan ----------
for e in els:
    st = style_of(e)
    if st == 'Undertitel':
        und = next((l for l in lines if l.startswith("**Undertitel:**")), None)
        if und:
            setp(Paragraph(e, d), und.replace("**Undertitel:**", "").strip())
    if st == 'Författarens namn' and a.author:
        setp(Paragraph(e, d), a.author)

sam, amn = md_section("## Sammanfattning"), md_section("## Ämnesord")

def fill_after(rubrik_start, texts):
    for idx, e in enumerate(els):
        if style_of(e) == 'Abstract Rubrik' and text_of(e).startswith(rubrik_start):
            nxt = els[idx + 1]
            if not texts:
                return nxt
            setp(Paragraph(nxt, d), texts[0]); last = nxt
            for t in texts[1:]:
                n = copy.deepcopy(nxt); last.addnext(n); setp(Paragraph(n, d), t); last = n
            return last
    return None

fill_after("Sammanfattning", sam)
last_amn = fill_after("Ämnesord", amn[:1] if amn else [""])
# instruktionsstycken efter ämnesorden (Abstract Normal) tas bort
if last_amn is not None:
    nxt = last_amn.getnext()
    while nxt is not None and nxt.tag == qn('w:p') and Paragraph(nxt, d).style.name == 'Abstract Normal':
        rem = nxt; nxt = nxt.getnext(); body.remove(rem)

# ---------- ta bort mallens brödtext (allt efter sektionsbrytningen) ----------
brk = [e for e in body if e.tag == qn('w:p') and e.find('.//' + qn('w:sectPr')) is not None]
if brk:
    cut = brk[-1].getnext()
    while cut is not None and cut.tag != qn('w:sectPr'):
        rem = cut; cut = cut.getnext(); body.remove(rem)
else:
    print("VARNING: ingen sektionsbrytning i mallen; mallens brödtext är inte borttagen.", file=sys.stderr)

# ---------- brödtext ----------
skip = () if a.no_notes_skip else ('**Status:**', '> **Processnotering', '> **AI-arbetslogg')
try:
    i0 = next(k for k, l in enumerate(lines) if re.match(r'## \d+\.', l))
except StopIteration:
    i0 = next(k for k, l in enumerate(lines) if l.startswith('## ') and not l.startswith(('## Sammanfattning', '## Ämnesord')))
iend = next((k for k, l in enumerate(lines) if l.startswith(a.stop_at)), len(lines))
body_lines = [l for l in lines if l.startswith('> **Läsanvisning')] + [""] + lines[i0:iend]
n = len(body_lines); i = 0; in_refs = False
has_grid = 'Table Grid' in [s.name for s in d.styles]
while i < n:
    l = body_lines[i]
    if not l.strip() or (skip and l.startswith(skip)):
        i += 1
        continue
    m = re.match(r'(#{2,4}) (.*)', l)
    if m:
        in_refs = m.group(2).strip().lower() in ("referenser", "källor", "litteratur")
        h = d.add_heading('', level=len(m.group(1)) - 1); inline(h, m.group(2)); i += 1
        continue
    if l.startswith('|'):
        rows = []
        while i < n and body_lines[i].startswith('|'):
            if not re.fullmatch(r'\|[\s:|-]+\|', body_lines[i].strip()):
                rows.append([c.strip() for c in body_lines[i].strip().strip('|').split('|')])
            i += 1
        nc = max(len(r) for r in rows)
        t = d.add_table(rows=len(rows), cols=nc)
        if has_grid:
            t.style = 'Table Grid'
        for ri, r in enumerate(rows):
            for ci in range(nc):
                cell = t.cell(ri, ci); cell.text = ''; p = cell.paragraphs[0]
                p.paragraph_format.space_after = Pt(2)
                inline(p, r[ci] if ci < len(r) else '', bold=(ri == 0), size=a.table_size)
                if ri == 0:
                    tcPr = cell._tc.get_or_add_tcPr(); sh = OxmlElement('w:shd')
                    sh.set(qn('w:val'), 'clear'); sh.set(qn('w:fill'), 'E7E6E6'); tcPr.append(sh)
        d.add_paragraph()
        continue
    if l.startswith('>'):
        txt = []
        while i < n and body_lines[i].startswith('>'):
            txt.append(body_lines[i][1:].strip()); i += 1
        p = d.add_paragraph(style='Blockcitat'); inline(p, ' '.join(txt))
        continue
    m = re.match(r'(\d+)\. (.*)', l)
    if m:
        p = d.add_paragraph(style='Lista - Nummer'); inline(p, m.group(2)); i += 1
        continue
    m = re.match(r'\s*[-*] (.*)', l)
    if m:
        p = d.add_paragraph(style='Lista - Punkter'); inline(p, m.group(1)); i += 1
        continue
    if l.strip() == '---':
        i += 1
        continue
    buf = []
    while i < n and body_lines[i].strip() and not re.match(r'(#{2,4} |\||>|\d+\. |\s*[-*] )', body_lines[i]):
        buf.append(body_lines[i]); i += 1
    p = d.add_paragraph()
    if in_refs:
        p.paragraph_format.left_indent = Cm(1); p.paragraph_format.first_line_indent = Cm(-1)
    for k, bb in enumerate(buf):
        hard = bb.endswith('  ')
        inline(p, bb.strip())
        if k < len(buf) - 1:
            if hard:
                p.add_run().add_break()
            else:
                p.add_run(' ')

# ---------- valfri extra sidfotsrad ----------
if a.footer_line:
    d.sections[0].footer.add_paragraph(a.footer_line)

d.save(a.out)
print(f"klart: {len(d.paragraphs)} stycken, {len(d.tables)} tabeller -> {a.out}")
print("Nästa steg: öppna i Word, uppdatera innehållsförteckning och fält, räkna sidor (se SKILL.md, steg 6).")
