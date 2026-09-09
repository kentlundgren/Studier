# Research-underlag – Nr2 ("Vad betyder 'bäst' när modellen skriver koden?")

*Sammanställt 2026-09-09 med en språkmodell som verktyg för webbsökning och
källhantering. Kent står för hur underlaget används. Detta är **inte** den
publicerade texten – det är råmaterialet, med märkning av vad som är verifierat
och vad som återstår att kontrollera. Pass 1 + pass 2 (primärverifiering) gjorda
samma dag.*

**Märkning:** `✅` primärkälla (Anthropic/OpenAI/oberoende benchmark) ·
`⚠️` en källa eller sekundär/hands-on · `❓` motstridiga uppgifter

---

## Retrieval Summary (Advanced-RAG)

- **Teknik:** Claudes `WebSearch` + `WebFetch`, manuell tillämpning av två-källors-
  kravet, rangordning och transparens. Ingen vektor-RAG.
- **Omfattning:** ~16 sökningar, 10 sidhämtningar, 2026-09-09.
- **Primärkällor som gick att läsa:** `platform.claude.com/.../pricing`,
  `code.claude.com/docs` (Claude Code), `anthropic.com/news/claude-opus-5`,
  `developers.openai.com/api/docs/pricing`, `learn.chatgpt.com/docs` +
  `/docs/models` (OpenAI:s Codex-dokumentation), `artificialanalysis.ai`
  (oberoende benchmark).
- **Blockerat för verktyget (403):** `openai.com/index/gpt-6-astra/`,
  OpenAI:s och Anthropics hjälpsidor om användningsgränser. → Kent kan öppna
  dem inloggad; tills dess står gränssiffrorna på hands-on/sekundärkällor.
- **Svaga källor (bara spår):** SEO-aggregatorer (morphllm, cloudzero, benchlm,
  codingfleet, explainx m.fl.). Inget benchmark-tal härifrån står oemotsagt.
- **Största kvarvarande osäkerhet:** exakta SWE-bench-tal (se Dimension 1) och
  abonnemangsgränser i kronor/meddelanden (se Dimension 3).

---

## Dimension 0 – Vilken modell pratar vi ens om?

Researchen bevisade poängen. Ett halvår av namnbyten syns direkt i källorna.

### Claude-familjen (`platform.claude.com`, sept 2026) `✅`
- **Fable 5.1**, **Mythos 5.1** (begränsad, "glasswing") – flaggskepp
- **Opus 5** (+ 4.8, 4.7, 4.6, 4.5 kvar i prislistan)
- **Sonnet 5** (+ 4.6, 4.5) · **Haiku 4.5**
- **Tokenizer-brytpunkt:** "Claude 4.7 och senare … nyare tokenizer …
  producerar ~30 % fler tokens för samma text." `✅` Viktigt för prisjämförelse.

### OpenAI/Codex – modellväljaren (`learn.chatgpt.com/docs/models`) `✅`
Aktuella i Codex: **Astra** (GPT-6, "hardest end-to-end work"), **5.6 Sol**
("complex coding"), **5.6 Terra** ("routine"), **5.6 Luna** ("fast/affordable"),
**5.3 Codex Spark** (research preview, endast ChatGPT Pro), **5.5** (förra
flaggskeppet).
Avvecklade/utgående: **5.2** och **5.3-codex** redan avvecklade; **5.4** och
**5.4 Mini** pensioneras **31 aug 2026** → måste ersättas med `gpt-5.6-terra`
resp. `gpt-5.6-luna` i sparade konfigurationer, egna agenter och schemalagda
uppgifter.
**Default:** "a recommended model based on your account type and client" – ingen
enda universell default. `✅`

→ På ~6 veckor: en kodspecifik modell (5.3-codex) avvecklad, en generation
(5.4) pensionerad med tvångsbyte i användarnas konfigfiler, tre nya 5.6-varianter,
och ett nytt flaggskepp (Astra). **Det här stycket skriver sig självt.**

