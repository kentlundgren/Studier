# AI inventering

**Undertitel:** analys av ett tillämpningsområde för AI: AI-stödd utveckling av ekonomiska kalkyl- och beslutsverktyg  
**Fall:** Vindkraftskalkyler, från projektörsperspektiv till flera aktörsperspektiv  
**Kurs:** AI för chefer och ledare, AI101A, Högskolan Kristianstad, delprov 1 (uppgift 1), 1,5 hp, HT 2026  
**Författare:** Kent Lundgren  
**Status:** Arbetsutkast 4e. Inte färdig rapport eller inlämningsversion.

> **Läsanvisning:** `[KENT: …]` markerar en fråga eller uppgift som kräver Kents erfarenhet, bedömning eller besked. Ta bort markeringen när frågan är besvarad. `[KONTROLLERA: …]` används endast när en sakuppgift eller källa faktiskt återstår att verifiera. Utkastet är inte en färdig inlämning. Kontrollera Canvas regler för AI-stöd innan texten färdigställs.

> **Processnotering – tas bort före rapportversion:** Utkast 4e bygger på [mall version 2](../../delprov1-vindkraftskalkyler/mall/ai-inventering-dokument-uppgift-1-v2.md) ([samma mall på GitHub](https://github.com/kentlundgren/Studier/blob/main/2026_host/AI_for_chefer/delprov1-vindkraftskalkyler/mall/ai-inventering-dokument-uppgift-1-v2.md)), som återger kursledningens Word-mall med tillägg för metodbeskrivning, nyttobedömning, slutsats, kort handlingsplan och individuell reflektion. Rubrikerna följer den mallen. Innehållet är hämtat från [utkast 4d](utkast-4d.md), som har en annan rubrikstruktur och bevaras oförändrat. Arbetsordningen följer den gemensamma [sjustegsprocessen](../../../../AGENTS.md); [PRD:n för Delprov 1](../../delprov1-vindkraftskalkyler/PRD_delprov1.md) visar hur varje steg används.

## Sammanfattning

[KENT: Skriv detta sist. Högst 250 ord på svenska: syftet, processen, minst två befintliga eller möjliga AI-användningar och deras mognadsgrad, den viktigaste nyttan och risken samt rekommendationen.]

## Ämnesord

[KENT: Ange 5–8 ämnesord. Förslag att pröva: generativ AI, ekonomiska kalkyler, beslutsstöd, vindkraft, verksamhetsstyrning, modellrisk.]

## 1. Förberedelse: Verksamhet och Ansvar

**Fråga att besvara:** Vilket ledningsproblem eller vilken verksamhetsnytta ska AI-inventeringen bidra till? [KENT: formulera detta i en eller två meningar. Utgångspunkt från 4d: hur kalkyler som beslutsunderlag kan göras begripliga och granskningsbara för flera aktörer med hjälp av generativ AI, utan att AI ersätter kontrollerbara beräkningar.]

### Beskriv din verksamhet kort

Ekonomiska kalkyler är ett kärnverktyg i verksamhetsstyrning: de omvandlar antaganden om framtiden till jämförbara nyckeltal som beslut kan vila på. Som fall använder jag en investerings- och lönsamhetskalkyl för vindkraft som jag har utvecklat i flera steg. Den tidiga kalkylen utgick från projektörens ekonomi. Den nyare modellen redovisar ekonomiska perspektiv för projektören, markägaren, kommunen/samhället, andelsägare och närboende ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)). En äldre kalkyl och bakgrunden till den beskrivs i mitt blogginlägg från 2014 ([Lundgren, 2014](https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html)).

