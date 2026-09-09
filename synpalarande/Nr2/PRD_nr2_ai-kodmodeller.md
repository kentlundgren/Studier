# PRD – Syn på lärande nr 2: jämföra AI-modeller för kodning

**Status:** v0.9 – **`index.html` byggd** (utkast), inline-referenser +
Claude-kompassen inlagda, fräscha-ögon-genomläsning gjord. Kvar: Kent fryser
1–5-omdömena (`research-underlag.md` → "Omdomen 1-5"), verifierar de fyra
punkterna i `kostnadskalkyl-35h.md` §8, tar bort utkastrutan.
**Skapad:** 2026-09-09 · **Ändrad:** 2026-09-09 (v0.9)
**Plats:** `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr2\`
**Repo:** [`kentlundgren/Studier`](https://github.com/kentlundgren/Studier) (publikt, `main`, känt-gott)
**Serie:** tredje bygget i `synpalarande/` efter [`Nr1/`](../Nr1/) och skillen `syn-pa-larande`
**Sidans titel (vald 2026-09-09):** "Vad betyder 'bäst' när modellen skriver koden?" · kicker "Syn på lärande · Nr 2"

---

## 1. Bakgrund och trigger

Kent vill ha "en plats för att jämföra, på olika sätt" olika AI-modeller
**med fokus på kodning** – konkret Claude (Claude Code, uppges vara ver. 5.1)
mot OpenAI (GPT‑6 / Codex).

**Startpunkten** är Osama Romohs LinkedIn-inlägg ("I love Claude, but GPT‑6
Astra blew Fable 5 out of the water for me…"), transkriberat i
[`linkedin-romoh-gpt6-astra.md`](linkedin-romoh-gpt6-astra.md). Obs: inlägget
handlar egentligen om **instruktionsföljsamhet och ordrikedom**, inte om kodning
specifikt, och innehåller inga siffror. Det duger ändå som avstamp i seriens
mening – se den filen för hur.

**Format: hybrid (C) – beslutat 2026-09-09.** Nr1:s ram (börjar i texten, landar
i "vad jag själv landar i", *en bild av frågan inte ett facit*) men med de
mellersta avsnitten expanderade till strukturerade jämförelsedimensioner plus en
plats för andras röster. Samma sätt som Nr1 faktiskt växte (`index.html` +
`pisa-2025-media-jamforelse.md` + citat-skylten).

**Dimensioner: tre, inte fyra – beslutat 2026-09-09.** Kents ursprungliga
aspekt 2 (harness) och aspekt 4 (app-hanterbarhet) slås ihop. Motivering i
avsnitt 3.

## 2. Mappkontroll – varför Nr2 hör hemma i `synpalarande/`

Dokumenterat eftersom det fanns en genuin krock (Regel 5).

- **Åtkomst:** `Studier` är öppet. `AI-teknik`-repot (där modelljämförelser
  annars bor, t.ex. `AI_modeller/Claude/olika_Claude_modeller/`) är **inte**
  åtkomligt i den här sessionen. Claude-kompassen (avsnitt 5) nås ändå via sin
  publika Live-URL.
- **Innehållsmatchning:** en ren teknisk benchmark hör enligt `Studier/CLAUDE.md`
  *inte* hemma här. Kent valde ändå `synpalarande/Nr2/` medvetet. Det som gör att
  det **passar serien**: "kvalitet = nytta / kostnad" är i grunden en *vad räknas
  som kunnande*-fråga, och hela benchmark-debatten (SWE-bench m.fl.) illustrerar
  Kents kärntes – **att hur något mäts avslöjar vilken kunskapssyn som ligger
  under** (`syn-pa-larande` avsnitt 2; Bernstein 1996; Strandler 2017). Nr2 blir
  "vad betyder *bäst*, och vad missar ett eval", inte "vilken modell vinner".
- **Repo-identitet:** `Studier` är känt-gott (lokalt och `origin` i synk sedan
  2026‑09‑04). Nr2 är en ny undermapp i ett friskt repo – ingen nästling.

## 3. Att slå ihop harness och app-hanterbarhet – Kents fråga, och svaret

Kents tanke: "att hantera harness, kontext, skills etc kan göras på olika sätt
med AI-bolagens appar som hjälper till att hantera modellerna, så att det blir
olika lätt att hantera det som numera kallas harness."

**Det är en sund tanke, och den genomförs.** Skälet: harness är inte en abstrakt
egenskap hos en *modell*. Den realiseras av en *klient*. Man kan inte säga något
om "GPT‑6:s harness" utan att säga *via vilken app* – Codex CLI, Codex
IDE-extension, Codex-molnet och ChatGPT desktop-appen ger olika mycket och känns
olika. Och omvänt: app-jämförelsen *är* mest en fråga om hur väl varje app gör
harness-saker. Det är två vyer av samma objekt.

Men den sammanslagna dimensionen (= **dimension 2** nedan) behåller **två
fasetter**, annars tappas den jämförbara funktionslistan:

- **2a. Mekanismen** – *vilka primitiver finns?* Instruktionsfiler
  (`CLAUDE.md` / `AGENTS.md`), skills, MCP, subagenter, minne, agentläge,
  behörighetsmodell, hur diff/filer hanteras.
- **2b. Ergonomin** – *hur känns det att styra?* Komma igång, hur mycket kontext
  man måste mata manuellt, hur pratig behörighetsdialogen är, hur återställbart
  och granskbart arbetet är, hur det är att jobba i.

Kvarvarande korsberoende att nämna, inte lösa: **priset** (dimension 3 nedan)
beror delvis på klient/abonnemang (ChatGPT Pro vs ren API vs Claude Max), så 2b
och dimension 3 pratar med varandra.

Dimension 2 ska **både beskriva** skillnaderna mellan klienterna **och landa i
en rekommendation** om vilken kodmotor Kent bör köra vid sidan av Cursor
(öppen fråga avgjord 2026-09-09).

## 4. Syfte och målgrupp

**Syfte:** ge Kent (och läsaren) underlag för att *själv* bedöma vilken
modell/klient som passar vilken sorts kodarbete – och en genomtänkt hållning
till vad "kvalitet" betyder när verktyget delvis skriver koden. Landar som *en
bild av frågan, inte ett facit*.

**Målgrupp:** som Nr1 – Kent först, sedan den som följer hans bloggande och hans
AI-texter. En reflekterande läsare, inte en utvecklarpublik som vill ha en ren
tabell.

**Inte syftet:** en alltid-färsk prisdatabas eller ett live-benchmark.

## 5. Kents egen kodprocess – den fasta ramen jämförelsen sker inom

Viktigt för att avgränsa dimension 2b rätt. Kent byter inte verktygskedja
beroende på modell:

- **Claude-kompassen** nämns bara som *hur Kent normalt arbetar med generativ
  AI* – hans etablerade process, inte en källa Nr2 ska mina på:
  <https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/>
  (publik Live Page). Länkas i förbifarten om det stärker resonemanget, inget mer.
- **Cursor** förblir lagret för Git/GitHub: commit, push, och att slå på
  GitHub Pages så sidorna kommer ut på WWW som levande sidor – **oavsett** om
  koden skrivits med Claude eller med OpenAI:s Codex.

**Konsekvens för Nr2:** frågan är inte "vilken app byter jag helt till", utan
"vilken *kodmotor* kör jag *vid sidan av* Cursor + GitHub Pages". Det snävar in
2b: en klient som jobbar mot lokala filer i samma repo som Cursor ser (en CLI,
en IDE-extension) passar Kents kedja bättre än en som har en egen inmurad
projektyta. **Hypotes att pröva vid bygget:** ChatGPT desktop-appen (bilden Kent
såg) kan vara den *sämsta* passformen för just den kedjan, trots agentläget.

## 6. Innehåll – de tre jämförelsedimensionerna

För varje dimension: vad den är, hur den *brukar* mätas, vad mätningen missar
(kunskapssyns-vinkeln), och Kents preliminära intryck (märkt som preliminärt
tills källor finns).

### Först: vilken modell pratar vi ens om? (Kents tillägg 2026-09-09)

En försvårande omständighet som ska ha en egen, tydlig plats i texten – den
gör alla tre dimensionerna svårare och knyter direkt an till titeln:

- **Modellerna står inte stilla.** AI-bolagen uppgraderar ofta, och varje
  uppgradering får ett nytt namn eller nummer. En jämförelse är en
  ögonblicksbild som daterar sig snabbt.
- **Namn *och* nummer om vartannat.** Claude-sidan har namn (Fable, Opus,
  Sonnet, Haiku) *och* nummer (t.ex. 4.6, 4.8, 5, 5.1). OpenAI-sidan har egna
  kodnamn *och* nummer (GPT‑5, GPT‑6 …). Samma modell omtalas på flera sätt.
  (Exakta namn/nummer verifieras vid bygget – Regel 3.)
- **Paraplynamn döljer vad som körs.** "GPT‑6", "Claude Code" eller "Codex" är
  inte *en* modell utan en familj/produkt. Bilden Kent såg säger "GPT‑6 Astra
  Låg" – namn + variant + effektnivå i ett. Vilken underliggande modell som
  faktiskt svarar kan dessutom bytas eller ruttas om utan att användaren märker
  det.
- **Konsekvens för Nr2:** varje sifferpåstående dateras och versionsmärks
  explicit ("per september 2026, Claude … ver. X"), och texten säger rakt ut
  att "vilken modell används egentligen?" är en del av själva svårigheten,
  inte en parentes. Förstärker seriens ram: *en bild av frågan, inte ett
  facit.*

### Dimension 1 – Kodförmåga
- Brukar mätas med: SWE-bench Verified, Terminal-Bench, "vibe"-tester, egna
  uppgifter.
- Missar: benchmark ≠ nytta i en riktig kodbas; mätvärdet är ett *val*.
- Fylls i: aktuella siffror **verifierade vid bygget**, inte nu.

### Dimension 2 – Harness och hur modellen styrs (hopslagen: gamla 2 + 4)
- **2a Mekanismen:** `CLAUDE.md` / `AGENTS.md`, skills, MCP, subagenter, minne,
  agentläge, behörighet, diff-hantering. Både Claude- och OpenAI-sidan behöver
  research och källverifiering vid bygget; Kents eget material kan vara *en*
  ingång men inte stommen.
- **2b Ergonomin:** Claude Code (CLI/desktop/IDE) mot Codex CLI, Codex
  IDE-extension, Codex-molnet, ChatGPT desktop-appen – bedömt *som kodmotor vid
  sidan av Cursor* (avsnitt 5). Kriterier: komma igång, mata kontext, hur mycket
  den gör själv vs frågar, återställbarhet/granskbarhet, känsla.
- **Landar i både beskrivning och rekommendation** (avgjort 2026-09-09): först
  skillnaderna mellan klienterna, sedan Kents rekommendation om vad han bör köra
  vid sidan av Cursor.
- Kunskapssyns-vinkeln: att "knyta till sig" en kodbas liknar det Kent menar med
  att *använda* kunskap i ett sammanhang snarare än att reproducera den.

### Dimension 3 – Pris per token → kvalitet = nytta / kostnad
- **Kents grundtanke (bekräftad 2026-09-09), förenklat:** *om modell A är dubbelt
  så dyr som modell B måste A vara dubbelt så bra för att ha samma kvalitet.*
  Kvalitet = nytta ÷ kostnad; lika kvot = lika mycket värde för pengarna. Man
  jämför kvoten mellan modellerna, inte prislappen eller prestandan var för sig.
- Rådata i nämnaren: input/output-pris, cache-rabatt, abonnemang (Pro/Max/Team)
  vs ren API-debitering, "usage credits" / veckogränser. Kent har redan verktyg
  och vana för Claude-kostnad (skill `claude-kostnad`, `Ovrigt/Claude_kostnad`).
- **Täljaren ("nytta") är det svåra.** Vilken proxy används – benchmark-poäng,
  andel uppgifter lösta utan omtag, tidsbesparing? Vad som än väljs ska det stå
  öppet att det är en uppskattning, inte en mätning (Regel 3 och 13 – ingen falsk
  precision, ingen handling tillskriven Kent som inte gjorts). Detta spikas i
  SPEC.md (avsnitt 11).
- Romohs inlägg är i sig ett svar på frågan: han valde "båda" (ChatGPT Pro *och*
  Claude Max), inte "antingen eller".

## 7. Andras röster och källor

Ett eget `.md` (jfr `pisa-2025-media-jamforelse.md`) där inlägg, artiklar och
tester från nätet samlas och ställs mot varandra och mot Kents linje – med
Romohs inlägg som första post. Per röst: vem, vad de hävdar, vilken dimension,
vad Kent tycker. Ev. en växlande citat-skylt i `index.html` som i Nr1
(progressiv förbättring – fungerar utan JS).

## 8. Kopplingen till syn på lärande och kunskap

Det som gör Nr2 till ett nummer i *den här* serien:

- **Mätvärdet är ett val.** Ett kod-benchmark bär en kunskapssyn precis som ett
  nationellt prov (Bernstein 1996; Strandler 2017).
- **"Kvalitet" är inte självklart.** nytta/kostnad tvingar fram *nytta för vad* –
  reproducera snabbt, eller förstå och kunna stå för resultatet?
- **Måttstocken rör sig.** När modellerna byter namn och version snabbare än en
  text hinner skrivas (avsnitt 6) blir "bäst" per definition ett rörligt mål –
  ännu ett skäl att landa i en bild, inte ett facit.
- **AI som förklarar vs AI som levererar** (`syn-pa-larande` avsnitt 5).
- Kents tre villkor (förstår jag / tar jag ansvar / bidrar jag) speglas mot att
  koda med en modell.

Blir sannolikt avsnittet **"Vad jag själv landar i"**.

## 9. Teknik och bygg

Styrs av skillen **`kent-bygg-sidor`** (ny HTML-undersida ⇒ GitHub-hörna +
teknik-modal med från start).

- Statisk sida, ingen server, inga cookies, inga externa bibliotek. JS bara till
  progressiv förbättring; allt fungerar utan JS.
- Återanvänd `styles.css`-mönstret från `Nr1/` (läsbar typografi, ljust/mörkt via
  `prefers-color-scheme`), stabila rubrik-ankare, djuplänkar.
- `Nr2/README.md` enligt Regel 9: Live-URL, källkod på GitHub, **lokal sökväg**,
  skapad-datum. GitHub Pages är ännu inte påslaget för `Studier` – samma not som
  i `Nr1/README.md`.
- **Cursor gör commit/push och slår på Pages** (avsnitt 5, Regel 11). Claude Code
  rör inte Git här.

## 10. Källhantering

Enligt **`kent-referens-skill`** / Regel 2: Harvard, länkad förstahänvisning i
löptext, utskriven URL, **hämtdatum** för föränderliga webbkällor (priser,
modellsidor, benchmarks – i praktiken alla källor här), alfabetisk
referenslista, kursiv parentes per källa som förklarar varför den är med.
Ihopfällbar referenslista som i Nr1.

## 11. SPEC.md-checkpoint (Regel 6)

**Behövs ett SPEC.md-steg?** Ja – och den är skriven:
[`SPEC.md`](SPEC.md) (v0.1, 2026-09-09). Den fastställer filstruktur, de nio
avsnitten med ankare, dimensionsmallen, bedömningsmodellen ("nytta" 1–5 +
konkret kostnad + kvot som resonemang), tabellens kolumner, "röst"-definitionen,
käll- och versionsmärkningsregler, byggregler och gränsfall. SPEC:ens avsnitt 13
har fyra småpunkter för Kent att bekräfta innan bygget.

## 12. Faktakänslighet (Regel 3)

PRD:n påstår **inga** siffror, priser, versionsnummer eller benchmark-resultat.
"Claude Code 5.1", "GPT‑6", "Astra", "Fable 5" är uppgifter från Kent och
Romohs inlägg och återges som sådana. Allt sådant verifieras mot primärkällor
(Anthropic, OpenAI, oberoende tester) **vid bygget**, med hämtdatum, och märks
tydligt som färskvara.

## 13. Avgränsningar

- Inte en live-uppdaterad pris-/benchmarktavla.
- Inte alla modeller – fokus Claude vs GPT/Codex; andra (Gemini m.fl.) bara om en
  källa naturligt drar in dem.
- Inte en installationsguide – app-hanterbarhet *bedöms*, men steg-för-steg-setup
  hör hemma på annat håll.
- Verktygskedjan för publicering (Cursor + GitHub Pages) är fast och jämförs
  inte – den är ramen, inte föremålet.

## 14. Öppna frågor (att stämma av innan bygget)

Avgjorda 2026-09-09: format (hybrid C), dimensioner (3, hopslagen 2+4),
Codex-klient (både beskriva *och* rekommendera), nytta/kostnad-tanken
(kvot: dubbelt så dyr ⇒ måste vara dubbelt så bra), Claude-kompassens roll
(bara Kents arbetssätt, inte en källa), **titel** ("Vad betyder 'bäst' när
modellen skriver koden?"), **modell-namn-svårigheten** tillagd som eget stycke
i avsnitt 6, och **beslutslogg-rad** – ja, loggas (gjort 2026-09-09 i
`beslutslogg.md`).

**Alla besvarade 2026-09-09 – [`SPEC.md`](SPEC.md) är KLAR (v1.0):**

- **"Nytta"** = subjektivt omdöme 1–5 per modell×dimension (default 3, avvikelse
  kräver två källor). **Kostnad** både per Mtoken och per månad för
  referensanvändning **35 h/vecka**, med analys av om volymen ryms i abonnemangen.
  **Kvoten** som resonemang **+ indexrad** i tabellen (Kent ville ha den).
- **Bedömningsform:** prosa som huvudform + **en** sammanfattande tabell i eget
  avsnitt `#Overblick` (efter dimensionerna, före slutsatsen), med en
  hänvisningsrad nära toppen.
