# Research-underlag – Nr2 ("Vad betyder 'bäst' när modellen skriver koden?")

*Sammanställt 2026-09-09 med en språkmodell som verktyg för webbsökning och
källhantering. Kent står för hur underlaget används. Detta är **inte** den
publicerade texten – det är råmaterialet, med tydlig märkning av vad som är
verifierat och vad som återstår att kontrollera mot primärkälla innan
`index.html` skrivs.*

**Märkning:**
`✅` = bekräftat i primärkälla (Anthropic/OpenAI egna sidor) ·
`⚠️` = en källa, eller en sekundär/hands-on-källa – spår att verifiera ·
`❓` = motstridiga uppgifter mellan källor

---

## Retrieval Summary (Kents Advanced-RAG-krav)

- **Teknik:** Claudes egna `WebSearch` + `WebFetch`. Ingen vektor-RAG – samma
  beslutslogik (två oberoende källor, rangordning, transparens) tillämpad
  manuellt.
- **Omfattning:** ~10 sökningar, 5 sidhämtningar, 2026-09-09.
- **Källrangordning:**
  1. **Primärt:** `platform.claude.com/docs/.../pricing`, `developers.openai.com/api/docs/pricing`, `learn.chatgpt.com/docs` (OpenAI:s egen Codex-dokumentation).
  2. **Hands-on med redovisad metod:** Composio (Prathit Joshi, 2026-08-18).
  3. **Svaga – behandlas bara som spår:** SEO-aggregatorer (morphllm, cloudzero, explainx, benchlm, codingfleet m.fl.). Ofta delvis AI-genererade, sinsemellan motstridiga. **Inget benchmark-tal eller abonnemangsgräns härifrån får stå oemotsagt i `index.html`.**
- **Reranking:** priser och produktstruktur vilar på primärkällor. Benchmark-
  siffror, abonnemangsgränser och "X % av utvecklarna föredrar…" är **ännu inte
  låsta** – de sekundära källorna spretar för mycket.
- **Största osäkerheten:** exakt vilken modell OpenAI Codex kör som standard i
  september 2026 (se Dimension 0).

---

## Dimension 0 – Vilken modell pratar vi ens om?

Det här avsnittet fick starkt stöd av själva researchen: sökningarna gav olika
svar beroende på källa och datum.

### Claude-familjen (per `platform.claude.com`, sept 2026) ✅
Namn **och** nummer om vartannat:
- **Fable 5.1** och **Mythos 5.1** (begränsad tillgång, "glasswing") – flaggskepp
- **Opus 5** (och 4.8, 4.7, 4.6, 4.5 kvar i pris­listan)
- **Sonnet 5** (och 4.6, 4.5)
- **Haiku 4.5**
- Äldre (Opus 4.1, 4, Sonnet 4, Haiku 3.5) "retired, except on Bedrock/Google Cloud"

`✅` **Viktig prisnyans:** "Claude 4.7 och senare modeller … använder en nyare
tokenizer … producerar ungefär 30 % fler tokens för samma text." (primärkälla,
pricing-sidan). Det gör en rak `$/Mtoken`-jämförelse missvisande – Claude är
~30 % dyrare än listpriset antyder när man jämför *samma uppgift*.

### OpenAI-familjen ❓
- **GPT-6 Astra** – flaggskepp, lanserat ~2026-09-03, API-id `gpt-6-astra`.
  `learn.chatgpt.com/docs`: *"GPT-6 Astra combines advanced reasoning, computer
  use, and stronger judgment for complex work across code, apps, and research in
  Codex and ChatGPT Work."* `✅`
- **GPT-5.6** – Sol / Terra / Luna, allmänt tillgänglig 2026-07-09. `⚠️`
- **GPT-5.3-Codex** – kodspecifik modell, finns i OpenAI:s prislista. `✅`
- **GPT-5.5** – föregående generation, förekommer i äldre jämförelser.

`❓` **Vad kör Codex som standard i sept 2026?** Källorna säger olika:
- `learn.chatgpt.com/docs` (primär): GPT-6 Astra är "the current advanced model" i Codex.
- En sekundärkälla: Codex "defaults to gpt-5.6-sol at medium effort".
- OpenAI:s prislista listar en egen `GPT-5.3-Codex`.
→ **Måste verifieras mot OpenAI:s officiella Codex-docs vid bygget.** Troligt att
Codex kan köra flera, med en billigare som default och Astra som tillval.

