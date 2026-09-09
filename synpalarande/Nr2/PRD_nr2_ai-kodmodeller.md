# PRD – Syn på lärande nr 2: jämföra AI-modeller för kodning

**Status:** UTKAST v0.1 – för Kent att reagera på. Inget är byggt.
**Skapad:** 2026-09-09
**Plats:** `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr2\`
**Repo:** [`kentlundgren/Studier`](https://github.com/kentlundgren/Studier) (publikt, `main`, känt-gott)
**Serie:** tredje bygget i `synpalarande/` efter [`Nr1/`](../Nr1/) och skillen `syn-pa-larande`

---

## 1. Bakgrund och trigger

Kent vill ha "en plats för att jämföra, på olika sätt" olika AI-modeller
**med fokus på kodning** – konkret Claude Code (uppges vara ver. 5.1) mot
GPT (uppges vara GPT‑6). Fyra aspekter ska med:

1. **Kodförmåga** – hur bra koden faktiskt blir.
2. **Harness / "knyta till sig"** – hur modellen kopplas till filer, verktyg,
   minne och kontext.
3. **Pris per token** – och därigenom *kvalitet = nytta / kostnad*.
4. **App-/klient-hanterbarhet** – hur lätta de klienter som "följer med"
   varje modell är att jobba i. Kent är just nu osäker på hur man bäst
   "hanterar" Codex / GPT‑6 – bilden han bifogade ser ut att vara **ChatGPT
   desktop-appen i Work-läge** (agentläget "Godkänn åt mig", modellväljare
   "GPT‑6 Astra Låg"), *inte* den fristående Codex CLI eller Codex
   IDE-extension. Vilken av dessa som är "rätt" verktyg att jämföra med
   Claude Code är en av de öppna frågorna (avsnitt 5d).

Ingången var ett LinkedIn-inlägg som jämför Claude och GPT på kodförmåga
(kortlänk `https://lnkd.in/p/efrssr5X`). **Den texten är ännu inte inläst** –
LinkedIn-kortlänkar kräver oftast inloggning. Kent klistrar in inläggets text,
eller godkänner ett hämtningsförsök, innan Nr2 skrivs (avsnitt 8).

## 2. Mappkontroll – varför Nr2 hör hemma i `synpalarande/`

Detta är dokumenterat eftersom det fanns en genuin krock (Regel 5).

- **Åtkomst:** `Studier` är öppet. `AI-teknik`-repot (där modelljämförelser
  annars bor, t.ex. `AI_modeller/Claude/olika_Claude_modeller/`) är **inte**
  åtkomligt i den här sessionen.
- **Innehållsmatchning:** en ren teknisk benchmark hör enligt `Studier/CLAUDE.md`
  *inte* hemma här ("AI-tekniska projekt … har egna mappar/repon"). Kent valde
  ändå `synpalarande/Nr2/` medvetet. Det som gör att det **passar serien**:
  frågan "kvalitet = nytta / kostnad" är i grunden en *vad är kvalitet / vad
  räknas som kunnande*-fråga, och hela benchmark-debatten (SWE-bench m.fl.) är
  ett exempel på Kents kärntes – **att hur något mäts avslöjar vilken
  kunskapssyn som ligger under** (`syn-pa-larande` avsnitt 2, Bernstein:
  performativ vs kompetensinriktad modell). Nr2 blir alltså inte "vilken modell
  är bäst" utan "vad betyder *bäst*, och vad missar ett benchmark". Se
  avsnitt 7.
- **Repo-identitet:** `Studier` är känt-gott (lokalt och `origin` i synk sedan
  2026‑09‑04). Nr2 är en ny undermapp i ett friskt repo – ingen nästling, ingen
  ⚠️-varning behövs i README.

## 3. Syfte och målgrupp

**Syfte:** ge Kent (och läsaren) ett underlag för att *själv* bedöma vilken
modell/klient som passar vilken sorts kodarbete – och en genomtänkt hållning
till vad "kvalitet" betyder när verktyget delvis skriver koden. Landar som *en
bild av frågan, inte ett facit* (seriens signatur).

