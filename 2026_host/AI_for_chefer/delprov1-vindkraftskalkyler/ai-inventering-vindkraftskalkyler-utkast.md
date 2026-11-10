# Uppgift 1 – AI-inventering för vindkraftskalkyler
## Första utkast enligt mallen

**Kurs:** AI101A, AI för chefer och ledare, Högskolan Kristianstad  
**Fokus:** Generativ AI i arbetet med ekonomiska kalkyler för vindkraft, med särskilt fokus på den nya intäktsdelningen till närboende  
**Status:** Första arbetsutkast, 10 november 2026  
**Mall:** [AI Inventering Dokument för Uppgift 1.docx](mall/AI%20Inventering%20Dokument%20f%C3%B6r%20Uppgift%201.docx)

> **Arbetsnot:** Detta utkast följer de delar av mallen som syns i den tillgängliga sidan: verksamhet och ansvar samt kartläggning av AI-användning. Text inom hakparenteser behöver Kents kontroll, egna uppgifter eller beslut. Det är inte en färdig inlämning.

## 1. Förberedelse: verksamhet och ansvar

### Fråga att besvara: Vilket ledningsproblem eller vilken verksamhetsnytta ska AI-inventeringen bidra till?

Jag vill undersöka hur generativ AI kan stödja utveckling och användning av ekonomiska vindkraftskalkyler, med särskild inriktning på den nya [lag (2026:1113) om intäktsdelning från vindkraftsanläggningar](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/). Lagen ger ägare av vissa bostadsbyggnader nära vindkraftsanläggningar rätt till vindkraftsersättning. Den geografiska gränsen anges som nio verkshöjder, inte som ett fast avstånd på två kilometer; hur långt det blir beror alltså på verkshöjden ([Regeringen, 2026](https://www.regeringen.se/regeringens-politik/miljo-och-klimat/fragor-och-svar-om-framtida-vindkraft/)). En central fråga för inventeringen är om AI kan göra kalkylens antaganden, resultat och osäkerheter lättare att förstå utan att AI:n får avgöra den rättsliga rätten till ersättning eller ersätta kontrollerbara beräkningar.

**[KENT: Beskriv med egna ord vilket konkret ledningsproblem du vill börja med. Är det främst att förstå hur ersättningen beräknas, att kunna jämföra scenarier, att förklara utfallet för närboende och andra intressenter, eller något annat?]**

### Beskriv din verksamhet kort

Jag gör inventeringen utifrån mitt eget arbete som styrelsemedlem i Skånes vindkraftsakademi. Akademin beskriver sig som ett regionalt forum för vindkraftsfrågor och en plattform för kunskaps- och erfarenhetsutbyte mellan aktörer ([Skånes vindkraftsakademi, u.å.](https://skanesvindkraftsakademi.se/om-oss/)). Mitt fokus är hur mitt arbete med vindkraftskalkyler kan bidra till akademins kunskapsarbete om ekonomiska frågor och intäktsdelning.

**[KENT: Beskriv kort vad ditt styrelseuppdrag innebär i den här frågan, vad du själv ansvarar för och om akademin har beslutat att kalkylen ska användas i föreningens arbete. Om det inte finns ett sådant beslut ska texten säga att detta är ett eget initiativ.]**

### Identifiera ansvar

- **Jag som styrelsemedlem:** [KENT: ange vilket ansvar och mandat du har att föreslå eller driva arbetet.]
- **Kalkylens utvecklare och förvaltare:** [KENT: bekräfta vem som ansvarar för formler, källor, versionshantering och uppdatering.]
- **Skånes vindkraftsakademi:** [KENT: ange om akademin är tänkt användare, beställare, samarbetspartner eller endast en miljö där frågan diskuteras.]
- **Användare av kalkylen:** tänkbara grupper är styrelse och medlemmar, projektörer, kommuner och ägare av bostadsbyggnader som vill förstå hur kalkylen fungerar. [KENT: prioritera de målgrupper du vill behandla.]
- **Beslut om ersättning:** kalkylen kan vara ett pedagogiskt och analytiskt stöd. Vem som enligt lag (2026:1113) ska betala ersättning, vem som har rätt till den och vilket belopp som gäller måste avgöras enligt lagens villkor och kontrollerade indata; en generativ AI ska inte presenteras som beslutsfattare.

### Enhet, process eller tjänst

Den enhet som avgränsas är mitt arbete med en ekonomisk vindkraftskalkyl och den process där kalkylens indata, antaganden och resultat tas fram och förklaras. Inventeringen undersöker om generativ AI kan stödja delar av den processen, särskilt att tolka och hålla reda på relevanta källor, hjälpa till med utveckling och kontroll av kalkylens funktioner samt förklara resultat på begripligt språk.

Avgränsningen gäller inte hela Skånes vindkraftsakademis verksamhet och inte heller ett automatiserat beslut om enskilda personers ersättningsrätt. Den nya lagens krav behöver först översättas till tydliga och kontrollerbara kalkylregler.

## 2. Kartläggning av AI-användning

### Lista användningar

Följande är möjliga eller planerade användningar att pröva. De ska inte läsas som att samtliga redan används i kalkylen. [KENT: markera vad du redan gör med AI, vad du har testat och vad som bara är en idé.]

| Användning | Syfte och tänkt användare | Data eller underlag | Leverantör | Påverkan på beslut | Mognad |
|---|---|---|---|---|---|
| Källstöd för den nya intäktsdelningen | Hjälpa mig hitta och strukturera lagtext och myndighetsinformation för vidare kontroll. | Officiell lagtext, förarbeten och myndighetsvägledning. | [KENT: ange verktyg om det redan används.] | Kan påverka vilka antaganden och regler som tas vidare till kalkylen; varje rättsligt påstående kontrolleras mot originalkällan. | [KENT: idé / test / infört.] |
| Stöd vid utveckling och kontroll av kalkylfunktioner | Föreslå kod, testfall eller förklaringar när jag vidareutvecklar kalkylen. | Kalkylens formler, kod och dokumenterade indata. | [KENT: ange verktyg och hur det faktiskt används.] | Kan påverka beräkningslogik; ändringar behöver granskas och testas innan de används. | [KENT: idé / test / infört.] |
| Förklaring av kalkylens resultat | Ta fram ett begripligt utkast till förklaring av antaganden, scenarier och resultat för exempelvis medlemmar eller närboende. | Beräknade resultat, valda scenarier och källhänvisningar. | [KENT: ange eventuell leverantör.] | Kan påverka hur användare tolkar utfallet; förklaringen ska kunna spåras tillbaka till kalkylens indata och metod. | [KENT: idé / test / infört.] |
| Scenario- och frågestöd | Hjälpa användaren formulera frågor som ”vad händer om…” och visa vilka indata som behöver ändras i kalkylen. | Användarens scenario och kalkylens tillgängliga parametrar. | [KENT: ange eventuell leverantör.] | Kan stödja jämförelser, men själva numeriska resultatet ska komma från kalkylens kontrollerade beräkningar. | [KENT: idé / test / infört.] |

### Beskriv varje användning

**Källstöd.** Den tänkta uppgiften är att hjälpa mig strukturera officiellt material om vindkraftsersättning så att relevanta villkor kan identifieras för fortsatt kontroll. AI-genererade sammanfattningar är inte själva rättskällan. Jag behöver ange vilka källor verktyget får använda och hur varje uppgift kontrolleras mot originaltexten.

**Utveckling och kontroll.** Generativ AI kan möjligen föreslå kod eller testfall för kalkylfunktioner. [KENT: beskriv om du redan har använt AI på detta sätt, vilka delar av kalkylen som i så fall berörts och hur du själv har granskat resultatet.] Det behöver särskiljas mellan AI som stöd i utvecklingsarbetet och AI som funktion för kalkylens användare.

**Resultatförklaring och scenarier.** En möjlig framtida funktion är att hjälpa användaren förstå vilka antaganden som ligger bakom ett resultat och hur ett ändrat scenario påverkar det. Förslaget förutsätter att kalkylen själv räknar fram värdena på ett transparent sätt och att generativ AI endast hjälper till med frågor och förklaringar. [KENT: avgör om denna användning är relevant och vem som ska kunna använda den.]

### Bedöm mognad

Den befintliga vindkraftskalkylens funktioner och utvecklingsstatus behöver beskrivas av mig: [KENT: ange länk/version, vad kalkylen gör i dag och om den används av någon annan än dig.] För varje AI-användning i tabellen behöver jag sedan välja mognadsgrad enligt mallen: **idé, test, pilot, införd lösning eller kritisk verksamhetsdel**.

**Preliminär avgränsning:** utifrån materialet som hittills finns i kursprojektet behandlas ett förklarande AI-lager och AI-stöd kring kalkylen som förslag, inte som en bekräftat driftsatt funktion. [KENT: bekräfta eller ändra.]

## Källförteckning

Regeringen (2026) *Frågor och svar om framtida vindkraft*. Tillgänglig på: https://www.regeringen.se/regeringens-politik/miljo-och-klimat/fragor-och-svar-om-framtida-vindkraft/ (Hämtad 2026-11-10). *(Stödjer uppgiften att vindkraftsersättningens avståndsgräns uttrycks i verkshöjder och inte som ett fast tvåkilometersavstånd.)*

Skånes vindkraftsakademi (u.å.) *Om oss*. Tillgänglig på: https://skanesvindkraftsakademi.se/om-oss/ (Hämtad 2026-11-10). *(Beskriver akademins roll som regionalt forum och plattform för kunskaps- och erfarenhetsutbyte.)*

Sverige (2026) *Lag (2026:1113) om intäktsdelning från vindkraftsanläggningar*. Svensk författningssamling, SFS 2026:1113. Tillgänglig på: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/ (Hämtad 2026-11-10). *(Primärkälla för lagens syfte, tillämpningsområde, definitioner och övergångsbestämmelser.)*