### Skärmdumpen Kent såg
"GPT-6 Astra Låg" = **modell** (GPT-6) + **variant** (Astra) + **effektnivå**
(Låg / low reasoning effort). Ett konkret exempel på att ett "modellnamn" i
själva verket är tre val staplade på varandra.

---

## Dimension 1 – Kodförmåga

**Läget: svagt underlagt. Alla konkreta siffror nedan är sekundära.** Primär­
källorna (system­kort, officiella leaderboards) är inte hämtade än.

### SWE-bench Verified `⚠️`
- Opus 5: "96,0 %" (flera sekundärkällor, refererar Anthropics system­kort 2026-07-24)
- Fable 5 / 5.1: "~95 %"
- Codex / GPT-5.6: "88,7 %"
- Claude i en annan jämförelse: "87,6 %"
→ Spretet beror på att källorna testar olika modell+harness-kombinationer vid
olika datum. **Verifiera mot Anthropics Opus 5 System Card (PDF, 2026-07-24) och
`swebench.com`.**

### Terminal-Bench `⚠️` / `❓`
- Codex CLI på GPT-5.6 Sol: "#1 på Terminal-Bench 2.1, 89,5 %"
- Claude Code på Opus 5: "89,1 %" på samma
- Terminal-Bench 2.0: GPT-5.6 Sol 91,9 %, Claude Mythos 5 88,0 %
- Terminal-Bench 4.0: Claude Mythos 5.1 leder, 0,609 (0–1-skala)
→ Minst tre benchmark-versioner samtidigt i omlopp. Ännu ett "vilken mätning?".

### Hands-on med metod `⚠️` (en källa, men redovisad)
Composio Golden Eval, 47 workflows, Prathit Joshi 2026-08-18, testade
**Fable 5 / Opus 4.8** mot **GPT-5.6 Sol High**:
- Fable 5: 100 % lyckade, ~276 957 tokens i snitt
- GPT-5.6 Sol: 95,7 % lyckade, ~223 779 tokens (**19 % färre tokens**)
- Slutsats i källan: *"Use Fable when one wrong action can cause a serious
  problem. Use Sol high for coding, research, extraction"* (där omtag är OK).

### "500+ utvecklare Reddit-enkät" `⚠️`
Citeras av flera sekundärkällor: **65 % föredrar Codex dagligen**, men
**blindgranskning bedömer Claude-koden renare 67 % av gångerna**. Ursprunget
inte spårat – måste hittas eller märkas som andrahandsuppgift.

### Kunskapssyns-noten
Toppmodellerna ligger på 95–96 % på SWE-bench Verified – benchmarket **mättar**
och skiljer dem knappt längre. "Vilken är bäst" flyttar därmed från
kod­förmåga till harness, kostnad och vana. Precis Kents poäng: när mätvärdet
tar slut säger det mer om mätningen än om modellerna.

---

## Dimension 2 – Harness och hur modellen styrs

### 2a Mekanism

| | Claude Code | OpenAI Codex |
|---|---|---|
| Instruktionsfil | `CLAUDE.md` (rekommenderat kort, ~200 rader enl. Composio `⚠️`) | `AGENTS.md` med lagrade överlagringar `✅` (`learn.chatgpt.com`) |
| Skills | `.claude/skills/` | `.agents/skills/` (TOML) `⚠️` |
| Konfig | `.claude/settings.json`, hooks | `config.toml` (basic + advanced) `✅` |
| MCP | Ja | Ja `✅` |
| Subagenter | Ja | Ja (Composio: numera "identically") `⚠️` |
| Sandbox/behörighet | behörighetslägen, plan mode | sandbox med godkännande `✅` |

`⚠️` **Konvergens:** Composio (2026-08-18): *"both now support the shared Agent
Skills standard and MCP servers identically."* Om det stämmer är 2a mindre
avgörande än för ett år sedan – skillnaden ligger i 2b. **Verifiera mot
`docs.claude.com` (Claude Code) och OpenAI:s Codex-docs.**

`⚠️` **Instruktionsföljsamhet över lång session:** Composio: *"Codex follows
instructions a bit better over a long session"*, men Claude "stopped drifting as
much" med Opus 4.8. Rimmar med Romohs inlägg (Astra håller sig till instruktionen).

### 2b Ergonomi / klienter

