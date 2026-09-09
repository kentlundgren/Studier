# SPEC – Syn på lärande nr 2 ("Vad betyder 'bäst' när modellen skriver koden?")

**Status:** UTKAST v0.3 – Kents svar 2026-09-09 inarbetade. Två småpunkter kvar
(avsnitt 13).
**Skapad:** 2026-09-09 · **Ändrad:** 2026-09-09 (v0.3)
**Hör till:** [`PRD_nr2_ai-kodmodeller.md`](PRD_nr2_ai-kodmodeller.md) (v0.4)

---

## 1. Vad den här filen är

PRD:n säger *vad* Nr2 är och *varför*. Den här SPEC:en säger *exakt hur* – så
att den som bygger sidan (Claude i ett senare pass, eller Kent i Cursor) inte
behöver gissa: filstruktur, avsnitt, ankare, hur en modell bedöms, vad en
"röst" är, vilka byggregler som gäller, och hur gränsfall hanteras.

SPEC:en beskriver **inte** innehållet (siffror, omdömen) – det tas fram i
research-passet mot källor. Den beskriver formen som innehållet ska hällas i.

## 2. Leverabler och filstruktur

```
synpalarande/Nr2/
├── index.html                     # huvudtexten
├── styles.css                     # kopieras från ../Nr1/styles.css, justeras vid behov
├── script.js                      # progressiv förbättring: ihopfällbar referenslista,
│                                   #   teknik-modal, ev. citat-skylt. Sidan fungerar utan.
├── jamforelse-roster.md           # "andras röster"-underlaget (avsnitt 7)
├── PRD_nr2_ai-kodmodeller.md       # finns
├── SPEC.md                        # denna fil
├── linkedin-romoh-gpt6-astra.md   # finns
└── README.md                      # enligt Regel 9 (avsnitt 10)
```

Inga andra filer. Inga bilder om de inte tillför något konkret; i så fall i
`Nr2/Bilder/` som i Nr1, med verifierad licens.

## 3. Sidans skelett – avsnitt, ordning, ankare

`index.html` byggs i den här ordningen. Ankar-id:n är stabila (används för
djuplänkar) och följer Nr1:s stil (CamelCase, inget å/ä/ö).

| # | Rubrik (H2) | id | Innehåll |
|---|---|---|---|
| – | *(header)* | – | Kicker "Syn på lärande · Nr 2", H1 = titeln, lead, byline "Kent Lundgren · <datum>" |
| 1 | Vad texten säger | `Inledning` | Referat av Romohs LinkedIn-inlägg (`linkedin-romoh-gpt6-astra.md`). Kort: instruktionsföljsamhet, inte kodning, inga siffror. |
| 2 | Vilken modell pratar vi ens om? | `VilkenModell` | Modell-namn-svårigheten (PRD avsnitt 6, stycket "Först: …"). Kommer *före* dimensionerna för att färga läsningen av dem. |
| 3 | Kan den koda? | `Kodformaga` | Dimension 1. |
| 4 | Hur styr man den? | `Harness` | Dimension 2, med H3-ankare `HarnessMekanism` (2a) och `HarnessErgonomi` (2b). |
| 5 | Vad kostar nyttan? | `PrisNytta` | Dimension 3 + kvot-resonemanget. |
| 6 | Överblick | `Overblick` | Den sammanfattande tabellen (avsnitt 6 nedan). Placering – Kent väljer (SPEC avsnitt 13). |
| 7 | Andras röster | `AndraRoster` | Kort intro + länk till `jamforelse-roster.md`. Ev. citat-skylt. |
| 8 | Vad jag själv landar i | `VadJagLandarI` | Kents ståndpunkt + kunskapssyns-vinkeln (PRD avsnitt 8). Ramas som *en bild av frågan, inte ett facit*. |
| 9 | Referenser | `Referenser` | Ihopfällbar, alfabetisk, annoterad (avsnitt 8 nedan). |

**Ankarkonvention:** samma stil som Nr1 (CamelCase, inget å/ä/ö) – t.ex.
`…/Nr2/#VilkenModell`, `…/Nr2/#VadJagLandarI` – så att serien är konsekvent.
Namnstilen är inte det viktiga; **kravet är att varje avsnitt går att djuplänka
till**. Konkret:

- Varje **H2 och H3** får ett stabilt `id` och ett klickbart `#`-ankare som
  syns vid hover (samma mekanik som Nr1).
