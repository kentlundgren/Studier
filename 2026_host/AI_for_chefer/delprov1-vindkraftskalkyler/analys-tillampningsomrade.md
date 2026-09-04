# Delprov 1 – Analys av ett tillämpningsområde för AI

**Tillämpningsområde:** AI-stödd utveckling av ekonomiska kalkyl- och
beslutsverktyg – fallstudie: vindkraftskalkyler
**Kurs:** AI101A, Högskolan Kristianstad
**Examineras:** lärandemål 1–3 samt 7–8
**Status:** arbetsutkast 2026-09-04

> **Om utkastet:** Detta är en disposition med utkasttext. Den inlämnade
> uppgiften ska vara din egen. `[KENT: …]` markerar var din egen erfarenhet,
> reflektion och slutliga argumentation behövs. Kontrollera formkraven
> (omfång, referensstil, inlämningsformat) i Canvas och justera.
> Referenshanteringen nedan följer din egen källstandard (Harvard, länkad
> förstahänvisning, alfabetisk referensförteckning).

---

## 1. Inledning och avgränsning

Ekonomiska kalkyler är ett kärnverktyg i verksamhetsstyrning: de omvandlar
antaganden om framtiden till jämförbara nyckeltal som beslut kan vila på. Det
här arbetet analyserar **AI-stödd utveckling av sådana kalkyl- och
beslutsverktyg** som tillämpningsområde – alltså inte AI som räknar åt oss,
utan AI som hjälper till att *bygga, förbättra och förklara* de modeller vi
räknar med.

Som konkret fall används en investerings- och lönsamhetskalkyl för vindkraft
som jag utvecklat i flera generationer, från ett Excel-/kalkylark till ett
interaktivt webbverktyg som visar vindkraftens ekonomi ur fem
aktörsperspektiv ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).
Fallet är avgränsat till kalkylens *utvecklingsprocess* och *användning som
beslutsunderlag*; själva vindkraftsekonomin behandlas bara i den mån den
belyser AI-frågorna.

[KENT: lägg till 2–4 meningar om varför just detta område engagerar dig –
kopplingen till controlling/ekonomistyrning och till att du faktiskt byggt
verktygen själv. Det ger uppgiften en tydlig egen röst.]

### Frågeställningar

1. Vilka AI-begrepp och -metoder är relevanta för att förstå hur verktyget tagits fram? (LM 1)
2. Vilka möjligheter, begränsningar och konsekvenser har AI-stödd kalkylutveckling ur verksamhets-, samhälls- och ledningsperspektiv? (LM 2)
3. Vilka juridiska och etiska aspekter aktualiseras – särskilt EU:s AI-förordning och dataskydd? (LM 3)
4. Hur bör tillämpningen värderas ur ett etiskt, hållbart och mänskligt perspektiv? (LM 7)
5. Vad säger fallet om ledarskapets roll när kalkyl- och beslutsarbete förändras av AI? (LM 8)

---

## 2. Fallet: vindkraftskalkylen i fyra generationer

| Generation | Form | Perspektiv | Presentation | Teknik |
|------------|------|-----------|--------------|--------|
| 1. Kalkylark | Excel / Google Sheets, flikar per fall (3 MW, 4 MW, havsbaserat) | Investeraren | Sifferblad, annuitetsformel | Manuell |
| 2. Ursprunglig webbkalkyl | Statisk HTML-sida, 7 indatafält, 10 utdatavärden | Investeraren | Formulär + resultatlista | Handkodad HTML |
| 3. React-version | Interaktiv sida ("Vindkraftskalkyl – 19, React 18 utan JSX") | Investeraren | Dynamisk omräkning | React via CDN |
| 4. Fem perspektiv | Interaktivt verktyg, fem flikar | Investerare, markägare, kommun/samhälle, andelsägare, närboende | LCOE, NPV, IRR, payback, kassaflödesdiagram, före/efter-jämförelse, källor i Harvard | Ren HTML/CSS/JS + Chart.js |

