# Syn på lärande — Nr 1

Kent Lundgrens **första fristående redogörelse för syn på lärande och syn på
kunskap som utgår från en text**. Den här gången Dick Harrisons inlägg om att
Sverige &rdquo;riskerar fostra en generation analfabeter&rdquo;.

En vanlig, statisk webbsida. Ingen del av bloggen *Syn på lärande*, utan en
egen text som ligger här i repot.

**Live-sida:** <https://kentlundgren.github.io/Studier/synpalarande/Nr1/>

| | |
|---|---|
| Live | <https://kentlundgren.github.io/Studier/synpalarande/Nr1/> |
| Källkod på GitHub | <https://github.com/kentlundgren/Studier/tree/main/synpalarande/Nr1> |
| Lokal sökväg | `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr1` |
| Skapad | 2026-09-07 |

> **Obs:** GitHub Pages är inte påslaget för `Studier` ännu (kontrollerat
> 2026-09-07). Live-länken börjar fungera först när Pages aktiverats:
> repo-inställningar → *Pages* → *Source: Deploy from a branch* → `main` / `/`
> (root). Samma upplägg som `AI-teknik`, som redan ligger på
> <https://kentlundgren.github.io/AI-teknik/>.

## Upplägg

Texten är tänkt som första numret i en serie med samma struktur:

1. **Vad texten säger** — kort referat av det inlägg som är avstamp.
2. **Det som ger den rätt** — data och källor som stöder påståendet.
3. **Det som talar emot** — data, källor och invändningar åt andra hållet.
4. **Vad jag själv landar i** — egen ståndpunkt, utifrån min syn på lärande.

Slutsatsen ramas in som *en bild av frågan, inte ett facit*.

## Uppdaterad 2026-09-08 (PISA 2025)

Texten publicerades 7 september. PISA 2025 kom dagen efter
([Skolverket, 2026](https://www.skolverket.se/sok-publikationer/publikationsserier/rapporter/2026/pisa-2025)).
Uppdateringen gjordes på tre sätt, utan att skriva om originalresonemanget:

- en daterad **uppdateringsruta** högst upp,
- ett eget avsnitt **"Vad PISA 2025 ändrar"** (`#Pisa2025`) med en tabell över vad
  som håller, försvagas respektive står kvar,
- **synliga markeringar** (`PISA 2025 ↻`) på de tre meningar i den gamla texten som
  den nya datan träffar — framför allt påståendet att raset mest är en
  sammansättningseffekt, som försvagas eftersom det 2025 är eleverna med svensk
  bakgrund som tappar.

Full genomgång av rapporten: [`pisa-2025-sammanfattning.md`](pisa-2025-sammanfattning.md).

## Djuplänkar

Varje rubrik har ett stabilt ankare, så en enskild del går att länka direkt
till:

| Avsnitt | Länk |
|---|---|
| Vad Harrison säger | `.../Nr1/#Harrison` |
| Det som ger honom rätt | `.../Nr1/#GerHonomRatt` |
| Det som talar emot hans diagnos | `.../Nr1/#TalarEmot` |
| Vad PISA 2025 ändrar | `.../Nr1/#Pisa2025` |
| Vad jag själv landar i | `.../Nr1/#VadJagLandarI` |
| Referenser | `.../Nr1/#Referenser` |

Varje referens har dessutom ett eget id (`#ref-bernstein`, `#ref-strandler`
och så vidare). Håll muspekaren över en rubrik så syns ett `#` att klicka på.

## Filer

```
Nr1/
├── index.html                    # texten, med länkad förstahänvisning till varje källa
├── styles.css                    # läsbar typografi, ljust/mörkt via prefers-color-scheme
├── script.js                     # ihopfällbar referenslista + teknik-modal
├── pisa-2025-sammanfattning.md   # underlag: genomgång av PISA 2025-rapporten
└── README.md                     # den här filen
```

Ingen server, inga cookies, inga externa bibliotek. JavaScript används bara
till att fälla ihop referenslistan och öppna teknik-rutan; texten och alla
länkar fungerar även utan skript.

## Källor

Referenslistan är i Harvardstil enligt Kents källstandard: länkad
förstahänvisning i löptexten, utskriven URL, hämtdatum, och en kursiv
parentes som förklarar varför varje källa är med. Länkarna öppnades och
kontrollerades 2026-09-07, PISA 2025-tilläggen (Skolverket 2026, SVT Nyheter
2026) 2026-09-08.

## Se även

- Skillen `synpalarande/.claude/skills/syn-pa-larande/` i samma repo —
  kunskapsbasen över Kents syn på lärande och kunskap.
- Bloggen *Syn på lärande*: <https://synpalarande.wordpress.com/>