**Målgrupp:** samma som Nr1 – Kent först, sedan den som följer hans bloggande
och hans AI-texter. Inte en utvecklarpublik som vill ha en ren teknisk tabell;
snarare en reflekterande läsare.

**Inte syftet:** att vara en alltid-färsk prisdatabas eller ett live-benchmark.
Priser och versioner daterar sig snabbt (avsnitt 10).

## 4. Vägval: vilket *format*? (den centrala frågan)

Nr-serien har hittills en fast fyrdelad essä-struktur ("utgår från en text":
*vad texten säger → det som ger den rätt → det som talar emot → vad jag landar
i*). Kents beskrivning – "en plats för att jämföra, på olika sätt, med olika
människors synpunkter, olika texter, olika källor" – låter mer som ett
*levande jämförelsenav* än en engångsessä. Tre alternativ:

| | **A. Rak Nr-serien-essä** | **B. Jämförelsenav / verktyg** | **C. Hybrid (rekommenderas)** |
|---|---|---|---|
| Form | Som Nr1: en text som utgår från LinkedIn-inlägget, fyra delar | Interaktiv sida med kort/flikar per dimension, tabell modell×dimension, samlade citat | Nr1:s ram (börjar i texten, landar i "vad jag landar i") men avsnitt 2–3 expanderade till fyra strukturerade dimensioner + en plats för andras röster |
| Styrka | Trogen serien, snabbast att skriva, tydlig röst | Bäst för "jämföra på olika sätt", lätt att fylla på | Behåller seriens själ och röst, men rymmer de fyra aspekterna och kan växa |
| Svaghet | Trångt för fyra dimensioner + app-jämförelse | Kan tappa den personliga slutsatsen, mer att bygga och underhålla | Något mer jobb än A |
| Motsvarighet i Nr1 | Själva `index.html` | – | `index.html` + `pisa-2025-media-jamforelse.md` + "sju röster"-skylten |

**Rekommendation: C.** Nr1 växte redan organiskt åt det hållet (ett
huvuddokument + ett jämförelseunderlag + en växlande citat-skylt). Nr2 kan
göra samma sak från start: en huvudtext med Kents linje, plus ett strukturerat
jämförelseunderlag (`.md`) och ev. en enkel tabell i `index.html`.

**Kent avgör A / B / C innan bygget börjar.** SPEC.md-frågan (avsnitt 9) hänger
på det här valet.

## 5. Innehåll – de fyra jämförelsedimensionerna

För varje dimension: kort vad den är, hur den *brukar* mätas, vad den mätningen
missar (kunskapssyns-vinkeln), och Kents preliminära intryck (tydligt märkt som
preliminärt tills källor är på plats).

### 5a. Kodförmåga
- Vad som brukar användas: SWE-bench Verified, Terminal-Bench, "vibe"-tester,
  egna uppgifter.
- Vad det missar: benchmark ≠ nytta i en riktig kodbas; mätvärdet är ett *val*
  (jfr Strandler 2017 i `syn-pa-larande`).
- Att fylla i: aktuella siffror **verifierade vid bygget**, inte nu.

### 5b. Harness / "knyta till sig"
- Vad det är: hur modellen får kontext och verktyg – instruktionsfiler
  (`CLAUDE.md` / `AGENTS.md`), skills, MCP, subagenter, minne, agentläge,
  behörighetsmodell, hur filer/diff hanteras.
- Claude-sidan: väl dokumenterad i Kents eget material (`kent-ekosystem-analys`,
  Claude-kompassen) – kan återanvändas och citeras.
- GPT-/Codex-sidan: `AGENTS.md`, Codex CLI, Codex-molnet, ChatGPT-appens
  agentläge – **behöver research och verifiering**.
- Kunskapssyns-vinkeln: "att knyta till sig" en kodbas liknar det Kent menar
  med att *använda* kunskap i ett sammanhang snarare än att reproducera den.

