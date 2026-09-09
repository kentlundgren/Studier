# SPEC – Syn på lärande nr 2 ("Vad betyder 'bäst' när modellen skriver koden?")

**Status:** UTKAST v0.1 – innehåller Claudes förslag på de två sista öppna
frågorna (avsnitt 5 och 6). Kent bekräftar eller ändrar innan bygget.
**Skapad:** 2026-09-09
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
| 1 | Vad texten säger | `VadTextenSager` | Referat av Romohs LinkedIn-inlägg (`linkedin-romoh-gpt6-astra.md`). Kort: instruktionsföljsamhet, inte kodning, inga siffror. |
| 2 | Vilken modell pratar vi ens om? | `VilkenModell` | Modell-namn-svårigheten (PRD avsnitt 6, stycket "Först: …"). Kommer *före* dimensionerna för att färga läsningen av dem. |
| 3 | Kan den koda? | `Kodformaga` | Dimension 1. |
| 4 | Hur styr man den? | `Harness` | Dimension 2, med underrubriker (H3) "Vad som finns" (2a) och "Hur det känns" (2b). |
| 5 | Vad kostar nyttan? | `PrisNytta` | Dimension 3 + kvot-resonemanget. |
| 6 | Överblick | `Overblick` | Den sammanfattande tabellen (avsnitt 6 nedan). Får ligga här eller direkt efter lead – Kent väljer vid bygget. |
| 7 | Andras röster | `AndraRoster` | Kort intro + länk till `jamforelse-roster.md`. Ev. citat-skylt. |
| 8 | Vad jag själv landar i | `VadJagLandarI` | Kents ståndpunkt + kunskapssyns-vinkeln (PRD avsnitt 8). Ramas som *en bild av frågan, inte ett facit*. |
| 9 | Referenser | `Referenser` | Ihopfällbar, alfabetisk, annoterad (avsnitt 8 nedan). |

Varje H2 och H3 får ett klickbart `#`-ankare som i Nr1.

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

### 5.2 "Kostnad" – konkret och daterad

Per modell: **en kostnad i kronor per månad** för en **definierad
referensanvändning**, som skrivs ut explicit. Förslag på referens:

> Antag Kents faktiska mönster: kodning ~10–15 h/vecka, övervägande via
> abonnemang (Claude Max respektive ChatGPT Pro/Plus), med API/credits bara
> när abonnemangets gräns nås.

Om Kents verkliga siffror inte finns: använd en tydligt märkt hypotes och
visa uträkningen. Redovisa också råpriset ($/Mtoken in/ut) i en not, daterat.

### 5.3 Kvoten – ett resonemang, med en illustrativ indexrad

Kvoten *nytta ÷ kostnad* används på två sätt:

1. **I prosan, som Kents test:** "Modell A kostar ~X gånger så mycket som B.
   Är den X gånger bättre för det jag gör? [svar + varför]." Detta är
   huvudleveransen.
2. **I överblickstabellen, som en indexrad:** den modell som ger minst nytta
   per krona sätts till index 100, övriga relativt den. Raden märks
   *"illustrativ – täljaren är ett omdöme"*. Den ersätter inte resonemanget.

Detta bevarar Kents "dubbelt så dyr ⇒ dubbelt så bra"-logik utan att påstå en
precision som inte finns (Regel 3 och 13).

## 6. Bedömningsform – förslag på tabell-frågan

> **Öppen fråga 2 i PRD:n:** ren prosa per dimension, eller en tabell/skala?

**Förslag (Claude rekommenderar): båda, med prosan som huvudform.**

- **Prosa** bär substansen: nyanser, vad mätningen missar, Kents resonemang.
  Ingen dimension klaras av med bara en rad i en tabell.
- **Exakt en sammanfattande tabell** (avsnittet `Overblick`), inte en tabell
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
- Stabila rubrik-ankare och `#`-hover som i Nr1. Djuplänkstabell i README.
- **Cursor gör commit/push och slår på GitHub Pages.** Claude Code rör inte
  git i det här repot (Regel 11).

## 10. README-krav (Regel 9)

`Nr2/README.md` ska ha:
- Kort beskrivning (vad Nr2 är, att det är en egen sida och inte ett blogginlägg).
- Tabell: Live-URL · källkod på GitHub · **lokal sökväg** · skapad-datum.
- Not om att GitHub Pages ännu inte är påslaget för `Studier` (samma text som
  `Nr1/README.md`).
- Upplägg-avsnitt (de nio avsnitten), djuplänkstabell, fil-lista, källnot.
- "Se även": `Nr1/`, skillen `syn-pa-larande`, bloggen.

## 11. Gränsfall

| Situation | Hantering |
|---|---|
| En modell byter namn/version mellan research och publicering | Notera båda, datummärk, nämn det i avsnitt `VilkenModell` som ett levande exempel |
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

1. **Referensanvändningen i 5.2** – stämmer "~10–15 h/vecka, mest via
   abonnemang"? Har Kent faktiska kr/mån-siffror att använda i stället?
2. **Indexraden i 5.3 / 6** – vill Kent ha den alls, eller räcker
   prosa-resonemanget?
3. **Tabellens placering** – överst (efter lead) eller i eget avsnitt `Overblick`?
4. **Antal röster** i `jamforelse-roster.md` – räcker 3–5, eller vill Kent ha fler?

---

## Uppdateringslogg

- 2026-09-09 (v0.1): Skapad. Förslag på PRD:ns två sista öppna frågor: "nytta"
  = subjektivt omdöme 1–5 med källkrav + konkret kostnad + kvot som resonemang
  och illustrativ indexrad (avsnitt 5); bedömningsform = prosa som huvudform +
  exakt en sammanfattande tabell (avsnitt 6). Fyra mindre punkter att bekräfta
  i avsnitt 13.
