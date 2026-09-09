# PRD – Syn på lärande nr 2: jämföra AI-modeller för kodning

**Status:** UTKAST v0.3 – för Kent att reagera på. Inget är byggt.
**Skapad:** 2026-09-09 · **Ändrad:** 2026-09-09 (v0.3)
**Plats:** `C:\Users\kentl\OneDrive\AI\Studier\synpalarande\Nr2\`
**Repo:** [`kentlundgren/Studier`](https://github.com/kentlundgren/Studier) (publikt, `main`, känt-gott)
**Serie:** tredje bygget i `synpalarande/` efter [`Nr1/`](../Nr1/) och skillen `syn-pa-larande`

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

Men den sammanslagna dimensionen behåller **två fasetter**, annars tappas den
jämförbara funktionslistan:

- **3a. Mekanismen** – *vilka primitiver finns?* Instruktionsfiler
  (`CLAUDE.md` / `AGENTS.md`), skills, MCP, subagenter, minne, agentläge,
  behörighetsmodell, hur diff/filer hanteras.
- **3b. Ergonomin** – *hur känns det att styra?* Komma igång, hur mycket kontext
  man måste mata manuellt, hur pratig behörighetsdialogen är, hur återställbart
  och granskbart arbetet är, hur det är att jobba i.

Kvarvarande korsberoende att nämna, inte lösa: **priset** (dimension 3 nedan)
beror delvis på klient/abonnemang (ChatGPT Pro vs ren API vs Claude Max), så 3b
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

Viktigt för att avgränsa dimension 3b rätt. Kent byter inte verktygskedja
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
3b: en klient som jobbar mot lokala filer i samma repo som Cursor ser (en CLI,
en IDE-extension) passar Kents kedja bättre än en som har en egen inmurad
projektyta. **Hypotes att pröva vid bygget:** ChatGPT desktop-appen (bilden Kent
såg) kan vara den *sämsta* passformen för just den kedjan, trots agentläget.

## 6. Innehåll – de tre jämförelsedimensionerna

För varje dimension: vad den är, hur den *brukar* mätas, vad mätningen missar
(kunskapssyns-vinkeln), och Kents preliminära intryck (märkt som preliminärt
tills källor finns).

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

**Behövs ett SPEC.md-steg?** Nu när formatet är hybrid (C) och jämförelsen får en
datamodell: **ja, en kort SPEC.md.** En agent som bygger sidan behöver exakt: de
tre dimensionsrubrikerna och deras fasetter, om bedömningen är prosa eller skala,
**vilken proxy som används för "nytta" i kvoten och hur kvoten räknas**, vad som
räknas som en "röst"/källa i avsnitt 7. Utan det fylls luckorna med gissningar.
SPEC.md skrivs **före** bygget.

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
(bara Kents arbetssätt, inte en källa).

Kvar:

1. **Titel och kicker.** Tre förslag från Claude i chatten 2026-09-09 – Kent
   väljer eller blandar. Kicker blir "Syn på lärande · Nr 2" som i Nr1.
2. **"Nytta"-proxyn konkret:** benchmark-poäng, andel uppgifter utan omtag,
   tidsbesparing, eller en kombination? Avgörs i SPEC.md.
3. **Bedömningsform:** ren prosa per dimension, eller en liten tabell/skala i
   `index.html`? (Påverkar SPEC.md och bygget.)
4. **Beslutslogg:** ska besluten ovan speglas som en kort rad i
   `beslutslogg.md`? (Se förklaring nedan – filen finns redan, PRD:n ersätter
   den inte.)

### Om `beslutslogg.md` (förklaring till öppen fråga 4)

`C:\Users\kentl\OneDrive\AI\Studier\beslutslogg.md` **finns redan** och är en
repo-övergripande, daterad logg (nyast överst) – inte en ny fil. `Studier/CLAUDE.md`
säger uttryckligen att beslut loggas där, inte i `CLAUDE.md`. Skillnaden mot den
här PRD:n:

- **PRD:n** = hela sammanhanget för *ett* projekt (Nr2). Besluten *står* redan här
  (markörerna "beslutat/avgjort 2026-09-09" + uppdateringsloggen).
- **`beslutslogg.md`** = en tunn kronologisk liggare för *hela* `Studier` (kurser,
  `synpalarande`, allt). Poängen är att Kent om ett halvår kan skumma **en** fil
  och se "vad bestämde vi, och när" utan att öppna varje PRD och README.

En `beslutslogg`-rad för Nr2 blir alltså 2–3 rader som pekar hit. Rent
frivilligt, men `Studier` använder redan mönstret (rader för 2026-09-04 och
-09-05). Claude rör inte filen utan att Kent säger till.

## 15. Nästa steg

1. Kent svarar på öppna frågorna 1–4.
2. Kort SPEC.md (dimensionsrubriker, "nytta"-proxy, bedömningsform, vad som är
   en "röst").
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
  stycke om vad `beslutslogg.md` är och varför den inte ersätter PRD:n. Kvar:
  titel/kicker (tre förslag i chatten), "nytta"-proxy, bedömningsform,
  beslutslogg-rad.