### 5c. Pris per token → kvalitet = nytta / kostnad
- Rådata: input/output-pris, cache-rabatt, abonnemang (Pro/Max/Team) vs
  ren API-debitering, "usage credits"/veckogränser.
- Kent har redan verktyg och vana för Claude-kostnad (skill `claude-kostnad`,
  `Ovrigt/Claude_kostnad`) – samma tänk kan återanvändas.
- **Öppen fråga:** hur definieras "nytta" i kvoten? Förslag: en enkel, ärlig
  modell (t.ex. *andel uppgifter lösta utan omtag* × *tidsbesparing* delat med
  *total månadskostnad för Kents faktiska användning*), med brasklappen att
  täljaren är en uppskattning, inte en mätning (Regel 13 – ingen falsk
  precision, ingen handling tillskriven Kent som inte gjorts).

### 5d. App-/klient-hanterbarhet
- Klienter att ställa mot varandra: **Claude Code** (CLI/desktop/IDE) och
  **Claude i webben/Cowork** mot **Codex CLI**, **Codex IDE-extension**,
  **Codex-molnet** och **ChatGPT desktop-appen (Work/agentläge)**.
- Bedöms på: hur man kommer igång, hur man ger den kontext, hur mycket den gör
  själv vs frågar, hur återställbart/granskbart det är, hur det känns att jobba
  i.
- **Kents konkreta öppna fråga:** vad *är* bästa sättet att hantera Codex /
  GPT‑6 – CLI, IDE-extension eller desktop-appen? Bilden han bifogade är
  desktop-appen; PRD:n tar inte ställning, bygget reder ut det med källor.

## 6. Andras röster och källor

En plats (eget `.md`, jfr `pisa-2025-media-jamforelse.md`) där inlägg, artiklar
och tester från nätet samlas och ställs mot varandra och mot Kents linje – med
LinkedIn-inlägget som är triggern som första post. Varje röst: vem, vad de
hävdar, vilken dimension det gäller, vad Kent tycker om det. Ev. en växlande
citat-skylt i `index.html` som i Nr1 (progressiv förbättring – funkar utan JS).

## 7. Kopplingen till syn på lärande och kunskap

Det som gör Nr2 till ett nummer i *just den här* serien och inte ett
AI-teknik-projekt:

- **Mätvärdet är ett val.** Ett benchmark för kod bär en kunskapssyn precis som
  ett nationellt prov gör (Bernstein 1996; Strandler 2017).
- **"Kvalitet" är inte självklart.** nytta/kostnad tvingar fram frågan *nytta
  för vad* – reproducera snabbt, eller förstå och kunna stå för resultatet?
- **AI som förklarar vs AI som levererar** (`syn-pa-larande` avsnitt 5). En
  modell som "knyter till sig" din kodbas kan användas åt båda hållen.
- Kents tre villkor (förstår jag / tar jag ansvar / bidrar jag) går att spegla
  mot att koda med en modell.

Detta blir sannolikt avsnittet **"Vad jag själv landar i"**.

## 8. Teknik och bygg

Bygget styrs av skillen **`kent-bygg-sidor`** (ny HTML-undersida ⇒ GitHub-hörna
+ teknik-modal med från start). Konkret:

- Statisk sida, ingen server, inga cookies, inga externa bibliotek. JS bara till
  progressiv förbättring (ihopfällbar referenslista, teknik-modal, ev.
  citat-skylt) – allt ska fungera utan JS.
- Återanvänd `styles.css`-mönstret från `Nr1/` (läsbar typografi, ljust/mörkt
  via `prefers-color-scheme`), stabila rubrik-ankare, djuplänkar.
- `Nr2/README.md` enligt Regel 9: Live-URL, källkod på GitHub, **lokal sökväg**,
  skapad-datum. (GitHub Pages är ännu inte påslaget för `Studier` – samma not
  som i `Nr1/README.md`.)
- Innan LinkedIn-inläggets text finns tillgänglig kan bygget inte börja på
  riktigt – avsnitt 1 och 5 vilar på den.

## 9. Källhantering