- Ankarna ändras aldrig efter publicering (gamla länkar ska fortsätta funka).
- README:ns djuplänkstabell listar **alla** ankare med full URL.
- Varje referens i `#Referenser` får dessutom ett eget id (`#ref-...`), som i Nr1.

Detta bör bli en **generell byggregel** – se not i avsnitt 9.

## 4. Dimensionsdefinitioner (exakt vad som jämförs)

Varje dimension i `index.html` följer samma inre mall:

1. **Vad dimensionen är** – 1–2 meningar.
2. **Hur den brukar mätas** – och vad den mätningen missar (kunskapssyns-noten).
3. **Vad källorna säger** – Claude vs OpenAI/Codex, med versionsmärkning
   (avsnitt 8).
4. **Kents omdöme** – nytta-siffra 1–5 (avsnitt 5) + 1–3 meningars motivering,
   märkt som omdöme, inte mätning.

| Dim | Vad som jämförs | Konkreta hållpunkter att fylla i vid research |
|---|---|---|
| 1 Kodförmåga | Kvaliteten på genererad/ändrad kod i verkliga uppgifter | SWE-bench Verified, Terminal-Bench, andra oberoende tester; ev. ett eget litet prov på samma uppgift |
| 2a Mekanism | Vilka primitiver som finns för att ge modellen kontext och verktyg | `CLAUDE.md` vs `AGENTS.md`; skills; MCP; subagenter; minne; agent-/behörighetsläge; hur diff visas och godkänns |
| 2b Ergonomi | Hur det är att styra modellen *som kodmotor vid sidan av Cursor* | Claude Code (CLI/desktop/IDE) mot Codex CLI, Codex IDE-extension, Codex-molnet, ChatGPT desktop-appen. Kriterier: komma igång, mata kontext, hur mycket den gör själv vs frågar, återställbarhet/granskbarhet, känsla |
| 3 Pris/nytta | Kostnad per månad för en definierad referensanvändning, och nytta per krona | Listpris $/Mtoken (in/ut), cache-rabatt, abonnemangsnivåer (Pro/Max/Team), veckogränser/credits |

Dimension 2 ska **både beskriva** klientskillnaderna **och sluta i en
rekommendation** om vad Kent bör köra vid sidan av Cursor.

## 5. Bedömningsmodell – förslag på "nytta"-frågan

> **Öppen fråga 1 i PRD:n:** vilken proxy används för "nytta" i kvoten
> kvalitet = nytta ÷ kostnad?

**Förslag (Claude rekommenderar):** dela isär täljare och nämnare, och håll
täljaren ärligt subjektiv.

### 5.1 "Nytta" – ett omdöme, inte en mätning

Per **modell × dimension** sätter Kent en siffra **1–5**:

| Siffra | Betydelse |
|---|---|
| 1 | Räcker inte för Kents arbete |
| 2 | Går att använda, men märkbart sämre |
| 3 | Duger / jämförbart (defaultvärde) |
| 4 | Märkbart bättre |
| 5 | I en egen klass |

Regler:
- **3 är utgångsläget.** Varje avvikelse (1, 2, 4, 5) kräver **minst två
  oberoende källor** (avsnitt 8), annars stannar den på 3 eller redovisas som
  "en röst, inte en trend".
- Siffran står alltid tillsammans med orden "Kents omdöme" och en kort
  motivering. Aldrig som ett objektivt betyg.
- Benchmark-siffror (SWE-bench m.m.) *informerar* omdömet men *är* det inte –
  de redovisas separat i prosan med sina egna brasklappar.

### 5.2 "Kostnad" – både per Mtoken och per månad

Två nivåer, båda daterade (priser ändras ofta):

**a) Råpris per modell/nivå** – en liten tabell:

| | in $/Mtoken | ut $/Mtoken | cache (läs) | abonnemang som täcker det |
|---|---|---|---|---|
| Claude (ver., datum) | … | … | … | Claude Max / Team, gräns per … |
| OpenAI/Codex (ver., datum) | … | … | … | ChatGPT Pro/Plus, gräns per … |

**b) Kostnad per månad för en referensanvändning** (bekräftad av Kent
2026-09-09):

> **35 timmar kodning per vecka** (5 h/dag × 7), alltså i praktiken heltid.