**Claude Code** `⚠️` (Composio + allmänt känt):
- Ytor: CLI, desktop-app, IDE-integration.
- Interaktiv – visar sitt resonemang, frågar vid beslutspunkter ("som en kollega
  som hela tiden berättar vad den gör", enl. en switch-artikel).
- Stark på kontextbevarande i mycket långa sessioner (Composio: "26+ h").
- Desktop-appen: "frontend glitches" (Composio).

**OpenAI Codex** `✅` (`learn.chatgpt.com`) + `⚠️` (Composio):
- Ytor: **Codex CLI** (öppen källkod, apr 2025; ~114 000 GitHub-stjärnor aug 2026 `⚠️`),
  **Codex IDE-extension**, **Codex-molnet** (autonomt, sandbox), **ChatGPT
  desktop-appen**, **webben**, **remote**.
- Autonom modell: "hand it a task, get the implementation back."
- Composio: ChatGPT/Codex-appen är *"wonderfully built. It has a browser that the
  agent can use very easily"*; *"Codex Cloud and /review are the cleanest
  versions of both."*

**För Kents kedja (Cursor + GitHub Pages):**
CLI och IDE-extension jobbar mot lokala filer i samma repo Cursor ser. Molnet och
ChatGPT-appens agentläge är mer inmurade. SPEC:ens hypotes – att desktop-appen är
sämst passform för Kents kedja – har visst stöd (autonom, egen webbläsare, egen
yta) men **måste prövas konkret vid bygget**, inte påstås.

---

## Dimension 3 – Pris per token → nytta / kostnad

### Flaggskepp mot flaggskepp – identiskt listpris `✅`

| per 1M tokens (kort kontext) | Claude Fable 5.1 | GPT-6 Astra |
|---|---|---|
| Input | $10 | $10 |
| Cachad input (läs) | $0,25 (0,025×) | $1,00 |
| Output | $50 | $50 |
| Lång kontext | 1M ingår, standardpris | **dubblas: $20 in / $75 ut** |

→ **Rakt listpris är alltså oavgjort.** Två saker bryter symmetrin:
1. `✅` Claudes tokenizer ger ~30 % fler tokens för samma text → Claude
   effektivt ~30 % dyrare per uppgift.
2. `✅` Astra dubblar priset i långt kontext; Fable 5.1 gör inte det.
   (Cache-läsning är däremot 4× billigare hos Fable: $0,25 mot $1,00.)

### Mellanklass och kodspecifika modeller `✅`

| per 1M tokens | Input | Cachad | Output |
|---|---|---|---|
| Claude Sonnet 5 | $2 | $0,20 | $10 |
| GPT-5.6 Terra | $2 | $0,20 | $12 |
| GPT-5.6 Sol | $4 | $0,40 | $20 |
| **GPT-5.3-Codex** | **$1,75** | $0,175 | **$14** |
| Claude Haiku 4.5 | $1 | $0,10 | $5 |

→ `⚠️` **Nyckelpoäng att verifiera:** om Codex som standard kör en billigare
modell (Sol eller 5.3-Codex) medan Claude Code kör Opus/Sonnet/Fable, så gynnas
Codex på "pris per uppgift" **delvis för att den inte kör toppmodellen**. Det är
en annan sak än att vara billigare vid samma kapacitet.

### Abonnemang `⚠️` (siffror från Composio + SEO – ej Anthropic/OpenAI-primära)
- **Claude Pro $20:** "~45 meddelanden / 5 h", "caps hit fast" (Composio).
- **Claude Max:** 5x ~$100/mån, 20x ~$200/mån. Två veckogränser (alla modeller +
  Opus separat) plus 5-timmarsgräns.
- **ChatGPT Plus $20:** Codex ingår; Composio: *"rarely makes you think about
  limits"*, *"never once shown up as a constraint."*
- **ChatGPT Pro $200.**
- `⚠️` Anthropic höjde Claude Code-gränserna flera gånger 2026 (dubblad
  5h-gräns 6 maj; veckopromo +50 % → +25 % permanent ~14 sep), beskrivet som
  "anti-Codex"-drag av kommentatorer.

### 35 h/vecka-referensen
Vid heltid (35 h/v) sprängs rimligen varje abonnemangs toppmodell-gräns → man
hamnar i API-debitering / overflow. Den konkreta kr/mån-uträkningen görs vid
bygget när ett token-per-timme-antagande spikats och priserna dubbelkollats.
Redan nu tydligt: **abonnemangens gränser, inte listpriset, avgör vad heltid
faktiskt kostar** – och där pekar underlaget mot att Codex/ChatGPT är
generösare, medan Claude svarat med upprepade höjningar.

---

## Utkast till röster (`jamforelse-roster.md`)

| # | Vem | Var / när | Vad de hävdar | Dim | Status |
|---|---|---|---|---|---|
| 1 | **Osama Romoh** (AI Strategist & Educator) | LinkedIn, ~7–8 sep 2026 | GPT-6 Astra följer instruktioner tätare, mindre pratig; köpte ChatGPT Pro vid sidan av Claude Max, behåller båda | 2, 3 | permalänk + datum kvar `⚠️` |
| 2 | **Prathit Joshi** | Composio-bloggen, 2026-08-18, "100+ hours with both" | Codex vinner 3–2; men blindgranskad kod renare hos Claude; *"if someone made me uninstall one today, it's not Codex"* | 1, 2, 3 | metod redovisad `⚠️` |
| 3 | **Naresh B A** | Medium, juli 2026, "I Switched from Claude Code to Codex" | Claude "som en kollega som pratar hela tiden"; Codex "hand it a task, get the implementation" | 2 | läs i sin helhet `⚠️` |
| 4 | **Peter Yang** | (via sekundärkälla) | "Fast mode + generous limits = more reps" – bytte till Codex för iterationstakt | 3 | hitta originalet `⚠️` |
| 5 | "500+ utvecklare, Reddit-enkät" | via flera SEO-källor | 65 % föredrar Codex dagligen; 67 % blindbedömer Claude-koden renare | 1 | **ursprung ospårat** – hitta eller märk som andrahands `⚠️` |

Behöver 3–5 – helst spåra #4 och #5 till original, annars räcker #1–3 + en till
med tydlig hållning åt "Claude bäst"-hållet för balans (saknas i skörden hittills).

---

## Att verifiera mot primärkälla innan `index.html` skrivs

1. **Anthropic Opus 5 System Card** (PDF, 2026-07-24) – SWE-bench Verified exakt siffra.
2. **OpenAI:s officiella Codex-dokumentation** – vilken modell Codex kör som
   standard i sept 2026, och vilka som är valbara.
3. **`swebench.com`** (Verified-leaderboarden) – aktuell topp, med datum.
4. **`docs.claude.com` – Claude Code** – `CLAUDE.md`, skills, MCP, subagenter,
   hooks, plan mode, behörighetslägen: exakt vad som finns.
5. **Anthropic hjälpsida om Max/Pro-gränser** och **OpenAI hjälpsida om
   Plus/Pro + Codex-gränser** – ersätt Composios hands-on-siffror.
6. **Terminal-Bench officiella leaderboard** – vilken version som är aktuell.
7. **GPT-6 Astra:** exakt lanseringsdatum och long-context-tröskeln (var går
   gränsen där priset dubblas?).
8. **Osama Romohs inlägg:** permalänk och exakt publiceringsdatum.
9. En balanserande "Claude bäst"-röst med tydlig argumentation.

---

## Preliminär helhetsbild (INTE för publicering – Kents omdöme återstår)

- **Kodförmåga:** i praktiken oavgjort på toppnivå; benchmarken mättar.
- **Harness – mekanism:** konvergerar (skills-standard, MCP åt båda håll).
- **Harness – ergonomi:** genuin skillnad i filosofi – Claude interaktiv/visar
  tänkandet, Codex autonom/levererar-och-återkommer. Codex har fler ytor
  (moln, app med webbläsare). För Kents Cursor-kedja lutar det mot CLI eller
  IDE-extension oavsett bolag.
- **Pris:** listpris oavgjort flaggskepp mot flaggskepp; Claudes tokenizer och
  Astras long-context-dubbling talar för Codex; abonnemangsgränserna talar
  tydligt för Codex/ChatGPT i dag, men Anthropic höjer aktivt.
- **Kvot nytta/kostnad:** troligt utfall – Codex ger mer per krona *vid Kents
  volym*, Claude ligger något högre i ren nytta för de svåraste uppgifterna.
  Exakt indexrad fylls när siffrorna är primärverifierade.

---

## Uppdateringslogg

- 2026-09-09: Skapad efter första research-passet (~10 sökningar, 5 hämtningar).
  Priser och produktstruktur primärverifierade; benchmarks och abonnemangs­
  gränser fortfarande på sekundärkällor. Nio punkter kvar att primärverifiera.
