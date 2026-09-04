# Delprov 2 – Handlingsplan: AI-stödda vindkraftskalkyler för Skånes vindkraftsakademi

**Kurs:** AI101A, Högskolan Kristianstad
**Uppgift:** Utveckling av handlingsplan för verksamheten – individuell projektrapport
**Examineras:** lärandemål 4–6 samt 7–8
**Status:** arbetsutkast 2026-09-04

> **Om utkastet:** Disposition med utkasttext. Den inlämnade projektrapporten
> ska vara din egen. `[KENT: …]` markerar var din egen kunskap och dina beslut
> behövs. En central sak att reda ut tidigt: **din roll i förhållande till
> Skånes vindkraftsakademi** (medlem, styrelse, extern förslagsställare?) –
> det avgör om planen skrivs som ett internt initiativ eller ett externt
> erbjudande. Referensstandard: din egen Harvard-standard.

---

## 1. Sammanfattning

[KENT: skriv sist. Utkastets kärna: Skånes vindkraftsakademi är ett regionalt
kunskapsforum där tekniska, ekonomiska, miljö- och perceptionsfrågor om
vindkraft möts. En vidareutvecklad, öppen och transparent
vindkraftskalkyl – med delade antaganden, osäkerhetsintervall och ett
förklarande AI-lager – kan bli akademins gemensamma verktyg för att göra
vindkraftens ekonomi begriplig för alla intressentgrupper. Handlingsplanen
beskriver mål, åtgärder i tre steg, kommunikation, risker och uppföljning
under 12 månader.]

---

## 2. Bakgrund

### 2.1 Verksamheten: Skånes vindkraftsakademi