Vid bygget: uppskatta token-volymen för 35 h/vecka aktivt agent-kodande
(storleksordning, med tydlig metod), räkna om till kr/månad på råpriset, och –
viktigast – **avgör om den volymen ryms inom abonnemangen (Claude Max, ChatGPT
Pro) eller spiller över till API/credits**. Var gränsen går och vad överskottet
kostar är i sig ett av de mest matnyttiga resultaten i dimension 3. Hela
uträkningen och alla antaganden skrivs ut (Regel 3 – ingen dold matematik).

### 5.3 Kvoten – ett resonemang, med en illustrativ indexrad

Kvoten *nytta ÷ kostnad* används på två sätt:

1. **I prosan, som Kents test:** "Modell A kostar ~X gånger så mycket som B.
   Är den X gånger bättre för det jag gör? [svar + varför]." Detta är
   huvudleveransen.
2. **I överblickstabellen, som en indexrad.**

### Vad "indexraden" är – räknat exempel

Alla siffror nedan är **påhittade** för att visa formen, inte resultat.

Säg att researchen landar i:

| | nytta-snitt (1–5, Kents omdöme) | kostnad kr/mån (35 h/v) |
|---|---|---|
| Claude | 4,0 | 900 |
| OpenAI/Codex | 3,5 | 450 |

Räkna nytta ÷ kostnad:

- Claude: 4,0 / 900 = 0,00444
- OpenAI/Codex: 3,5 / 450 = 0,00778

Sätt den lägsta (Claude) till **index 100** och den andra relativt den:

- Claude: **100**
- OpenAI/Codex: 0,00778 / 0,00444 × 100 ≈ **175**

**Så här ser raden ut i tabellen:**

| | Claude | OpenAI/Codex |
|---|---|---|
| Nytta per krona (index, illustrativ – täljaren är Kents omdöme) | 100 | 175 |

Läsningen: *"i det här exemplet får jag ungefär 1,75 gånger så mycket nytta per
krona av Codex – men Claude ligger högre i ren nytta (4,0 mot 3,5), så om
budgeten inte är trång kan det ändå vara värt det."* Indexet gör
värde-för-pengarna synligt på en rad; prosan säger vad man ska göra med det.

Detta bevarar Kents "dubbelt så dyr ⇒ dubbelt så bra"-logik: om Claude vore
dubbelt så dyr (index skulle kräva dubbså nytta för att matcha) ser man direkt
om nyttan hänger med. Utan att påstå en precision som inte finns (Regel 3, 13).

**Kent avgör (SPEC avsnitt 13) om raden ska vara med alls, eller om
prosa-resonemanget räcker.**

## 6. Bedömningsform – förslag på tabell-frågan

> **Öppen fråga 2 i PRD:n:** ren prosa per dimension, eller en tabell/skala?

**Förslag (Claude rekommenderar): båda, med prosan som huvudform.**

- **Prosa** bär substansen: nyanser, vad mätningen missar, Kents resonemang.
  Ingen dimension klaras av med bara en rad i en tabell.
- **Exakt en sammanfattande tabell** (avsnittet `#Overblick`), inte en tabell
  per dimension. Kolumner:

| Kolumn | Innehåll |
|---|---|
| Dimension | Kodförmåga / Harness – mekanism / Harness – ergonomi / Pris–nytta |
| Claude (ver., datum) | nytta 1–5 + en fras |
| OpenAI/Codex (ver., datum) | nytta 1–5 + en fras |
| Kommentar | den avgörande skillnaden, en mening |

- En sista rad **utanför** 1–5-logiken: *kostnad kr/mån (referensanvändning)*
  och *nytta/kostnad-index (illustrativ)*.
- Tabellen är ren HTML, måste kunna **scrolla i sidled på mobil** utan att
  sidan gör det. Fungerar utan JS.
- Skalan förklaras i en kort legend precis under tabellen (samma text som 5.1).

## 7. "Röst"/källa-definitionen för `jamforelse-roster.md`

En **röst** = en identifierbar avsändare (person eller organisation) som
offentligt uttalat sig om Claude kontra OpenAI/Codex för kodning. En röst tas
in om den uppfyller **allt**:

1. Går att attribuera (namn/organisation + länk till originalet + hämtdatum).
2. Säger något konkret om minst en av de tre dimensionerna.
3. Är antingen (a) förstahands­erfarenhet, (b) ett test/benchmark med metod,
   eller (c) en tydligt resonerande jämförelse. Rena "hype"-inlägg utan
   innehåll tas inte in.

