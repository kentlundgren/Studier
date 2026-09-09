# Kostnadskalkyl – 35 h/vecka agent-kodning

*Framtaget 2026-09-09 med en språkmodell som verktyg. Kent står för antagandena
och hur de används. All matematik är utskriven (Regel 3). Detta matar
Dimension 3 och indexraden i `index.html`.*

---

## 1. Referensanvändningen (bekräftad av Kent)

**35 timmar kodning per vecka** = 5 h/dag × 7. Räknat per månad:
35 × 52 / 12 ≈ **152 aktiva timmar/månad**.

Med "aktiv timme" menas en timme där man faktiskt kör en agent-session – inte
klocktid vid datorn.

---

## 2. Antagande om tokenförbrukning per aktiv timme

Detta är kalkylens känsligaste antagande. Det finns inget offentligt facit; jag
uppskattar en **tung men inte extrem** timme och visar spannet.

| | Låg timme | **Mitt (används)** | Hög timme |
|---|---|---|---|
| Output-tokens | 20 000 | **40 000** | 60 000 |
| Ny (ocachad) input | 80 000 | **190 000** | 300 000 |
| Cache-läsningar | 800 000 | **1 900 000** | 3 000 000 |
| Cache-skrivningar (5 min) | 60 000 | **150 000** | 250 000 |

**Sanity-check mot Kents faktiska förbrukning** (bifogad skärmdump,
Claude-appen): ~20,5M tokens / 38 aktiva dagar ≈ ~0,5M tokens per aktiv dag vid
Kents *nuvarande* (lättare) användning. Mitt-antagandet ovan (~2,1M tokens/h)
motsvarar alltså att 35 h/vecka är en rejält intensivare nivå än Kents vardag i
dag – vilket stämmer med "heltid". **Kent bör dubbelkolla mot sin egen
`claude-kostnad`-data innan siffran fryses.**

`kr/USD`: **10,5 antaget** – kontrollera aktuell kurs vid bygget.

---

## 3. Kostnad per aktiv timme, per modell (ren API, listpris)

### Claude Fable 5.1 ($10 in / $50 ut / $0,25 cache-läs / $12,50 cache-skriv)
- Output: 40 000 × $50 / 1M = **$2,00**
- Ocachad input: 190 000 × $10 / 1M = **$1,90**
- Cache-läs: 1 900 000 × $0,25 / 1M = **$0,475**
- Cache-skriv: 150 000 × $12,50 / 1M = **$1,875**
- **≈ $6,25/timme**

### GPT-6 Astra ($10 in / $50 ut / $1,00 cache-läs / $12,50 cache-skriv)
Antar att Astra är ~30 % mer token-effektiv på kod (Artificial Analysis: ~⅓ av
GPT-5.6 Sols tokens) → 30 % lägre volymer:
- Output: 28 000 × $50 / 1M = **$1,40**
- Ocachad input: 133 000 × $10 / 1M = **$1,33**
- Cache-läs: 1 330 000 × $1,00 / 1M = **$1,33** *(4× dyrare cache än Fable)*
- Cache-skriv: 105 000 × $12,50 / 1M = **$1,31**
- **≈ $5,37/timme**

→ **Flaggskeppen kostar ungefär lika per timme** (~$5–6). Astras dyrare cache tar
nästan ut dess bättre token-effektivitet. Om Astra *inte* är mer effektiv blir
den snarare dyrare per timme än Fable, p.g.a. cache-priset.

### Claude Sonnet 5 ($2 / $10 / $0,20 / $2,50)
- Output: 40 000 × $10 = $0,40 · Input: 190 000 × $2 = $0,38 ·
  Cache-läs: 1,9M × $0,20 = $0,38 · Cache-skriv: 150 000 × $2,50 = $0,375
- **≈ $1,53/timme**