Skånes vindkraftsakademi är en förening och ett regionalt forum som verkar
för ökat kunskaps- och erfarenhetsutbyte mellan aktörer inom vindkraft i
Skåne. Föreningen vill "på ett balanserat sätt kanalisera tekniska,
ekonomiska, miljö- och perceptionsmässiga aspekter" och arbetar genom
seminarier, informationsprojekt och föredrag. Medlemmarna kommer från
näringsliv, offentlig sektor, akademi och föreningsliv, samt privatpersoner
([Skånes vindkraftsakademi, u.å.](https://skanesvindkraftsakademi.se/om-oss/)).

[KENT: bekräfta/uppdatera detta mot akademins aktuella sida och lägg till det
du vet från insidan – pågående projekt, återkommande seminarier, vilka frågor
medlemmarna faktiskt brottas med.]

### 2.2 Nuläge: vindkraftskalkylen

Jag har utvecklat en vindkraftskalkyl i flera generationer. Den senaste
([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html))
räknar vindkraftens ekonomi ur fem perspektiv – investerare, markägare,
kommun/samhälle, andelsägare och närboende – med nyckeltal som LCOE, NPV, IRR
och payback, kassaflödesdiagram, en före/efter-jämförelsetabell och källor i
Harvardformat. Verktyget är byggt i ren HTML/CSS/JS och modellerar bl.a. den
nya lagen om intäktsdelning till närboende (prop. 2025/26:239).

**Styrkor:** flera perspektiv, transparent om antaganden ("lagstadgat" vs
"schablon"), fri och öppen, kräver ingen installation.
**Begränsningar idag:** punktvärden utan osäkerhetsintervall; antaganden sätts
av varje användare var för sig; ingen havsbaserad modul fullt utbyggd; ingen
rapport-/exportfunktion; ingen systematisk granskning av modellen; inte
testad mot WCAG; ingen förvaltningsmodell.

---

## 3. Syfte och mål

**Syfte:** ge Skånes vindkraftsakademi ett gemensamt, trovärdigt och
begripligt verktyg för vindkraftens ekonomi som kan användas i seminarier,
remissarbete och dialog med kommuner och medborgare.

**Mål (12 månader):**

| # | Mål | Mätbart |
|---|-----|---------|
| M1 | En öppen, versionshanterad antagandebibliotek-modul finns och används | Publicerad; ≥1 "Skåne-standarduppsättning" antaganden fastställd av akademin |
| M2 | Kalkylen visar osäkerhet, inte bara punktvärden | Scenario- och intervallvy i produktion |
| M3 | Verktyget har använts i minst 2 av akademins aktiviteter | Seminarie-/mötesdokumentation |
| M4 | Ett förklarande AI-lager besvarar "vad händer om…"-frågor i klartext | Funktion i produktion, utvärderad av ≥5 medlemmar |
| M5 | Modellen är granskad av minst 3 medlemmar med olika perspektiv | Granskningsprotokoll |
| M6 | Verktyget uppfyller WCAG 2.1 AA | Tillgänglighetsgranskning godkänd |

[KENT: kalibrera ambitionsnivån mot vad som är realistiskt – din tid, ev.
projektmedel, akademins engagemang.]

---

## 4. Intressent- och behovsanalys (LM 6)

| Intressent | Teknisk nivå | Behov av verktyget | Vad de behöver få ut |
|------------|--------------|--------------------|-----------------------|
| Projektörer / energibolag | Hög | Jämförbara kalkyler, trovärdiga antaganden | Detaljerade nyckeltal, export |
| Kommuner (tjänstemän, politiker) | Låg–medel | Förstå lokal ekonomisk effekt | Kommunperspektivet, enkel sammanfattning |
| Markägare / lantbrukare | Låg–medel | Bedöma arrendeerbjudanden | Markägarperspektivet, nuvärde |
| Närboende / medborgare | Låg | Förstå intäktsdelning och påverkan | Närboendeperspektivet, klarspråk |
| Andelsföreningar / samfälligheter | Medel | Bedöma andelsel | Andelsägarperspektivet |
| Akademi / forskare | Hög | Granska modell och antaganden | Öppen källkod, dokumentation |

**Konsekvens för planen:** verktyget måste kunna tala till *både* den som vill
se IRR-formeln och den som bara vill veta "vad betyder det här för min by".
Det motiverar dels ett förklarande AI-lager (LM 6), dels en tydlig
lägesväxling mellan "expertvy" och "översiktsvy".

---

## 5. Nyttoområden – var AI och kalkylverktyg skapar värde (LM 4)

1. **Gemensam faktabas för seminarier och remisser.** Akademin yttrar sig och
   arrangerar möten; ett delat verktyg med överenskomna antaganden minskar
   tid som går åt till att gräla om siffror.
2. **Dialog kommun–medborgare.** Närboende- och kommunperspektiven gör
   fördelningsfrågan konkret i samrådsprocesser.
3. **Utbildning och kompetensförsörjning.** Verktyget som pedagogiskt
   material – kopplar till akademins kärnuppdrag och till [AI-kommissionens
   (2025)](https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/)
   betoning av livslångt lärande.
4. **AI-stödd vidareutveckling.** Generativ AI sänker kostnaden för att bygga
   nya moduler (havsbaserat, hybridparker, lagring), skriva dokumentation och
   hålla källor uppdaterade.
5. **AI-stödd tolkning.** Ett språkmodellslager som förklarar resultat och
   svarar på scenariofrågor gör verktyget användbart för icke-tekniska
   intressenter utan att en expert måste sitta bredvid.

[KENT: rangordna – vilka 2–3 nyttoområden är viktigast för akademin just nu?]

---

## 6. Handlingsplan (LM 5)

### Steg 1 (månad 1–3): Grund och förankring

| Aktivitet | Ansvar | Resurs | Klart när |
|-----------|--------|--------|-----------|
| Förankra initiativet i akademins styrelse; besluta omfattning | [KENT] + styrelse | Möte | Beslut protokollfört |
| Behovsworkshop med medlemmar (intressentkartan i avsnitt 4) | [KENT] | Halvdag | Prioriterad kravlista |
| Publicera koden öppet med licens och bidragsguide | [KENT] | — | Repo publikt |
| Bygg **antagandebibliotek**: parametrar med källa, intervall och "Skåne-standard" | [KENT] + AI-stöd | Kodning | M1 |

### Steg 2 (månad 4–8): Utveckling

| Aktivitet | Ansvar | Resurs | Klart när |
|-----------|--------|--------|-----------|
| **Osäkerhetsvy**: scenarier (låg/bas/hög) och enkel Monte Carlo-simulering | [KENT] + AI-stöd | Kodning | M2 |
| **Förklarande AI-lager**: naturspråkssvar på "vad händer om…"; tydlig märkning att svaret är AI-genererat | [KENT] + AI-stöd | Kodning + prompt­design | M4 |
| **Havsbaserad modul** och ev. hybrid/lagring | [KENT] + AI-stöd | Kodning | Modul i drift |
| **Rapport/export** (PDF) för seminarie- och remissbruk | [KENT] + AI-stöd | Kodning | Funktion i drift |
| Lägesväxel expertvy / översiktsvy | [KENT] | Kodning | I drift |

### Steg 3 (månad 9–12): Kvalitet, spridning, förvaltning

| Aktivitet | Ansvar | Resurs | Klart när |
|-----------|--------|--------|-----------|
| **Modellgranskning** av 3 medlemmar (ekonomi, teknik, samhälle) | Granskningsgrupp | Granskningsprotokoll | M5 |
| **Tillgänglighetsgranskning** WCAG 2.1 AA | [KENT] / extern | Granskning | M6 |
| Använd verktyget i ≥2 seminarier/aktiviteter | [KENT] + akademin | Seminarietid | M3 |
| **Förvaltningsmodell**: vem uppdaterar antaganden, hur ofta, hur ändringar loggas | Styrelse | Beslut | Dokumenterat |

[KENT: sätt riktiga månader när kursens och ditt eget schema är känt. Lägg
till en enkel Gantt om formatet tillåter.]

---

## 7. Kommunikationsplan (LM 6)

| Målgrupp | Budskap | Kanal | Form |
|----------|---------|-------|------|
| Styrelse | "Detta ger akademin en gemensam faktabas – låg risk, öppen kod" | Styrelsemöte | Kort beslutsunderlag, 1 sida |
| Medlemmar (tekniska) | "Öppen modell, granska och bidra" | Nyhetsbrev, repo | Dokumentation, issues |
| Medlemmar (icke-tekniska) | "Så använder du verktyget i din dialog med kommunen" | Seminarium, kortguide | Demo + steg-för-steg |
| Kommuner | "Se den lokala ekonomiska effekten av ett projekt" | Akademins möten | Översiktsvy + rapport |
| Medborgare/närboende | "Så räknas intäktsdelningen" | Kommunens samråd, akademins info | Klarspråkssida, ingen jargong |

**Princip:** samma modell, olika ingångar. Det förklarande AI-lagret är själva
bryggan mellan expert och lekman – men varje AI-genererat svar ska vara märkt
som sådant och gå att spåra till antagandena.

---

## 8. Etik, hållbarhet och juridik (LM 7)

- **Transparens före övertygelse.** Verktygets största risk är falsk
  precision. Motmedel: synliga antaganden, osäkerhetsintervall, källor, och
  märkning av AI-genererat innehåll ([Floridi, 2023](https://doi.org/10.1093/oso/9780198883098.001.0001)).
- **Balans mellan perspektiv.** Akademins uppdrag är att väga tekniska,
  ekonomiska, miljö- och perceptionsaspekter mot varandra. Verktyget ska inte
  gynna investerarperspektivet genom att göra det mest detaljerat – de fem
  vyerna ska vara likvärdigt utbyggda.
- **Dataskydd.** Närboendeberäkningar ska använda schabloner och avstånds­zoner,
  inte namngivna fastigheter, så att GDPR inte aktualiseras i onödan. Om
  verkliga projektdata används: laglig grund och dataminimering.
- **AI-förordningen.** Ett förklarande AI-lager utlöser transparenskrav
  (art. 50) och kravet på AI literacy hos dem som förvaltar verktyget (art. 4)
  ([Europaparlamentet och rådet, 2024](http://data.europa.eu/eli/reg/2024/1689/oj)).
  Bedöm om någon användning kan bli högrisk (t.ex. underlag för myndighets­beslut).
- **Hållbarhet.** CO₂-nyttan som räknas i verktyget är en schablon – redovisa
  metoden och låt användaren stänga av den.

[KENT: din egen värdering – finns det en risk att akademin uppfattas som
partisk om den "äger" ett kalkylverktyg? Hur hanteras det?]

---

## 9. Ledarskap och förändring (LM 8)

- **Förankring slår funktioner.** Verktyget blir bara akademins om styrelsen
  och nyckelmedlemmar äger beslutet, inte bara jag som byggare.
- **Kompetens som del av planen.** [AI-kommissionen (2025)](https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/)
  pekar på att bristande ledarskap och samordning är det som bromsar
  AI-nyttan. För akademin betyder det: utse en ansvarig, avsätt tid för
  förvaltning, och gör granskning till en återkommande rutin.
- **Från eldsjälsprojekt till institution.** Risken med AI-byggda verktyg är
  att de lever så länge en person orkar. Förvaltningsmodellen i steg 3 är
  därför inte en bilaga utan själva poängen.

[KENT: koppla till din controller-/ledarerfarenhet av att driva igenom
förändring i en organisation med begränsade resurser och många intressenter.]

---

## 10. Risker

| Risk | Sannolikhet | Konsekvens | Åtgärd |
|------|-------------|------------|--------|
| Akademin prioriterar inte / ingen tid | Medel | Hög | Litet först steg, tydlig nytta för seminarier |
| Modellfel sprids som "akademins siffror" | Medel | Hög | Obligatorisk granskning innan publik användning; versionslogg |
| AI-lagret ger felaktiga förklaringar | Medel | Medel | Svaren begränsas till modellens data; märkning; utvärdering med medlemmar |
| Verktyget uppfattas som partiskt | Låg–medel | Hög | Likvärdiga perspektiv, öppen kod, extern granskning |
| Beroende av en person (Kent) | Hög | Hög | Förvaltningsmodell, dokumentation, öppen bidragsprocess |
| Juridisk felbedömning (AI Act / GDPR) | Låg | Medel | Tidig genomgång, konservativa dataval |

---

## 11. Uppföljning och utvärdering

- **Halvtidsavstämning (månad 6)** mot M1–M6 i styrelsen.
- **Slututvärdering (månad 12):** måluppfyllelse, medlemsenkät om nytta och
  begriplighet, beslut om fortsatt förvaltning.
- **Löpande:** ändringslogg för antaganden, issues i repot, seminariedokumentation.

---

## 12. Referensförteckning

AI-kommissionen (2025) *AI-kommissionens färdplan för Sverige*. SOU 2025:12. Stockholm: Finansdepartementet. Tillgänglig på: https://regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/ (Hämtad 2026-09-04). *(Underlag för resonemang om ledarskap, samordning och kompetensförsörjning som förutsättning för att AI-nyttan ska realiseras.)*

Europaparlamentet och rådet (2024) *Förordning (EU) 2024/1689 av den 13 juni 2024 om harmoniserade regler för artificiell intelligens (förordningen om artificiell intelligens)*. EUT L, 2024/1689, 12.7.2024. Tillgänglig på: http://data.europa.eu/eli/reg/2024/1689/oj (Hämtad 2026-09-04). *(Styr kraven på transparens, AI literacy och riskbedömning för det förklarande AI-lagret.)*

Floridi, L. (2023) *The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities*. 1 uppl. Oxford: Oxford University Press. DOI: https://doi.org/10.1093/oso/9780198883098.001.0001. *(Etiska krav på spårbarhet och förklarbarhet som handlingsplanens transparensprinciper bygger på.)*

Lundgren, K. (2026a) *Vindkraftens ekonomi – fem perspektiv* [interaktivt kalkylverktyg]. Tillgänglig på: https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html (Hämtad 2026-09-04). *(Nuläget som handlingsplanen utgår från: den senaste generationen av kalkylen.)*

Modlitba, P. (2025) *Vad fan ska vi med AI till? Affärsutveckling & innovation med AI*. 1 uppl. Stockholm: Natur & Kultur. ISBN 9789127470415. *(Ramverk för att identifiera nyttoområden och prioritera AI-initiativ under osäkerhet – underlag för avsnitt 5 och 6.)*

Skånes vindkraftsakademi (u.å.) *Om oss*. Tillgänglig på: https://skanesvindkraftsakademi.se/om-oss/ (Hämtad 2026-09-04). *(Primärkälla för verksamhetens syfte, arbetssätt och medlemssammansättning.)*

[KENT: lägg till kompletterande kursartiklar och ev. akademins egna
verksamhetsrapporter. Fullständiga referenser för kurslitteraturen finns i
`../litteratur/litteraturlista.md`.]