Per röst i tabellen: **vem · vad de hävdar · vilken dimension · Kents kommentar**.
Romohs inlägg är rad 1. Minst 3, helst 5–8 röster totalt; blanda hållning
(inte bara "Claude bäst" eller bara "GPT bäst").

Citat: högst en kort mening per röst, i citattecken, med attribution (Regel:
copyright). Ingen återgivning av hela inlägg.

### 7.1 Uppdatera senare: sök fler röster (färdig prompt)

Kent vill kunna be Claude leta fler röster i en framtida session. Den här
prompten läggs också in i `README.md` så den är lätt att hitta. Kopiera den,
byt ut `<datum>` mot dagens datum, och klistra in i en Claude Code-session som
har `Studier` öppet:

> Öppna `synpalarande/Nr2/`. Läs `SPEC.md` avsnitt 7 (röst-definitionen) och
> `jamforelse-roster.md` (befintliga röster). Sök på webben efter **nya
> offentliga röster** – personer eller organisationer – som jämför Claude med
> OpenAI/Codex **för kodning**, publicerade ungefär det senaste halvåret fram
> till `<datum>`. En röst tas bara in om den (1) går att attribuera med länk
> och hämtdatum, (2) säger något konkret om minst en av dimensionerna
> kodförmåga / harness / pris–nytta, och (3) är förstahandserfarenhet, ett test
> med metod, eller en resonerande jämförelse – inte hype. Lägg till varje ny
> röst som en rad i tabellen i `jamforelse-roster.md`: **vem · vad de hävdar ·
> vilken dimension · (lämna "Kents kommentar" tom åt mig)**. Blanda hållning,
> inte bara den ena sidan. Redovisa i chatten vad du hittade, vad du valde bort
> och varför. Uppdatera "senast sökt"-datumet överst i filen. **Committa inte –
> jag gör det själv i Cursor.** Om nya röster ändrar bilden i någon dimension,
> säg det, men ändra inte `index.html` utan att fråga.

## 8. Källhantering och versionsmärkning

- **Harvard enligt `kent-referens-skill`:** länkad förstahänvisning i löptext,
  utskriven URL, **hämtdatum** för alla webbkällor (alla källor här är
  färskvara), alfabetisk referenslista, kursiv parentes per källa som förklarar
  varför den är med. Ihopfällbar lista som i Nr1, varje post med eget id
  (`#ref-...`).
- **Versionsmärkning:** varje påstående om en modell skrivs
  `<företag> <modell/klient>, <version om känd>, per <månad år>`. Exempel:
  "Claude Code, ver. enligt Anthropics changelog per september 2026".
  Om versionen inte går att fastställa: skriv det rakt ut.
- **Inga fabricerade fakta (Regel 3):** siffror, priser, versioner och
  benchmarkresultat tas bara med om de har en verifierad källa. Går de inte att
  belägga: uteslut, eller redovisa som "uppgift utan bekräftad källa".
- **Ingen falsk handling i Kents röst (Regel 13):** om Claude gjort research
  eller kört ett testprov, formuleras det passivt eller med verktyget namngivet
  ("ett testprov kördes med …"), aldrig "jag testade" i Kents förstaperson om
  Kent inte själv gjort det.

## 9. Teknik och byggregler (`kent-bygg-sidor`)

- Ny HTML-undersida ⇒ **GitHub-hörna + teknik-modal med från start** (samma
  mönster som Nr1).
- Statisk sida. **Ingen server, inga cookies, inga externa bibliotek, inga
  webbtypsnitt från CDN.** JS bara till progressiv förbättring; hela texten,
  alla länkar och tabellen fungerar utan JS.
- `styles.css` utgår från `../Nr1/styles.css`: läsbar typografi, ljust/mörkt via
  `prefers-color-scheme`, samma typografiska skala. Avvik bara där Nr2 kräver
  det (tabellen).
- **Djuplänkbarhet (föreslagen generell byggregel).** Varje avsnitt (H2 och H3)
  ska gå att nå direkt med `URL#ankare` – stabilt `id`, synligt `#` vid hover,
  oföränderligt efter publicering, och listat i README:ns djuplänkstabell.
  Precis som Nr1 (`#Pisa2025`, `#VadJagLandarI`). Kent vill att detta blir en
  stående regel i skillen `kent-bygg-sidor` (ny Regel 7) – utkast skickat till
  honom 2026-09-09, väntar på bekräftelse. Gäller Nr2 oavsett.