Enligt **`kent-referens-skill`** / Regel 2: Harvard, länkad förstahänvisning i
löptext, utskriven URL, hämtdatum för föränderliga webbkällor (priser,
modellsidor, benchmarks – i princip *alla* källor här är föränderliga),
alfabetisk referenslista, och en kursiv parentes per källa som förklarar varför
den är med. Ihopfällbar referenslista som i Nr1.

## 10. SPEC.md-checkpoint (Regel 6)

**Behövs ett SPEC.md-steg?** *Villkorat på vägvalet i avsnitt 4:*

- **Vägval A (ren essä):** nej. Samma slutsats som `PRD_spec.md` själv –
  en text i en etablerad mall behöver ingen agent-spec.
- **Vägval B eller C:** **troligen ja, en kort SPEC.md.** Om jämförelsen får en
  datamodell (dimensioner × modeller × röster, en nytta/kostnad-formel, ev. en
  tabell i HTML) vill en agent ha exakt: vilka dimensionsrubriker som gäller,
  om bedömningen är prosa eller skala, hur kvoten räknas, vad som räknas som en
  "röst"/källa. Utan det fyller bygget luckorna med gissningar. SPEC.md skrivs i
  så fall *efter* att Kent valt format, *före* bygget.

## 11. Faktakänslighet (Regel 3)

Den här PRD:n påstår **inga** siffror, priser, versionsnummer eller
benchmark-resultat. "Claude Code 5.1", "GPT‑6", "GPT‑6 Astra Låg" är Kents
uppgifter och återges som sådana. Allt sådant verifieras mot primärkällor
(Anthropic, OpenAI, oberoende tester) **vid bygget**, med hämtdatum, och märks
tydligt om det är färskvara.

## 12. Avgränsningar

- Inte en live-uppdaterad pris-/benchmarktavla.
- Inte en fullständig genomgång av *alla* modeller – fokus Claude vs GPT/Codex,
  andra modeller (Gemini m.fl.) bara om en källa naturligt drar in dem.
- Inte en installationsguide – app-hanterbarhet bedöms, men steg-för-steg-setup
  hör hemma på annat håll.
- Ingen commit/push av Claude Code (Regel 11) – Kent gör det själv via Cursor.

## 13. Öppna frågor (att stämma av innan bygget)

1. **Format: A, B eller C?** (avsnitt 4) – styr allt annat, inkl. SPEC.md.
2. **LinkedIn-inlägget:** klistrar Kent in texten, eller ska jag försöka hämta
   kortlänken?
3. **Codex-klienten:** vilken/vilka av CLI, IDE-extension, molnet och
   desktop-appen ska jämföras? Kent ville veta "bästa sättet" – ska Nr2 landa i
   en rekommendation eller bara beskriva skillnaderna?
4. **nytta/kostnad-formeln** (avsnitt 5c): duger den enkla modellen, eller vill
   Kent ha en annan?
5. **Omfång på Claude-sidan:** hur mycket ska återanvändas ordagrant från
   `kent-ekosystem-analys` / Claude-kompassen kontra skrivas om för den här
   läsaren?
6. **Titel och kicker** för sidan (Nr1: "Har ungdomen blivit sämre …").
7. **Beslutslogg:** ska mappkontroll-beslutet (Nr2 → `synpalarande/`, inte
   `AI-teknik`) skrivas in i `beslutslogg.md`?

## 14. Nästa steg

1. Kent svarar på de öppna frågorna (minst 1–3).
2. Vid vägval B/C: kort SPEC.md.
3. LinkedIn-inläggets text säkras.
4. Research + källverifiering för de fyra dimensionerna.
5. Bygge enligt `kent-bygg-sidor`.
6. **Fräscha-ögon-genomläsning av PRD:n och av den färdiga sidan** (Regel 7)
   innan något kallas klart.

---

## Uppdateringslogg

- 2026-09-09 (v0.1): Skapad efter att Kent valt plats (`synpalarande/Nr2/`) och
  bekräftat fyra jämförelsedimensioner (kodförmåga, harness, pris per token,
  app-hanterbarhet). Format (A/B/C) och sju öppna frågor kvar.
