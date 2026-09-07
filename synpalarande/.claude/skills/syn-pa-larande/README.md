# syn-pa-larande

En Claude-skill som samlar **Kent Lundgrens egen syn på lärande och kunskap**,
så att texter och resonemang som skrivs i hans anda bygger på hans faktiska
ståndpunkter och inspiratörer i stället för på allmänna floskler.

Skillen är en **kunskapsbas**, inte en röstguide. Rösten kommer från
`kent-skrivstil`, formen för att svara på andras inlägg från `kent-respons`,
och källhanteringen från `kent-referens-skill`.

| | |
|---|---|
| GitHub | <https://github.com/kentlundgren/Studier/tree/main/synpalarande/.claude/skills/syn-pa-larande> |
| Lokal sökväg | `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\.claude\skills\syn-pa-larande` |
| Typ | Directory-scoped skill (laddas i Claude Code-sessioner som öppnas i eller under `synpalarande/`) |
| Status | **Utkast v0.1** — grundstommen finns, sju öppna frågor kvar (se `SKILL.md`, avsnitt 8) |

## Innehåll

```
syn-pa-larande/
├── SKILL.md                 # frontmatter + åtta avsnitt: grundhållning, performativ
│                            # kunskapssyn, bedömning/feedback, nätbaserat lärande,
│                            # generativ AI, "så tillämpas", stödfil-index, öppna frågor
├── README.md                # den här filen
└── references/
    ├── blogginlagg.md       # de elva inläggen på synpalarande.wordpress.com
    └── litteratur.md        # stub — Harvard-poster för Säljö, Kress & Selander,
                             # Carless, Selwyn, Zeichner m.fl.
```

## Bakgrund

Kärnan är bloggen **Syn på lärande** (<https://synpalarande.wordpress.com/>,
aktiv sedan 2013) plus Kents reflektioner över att läsa nätkurser. Bloggen
skrevs till största delen före generativ AI slog igenom; AI-hållningen i
avsnitt 5 är ett senare påbyggt lager och den del som rör på sig mest.

Bärande tankar: *lusten att förstå* (Gärdenfors), **performativt lärande**
(kunskap visar sig i användning, inte i reproduktion), processen och det
aktiva deltagandet framför enbart slutresultatet, skepsis mot överdriven
personalisering (Selwyn), och en pragmatisk men ansvarskrävande hållning till
AI i studier (Kents tre villkor: förstår jag det, tar jag ansvar för det, har
jag bidragit till gruppens lärande).

## Se även

- `synpalarande/Nr1/` i samma repo — Kents första fristående redogörelse som
  utgår från en text (Dick Harrisons inlägg om &rdquo;en generation
  analfabeter&rdquo;), byggd med samma upplägg: text som avstamp, argument för
  och emot, egen sammanvägning.

## Uppdateringslogg

- 2026-09-07: skapad som utkast v0.1. `references/` med `blogginlagg.md` och
  en stub-`litteratur.md`. README tillagd.