- **Djuplänkbarhet:** varje avsnitt når man med `URL#ankare` (Nr1:s stil).
  Nu **Regel 7 i `kent-bygg-sidor`** (tillagd 2026-09-09).
- **Uppdatera fler röster:** färdig prompt i SPEC 7.1, kopieras in i README.

### Om `beslutslogg.md`

`C:\Users\kentl\OneDrive\AI\Studier\beslutslogg.md` **fanns redan** och är en
repo-övergripande, daterad logg (nyast överst) – inte en ny fil. `Studier/CLAUDE.md`
säger uttryckligen att beslut loggas där, inte i `CLAUDE.md`. Skillnaden mot den
här PRD:n:

- **PRD:n** = hela sammanhanget för *ett* projekt (Nr2). Besluten *står* här
  (markörerna "beslutat/avgjort 2026-09-09" + uppdateringsloggen).
- **`beslutslogg.md`** = en tunn kronologisk liggare för *hela* `Studier` (kurser,
  `synpalarande`, allt), så att man om ett halvår kan skumma **en** fil och se
  "vad bestämde vi, och när" utan att öppna varje PRD och README. Nr2-raden
  lades in 2026-09-09 och pekar hit.

## 15. Nästa steg

1. Kent tar ställning till öppna frågorna 1–2 ("nytta"-proxy, bedömningsform).
2. Kort SPEC.md (dimensionsrubriker inkl. modell-namn-stycket, "nytta"-proxy,
   bedömningsform, vad som är en "röst").