Utvecklingssprånget mellan generation 1–2 och generation 4 är stort: från en
enkel investerarkalkyl till ett verktyg som modellerar **intäktsdelning till
närboende** enligt den nya lagen (prop. 2025/26:239), skiljer på "lagstadgat"
och "antagande/schablon", och räknar om alla fem perspektiv reaktivt när ett
indatafält ändras ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).

[KENT: beskriv kort hur AI-verktyg (Claude, Gemini m.fl.) faktiskt användes i
arbetet – t.ex. generera kod, föreslå nyckeltal, skriva förklarande text,
hitta och formatera källor, bygga om från React till ren JS. Konkreta exempel
höjer trovärdigheten och krävs för LM 1.]

---

## 3. Relevanta AI-begrepp och metoder (LM 1)

De metoder som är relevanta för fallet:

- **Generativ AI och stora språkmodeller (LLM).** Verktygen som användes för
  att bygga kalkylen är LLM-baserade assistenter som genererar kod, text och
  förklaringar från naturspråksinstruktioner. Nyckelbegrepp: förtränad modell,
  prompt, kontextfönster, hallucination, "human in the loop".
- **AI som kodgenerator.** Kodgenerering är en avgränsad, verifierbar
  uppgift: output kan köras och testas, vilket gör felaktigheter lättare att
  upptäcka än i löpande text.