### GPT-5.6 Terra ($2 / $12 / $0,20 / $2,50)
- Output: 40 000 × $12 = $0,48 · resten som Sonnet 5
- **≈ $1,62/timme**

→ **Mellanmodellerna kostar också ungefär lika** (~$1,5–1,6/timme).

---

## 4. Månadskostnad vid 152 h – ren API (ingen abonnemangsrabatt)

| Modell som "motor" | $/mån | ≈ kr/mån |
|---|---|---|
| Claude Fable 5.1 | 152 × $6,25 = **$950** | **~10 000 kr** |
| GPT-6 Astra | 152 × $5,37 = **$816** | **~8 600 kr** |
| Claude Sonnet 5 | 152 × $1,53 = **$233** | **~2 450 kr** |
| GPT-5.6 Terra | 152 × $1,62 = **$246** | **~2 580 kr** |

**Ingen betalar det översta.** Vid heltid kör man abonnemang och möter
gränserna – därför punkt 5.

---

## 5. Vad man faktiskt betalar (abonnemang + overflow)

`⚠️` Abonnemangsgränserna är inte primärverifierade (Anthropics/OpenAI:s
hjälpsidor gav 403). Siffrorna nedan bygger på hands-on-källor (Composio,
Peter Yang) och Anthropics upprepade gränshöjningar 2026.

### Claude
- **Max 20x ≈ $200/mån (~2 100 kr).** Täcker rejält med Sonnet 5 + begränsat
  med Opus/Fable. Vid 35 h/vecka med **flaggskepp** spränger man vecko- och
  Opus-gränserna → **overflow till API**.
- Grov overflow-uppskattning scenario A: hälften av timmarna (76 h) spiller till
  Fable-API: 76 × $6,25 ≈ $475 → **totalt ~$675/mån ≈ ~7 100 kr**.
- Scenario B (mest Sonnet 5, håller sig i planen): **~$200–260/mån ≈ 2 100–2 700 kr**.

### OpenAI / ChatGPT
- **ChatGPT Pro ≈ $200/mån (~2 100 kr).** Composio/Peter Yang: Codex-gränserna
  "never once a constraint" även vid tung användning.
- Scenario A (flaggskepp, heltid): **~$200–250/mån ≈ 2 100–2 600 kr**.
- Scenario B (mellanmodell): **$20–200/mån ≈ 200–2 100 kr**.

---

## 6. En avgörande observation: harness är en egenskap hos *klienten*, inte modellen

Byter man från Fable 5.1 till Sonnet 5 sitter man kvar i **samma Claude Code**
med samma `CLAUDE.md`, skills, hooks, MCP och subagenter. Byter man från Astra
till GPT-5.6 Terra sitter man kvar i **samma Codex**. Alltså:

- **Harness – mekanism** och **Harness – ergonomi**: konstanta oavsett modellnivå.
  Claudes preliminära försprång på mekanism (4 mot 3) gäller båda nivåerna.
- **Kodförmåga** och **kostnad**: de enda facetterna som ändras när man byter
  modellnivå.

Det gör mellanmodell-scenariot enkelt att räkna: bara två rutor rör sig.

## 7. Tre scenarier

Nytta-siffrorna är Kents preliminära omdöme (SPEC 5.1). Harness-facetterna
oförändrade; bara kodförmågan sätts per nivå.

| | Claude | OpenAI/Codex |
|---|---|---|
| **A. Flaggskepp** (Fable 5.1 / GPT-6 Astra) | kod 3 · mek 4 · erg 3 → snitt **3,33** | kod 3 · mek 3 · erg 3 → snitt **3,0** |
| **B. Mellanmodell** (Sonnet 5 / GPT-5.6 Terra) | kod 3 · mek 4 · erg 3 → snitt **3,33** | kod 3 · mek 3 · erg 3 → snitt **3,0** |