3. Research + källverifiering för de tre dimensionerna.
4. Bygge enligt `kent-bygg-sidor`.
5. **Fräscha-ögon-genomläsning av PRD:n och av den färdiga sidan** (Regel 7).

---

## Uppdateringslogg

- 2026-09-09 (v0.1): Skapad efter att Kent valt plats (`synpalarande/Nr2/`) och
  fyra jämförelseaspekter.
- 2026-09-09 (v0.2): Format låst till hybrid (C). Aspekt 2 (harness) och 4
  (app-hanterbarhet) hopslagna till en dimension med två fasetter (mekanism /
  ergonomi) – Kents förslag, motiverat i nytt avsnitt 3. Nytt avsnitt 5 om Kents
  fasta verktygskedja (Claude-kompassen som process, Cursor för Git/GitHub/Pages
  oavsett modell). LinkedIn-inlägget transkriberat till
  `linkedin-romoh-gpt6-astra.md` och karaktäriserat (handlar om
  instruktionsföljsamhet, inte kodning). Två öppna frågor bortplockade (format,
  LinkedIn-text), SPEC.md-checkpoint uppdaterad till "troligen ja".
- 2026-09-09 (v0.3): Fyra öppna frågor avgjorda efter Kents svar –
  Codex-klienten ska *både* beskrivas och rekommenderas (dimension 2);
  nytta/kostnad bekräftad som kvot ("dubbelt så dyr ⇒ måste vara dubbelt så
  bra"), täljaren spikas i SPEC.md; Claude-kompassen nedtonad till att bara
  markera Kents arbetssätt, inte en källa (avsnitt 5, dimension 2a).
  SPEC.md-checkpoint uppgraderad från "troligen ja" till "ja". Nytt förklarande
  stycke om vad `beslutslogg.md` är.
- 2026-09-09 (v0.4): Titel vald – "Vad betyder 'bäst' när modellen skriver
  koden?" (kicker "Syn på lärande · Nr 2"). Nytt stycke i avsnitt 6 om
  svårigheten att veta vilken modell man ens jämför (namn vs nummer, paraplynamn,
  tyst omruttning) – Kents tillägg; även speglat i avsnitt 8. Beslutslogg-rad
  införd i `beslutslogg.md` på Kents godkännande. Kvar: "nytta"-proxy,
  bedömningsform – båda avgörs i SPEC.md.
- 2026-09-09 (v0.4b): Fräscha-ögon-genomläsning (Regel 7). Rättade
  numreringskrock (harness-fasetterna var "3a/3b" i avsnitt 3 och 5 men "2a/2b"
  i avsnitt 6 – nu "2a/2b" genomgående) och tog bort ett overifierat
  OpenAI-kodnamn.
- 2026-09-09 (v0.5): `SPEC.md` (v0.1) skriven, med Claudes förslag på de två
  sista öppna frågorna. Avsnitt 11 och 14 uppdaterade att peka dit. Kvar:
  Kents bekräftelse av SPEC:ens avsnitt 5, 6 och 13.
- 2026-09-09 (v0.6): Alla SPEC-frågor besvarade → `SPEC.md` v1.0 (KLAR).
  Referensanvändning 35 h/vecka; kostnad per Mtoken *och* per månad; indexraden
  med; tabell i eget avsnitt `#Overblick`. Djuplänkbarhet formulerad som
  förslag till ny Regel 7 i `kent-bygg-sidor`.
  Planeringsfasen klar – nästa steg är research + källverifiering.
- 2026-09-09 (v0.7): Kent godkände Regel 7-texten. **Regel 7 – Djuplänkbarhet**
  tillagd i `C:\Users\kentl\.claude\skills\kent-bygg-sidor\SKILL.md` (v6).
- 2026-09-09 (v0.8): Research pass 2 klar. Mellanmodell-nivån (Sonnet 5 /
  GPT-5.6 Terra) tillagd i kostnadskalkylen på Kents begäran. `index.html`,
  `styles.css`, `script.js`, `jamforelse-roster.md` och `README.md` byggda och
  verifierade i webbläsare (9 avsnitt, djuplänkar, GitHub-hörna + teknik-modal,
  neutral överblickstabell, röst-skylt, ihopfällbar annoterad referenslista,
  de två app-skärmdumparna). Sidan är ett **utkast** – 1–5-omdömena är
  preliminära, två abonnemangsuppgifter overifierade.
- 2026-09-09 (v0.9): Kents runda 2 på den byggda sidan.
  (a) **Inline-referenser** – varje källas första hänvisning nu länkad i
  löptext (Regel 2). Referenslistan 10 poster, alfabetisk, annoterad.
  (b) **Claude-kompassen + presentationen** länkade i inledningen (Lundgren
  2026a/b), både i text och referenslista.
  (c) **"Näst bästa modellen"** framhållen: flaggskeppet ~5× dyrare per token
  för en knappt mätbar skillnad – i "Vad kostar nyttan?" och i slutsatsen.
  (d) **Omdömena tydliggjorda**: per-facett-motivering under tabellen +
  utkastrutan och tabellen länkar till `research-underlag.md` (nytt avsnitt
  "Omdomen 1-5") och `kostnadskalkyl-35h.md`.
  (e) **Romohs LinkedIn-kortlänk** (`lnkd.in/p/efrssr5X`) inlagd i löptext och
  referenslista; noterat att den resolvar till ett `linkedin.com/posts/osamaa_…`-
  inlägg som kräver inloggning.
  (f) **Fräscha-ögon-genomläsning (Regel 7)**: röst-skylten bantad från 5 till
  3 (tog bort ett overifierat Peter Yang-citat och ett syntetiserat "kör
  båda"-citat – Regel 3; "kör båda" flyttat till prosa); "hand it a task"-
  karaktäriseringen omformulerad från falskt namngivet citat till allmän
  beskrivning; 5.3 Codex Spark struket för att inte krocka med "5.3-codex
  avvecklad".
