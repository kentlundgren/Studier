# Syn på lärande — Nr 2

Kent Lundgrens andra fristående redogörelse i Nr-serien: en text som utgår från
en annan text. Den här gången ett LinkedIn-inlägg av Osama Romoh om att
**GPT‑6 hade kört om Claude** för kodning.

En vanlig, statisk webbsida. Ingen del av bloggen *Syn på lärande*, utan en
egen text som ligger här i repot. Jämför **Claude Code** och **OpenAI/Codex** på
tre facetter – kodförmåga, harness, pris per token – och landar i att "bäst"
beror på vilken fråga man ställer.

**Alla uppgifter är daterade "per september 2026"** eftersom priser och modeller
ändras snabbt.

| | |
|---|---|
| Live | <https://kentlundgren.github.io/Studier/synpalarande/Nr2/> |
| Källkod på GitHub | <https://github.com/kentlundgren/Studier/tree/main/synpalarande/Nr2> |
| Lokal sökväg | `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr2` |
| Skapad | 2026-09-09 |

> **Obs:** GitHub Pages är inte påslaget för `Studier` ännu. Live-länken börjar
> fungera först när Pages aktiverats: repo-inställningar → *Pages* → *Source:
> Deploy from a branch* → `main` / `/` (root). Samma upplägg som `Nr1/`.

> **Utkast:** `index.html` är byggd men siffrorna 1–5 är Kents preliminära
> omdöme, inte frysta, och två abonnemangsuppgifter är inte kontrollerade mot
> bolagens egna hjälpsidor. Se `research-underlag.md` och `kostnadskalkyl-35h.md`.

## 🗂️ Lokalt repo

Repo-rot lokalt:

`C:\Users\kentl\OneDrive\AI\Studier`

Den här mappen lokalt:

`C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr2`

På GitHub: <https://github.com/kentlundgren/Studier/tree/main/synpalarande/Nr2>

## Upplägg

1. **Vad texten säger** — Romohs inlägg (instruktionsföljsamhet, inte kodning).
2. **Vilken modell pratar vi ens om?** — namn- och nummerkaoset, och varför det
   är en del av svaret.
3. **Kan den koda?** — kodförmåga; benchmarken mättar.
4. **Hur styr man den?** — harness, delat i "vad som finns" och "hur det känns",
   med två app-skärmdumpar.
5. **Vad kostar nyttan?** — pris per token, och en kostnadskalkyl för 35 h/vecka.
6. **Överblick** — en sammanfattande tabell med 1–5-omdömen och en
   nytta-per-krona-indexrad.
7. **Andras röster** — fem röster ur debatten, länk till `jamforelse-roster.md`.
8. **Vad jag själv landar i** — egen ståndpunkt, kunskapssyns-vinkeln.

Slutsatsen ramas som *en bild av frågan, inte ett facit*.

## Djuplänkar

Varje rubrik har ett stabilt ankare:

| Avsnitt | Länk |
|---|---|
| Vad texten säger | `.../Nr2/#Inledning` |
| Vilken modell pratar vi ens om? | `.../Nr2/#VilkenModell` |
| Kan den koda? | `.../Nr2/#Kodformaga` |
| Hur styr man den? | `.../Nr2/#Harness` |
| &nbsp;&nbsp;— Vad som finns | `.../Nr2/#HarnessMekanism` |
| &nbsp;&nbsp;— Hur det känns | `.../Nr2/#HarnessErgonomi` |
| Vad kostar nyttan? | `.../Nr2/#PrisNytta` |
| Överblick | `.../Nr2/#Overblick` |
| Andras röster | `.../Nr2/#AndraRoster` |
| Vad jag själv landar i | `.../Nr2/#VadJagLandarI` |
| Referenser | `.../Nr2/#Referenser` |

Varje referens har dessutom ett eget id (`#ref-anthropic-pricing`,
`#ref-openai-codex` och så vidare).

## Filer

```
Nr2/
├── index.html                     # texten
├── styles.css                     # från Nr1, med några Nr2-tillägg
├── script.js                      # ihopfällbar referenslista, teknik-modal, röst-skylt
├── Bilder/
│   ├── Claude_app_260909.jpg      # skärmdump: Claude-appen (Code-fliken)
│   └── Codex_app_260909.jpg       # skärmdump: ChatGPT/Codex-appen (Work-fliken)
├── linkedin-romoh-gpt6-astra.md   # startpunkten, transkriberad
├── research-underlag.md           # råmaterial + källor (pass 1 + 2)
├── kostnadskalkyl-35h.md          # kostnadsmatematiken, alla antaganden utskrivna
├── jamforelse-roster.md           # "andras röster"-underlaget + uppdaterings-prompt
├── PRD_nr2_ai-kodmodeller.md      # planen
├── SPEC.md                        # exakt hur sidan är byggd
└── README.md                      # den här filen
```

Ingen server, inga cookies, inga externa bibliotek. JavaScript används till tre
saker: fälla ihop referenslistan, öppna teknik-rutan, och driva den växlande
skylten med röster. Allt fungerar även utan skript.

## Källor

Referenslistan är i Harvardstil enligt Kents källstandard: länkad
förstahänvisning i löptexten, utskriven URL, hämtdatum, och en kursiv parentes
som förklarar varför varje källa är med. Priserna och produktinformationen är
kontrollerade mot Anthropics och OpenAI:s egna sidor 2026-09-09. Två saker
kunde inte primärverifieras: exakta abonnemangsgränser och permalänken till
Romohs inlägg.

## Uppdatera sidan

För att leta fler röster till `jamforelse-roster.md`, använd den färdiga
prompten längst ned i den filen.

## Se även

- [`Nr1/`](../Nr1/) — första numret i serien (Dick Harrisons "generation analfabeter").
- Skillen [`synpalarande/.claude/skills/syn-pa-larande/`](../.claude/skills/syn-pa-larande/) — kunskapsbasen över Kents syn på lärande och kunskap.
- Bloggen *Syn på lärande*: <https://synpalarande.wordpress.com/>