`⚠️` Kodförmåga 3 för mellanmodellerna: Sonnet 5 är Anthropics uttalade
kod-arbetshäst; GPT-5.6 Terra är "everyday/routine" (Sols "complex coding" ligger
en klass över, men kostar $4/$20). Ingen tvåkällig grund för avvikelse – prosan
noterar att Sonnet 5 är kod-inriktad medan Terra inte är det.

### Kostnad per månad (152 h)

| | Claude, kr/mån | Codex/ChatGPT, kr/mån | Kostnadskvot |
|---|---|---|---|
| **A. Flaggskepp, heltid** | ~7 000 (Max 20x + API-overflow) | ~2 300 (Pro, sällan gräns) | Claude ~3× dyrare |
| **B1. Mellanmodell, ryms i abonnemanget** | ~1 100 (Max 5x, ~140–280 Sonnet-h/v ska räcka `⚠️`) | ~1 000 (Plus $20, ev. Pro) | ~jämnt |
| **B2. Mellanmodell, viss overflow** | ~2 000 (Max 20x) | ~1 500 (Pro) | Claude ~1,3× |

### Indexraden (lägst nytta/kostnad = 100)

| Scenario | Claude | Codex | Läsning |
|---|---|---|---|
| **A. Flaggskepp** | 100 | **~270** | 3,33/7000 vs 3,0/2300 → Codex ~2,7× mer nytta/kr |
| **B1. Mellanmodell, i plan** | **~114** | 100 | 3,33/1100 vs 3,0/1000 → *Claude* något bättre nytta/kr (harness-försprånget väger tyngre än den lilla prisskillnaden) |
| **B2. Mellanmodell, overflow** | 100 | **~118** | 3,33/2000 vs 3,0/1500 → nästan jämnt, svag Codex-fördel |

---

## 8. Slutsats för texten (Kents omdöme återstår)

**Svaret på "vilket är bäst värde" beror helt på vilken modellnivå man kräver:**

- **Insisterar man på flaggskeppet och kör heltid:** Codex/ChatGPT ger ~2,7×
  mer nytta per krona. Claudes tokenizer (+30 %), Astras long-context-dubbling,
  och framför allt att Claude-abonnemanget spiller över till dyr API-debitering
  vid den volymen, driver skillnaden.
- **Nöjer man sig med "bra men inte bäst" (Sonnet 5 / GPT-5.6 Terra) och håller
  sig i abonnemanget:** ~1 000–2 000 kr/mån för båda, och nytta/kostnad blir
  **i praktiken jämnt – med en hårfin fördel för Claude**, eftersom
  harness-försprånget då väger tyngre än prisskillnaden. Kodförmågan räcker gott
  för det mesta Kent gör.

Det knyter tillbaka till titeln: "bäst" beror på vilken fråga man ställer.
"Kvalitet = nytta/kostnad" tvingar fram frågan *hur mycket kapacitet behöver
jag egentligen* – och för det mesta arbetet är svaret "mindre än flaggskeppet".

---

## 8. Att verifiera innan siffrorna fryses

1. Token/timme-antagandet mot Kents egen `claude-kostnad`-data.
2. Abonnemangsgränserna mot Anthropics + OpenAI:s hjälpsidor (inloggad).
3. Aktuell kr/USD-kurs.
4. Om GPT-6 Astra faktiskt är mer token-effektiv på kod, eller om det bara
   gäller jämfört med Sol.

---

## Uppdateringslogg

- 2026-09-09: Skapad. Mitt-antagande ~2,1M tokens/aktiv timme; 152 h/mån.
- 2026-09-09 (rev): Mellanmodell-nivån (Sonnet 5 / GPT-5.6 Terra) gjord till ett
  eget scenario på Kents begäran ("bra men inte bästa modellerna"). Ny
  observation: harness-facetterna är egenskaper hos klienten, inte modellen –
  bara kodförmåga och kostnad ändras med modellnivån. Index: flaggskepp → Codex
  ~270; mellanmodell i plan → Claude ~114 (svag fördel).