- **Floridis tes om agens utan intelligens.** [Floridi (2023)](https://doi.org/10.1093/oso/9780198883098.001.0001)
  beskriver AI som en historisk åtskillnad mellan *handlingsförmåga* och
  *förståelse*: modellen kan producera en fungerande kalkylmodell utan att
  "förstå" vare sig vindkraft eller ekonomi. Det är den centrala begreppsliga
  poängen för hela analysen.
- **Skillnad mot traditionell programvara.** AI-förordningen definierar
  AI-system bl.a. genom förmågan att *dra slutsatser* (infer) och generera
  output som påverkar omgivningen, till skillnad från regelstyrd programvara
  ([Europaparlamentet och rådet, 2024](http://data.europa.eu/eli/reg/2024/1689/oj), skäl 12).
  Kalkylverktyget självt är regelstyrt (deterministiska formler); det är
  *utvecklingsprocessen* som är AI-stödd.

[KENT: välj ut de 3–4 begrepp du vill ha kvar och stryk resten – bättre med
djup än bredd på ett kunskapsmål. Lägg gärna till en mening om maskininlärning
kontra kunskaps-/logikbaserade metoder eftersom kursplanen nämner "metoder".]

---

## 4. Möjligheter, begränsningar och konsekvenser (LM 2)

### 4.1 Verksamhetsperspektiv

**Möjligheter.** AI-stöd sänker tröskeln för att bygga och förbättra
beslutsverktyg dramatiskt. Konkret i fallet: *snabbare* (generationer som
tidigare tagit veckor tar dagar), *bredare* (fem intressentperspektiv i
stället för ett), *snyggare och mer begripligt* (diagram, före/efter-tabell,
förklarande text och källhänvisningar direkt i verktyget). En Excel-modell
visar ett tal; flerperspektivsverktyget visar *vem som vinner och förlorar*
och gör resultatet lättare att ta till sig för en icke-ekonom.

**Begränsningar.** AI förskjuter arbetet från att *skriva* till att
*granska*. Modellfel, felaktiga formler och missförstådda antaganden kan
genereras lika snabbt som korrekt kod. Kravet på domänkunskap försvinner inte
– det flyttar till valideringssteget. Verktyget blir heller inte mer sant än
sina antaganden; en snygg presentation kan ge **falsk precision**.

**Konsekvenser.** [KENT: din bedömning – har AI-stödet gjort dig mer
produktiv, eller mest snabbare på att producera saker som ändå måste
kvalitetssäkras? Vad hände med din egen förståelse av modellen när koden
delvis skrevs av en assistent?]

### 4.2 Samhällsperspektiv

Billigare och bättre beslutsverktyg kan **demokratisera** kvalificerade
kalkyler: en samfällighet, en kommun eller en enskild närboende kan få
tillgång till samma analys som en projektör. [Lundgren (2026a)](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)
lägger uttryckligen in närboende- och kommunperspektivet, vilket en typisk
investerarkalkyl utelämnar. Samtidigt: om många aktörer bygger egna
AI-genererade modeller med olika (dolda) antaganden kan beslutsunderlagen
bli *mindre* jämförbara, inte mer. [AI-kommissionen (2025)](https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/)
lyfter både möjligheten och behovet av gemensam infrastruktur och kompetens.

### 4.3 Ledningsperspektiv

För en ledning är den relevanta frågan inte "kan vi bygga verktyget" utan
"kan vi lita på det, och vet vi vad vi inte vet". AI-stöd gör det lätt att få
*ett svar* men svårare att veta hur robust det är. Det ställer krav på
processer för validering, versionshantering och transparens om antaganden –
något generation 4 av kalkylen adresserar genom att märka varje fält som
"lagstadgat" eller "antagande".

---

## 5. Juridiska och etiska aspekter (LM 3)

### 5.1 EU:s AI-förordning (2024/1689)

- **Riskklassificering.** Ett internt kalkyl-/beslutsstöd för
  investeringsanalys är sannolikt **inte** ett högrisksystem enligt
  förordningens bilaga III (som rör bl.a. rekrytering, kreditvärdering,
  utbildning och kritisk infrastruktur) ([Europaparlamentet och rådet, 2024](http://data.europa.eu/eli/reg/2024/1689/oj)).
  Bedömningen ändras om verktyget används för att fatta beslut som väsentligt
  påverkar enskildas rättigheter – t.ex. ersättningsnivåer till namngivna
  närboende. [KENT: resonera kring var gränsen går för *din* tillämpning.]
- **AI literacy (art. 4).** Förordningen kräver att organisationer som
  utvecklar eller använder AI-system säkerställer tillräcklig AI-kunnighet hos
  berörd personal. Det gäller även den som använder generativ AI för att
  bygga verktyg.
- **Transparens.** Om verktyget innehåller AI-genererad text eller
  interagerar med användare finns informationskrav (art. 50).
- **GPAI-leverantörernas skyldigheter** ligger hos modelleverantören, inte
  hos dig som användare – men de påverkar vilket ansvar du kan luta dig mot.

### 5.2 Dataskydd (GDPR)

Vindkraftskalkylen bygger på tekniska och ekonomiska parametrar, inte
personuppgifter – **men** närboendeperspektivet räknar på "ersättningsberättigade
bostäder" och avstånd. Så snart enskilda fastigheter/hushåll kan identifieras
aktualiseras dataskyddsförordningen: laglig grund, dataminimering,
ändamålsbegränsning. [KENT: beskriv hur du hanterar detta – schabloner i
stället för verkliga adresser?]

### 5.3 Upphovsrätt och källhantering

AI-genererad kod och text väcker frågor om upphovsrätt och om spårbarhet till
källor. Din kalkyl hanterar detta genom att redovisa källor i Harvardformat
med verifierbara länkar direkt i verktyget – ett konkret exempel på hur
transparens kan byggas in ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).

---

## 6. Kritisk värdering: etiskt, hållbart, mänskligt (LM 7)

- **Falsk precision och automation bias.** Det största etiska problemet är
  inte att AI:n ljuger, utan att den övertygar. Ett välformaterat verktyg med
  diagram och nyckeltal inbjuder till att lita mer på resultatet än
  antagandena bär. [Floridi (2023)](https://doi.org/10.1093/oso/9780198883098.001.0001)
  betonar spårbarhet och förklarbarhet som etiska krav, inte bara tekniska.
- **Vem representeras i modellen?** Steget från en investerarkalkyl till fem
  perspektiv är i sig ett etiskt ställningstagande: det gör markägarens,
  kommunens, andelsägarens och den närboendes ekonomi synlig. Modeller som
  bara räknar investerarens IRR osynliggör fördelningsfrågan.
- **Hållbarhet.** Verktyget värderar undviken CO₂ som en samhällsnytta – en
  schablon som gör klimatnyttan jämförbar med kronor, men som också
  förenklar. [KENT: din syn – är det rätt att sätta pris på CO₂ i kalkylen,
  och vad är alternativet?]
- **Mänskligt perspektiv.** Bevaras omdömet? Om nästa generation av
  kalkylbyggare aldrig skrivit en annuitetsformel för hand – förstår de när
  modellen är fel? [KENT: din erfarenhet av att bygga *med* respektive *utan*
  AI-stöd är central här.]

---

## 7. Ledarskapets roll (LM 8)

Fallet är litet (en person, ett verktyg), men det skalar upp till en generell
ledarfråga: **när kalkyl- och beslutsarbete blir AI-stött förskjuts
värdeskapandet från produktion till omdöme, validering och kommunikation.**
En ledning som vill dra nytta av detta behöver:

1. **Kompetens** – AI literacy hos dem som bygger och tolkar verktygen (krav
   enligt förordningen och en huvudpoäng hos [AI-kommissionen, 2025](https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/)).
2. **Process** – rutiner för validering, versionshantering och transparens om
   antaganden.
3. **Kultur** – att det är legitimt att ifrågasätta ett snyggt verktyg.

[KENT: knyt ihop med din egen ledar-/controllererfarenhet – hur skulle du
införa AI-stödd kalkylutveckling i en ekonomifunktion utan att tappa
kvalitetskontrollen?]

---

## 8. Slutsats

[KENT: 1–2 stycken som svarar på frågeställningarna i avsnitt 1. Huvudlinjen i
utkastet: AI-stöd gör kalkyl- och beslutsverktyg snabbare, bredare och mer
begripliga, men flyttar hela kvalitetsansvaret till validering, transparens
och omdöme – och det är där ledarskapet, juridiken och etiken möts.]

---

## Referensförteckning

AI-kommissionen (2025) *AI-kommissionens färdplan för Sverige*. SOU 2025:12. Stockholm: Finansdepartementet. Tillgänglig på: https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/ (Hämtad 2026-09-04). *(Nationell lägesbild av det svenska AI-ekosystemet; belägger resonemang om kompetensförsörjning, gemensam infrastruktur och ledarskapets roll.)*

Europaparlamentet och rådet (2024) *Förordning (EU) 2024/1689 av den 13 juni 2024 om harmoniserade regler för artificiell intelligens (förordningen om artificiell intelligens)*. EUT L, 2024/1689, 12.7.2024. Tillgänglig på: http://data.europa.eu/eli/reg/2024/1689/oj (Hämtad 2026-09-04). *(Primär rättskälla för riskklassificering, AI literacy-kravet och definitionen av AI-system som skiljer det från regelstyrd programvara.)*

Floridi, L. (2023) *The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities*. 1 uppl. Oxford: Oxford University Press. DOI: https://doi.org/10.1093/oso/9780198883098.001.0001. *(Ger den begreppsliga ramen – agens utan förståelse – och de etiska kraven på spårbarhet och förklarbarhet som analysen bygger på.)*

Lundgren, K. (2026a) *Vindkraftens ekonomi – fem perspektiv* [interaktivt kalkylverktyg]. Tillgänglig på: https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html (Hämtad 2026-09-04). *(Fallstudiens huvudobjekt: den senaste generationen av kalkylen, med fem aktörsperspektiv, inbyggda källor och märkning av lagstadgat kontra antagande.)*

Lundgren, K. (2026b) *Vindkraftskalkyl* [tidigare webbversion]. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl.html (Hämtad 2026-09-04). *(Mellanliggande generation, byggd med React 18; belägger utvecklingssteget mellan statisk HTML och flerperspektivsverktyget.)*

Lundgren, K. (u.å.) *Vindkraftskalkyl – ursprunglig version*. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl_old.html (Hämtad 2026-09-04). *(Den enklaste generationen – sju indatafält, ett investerarperspektiv – som utgör jämförelsepunkt för vad AI-stödet tillfört.)*

[KENT: lägg till de kompletterande vetenskapliga artiklar som kursen
distribuerar via lärplattformen, samt Modlitba (2025) om du använder något
konkret därifrån. Fullständiga referenser finns i
`../litteratur/litteraturlista.md`.]
