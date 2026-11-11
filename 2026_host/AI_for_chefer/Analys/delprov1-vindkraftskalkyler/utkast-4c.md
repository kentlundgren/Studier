# Delprov 1 – analys av ett tillämpningsområde för AI

**Tillämpningsområde:** AI-stödd utveckling av ekonomiska kalkyl- och beslutsverktyg  
**Fall:** Vindkraftskalkyler, från projektörsperspektiv till flera aktörsperspektiv  
**Kurs:** AI för chefer och ledare, AI101A, Högskolan Kristianstad  
**Status:** Arbetsutkast 4c. Inte färdig rapport eller inlämningsversion.  
**Underlag:** HKR:s uppgiftsmall och betygsmatris, arbetsguide Delprov 1, kursens quiz och lärmoment samt utkast 4a och 4b.

> **Läsanvisning:** `[KENT: …]` markerar en fråga eller uppgift som kräver Kents erfarenhet, bedömning eller besked. Ta bort markeringen när frågan är besvarad. `[KONTROLLERA: …]` används endast när en sakuppgift eller källa faktiskt återstår att verifiera. Utkastet samlar tidigare material och är inte en färdig inlämning. Kontrollera Canvas regler för AI-stöd innan texten färdigställs.

> **Processnotering – tas bort före rapportversion:** Vi följer den gemensamma [sjustegsprocessen](../../../../AGENTS.md). [PRD:n för Delprov 1](../../delprov1-vindkraftskalkyler/PRD_delprov1.md) visar hur varje steg har använts här. Utkast 4c är den aktuella arbetsversionen och följer kursens mall och betygsmatris.

## Sammanfattning

[KENT: Skriv detta sist. Sammanfatta på högst 250 ord syftet, processen, de två AI-användningar som faktiskt kan beläggas, den viktigaste nyttan och risken samt rekommendationen.]

## Ämnesord

[KENT: Ange 5–8 ämnesord. Förslag att pröva: generativ AI, ekonomiska kalkyler, beslutsstöd, vindkraft, verksamhetsstyrning, modellrisk.]

## 1. Inledning och avgränsning

Ekonomiska kalkyler är ett kärnverktyg i verksamhetsstyrning: de omvandlar antaganden om framtiden till jämförbara nyckeltal som beslut kan vila på. Den här rapporten analyserar AI-stödd utveckling av kalkyl- och beslutsverktyg. Fokus är alltså AI:s roll när modeller byggs, förbättras och förklaras – inte att låta en språkmodell ersätta kalkylens kontrollerbara beräkningar.

Som fall använder jag en investerings- och lönsamhetskalkyl för vindkraft som jag har utvecklat i flera steg. Den tidiga kalkylen utgick från projektörens ekonomi. Den nyare modellen redovisar ekonomiska perspektiv för projektören, markägaren, kommunen/samhället, andelsägare och närboende ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)). En äldre kalkyl och bakgrunden till den beskrivs i mitt blogginlägg från 2014 ([Lundgren, 2014](https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html)).

Fallet avgränsas till utvecklingsprocessen och kalkylens användning som beslutsunderlag. Vindkraftsekonomin behandlas bara där den behövs för att analysera AI-användning, nytta och risk. Jag har valt vindkraftsersättning till ägare av bostadsbyggnader nära vindkraftsanläggningar som rapportens huvudexempel. [Lag (2026:1113) om intäktsdelning från vindkraftsanläggningar](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/) trädde i kraft den 1 juli 2026. Vilka anläggningar och byggnader som omfattas beror också på lagens villkor och övergångsbestämmelser (SFS 2026:1113). En fråga jag vill undersöka är hur en kalkyl kan synliggöra beräkningsgrunder, antaganden och konsekvenser för flera parter när reglerna är nya och olika parter kan ha olika informationsbehov. Kalkylen ska här analyseras som beslutsunderlag, inte som ersättning för en rättslig bedömning.