- **Cursor gör commit/push och slår på GitHub Pages.** Claude Code rör inte
  git i det här repot (Regel 11).

## 10. README-krav (Regel 9)

`Nr2/README.md` ska ha:
- Kort beskrivning (vad Nr2 är, att det är en egen sida och inte ett blogginlägg).
- Tabell: Live-URL · källkod på GitHub · **lokal sökväg** · skapad-datum.
- Not om att GitHub Pages ännu inte är påslaget för `Studier` (samma text som
  `Nr1/README.md`).
- Upplägg-avsnitt (de nio avsnitten), djuplänkstabell (alla ankare från
  avsnitt 3), fil-lista, källnot.
- **"Uppdatera sidan"-avsnitt** med den färdiga prompten från SPEC 7.1 inklistrad.
- "Se även": `Nr1/`, skillen `syn-pa-larande`, bloggen.

## 11. Gränsfall

| Situation | Hantering |
|---|---|
| En modell byter namn/version mellan research och publicering | Notera båda, datummärk, nämn det i avsnitt `#VilkenModell` som ett levande exempel |
| En källa ligger bakom betalvägg | Använd inte påståenden som inte kan verifieras; skriv ut att källan inte kunnat läsas i sin helhet (som i `pisa-2025-media-jamforelse.md`) |
| Ett benchmark är omtvistat | Redovisa tvisten, inte bara siffran |
| Bara en källa för en skillnad | nytta-siffran stannar på 3; skillnaden redovisas som "en röst, inte en trend" |
| Kent har inga egna kostnadssiffror | Tydligt märkt hypotes + uträkning |
| Codex-klienten Kent bör välja är oklar även efter research | Beskriv skillnaderna, ge en villkorad rekommendation ("om X väger tyngst → …") snarare än ingen |

## 12. Utanför scope

- Live-uppdaterad pris- eller benchmarktavla.
- Alla modeller – bara Claude vs OpenAI/Codex; andra nämns bara om en källa gör det.
- Installationsguider / steg-för-steg-setup.
- Jämförelse av publiceringskedjan (Cursor + GitHub Pages) – den är ramen.
- Ändringar i `../Nr1/`.

## 13. Att bekräfta med Kent innan bygget

Avgjort 2026-09-09: referensanvändning = **35 h/vecka**; kostnad redovisas
**både** per Mtoken och per månad (5.2); ankare = Nr1:s CamelCase-stil, men
**kravet** är djuplänkbarhet till varje avsnitt (avsnitt 3), som också föreslås
bli en generell byggregel (avsnitt 9); 3–5 röster räcker, med en färdig
uppdaterings-prompt (7.1).

Kvar:

1. **Indexraden (5.3):** efter det räknade exemplet – vill Kent ha raden i
   tabellen, eller räcker prosa-resonemanget?
2. **Tabellens placering:** överst (direkt efter lead) eller i eget avsnitt
   `#Overblick` längre ner?

---

## Uppdateringslogg

- 2026-09-09 (v0.2): Kents svar inarbetade – referensanvändning 35 h/vecka;
  kostnad både per Mtoken och per månad, med analys av om volymen ryms i
  abonnemangen (5.2); räknat exempel på indexraden tillagt (5.3); färdig
  "sök fler röster"-prompt tillagd (7.1) och krav på att den in i README (10).
  Kvar: indexraden ja/nej, tabellens placering (avsnitt 13).
- 2026-09-09 (v0.3): Ankarfrågan förtydligad – Kent menade inte en särskild
  namnstil utan att **varje avsnitt ska gå att djuplänka till** (som Nr1:s
  `#Pisa2025`, `#VadJagLandarI`). Nr2 behåller Nr1:s CamelCase för
  serie-konsekvens; kravet på stabila H2/H3-ankare + README-djuplänkstabell
  skärpt (avsnitt 3) och föreslås bli en generell regel i `kent-bygg-sidor`
  (avsnitt 9).
- 2026-09-09 (v0.1): Skapad. Förslag på PRD:ns två sista öppna frågor: "nytta"
  = subjektivt omdöme 1–5 med källkrav + konkret kostnad + kvot som resonemang
  och illustrativ indexrad (avsnitt 5); bedömningsform = prosa som huvudform +
  exakt en sammanfattande tabell (avsnitt 6). Fyra mindre punkter att bekräfta
  i avsnitt 13.