Min bakgrund inom miljöekonomi kommer bland annat till uttryck i min licentiatavhandling om förnyelsebara energibärares konkurrenskraft ([Lundgren, 1998](https://portal.research.lu.se/en/publications/f%C3%B6rnyelsebara-energib%C3%A4rares-nuvarande-och-framtida-konkurrenskraf/)). Jag arbetar också med ekonomistyrning och kalkyler. Som controller är jag van vid att bedöma hur antaganden påverkar ett kalkylresultat, och jag har själv byggt och vidareutvecklat vindkraftskalkyler. I mitt ekonomiarbete har kalkyler ofta fokuserat på en parts lönsamhet, exempelvis ett företags eller en organisations, med mått som payback och nettonuvärde (NNV). Jag ser AI-stöd som en möjlighet att gå från en sådan avgränsad kalkyl till ett öppet verktyg som synliggör hur flera parter påverkas. Fler perspektiv ger ett bredare underlag, men ökar också modellens komplexitet och kan göra fel svårare att upptäcka om syfte, underlag eller antaganden är otydliga.

[KENT: mallen frågar efter uppdrag, målgrupper, centrala processer och beslut där AI redan används eller kan bli relevant. Lägg till vilka som är kalkylens avsedda användare och vilka beslut den ska stödja.]

#### Begreppsbakgrund: från AI till generativ AI och agentiska system

Kursen behandlar AI brett. OECD:s definition omfattar system som utifrån indata härleder hur exempelvis prognoser, innehåll, rekommendationer eller beslut ska skapas ([OECD, 2024](https://doi.org/10.1787/623da898-en)). Den [paraplybild som delats på kursplattformen](../../delprov1-vindkraftskalkyler/Bilder/AI_paraplyet.jpg) ger en översikt över flera AI-begrepp, men blandar metodfamiljer, modelltyper och sätt att bygga system. Bildens raka utvecklingskedja bör därför inte läsas som en strikt hierarki: RAG och agentiska system är sätt att kombinera funktioner, och en språkmodell behöver inte använda RAG för att ingå i ett agentiskt system. Bildens ursprungliga upphovsperson är inte fastställd.

Mitt fokus är generativ AI som stöd för att utveckla kalkyler och förklara deras antaganden, samt hur språkmodeller kan ingå i agentiska arbetsflöden. Anthropic skiljer mellan förutbestämda arbetsflöden och agenter där modellen själv väljer nästa steg och verktyg utifrån uppgiften och återkopplingen ([Anthropic, 2024](https://www.anthropic.com/research/building-effective-agents)). RAG innebär här att relevant information hämtas och tillförs modellen när ett svar skapas; det innebär inte i sig att systemet arbetar självständigt.

Med *harness* avser jag den programvara runt modellen som organiserar körningen: verktygsanrop, kontext, sparat arbetsläge och kontroller. Sådant stöd kan hjälpa en agent att fortsätta ett arbete över flera sessioner ([Anthropic, 2025](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)). I kalkylfallet blir frågan vilka moment AI får föreslå eller utföra, hur resultat granskas och vilka beslut jag behåller. Att ett verktyg kan redigera filer visar inte ensamt hur självständigt det arbetar. Inventeringen ska därför beskriva faktiskt använda funktioner och skilja dem från möjliga framtida agentfunktioner.

### Identifiera ansvar

Samarbetet kräver att jag formulerar mål, avgränsningar och instruktioner, ger relevant kontext och väljer verktyg och kontroller. AI kan föreslå kod, frågor, struktur och formuleringar, men förslagen behöver prövas och omarbetas.

[KENT: besvara mallens frågor kort: vem äger processen (kalkylen och källorna), vem använder verktyget, vem fattar beslut och vem behöver informeras? Utgångspunkt från 4d: du formulerar frågorna, väljer antaganden och granskar kod och resultat. Ange också vem som i praktiken förvaltar kalkyl och källor.]

### Enhet, process eller tjänst

Den här rapporten analyserar AI-stödd utveckling av kalkyl- och beslutsverktyg. Fokus är alltså AI:s roll när modeller byggs, förbättras och förklaras – inte att låta en språkmodell ersätta kalkylens kontrollerbara beräkningar.

Fallet avgränsas till utvecklingsprocessen och kalkylens användning som beslutsunderlag. Vindkraftsekonomin behandlas bara där den behövs för att analysera AI-användning, nytta och risk. Jag har valt vindkraftsersättning till ägare av bostadsbyggnader nära vindkraftsanläggningar som rapportens huvudexempel. [Lag (2026:1113) om intäktsdelning från vindkraftsanläggningar](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/) trädde i kraft den 1 juli 2026. Vilka anläggningar och byggnader som omfattas beror också på lagens villkor och övergångsbestämmelser (SFS 2026:1113). En fråga jag vill undersöka är hur en kalkyl kan synliggöra beräkningsgrunder, antaganden och konsekvenser för flera parter när reglerna är nya och olika parter kan ha olika informationsbehov. Kalkylen ska här analyseras som beslutsunderlag, inte som ersättning för en rättslig bedömning.

### Metod och underlag

Analysen bygger på jämförelser mellan kalkylens olika versioner, tidigare arbetsmaterial och min erfarenhet av att utveckla ekonomiska kalkyler. Utvecklingen från äldre webbkalkyler till en interaktiv modell med flera aktörsperspektiv beskrivs också i mitt blogginlägg om att göra vindkraftens ekonomi synlig ([Lundgren, 2026b](https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/)). Som jämförelsematerial använder jag den äldre webbkalkylen ([Lundgren, 2024](https://kentlundgren.se/kalkyler/vindkraftskalkyl_old.html)) och en senare kalkylversion ([Lundgren, 2025](https://kentlundgren.se/kalkyler/vindkraftskalkyl.html)); den nuvarande modellen beskrivs under Beskriv din verksamhet kort ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).

Git är ett versionshanteringssystem: det sparar ändringar som versioner i projektets historik, så att utvecklingen kan följas och olika versioner jämföras ([Git, u.å.](https://git-scm.com/docs/git)). GitHub är plattformen där repot kan lagras och göras tillgängligt för granskning. Där visas Markdown-filer i läsbar form, och en README kan beskriva projektets syfte, användning och innehåll ([GitHub, u.å.a](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)). När ett projekt dessutom publiceras som en webbplats med GitHub Pages kan den interaktiva kalkylen användas i webbläsaren ([GitHub, u.å.b](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)). När jag under 2026 började använda AI-modeller i ett Git-baserat arbetsflöde blev det lättare att hantera många versioner. I mitt [Vindkraftsrepo på GitHub](https://github.com/kentlundgren/Vindkraft) kan läsaren följa dokumentation, kod och publicerade kalkylversioner. Det gör underlaget mer granskningsbart, men insyn i koden garanterar inte att antaganden eller beräkningar är korrekta; de behöver fortfarande kontrolleras.

I kursintroduktionen behandlades AI i ett bredare system- och verksamhetssammanhang, där teknik behöver förstås tillsammans med människor, arbetsuppgifter och ansvar. Ett konkret exempel från första quizet är fråga 4, där begrepp som generativ AI, prompt, träningsdata och algoritm matchas mot funktioner som innehållsskapande, instruktion och beräkning ([Högskolan Kristianstad, 2026, fråga 4](../../delprov1-vindkraftskalkyler/Quiz/Bilder/4R.jpg)). Jag använder detta som en påminnelse om att beskriva vilken konkret uppgift AI bidrog med i kalkylutvecklingen, inte som belägg för att kalkylens resultat är riktiga.

För varje påstående om AI:s bidrag skiljer jag därför mellan vad jag själv gjorde, vad AI föreslog eller producerade och vad jag senare granskade, ändrade eller förkastade. Kursmoment och quiz ger begrepp och frågor att pröva mot rapportens syfte och betygskriterier; quizsvar används inte automatiskt som belägg för sakpåståenden. I texten skiljer jag mellan verifierade uppgifter, egna erfarenheter, bedömningar och sådant som ännu är en hypotes.

#### AI-deklaration

I arbetet med rapporten använder jag generativ AI genom ChatGPT och AI-stöd i Cursor, samt vid vissa tillfällen Claude. AI hjälper till med struktur, textutkast, språklig bearbetning, källsökning och förslag till analys. Jag bidrar med egna erfarenheter, sakuppgifter, bedömningar och ändringar. Arbetet sker stegvis: jag redigerar texten och skriver önskemål, varefter AI bearbetar utkastet utifrån dessa. Jag granskar ändringarna och hanterar versionshistorik och publicering till GitHub via Cursor. Jag ansvarar för rapportens innehåll, källornas användning och den slutliga bedömningen.

Jag arbetar också på en metanivå: jag reflekterar över hur instruktioner, mallar, källkontroll och samspelet mellan mig och AI påverkar resultatet. Erfarenheterna dokumenteras i projektets arbetsbeskrivning och gemensamma arbetsregler för att förbättra kommande arbetsprocesser. Syftet är att utveckla både rapporten och min förmåga att använda generativ AI med omdöme. Denna deklaration gäller rapportarbetet; AI:s bidrag till själva vindkraftskalkylerna redovisas separat i inventeringen.

## 2. Kartläggning av AI-användning

### Lista användningar

De två perspektiven – projektörens kalkyl och kalkylen med flera aktörer – är inte automatiskt två olika AI-användningar. Inventeringen omfattar minst två befintliga eller möjliga användningar enligt kursens originalmall och betygsmatris. En idé kan ingå utan att vara genomförd; förväntad nytta ska då skiljas från observerade resultat.

Inventeringen avgränsas här till två fall:

1. **Att utveckla och förklara kalkylscenarier.**
2. **Att analysera och förklara regler och aktörsperspektiv.**

Den gemensamma frågan är hur jag, tillsammans med generativ AI, kan göra vindkraftens ekonomiska konsekvenser och deras förutsättningar mer begripliga och granskningsbara för olika aktörer.

### Beskriv varje användning

För varje användning beskrivs den konkreta uppgift AI utför eller skulle kunna utföra, underlag, ansvar, nytta, risk och mognadsgrad.

| Fall | Konkret arbetsuppgift och underlag | Befintligt arbete och möjlig fortsättning | Ansvar och kontroll |
|---|---|---|---|
| **1. Utveckla och förklara kalkylscenarier** | Utveckla kod och förklaringar utifrån kalkylens formler, indata och antaganden. Visa hur ett ändrat antagande påverkar projektörens och andra aktörers ekonomi. Underlag: [den publicerade vindkraftskalkylen](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html) och dess tidigare versioner. | Kalkyler har redan utvecklats tillsammans med generativ AI. En möjlig fortsättning är förklaringar anpassade till olika användare, där varje förklaring knyts till ett bestämt scenario och dess beräknade resultat. Ett sådant AI-lager i webbverktyget beskrivs här som en idé. | Jag formulerar frågorna, väljer antaganden och granskar kod och resultat. Beräkningar ska utföras i en kontrollerbar kalkyl och prövas mot kända exempel. AI:s förklaring får inte ändra eller hitta på siffror. |
| **2. Analysera och förklara regler och aktörsperspektiv** | Strukturera källor, jämföra perspektiv och formulera begripliga förklaringar om intäktsdelning: vad följer av reglerna, vad bygger på antaganden och vad är ett eget förbättringsförslag? Underlag: rättskällor och min bloggtext *Besked före beslut* ([Lundgren, 2026c](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/)). | Bloggtexten har tagits fram tillsammans med generativ AI. En möjlig fortsättning är en källanknuten frågeguide för exempelvis närboende och projektörer. En återkommande eller automatiserad tjänst är en utvecklingsidé, inte en redovisad införd lösning. | Jag väljer frågor och källor, granskar tolkningar och ansvarar för slutsatserna. Förklaringar måste skilja gällande regler från policyförslag och visa källornas datum. AI ska inte avgöra en enskild persons rätt till ersättning. |

Skillnaden ligger i huvuduppgiften: fall 1 handlar om **vad en kalkyl visar under angivna antaganden**, fall 2 om **hur regler, frågor och perspektiv ska förstås och beskrivas**. Intäktsdelningen kan användas som gemensamt exempel. Att bredda problemformuleringen och kritiskt granska resultaten ingår i båda fallen; de behöver inte bli ytterligare användningsfall.

Den offentliga kalkylen och bloggtexten visar att material har producerats; de visar inte i sig att andra har förstått det bättre eller att arbetet blivit effektivare.

#### Behovet av aktörsperspektiv

En traditionell kalkyl med projektörsperspektiv kan ge en avgränsad bild av investeringens ekonomi. En modell med flera aktörsperspektiv kan synliggöra hur samma projekt kan påverka olika grupper ekonomiskt: projektören, markägaren, kommunen/samhället, andelsägare och närboende. [KENT: bedöm vad kalkylen faktiskt visar, vilka användare den är avsedd för och om den har använts av någon annan än dig.]

Behovet av flera perspektiv hänger samman med de två fallen: i fall 1 gör perspektiven det möjligt att visa vem som påverkas av ett ändrat antagande, och i fall 2 att förklara vad reglerna betyder för olika aktörer.

### Bedöm mognad

Mognadsgraden skiljer här mellan det som har gjorts och det som är en idé. Underlaget är hämtat ur utkast 4d.

| Fall | Del | Mognad | Underlag |
|---|---|---|---|
| 1 | Kalkylutveckling tillsammans med generativ AI | [KENT: bekräfta, till exempel "införd i eget arbete"] | Kalkylerna har utvecklats tillsammans med generativ AI. |
| 1 | AI-lager med förklaringar för olika användare | Idé | Beskrivs som en möjlig fortsättning. |
| 2 | Regelanalys och bloggtext tillsammans med generativ AI | [KENT: bekräfta, till exempel "genomförd i eget arbete"] | Bloggtexten har tagits fram tillsammans med generativ AI. |
| 2 | Källanknuten frågeguide | Idé | Beskrivs som en möjlig fortsättning. |
| 2 | Återkommande eller automatiserad tjänst | Idé | Utvecklingsidé, inte en införd lösning. |

## 3. Enkel Inventeringstabell

### Nyttobedömning

Min avhandling skiljer mellan affärsmässig produktionslogik, affärsmässig hållbarhetslogik och socio-ekonomisk hållbarhetslogik ([Lundgren, 1998, s. 93–99](../../litteratur/More/Lundgren_1998_lic_arbete.pdf)). De betonar produktionskostnader, efterfrågan på miljöprofilerade produkter respektive lokal förankring och legitimitet. Här använder jag dem som analytiska perspektiv på vilka frågor ett beslutsunderlag behöver belysa. Avhandlingen behandlar främst bioenergi och energiföretag; överföringen till vindkraft är min tillämpning, inte ett empiriskt resultat om närboende.

Min bloggtext *Besked före beslut* (Lundgren, 2026c), framtagen tillsammans med generativ AI, konkretiserar ett informationsbehov: att kunna redovisa beräknade ersättningsintervall och antaganden före beslut. Textens förslag om tidiga besked, automatisk rätt och uppföljning är policyförslag som ska skiljas från gällande regler. Långhult/Lunnarsbo används i underlaget som räkneillustration och Önnerup som kontrastfall, inte som belägg för effekten av utbetald ersättning. Jag har inte identifierat dokumenterade utbetalningsfall i detta underlag. Inventeringen bedömer därför möjliga nyttor och risker; den visar inte att AI eller ersättning har ökat acceptansen.

Att material är tillgängligt på webben innebär inte automatiskt att läsaren kan förstå eller granska det. I fall 1 kan samarbetet med AI användas för att tydliggöra sambandet mellan antagande, beräkning och resultat. I fall 2 kan det användas för att skilja en regel från en tolkning eller ett förslag och förklara vad olika aktörer behöver veta. Nyttan kan prövas genom att låta avsedda läsare besvara några konkreta frågor utifrån materialet: kan de hitta rätt källa, förstå vad som påverkar utfallet och skilja ett scenario från ett besked om faktisk ersättning? Detta är ett förslag till utvärdering, inte en genomförd mätning.

Den möjliga nyttan är att fler antaganden och ekonomiska konsekvenser kan bli synliga i ett gemensamt beslutsunderlag. För att bedöma nyttan behöver jag jämföra vad användaren kunde förstå eller göra med den äldre kalkylen med vad den nyare modellen tillför. [KENT: ge ett konkret exempel på en fråga som den bredare modellen kan besvara bättre – och vad den inte kan besvara.]

För VG behöver jag dessutom analysera processens strategiska betydelse och prioritera AI-initiativ utifrån verksamhetsmål, nytta, risk och genomförbarhet. [KENT: ange vilket mål eller vilket beslut kalkylen ska stödja och varför det är prioriterat.]

### Inventeringstabell

Tabellen sammanfattar de två fallen. Den bygger på beskrivningarna i kapitel 2 och på nyttobedömningen ovan.

| AI användning | Syfte | Data | Ansvarig | Risk/Åtgärd |
|---|---|---|---|---|
| 1. Utveckla och förklara kalkylscenarier | Göra ändrade antaganden och deras effekt på olika aktörers ekonomi begripliga | Kalkylens formler, indata, antaganden och tidigare versioner. [KENT: bekräfta att inga personuppgifter ingår] | Jag (Kent) granskar kod och resultat. [KENT: vem förvaltar kalkylen?] | Risk: AI-förklaring ändrar eller hittar på siffror. Åtgärd: beräkningar sker i en kontrollerbar kalkyl och prövas mot kända exempel |
| 2. Analysera och förklara regler och aktörsperspektiv | Skilja gällande regler från antaganden och förbättringsförslag och förklara vad de betyder för olika aktörer | Rättskällor ([SFS 2026:1113](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/)) och bloggtexten (Lundgren, 2026c) | Jag (Kent) väljer frågor och källor och granskar tolkningar | Risk: tolkning presenteras som regel, eller AI avgör en enskild persons rätt till ersättning. Åtgärd: visa källornas datum och skilj regel från förslag |

## 4. Risk, Juridik och Etik

### Risknivå

När kalkylen går från ett perspektiv till flera ökar antalet antaganden och samband. Modellen kan därför bli svårare att överblicka och kontrollera än en enkel kalkyl i Excel som fokuserar på en aktör. En mer avancerad presentation kan också få resultat att se säkrare ut än vad indata och antaganden medger. [KENT: bekräfta om detta motsvarar din erfarenhet och ge ett konkret exempel.]

Rapporten ska behandla EU:s AI-förordning (förordning (EU) 2024/1689) och Sveriges AI-strategi ([Europaparlamentet och Europeiska unionens råd, 2024](https://data.europa.eu/eli/reg/2024/1689/oj); [Regeringskansliet, 2026](https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/)) i relation till den valda processen. [KENT: välj relevanta bestämmelser och strategimål och tillämpa dem konkret på AI-stödd kalkylutveckling. Bedöm om varje användning är låg risk, kräver särskild transparens, kan påverka individers rättigheter eller behöver juridisk prövning.]

### Data och integritet

Om kalkylen någon gång använder uppgifter om identifierbara fastigheter eller personer behöver även dataskyddsfrågan bedömas. [KENT: ange vilka data som faktiskt används i den aktuella kalkylen, till exempel om personuppgifter, känsliga uppgifter eller konfidentiell information förekommer.]

### Mänsklig kontroll

En central kontrollfråga är vem som granskar AI-genererade formler, kod och förklaringar. [KENT: beskriv din faktiska granskningsrutin, till exempel jämförelse med manuella beräkningar, testfall, källkontroll eller kodgranskning.] AI-stöd kan bidra till arbetet, men ansvaret för kalkylens användning, antaganden och publicerade resultat behöver vara tydligt placerat. [KENT: ange vem som i praktiken förvaltar kalkyl och källor.]

### Stoppsignal

Mallens stoppsignal gäller AI som påverkar rättighetsnära beslut. I fall 2 ska AI inte avgöra en enskild persons rätt till ersättning. [KENT: bedöm om någon av användningarna kan påverka individers rättigheter, och i så fall när frågan ska lyftas till juridiskt, etiskt och informationssäkerhetsansvarigt stöd innan fortsatt användning.]

Den samlade avvägningen bör visa vilken nytta den bredare modellen ger, vilka risker som följer av fler antaganden och hur riskerna kan minskas genom dokumentation, mänsklig kontroll och tydlig redovisning av osäkerhet. [KENT: ta ställning till om fortsatt utveckling är motiverad och på vilka villkor.]

## 5. Kompetens och Styrning

### AI-kompetens

Fallet väcker frågor om vilken kompetens som krävs för att använda generativ AI i kalkylutveckling. Den som leder arbetet behöver kunna bedöma både verksamhetsbehovet och hur beräkningar, antaganden och AI-bidrag ska granskas. [KENT: knyt detta till din erfarenhet av ekonomistyrning och ange vilka roller som behöver förstå AI-systemets möjligheter, begränsningar, risker och ansvar.]

### Styrning

[KENT: finns policy, rutin, beslutsgång, dokumentation och uppföljning för AI-användningen i kalkylarbetet? Utgångspunkt: versionshistoriken i Git (se Metod och underlag) och de gemensamma arbetsreglerna som nämns i AI-deklarationen.]

### Ledningsfråga

[KENT: vad behöver du som chef eller ledare besluta, förankra eller följa upp? Utgångspunkt från 4d: vem som får föreslå förändringar, vem som kontrollerar dem, hur antaganden dokumenteras och när en uppdatering är tillräckligt säker för att användas.]

### Dokumentation

[KENT: hur sparas inventering, riskbedömning, beslut och ansvarsfördelning? Rekommendationen i kapitel 6 om att dokumentera vilka AI-verktyg som användes och vad de bidrog med i varje kalkylversion hör hit.]

## 6. Slutsats och prioriterad handlingsplan i korthet

Kapitlet är en kort avslutning och en försmak. Den fullständiga handlingsplanen görs i delprov 2, som bygger vidare på inventeringen.

### Slutsats

[KENT: Besvara rapportens syfte. Sammanfatta vad AI har bidragit med eller skulle kunna bidra med, skilj observerad från förväntad nytta, vilka risker som kräver kontroll och vad du rekommenderar som nästa steg. Slutsatsen ska uttrycka din bedömning, inte enbart återge tidigare avsnitt.]

### Prioriterad handlingsplan i korthet

Följande är arbetsförslag att ta ställning till, inte mina färdiga rekommendationer:

| Prioritet | Åtgärd/initiativ | Motivering | Ansvarig roll | Första steg/tid | Uppföljning |
|---|---|---|---|---|---|
| 1 | Dokumentera vilka AI-verktyg som användes och vad de bidrog med i respektive kalkylversion | [KENT: vilka belägg finns?] | [KENT] | [KENT] | AI-bidrag kan särskiljas från egna beslut och manuellt arbete |
| 2 | Skapa en enkel kontrollista för formler, antaganden, källor och AI-genererad kod | [KENT: vilka kontroller använder du redan?] | [KENT] | [KENT] | Ändringar kan följas och granskas innan publicering |
| 3 | Prioritera nästa utvecklingssteg utifrån användarbehov och risk | [KENT: vem är viktigaste användargruppen och vilken fråga behöver kalkylen hjälpa till att besvara?] | [KENT] | [KENT] | [KENT: välj mått eller kontroll] |

För VG behöver slutversionen göra prioriteringen tydlig. Den genomförbara AI-roadmapen med ansvarig roll, första steg och uppföljning fördjupas i delprov 2. [KENT: välj vilka förslag du själv står bakom.]

## 7. Individuell reflektion

Min ledarskapsreflektion ska beskriva hur jag skulle omsätta analysen i praktiken: vem som får föreslå förändringar, vem som kontrollerar dem, hur antaganden dokumenteras och när en uppdatering är tillräckligt säker för att användas. [KENT: skriv din egen reflektion och ange vad du själv skulle prioritera som chef eller ledare.]

## Referenser

Anthropic (2024) *Building effective AI agents*. Tillgänglig på: https://www.anthropic.com/research/building-effective-agents (Hämtad: 11 november 2026). (*Utvecklarens beskrivning av skillnaden mellan fasta arbetsflöden och agenter som väljer steg och verktyg; används som teknisk primärkälla, inte som oberoende effektutvärdering.*)

Anthropic (2025) *Effective harnesses for long-running agents*. 26 november. Tillgänglig på: https://www.anthropic.com/research/effective-harnesses-for-long-running-agents (Hämtad: 11 november 2026). (*Beskriver hur programvara runt modellen stödjer arbetsläge, kontinuitet och kontroll vid längre agentuppgifter.*)

Europaparlamentet och Europeiska unionens råd (2024) *Förordning (EU) 2024/1689 om harmoniserade regler för artificiell intelligens (AI-förordningen).* Europeiska unionens officiella tidning, L 2024/1689. Tillgänglig på: https://data.europa.eu/eli/reg/2024/1689/oj (Hämtad: 11 november 2026). (*EU:s rättsakt som rapporten ska använda för den rättsliga analysen.*)

Git (u.å.) *Git documentation*. Tillgänglig på: https://git-scm.com/docs/git (Hämtad: 11 november 2026). (*Officiell dokumentation som beskriver Git som ett distribuerat versionshanteringssystem.*)

GitHub (u.å.a) *About repository README files*. Tillgänglig på: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (Hämtad: 11 november 2026). (*Beskriver hur README-filer presenterar ett projekts syfte och hjälper besökare att förstå repot.*)

GitHub (u.å.b) *Creating a GitHub Pages site*. Tillgänglig på: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (Hämtad: 11 november 2026). (*Beskriver publicering av statiska webbplatser från ett GitHub-repo.*)

Högskolan Kristianstad (2026) *AI101A: Quiz 1, fråga 4 – definition av generativ AI* [Canvas-quiz]. Skärmbild: [quizresultat i Studier-repot](../../delprov1-vindkraftskalkyler/Quiz/Bilder/4R.jpg). (*Quizfråga som matchar AI-begrepp mot funktioner och därför hjälper till att precisera vilken uppgift AI utför.*)

Lundgren, K. (1998) *Förnyelsebara energibärares nuvarande och framtida konkurrenskraft: föreställningar om konkurrenskraft.* Licentiatavhandling, Lunds universitet. https://doi.org/10.13140/RG.2.2.19213.23528. (*Bakgrund till Kents miljöekonomiska perspektiv.*)

Lundgren, K. (2014) *Lönsamhet för stora (3 MW) vindkraftverk.* Blogginlägg. Tillgänglig på: https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html (Hämtad: 11 november 2026). (*Äldre kalkyl och bakgrund till den tidiga projektörskalkylen.*)

Lundgren, K. (2024) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl_old.html (Hämtad: 11 november 2026). (*Äldre webbkalkyl med huvudsakligt fokus på projektörens ekonomi.*)

Lundgren, K. (2025) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl.html (Hämtad: 11 november 2026). (*Senare kalkylversion som används för att följa modellens utveckling.*)

Lundgren, K. (2026a) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html (Hämtad: 11 november 2026). (*Fallmaterial för den nyare kalkylen med flera aktörsperspektiv.*)

Lundgren, K. (2026b) ‘Att göra vindkraftens ekonomi synlig’. *Controller, lärare och coach utan gränser reflekterar*, 13 juli. Tillgänglig på: https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/ (Hämtad: 11 november 2026). (*Beskriver bakgrund och utveckling från kalkyler till interaktiva webbsidor.*)

Lundgren, K. (2026c) ‘Besked före beslut: att förbättra intäktsdelningen från vindkraft till närboende’. Blogginlägg, 11 november. Tillgänglig på: https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/ (*Författarens analys och förbättringsförslag, framtagen tillsammans med generativ AI. Används som fallmaterial, inte som primärkälla för gällande rätt eller belägg för observerade ersättningseffekter.*)

OECD (2024) *Explanatory memorandum on the updated OECD definition of an AI system*. OECD Artificial Intelligence Papers, nr 8. Paris: OECD Publishing. https://doi.org/10.1787/623da898-en. (*Ger en bred definition som placerar generativ AI inom ett större AI-område.*)

Regeringskansliet (2026) *Sveriges AI-strategi.* Publicerad 20 februari 2026, uppdaterad 26 februari 2026. Tillgänglig på: https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/ (Hämtad: 11 november 2026). (*Regeringens strategiska inriktning som kan kopplas till rapportens verksamhets- och ledarskapsanalys.*)

SFS 2026:1113. *Lag om intäktsdelning från vindkraftsanläggningar.* Tillgänglig på: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/ (Hämtad: 11 november 2026). (*Primärkälla för rapportens konkreta exempel om intäktsdelning till närboende.*)

## Punkter att gå igenom tillsammans

1. Precisera för de två föreslagna fallen vilka arbetsmoment som har prövats och vilka som är utvecklingsidéer. Skilj producerat material från utvärderad verksamhetsnytta.
2. Lägg in dina konkreta exempel och egna bedömningar där `[KENT: …]` står.
3. Stäm av AI-deklarationen mot den faktiska användningen och kursens regler för AI-stöd. Kontrollera i slutversionen att varje källa stöder det påstående den hänvisas till.
4. Gå igenom rapporten avsnitt för avsnitt och anpassa den till HKR-mallens rekommenderade omfång.