### Skärmdumpen ("GPT-6 Astra Låg")
Modell (GPT-6) + variant (Astra) + effektnivå (Låg / low reasoning effort) i en
enda etikett.

---

## Dimension 1 – Kodförmåga

**Bättre underlagt efter pass 2, men fortfarande spretigt – och det är poängen.**

### Anthropics egen Opus 5-annons (`anthropic.com/news/claude-opus-5`) `✅`
**Nämner inte SWE-bench Verified.** Använder i stället **Frontier-Bench v0.1**
("surpasses all other models, more than doubles Opus 4.8"), **CursorBench 3.2**
("within 0.5 % of Fable 5's peak, at half kostnaden per uppgift") och
**AA Coding Agent Index** ("greater performance at a given cost than all other
models"). Ramen är **kostnadseffektivitet**, inte topplacering.
→ Det ofta citerade "96 % SWE-bench Verified för Opus 5" kommer från
sekundärkällor, **inte** från annonssidan. `❓` Kan finnas i systemkortet
(PDF, 2026-07-24) – ej läst. Att Anthropic själv gått ifrån SWE-bench är i sig
ett fynd: benchmarket mättar.

### Artificial Analysis, oberoende, 2026-09-03 `✅`
- **AA Coding Agent Index:** **Fable 5.1 i Claude Code = 70 (leder)**;
  **GPT-6 Astra = 67**, i nivå med Opus 5. Alltså ~oavgjort på toppen.
- Astra använder **~1/3 av tokens** jämfört med GPT-5.6 Sol på koduppgifter.
- AA Intelligence Index: Astra 61 = GPT-5.6 Sol; trailar Fable 5.1 (max m.
  fallback) med 5 poäng. Hallucinationsfrekvens ned från 92 % → 51 %.

### GPT-6 Astra, kodbenchmarks (sekundärt, men samstämmigt hos 2+) `⚠️`
- DeepSWE v1.1 (113 uppgifter): Astra 74,1 % vs Sol 72,7 % – "a tie, not a
  takeover", i nivå med Fable 5.1, Opus 5, t.o.m. en Gemini Flash.
- **Terminal-Bench 4.0:** här vinner Astra tydligt: ~57,9 % vs Fable 5.1 ~55,8 %
  vs GPT-5.6 Sol ~37,3 %. Belönar lång, stökig, flerstegs-terminalkörning.
- OpenAI ska ha kopplat "AGI-era"-retorik till Astra (the-decoder) – hype-kontext
  att nämna, inte köpa.

### Composio Golden Eval, hands-on, 2026-08-18 (Prathit Joshi) `⚠️`
47 workflows, Fable 5 / Opus 4.8 mot GPT-5.6 Sol High: Fable 100 % lyckade
(~277k tokens), Sol 95,7 % (~224k tokens, **19 % färre**). Källans råd: Fable
när ett fel är dyrt, Sol för kod där omtag är OK.

### Kunskapssyns-noten
Toppmodellerna ligger tätt (index 70 mot 67; DeepSWE "a tie"). Benchmarken
**mättar och skiljer dem knappt**. Anthropic har själv bytt måttstock. Terminal-
Bench finns i minst tre versioner samtidigt (2.0/2.1/4.0) med olika vinnare.
"Vilken är bäst" flyttar från kodförmåga till harness, kostnad och vana – och
vilket benchmark man väljer *är* ett ställningstagande.

---

## Dimension 2 – Harness och hur modellen styrs

### 2a Mekanism – båda sidor primärverifierade

**Claude Code** (`code.claude.com/docs/en/overview`) `✅`
- Ytor: **terminal-CLI, VS Code/Cursor-extension, JetBrains-plugin, desktop-app,
  webb (`claude.ai/code`), mobil**. "Each surface connects to the same underlying
  Claude Code engine, so your repo's CLAUDE.md files, settings, and MCP servers
  work across all of them."
- Kontext & verktyg: **`CLAUDE.md`** (läses varje session) + **auto memory**
  (bygger minne mellan sessioner själv); **skills** (`/review-pr`,
  `/deploy-staging`); **hooks** (shell före/efter åtgärder); **MCP**;
  **subagenter** + **background agents** + **Agent SDK**; **Routines** (moln),
  **Desktop scheduled tasks** (lokalt), **`/loop`**; **Remote Control**,
  **Channels**, **Dispatch**, **`claude --teleport`/`--cloud`**, **Slack**,
  **Chrome**, **GitHub Actions/GitLab CI**.

**OpenAI Codex** (`learn.chatgpt.com/docs`) `✅`
- Ytor: **ChatGPT desktop-app, webb, Codex CLI (öppen källkod), Codex
  IDE-extension, Codex-molnet, remote**.
- Kontext & verktyg: **`AGENTS.md`** (lagrade överlagringar), **config-filer**
  (`config.toml`, basic + advanced, env-variabler), **MCP**, **skills**
  (delad Agent Skills-standard), egna agenter, schemalagda uppgifter, sandbox.

**Konvergens** `⚠️` (Composio, aug 2026): "both now support the shared Agent
Skills standard and MCP servers identically." Om det stämmer ligger den
avgörande skillnaden i 2b, inte 2a. Kvar att jämföra i detalj: minnesmodellen
(Claudes auto memory vs Codex), hooks (Claude har, Codex-motsvarighet oklar),
behörighets-/sandbox-modellen.

### 2b Ergonomi / klienter – nu med Kents två skärmdumpar

**Claude-appen (Code-fliken), `Bilder/Claude_app_260909.jpg`:**
- Flikar **"Chat and Cowork" / "Code"**. Vänsterpanel: **Artifacts, Routines,
  Dispatch (Beta), Customize**.
- **Inbyggd användnings-dashboard**: Sessions, Messages, Total tokens, Active
  days, Current/Longest streak, Peak hour, Favorite model – Anthropic visar
  förbrukningen i klienten.
- **Repo-rad**: `Local · Studier · main · [ ] worktree` – gren och worktree
  syns direkt.
- **"Run this session in the cloud"** erbjuds.
- Modell + effektnivå väljs i klienten (`Sonnet 5 · High`), plus `Auto`.

**Codex-appen (Work-fliken), `Bilder/Codex_app_260909.jpg`:**
- Flikar **"Chat" / "Work"**. Tomt, rent startläge ("Vad ska vi jobba med?").
- **"Godkänn åt mig"** = agent-/autogodkännandeläge i förgrunden.
- Modell **"GPT-6 Astra Låg"** (modell + variant + effekt).
- **"Välj projekt"**, **"Pluginer"**, **"Schemalagd"** i vänsterpanelen.

**Vad bilderna visar:**
- *Konvergens i apparna:* båda har projekt, schemalagda uppgifter, plugins, en
  chat/arbete-uppdelning, molnkörning och ett agent-autogodkännandeläge.
- *Skillnad i vad de lyfter fram:* Claude-appen sätter **repo/gren/worktree +
  förbrukningsmätning** främst (utvecklar-/git-orienterad, medveten om
  kostnaden). Codex-appen är **avskalad** och sätter **"Godkänn åt mig" +
  projektval** främst (delegera-och-lita-på-orienterad).
- Matchar filosofiskillnaden i texten: Claude interaktiv/visar-tänkandet,
  Codex autonom/levererar-och-återkommer (Composio; Naresh B A: "hand it a task,
  get the implementation").

**För Kents kedja (Cursor + GitHub Pages):** CLI och IDE-extension jobbar mot
lokala filer i samma repo Cursor ser. Molnet och ChatGPT-appens agentläge är
mer inmurade. SPEC:ens hypotes (desktop-appen sämst passform för Kents kedja)
har visst stöd men prövas konkret vid bygget.

---

## Dimension 3 – Pris per token → nytta / kostnad

### Flaggskepp mot flaggskepp – identiskt listpris `✅`

| per 1M tokens, kort kontext | Claude Fable 5.1 | GPT-6 Astra |
|---|---|---|
| Input | $10 | $10 |
| Cachad input (läs) | $0,25 (0,025×) | $1,00 |
| Output | $50 | $50 |
| Långt kontext | 1M ingår, standardpris | **dubblas: $20 in / $75 ut** |

Symmetrin bryts av tre saker, alla `✅`:
1. **Claudes tokenizer ger ~30 % fler tokens** för samma text → Claude effektivt
   ~30 % dyrare per uppgift.
2. **Astra dubblar priset i långt kontext**; Fable 5.1 gör inte det.
3. **Astra är ett 2,5× prishopp** från GPT-5.6 Sol ($4/$20 → $10/$50);
   Artificial Analysis: kostnad per uppgift ~75 % dyrare än föregångaren – men
   Astra använder ~1/3 av Sols tokens på kod, vilket delvis tar ut det.
   Motpost: Fables cache-läsning är 4× billigare ($0,25 mot $1,00).

### Mellanklass och kodmodeller `✅`

| per 1M tokens | Input | Cachad | Output |
|---|---|---|---|
| Claude Sonnet 5 | $2 | $0,20 | $10 |
| GPT-5.6 Terra | $2 | $0,20 | $12 |
| GPT-5.6 Sol | $4 | $0,40 | $20 |
| Claude Haiku 4.5 | $1 | $0,10 | $5 |

→ Codex kan köra en billigare 5.6-variant där Claude Code kör Opus/Sonnet/Fable.
"Pris per uppgift" gynnas då av modellvalet, inte bara av modellen.

### Abonnemang `⚠️` (hands-on + SEO – primärkällor 403 för verktyget)
- **Claude Pro $20:** "~45 meddelanden / 5 h", "caps hit fast" (Composio).
- **Claude Max:** 5x ~$100/mån, 20x ~$200/mån. Veckogräns (alla modeller) +
  separat Opus-veckogräns + 5-timmarsgräns.
- **ChatGPT Plus $20:** Codex ingår; Composio: "rarely makes you think about
  limits", "never once shown up as a constraint."
- **ChatGPT Pro $200** (ger även 5.3 Codex Spark).
- Anthropic höjde Claude Code-gränserna flera gånger 2026 (dubblad 5h-gräns
  6 maj; veckopromo +50 % → +25 % permanent ~14 sep) – kommentatorer kallar det
  "anti-Codex". `⚠️`
- **Att verifiera inloggad:** Anthropics + OpenAI:s hjälpsidor om
  användningsgränser (verktyget nekas 403).

### 35 h/vecka-referensen
Vid heltid sprängs varje abonnemangs toppmodell-gräns → API/overflow. Konkret
kr/mån-uträkning görs vid bygget med ett utskrivet token/timme-antagande
(förslag: uppskatta från en typisk agent-session, storleksordning, redovisa
metoden). Redan tydligt: **abonnemangens gränser, inte listpriset, avgör vad
heltid kostar**, och där lutar underlaget mot Codex/ChatGPT – medan Anthropic
aktivt höjer.

---

## Röster – underlag till `jamforelse-roster.md`

| # | Vem | Var / när | Hävdar | Dim | Status |
|---|---|---|---|---|---|
| 1 | **Osama Romoh**, AI Strategist & Educator | LinkedIn, ~7–8 sep 2026 | Astra följer instruktioner tätare, mindre pratig; köpte ChatGPT Pro vid sidan av Claude Max, behåller båda | 2, 3 | permalänk + datum kvar `⚠️` |
| 2 | **Prathit Joshi** | Composio, 2026-08-18, "100+ hours with both" | Codex 3–2; blindgranskad kod renare hos Claude; "if someone made me uninstall one today, it's not Codex" | 1, 2, 3 | metod redovisad `⚠️` |
| 3 | **Naresh B A** | Medium, juli 2026, "I Switched from Claude Code to Codex" | Claude "som en kollega som pratar hela tiden"; Codex "hand it a task, get the implementation" | 2 | läs i sin helhet `⚠️` |
| 4 | **Peter Yang** (@petergyang, nyhetsbrev 110k) | X, 2026 | Bytte till Codex: "Fast mode + generous limits = more reps", "little touches like steering, auto remote control on phone". Intervjuar även Claude Code-teamet; "Claude Code useful for much more than coding" | 2, 3 | X-inlägg finns, hämta exakt `⚠️` |
| 5 | "500+ utvecklare, Reddit-enkät" | via flera SEO-källor | 65 % föredrar Codex dagligen; 67 % blindbedömer Claude-koden renare | 1 | **ursprung ospårat** `⚠️` |
| 6 | Balans-röst (Claude-positiv) | – | "Senior engineers rate Claude Code higher on output quality"; "most loved" bland seniora utvecklare; konsensus "use both – Claude för arkitektur/planering, Codex för implementation" | 1, 2 | hitta en namngiven källa `⚠️` |

Balansen i skörden lutar Codex-positivt. Till bygget: spåra #4–5 till original,
hitta en namngiven #6.

---

## Kvar att primärverifiera (inloggad eller via bättre verktyg)

1. **Anthropic Opus 5 System Card** (PDF, 2026-07-24) – finns SWE-bench Verified där?
2. **`openai.com/index/gpt-6-astra/`** (403 nu) – OpenAI:s egna kod-benchmarktal.
3. **Anthropic + OpenAI hjälpsidor om användningsgränser** (403 nu) – kr, meddelanden, timmar.
4. **`swebench.com` Verified-leaderboard** – aktuell topp med datum (truncerades).
5. **Terminal-Bench officiella leaderboard** – vilken version, vilka tal.
6. **Osama Romohs LinkedIn-inlägg** – permalänk + datum.
7. **Röst #4 (Peter Yang) och #6 (balans)** – exakta original.

---

## Preliminär helhetsbild (INTE för publicering – Kents omdöme återstår)

- **Kodförmåga:** oavgjort på toppen (AA-index 70 mot 67). Astra vinner
  Terminal-Bench 4.0 (lång terminalkörning), övrigt jämnt. Benchmarken mättar.
- **Harness – mekanism:** konvergerar (skills-standard, MCP åt båda håll). Claude
  har fler dokumenterade ytor och auto memory + hooks; Codex har `config.toml`
  och en öppen CLI.
- **Harness – ergonomi:** genuin filosofiskillnad, syns i Kents två skärmdumpar –
  Claude-appen git-/kostnadsmedveten, Codex-appen delegera-och-lita-på.
- **Pris:** listpris oavgjort flaggskepp mot flaggskepp; Claudes tokenizer,
  Astras long-context-dubbling och abonnemangsgränserna talar för Codex i dag,
  men Anthropic höjer aktivt.
- **Kvot nytta/kostnad:** troligt utfall – Codex ger mer per krona vid Kents
  volym; Claude ligger marginellt högre i ren kodnytta för de svåraste fallen.
  Indexraden fylls när siffrorna är klara.

---

## Uppdateringslogg

- 2026-09-09 (pass 1): Priser och produktstruktur primärverifierade; benchmarks
  och gränser på sekundärkällor.
- 2026-09-09 (pass 2): Claude Code och Codex primärverifierade för ytor och
  harness-mekanism. Anthropics Opus 5-annons använder inte SWE-bench (fynd).
  Artificial Analysis: AA Coding Agent Index Fable 5.1 = 70, Astra = 67.
  Codex-modellväljaren kartlagd (Astra/Sol/Terra/Luna/Spark; 5.3-codex avvecklad;
  5.4 pensionerad 31 aug). Kents två skärmdumpar inarbetade i 2b. Sju punkter
  kvar (403 eller inloggning krävs).