Min bakgrund inom miljöekonomi kommer bland annat till uttryck i min licentiatavhandling om förnyelsebara energibärares konkurrenskraft ([Lundgren, 1998](https://portal.research.lu.se/en/publications/f%C3%B6rnyelsebara-energib%C3%A4rares-nuvarande-och-framtida-konkurrenskraf/)). Jag arbetar också med ekonomistyrning och kalkyler. Som controller är jag van vid att bedöma hur antaganden påverkar ett kalkylresultat, och jag har själv byggt och vidareutvecklat vindkraftskalkyler. I mitt ekonomiarbete har kalkyler ofta fokuserat på en parts lönsamhet, exempelvis ett företags eller en organisations, med mått som payback och nettonuvärde (NNV). Jag ser AI-stöd som en möjlighet att gå från en sådan avgränsad kalkyl till ett öppet verktyg som synliggör hur flera parter påverkas. Fler perspektiv ger ett bredare underlag, men ökar också modellens komplexitet och kan göra fel svårare att upptäcka om syfte, underlag eller antaganden är otydliga.

## 2. Metod och underlag

Analysen utgår från kalkylens olika versioner, tidigare arbetsmaterial och min erfarenhet av att utveckla kalkylen. [KENT: ange vilka filer, versioner, datum, AI-verktyg och arbetssteg som faktiskt ingår.] För varje påstående om AI:s bidrag behöver jag skilja mellan vad jag själv gjorde, vad AI föreslog eller producerade och vad jag senare granskade, ändrade eller förkastade. [KENT: beskriv hur du kan belägga detta, exempelvis genom versionshistorik, sparade chattar eller arbetsanteckningar.]

Relevanta quizfrågor, egna svar och andra kursmoment kan också användas som underlag. De kan visa vilka begrepp och problem kursledningen har betonat och ge uppslag till vad analysen behöver ta upp. De ska kopplas till uppgiftens frågor och betygskriterier; ett quizsvar ska inte automatiskt föras in i rapporten eller användas som belägg för ett sakpåstående. Material från andra quiz eller Delprov 2 kan ge relevanta kursbegrepp, men ska inte sudda ut skillnaden mellan examinationerna. [KENT: ange vilka quizfrågor eller kursmoment som har tydlig koppling till rapportens analys och var de i så fall passar in.]

I texten skiljer jag mellan verifierade uppgifter, egna erfarenheter, bedömningar och sådant som ännu är en hypotes. [KENT: komplettera med kursens regler för AI-stöd och eventuell AI-deklaration från Canvas innan rapporten färdigställs.]

## 3. Inventering av AI-användningar

De två perspektiven – projektörens kalkyl och kalkylen med flera aktörer – är inte automatiskt två olika AI-användningar. Rapporten behöver visa vilken konkret uppgift AI utförde i varje utvecklingssteg. Tabellen är därför preliminär tills jag har bekräftat AI:s faktiska roll.

| Kandidat till AI-användning | Syfte och konkret uppgift | Underlag | Påverkan och kontroll | Status |
|---|---|---|---|---|
| AI-stöd vid utveckling av projektörskalkylen | [KENT: ange om AI föreslog eller skrev kod, formler, struktur, förklaringar eller något annat.] | Kalkylark, kod, indata eller egna instruktioner. [KENT: precisera.] | Om AI påverkat beräkningslogik behöver ändringar jämföras med kända värden och granskas av mig. [KENT: beskriv vad du gjorde.] | [KENT: genomfört/testat/planerat/idé] |
| AI-stöd när kalkylen utvidgades till flera aktörsperspektiv | [KENT: ange om AI bidrog med idéer, nya perspektiv, beräkningslogik, kod, tester eller text.] | Tidigare kalkyl, nya antaganden och aktörsperspektiv. [KENT: precisera.] | Fler perspektiv kan bredda beslutsunderlaget, men varje nytt samband och antagande behöver kunna förklaras och kontrolleras. | [KENT: genomfört/testat/planerat/idé] |

[KENT: Om en eller båda kandidaterna inte beskriver en faktisk AI-användning, välj en annan konkret användning. Möjliga framtida funktioner – exempelvis AI-stöd för källsökning, scenarier eller resultatförklaringar – får inte beskrivas som redan införda.]

## 4. Verksamhetsanalys och möjlig nytta

En traditionell kalkyl med projektörsperspektiv kan ge en avgränsad bild av investeringens ekonomi. En modell med flera aktörsperspektiv kan synliggöra hur samma projekt kan påverka olika grupper ekonomiskt. [KENT: bedöm vad kalkylen faktiskt visar, vilka användare den är avsedd för och om den har använts av någon annan än dig.]

Den möjliga nyttan är att fler antaganden och ekonomiska konsekvenser kan bli synliga i ett gemensamt beslutsunderlag. För att bedöma nyttan behöver jag jämföra vad användaren kunde förstå eller göra med den äldre kalkylen med vad den nyare modellen tillför. [KENT: ge ett konkret exempel på en fråga som den bredare modellen kan besvara bättre – och vad den inte kan besvara.]

För VG behöver jag dessutom analysera processens strategiska betydelse och prioritera AI-initiativ utifrån verksamhetsmål, nytta, risk och genomförbarhet. [KENT: ange vilket mål eller vilket beslut kalkylen ska stödja och varför det är prioriterat.]

## 5. Risker, ansvar och rättsliga/etiska frågor

När kalkylen går från ett perspektiv till flera ökar antalet antaganden och samband. Modellen kan därför bli svårare att överblicka och kontrollera än en enkel kalkyl i Excel som fokuserar på en aktör. En mer avancerad presentation kan också få resultat att se säkrare ut än vad indata och antaganden medger. [KENT: bekräfta om detta motsvarar din erfarenhet och ge ett konkret exempel.]

En central kontrollfråga är vem som granskar AI-genererade formler, kod och förklaringar. [KENT: beskriv din faktiska granskningsrutin, till exempel jämförelse med manuella beräkningar, testfall, källkontroll eller kodgranskning.] AI-stöd kan bidra till arbetet, men ansvaret för kalkylens användning, antaganden och publicerade resultat behöver vara tydligt placerat. [KENT: ange vem som i praktiken förvaltar kalkyl och källor.]

Rapporten ska behandla EU:s AI-förordning (förordning (EU) 2024/1689) och Sveriges AI-strategi ([Europaparlamentet och Europeiska unionens råd, 2024](https://data.europa.eu/eli/reg/2024/1689/oj); [Regeringskansliet, 2026](https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/)) i relation till den valda processen. [KENT: välj relevanta bestämmelser och strategimål och tillämpa dem konkret på AI-stödd kalkylutveckling.] Om kalkylen någon gång använder uppgifter om identifierbara fastigheter eller personer behöver även dataskyddsfrågan bedömas. [KENT: ange vilka data som faktiskt används i den aktuella kalkylen.]

Den samlade avvägningen bör visa vilken nytta den bredare modellen ger, vilka risker som följer av fler antaganden och hur riskerna kan minskas genom dokumentation, mänsklig kontroll och tydlig redovisning av osäkerhet. [KENT: ta ställning till om fortsatt utveckling är motiverad och på vilka villkor.]

## 6. Kompetens och ledarskap

Fallet väcker frågor om vilken kompetens som krävs för att använda generativ AI i kalkylutveckling. Den som leder arbetet behöver kunna bedöma både verksamhetsbehovet och hur beräkningar, antaganden och AI-bidrag ska granskas. [KENT: knyt detta till din erfarenhet av ekonomistyrning och till vad en chef behöver kunna besluta om.]

Min ledarskapsreflektion ska beskriva hur jag skulle omsätta analysen i praktiken: vem som får föreslå förändringar, vem som kontrollerar dem, hur antaganden dokumenteras och när en uppdatering är tillräckligt säker för att användas. [KENT: skriv din egen reflektion och ange vad du själv skulle prioritera som chef eller ledare.]

## 7. Rekommendationer och fortsatt arbete

Följande är arbetsförslag att ta ställning till, inte mina färdiga rekommendationer:

| Prioritet | Förslag att pröva | Vad som behöver klarläggas | Uppföljning |
|---|---|---|---|
| 1 | Dokumentera vilka AI-verktyg som användes och vad de bidrog med i respektive kalkylversion. | [KENT: vilka belägg finns?] | AI-bidrag kan särskiljas från egna beslut och manuellt arbete. |
| 2 | Skapa en enkel kontrollista för formler, antaganden, källor och AI-genererad kod. | [KENT: vilka kontroller använder du redan?] | Ändringar kan följas och granskas innan publicering. |
| 3 | Prioritera nästa utvecklingssteg utifrån användarbehov och risk. | [KENT: vem är viktigaste användargruppen och vilken fråga behöver kalkylen hjälpa till att besvara?] | [KENT: välj mått eller kontroll.] |

För VG behöver slutversionen göra prioriteringen tydlig och visa en genomförbar AI-roadmap med ansvarig roll, första steg och uppföljning. [KENT: välj vilka förslag du själv står bakom.]

## 8. Slutsats

[KENT: Besvara rapportens syfte. Sammanfatta vad AI faktiskt bidrog med, vilken nytta kalkylutvecklingen gav, vilka risker som kräver kontroll och vad du rekommenderar som nästa steg. Slutsatsen ska uttrycka din bedömning, inte enbart återge tidigare avsnitt.]

## Referenser

Europaparlamentet och Europeiska unionens råd (2024) *Förordning (EU) 2024/1689 om harmoniserade regler för artificiell intelligens (AI-förordningen).* Europeiska unionens officiella tidning, L 2024/1689. Tillgänglig på: https://data.europa.eu/eli/reg/2024/1689/oj (Hämtad: 11 november 2026). (*EU:s rättsakt som rapporten ska använda för den rättsliga analysen.*)

Lundgren, K. (1998) *Förnyelsebara energibärares nuvarande och framtida konkurrenskraft: föreställningar om konkurrenskraft.* Licentiatavhandling, Lunds universitet. https://doi.org/10.13140/RG.2.2.19213.23528. (*Bakgrund till Kents miljöekonomiska perspektiv.*)

Lundgren, K. (2014) *Lönsamhet för stora (3 MW) vindkraftverk.* Blogginlägg. Tillgänglig på: https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html (Hämtad: 11 november 2026). (*Äldre kalkyl och bakgrund till den tidiga projektörskalkylen.*)

Lundgren, K. (2026a) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html (Hämtad: 11 november 2026). (*Fallmaterial för den nyare kalkylen med flera aktörsperspektiv.*)

Regeringskansliet (2026) *Sveriges AI-strategi.* Publicerad 20 februari 2026, uppdaterad 26 februari 2026. Tillgänglig på: https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/ (Hämtad: 11 november 2026). (*Regeringens strategiska inriktning som kan kopplas till rapportens verksamhets- och ledarskapsanalys.*)

SFS 2026:1113. *Lag om intäktsdelning från vindkraftsanläggningar.* Tillgänglig på: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/ (Hämtad: 11 november 2026). (*Primärkälla för rapportens konkreta exempel om intäktsdelning till närboende.*)

## Punkter att gå igenom tillsammans

1. Fastställ två faktiska AI-användningar. Om AI bara användes i ett av stegen behöver inventeringen justeras.
2. Lägg in dina konkreta exempel och egna bedömningar där `[KENT: …]` står.
3. Fyll i kursens regler för AI-stöd och eventuell AI-deklaration. Kontrollera i slutversionen att varje källa stöder det påstående den hänvisas till.
4. Gå igenom rapporten avsnitt för avsnitt och anpassa den till HKR-mallens rekommenderade omfång.
