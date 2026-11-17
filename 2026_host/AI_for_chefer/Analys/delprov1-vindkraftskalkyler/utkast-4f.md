# AI inventering

**Undertitel:** analys av ett tillämpningsområde för AI: AI-stödd utveckling av ekonomiska kalkyl- och beslutsverktyg  
**Fall:** Vindkraftskalkyler, från projektörsperspektiv till flera aktörsperspektiv  
**Kurs:** AI för chefer och ledare, AI101A, Högskolan Kristianstad, delprov 1 (uppgift 1), 1,5 hp, HT 2026  
**Författare:** Kent Lundgren  
**Status:** Arbetsutkast 4f. Inte färdig rapport eller inlämningsversion.

> **Läsanvisning:** `[KENT: …]` markerar en fråga eller uppgift som kräver Kents erfarenhet, bedömning eller besked. Ta bort markeringen när frågan är besvarad. `[KONTROLLERA: …]` används endast när en sakuppgift eller källa faktiskt återstår att verifiera. Utkastet är inte en färdig inlämning. Kontrollera Canvas regler för AI-stöd innan texten färdigställs.

> **Processnotering – tas bort före rapportversion:** Utkast 4f bygger på [mall version 2](../../delprov1-vindkraftskalkyler/mall/ai-inventering-dokument-uppgift-1-v2.md) ([samma mall på GitHub](https://github.com/kentlundgren/Studier/blob/main/2026_host/AI_for_chefer/delprov1-vindkraftskalkyler/mall/ai-inventering-dokument-uppgift-1-v2.md)), som återger kursledningens Word-mall med tillägg för metodbeskrivning, nyttobedömning, slutsats, kort handlingsplan och individuell reflektion. Rubrikerna följer den mallen. Innehållet är hämtat från [utkast 4d](utkast-4d.md) och vidareutvecklat i 4e (låst, bevaras oförändrat som [utkast 4e](utkast-4e.md)), som har en annan rubrikstruktur och bevaras oförändrat. Arbetsordningen följer den gemensamma [sjustegsprocessen](../../../../AGENTS.md); [PRD:n för Delprov 1](../../delprov1-vindkraftskalkyler/PRD_delprov1.md) visar hur varje steg används.

> **AI-arbetslogg, 2026-11-16 – tas bort före rapportversion:** På Kents uttryckliga uppdrag lade ChatGPT in den föreslagna reflektionen om taker/shaper i kapitel 7 och en McKinsey-referens direkt i GitHub-versionen. Kent bidrog med erfarenheten av arbetet med instruktioner, skills och harness och valde att föra in textförslaget. Assistenten kontrollerade McKinseys originalartikel på webben. Den lokala filen ändrades inte i detta arbetspass.

## Sammanfattning

[KENT: Skriv detta sist. Högst 250 ord på svenska: verksamheten (kommunikation om vindkraftens ekonomi), syftet, processen, minst två befintliga eller möjliga AI-användningar och deras mognadsgrad, den viktigaste nyttan och risken samt rekommendationen.]

## Ämnesord

[KENT: Ange 5–8 ämnesord. Förslag att pröva: generativ AI, ekonomiska kalkyler, beslutsstöd, vindkraft, verksamhetsstyrning, modellrisk.]

## 1. Förberedelse: Verksamhet och Ansvar

Frågor om vindkraftens ekonomi kommer till föreningen från medlemmar, intressenter och närboende. Med de nya reglerna om intäktsdelning (intäktsdelningslagen, 2026:1113) kan vem som helst bli berörd av ersättning till närboende. När någon frågar ska vilken styrelseledamot som helst kunna svara med en kalkyl som är så tydlig och transparent att den går att förklara och granska. Jag är den i styrelsen som är ekonomiskt utbildad och driver den här inventeringen. Den är en förelöpare: ett exempel på hur generativ AI kan användas i föreningen, till nytta för styrelsen och verksamhetsledaren. Inventeringen är fokuserad: den går igenom en process på djupet och gör inte anspråk på att täcka all AI-användning i föreningen.

**Syfte och fråga att besvara:** Syftet är att inventera hur generativ AI kan hjälpa föreningen att ta fram och förklara kalkyler för vindkraftens ekonomi, särskilt ersättning till närboende, och att bedöma nytta, risker och ansvar. Frågan är: hur kan generativ AI bidra till kalkyler som vilken styrelseledamot som helst kan använda och förklara, och vilka risker och vilket ansvar följer med?

### Beskriv din verksamhet kort

Mitt arbete ligger i skärningen mellan två roller. Som controller arbetar jag med ekonomistyrning och analys av konkurrenskraft, vilket också var temat i min licentiatavhandling ([Lundgren, 1998](https://portal.research.lu.se/en/publications/f%C3%B6rnyelsebara-energib%C3%A4rares-nuvarande-och-framtida-konkurrenskraf/)). Jag är dessutom styrelsesuppleant i Skånes vindkraftsakademi (Skånes vindkraftsakademi, [u.å.a](https://skanesvindkraftsakademi.se/); [u.å.b](https://skanesvindkraftsakademi.se/om-oss/styrelsen-kansli/)) och kom med i styrelsen 2012. Akademin är ett regionalt forum för vindkraftsfrågor i Skåne och bildades 2009. Föreningen "verkar som en plattform för utbyte av kunskap och erfarenhet" och syftar till att "på ett balanserat sätt kanalisera tekniska, ekonomiska, miljö- och perceptionsmässiga aspekter och på ett inkluderande sätt verka för att vindkraftens roll i Skåne utvecklas i samverkan med dess intressenter" ([Skånes vindkraftsakademi, u.å.c](https://skanesvindkraftsakademi.se/om-oss/)).

När ett eller flera vindkraftverk ska byggas väcker det ofta många åsikter och starka känslor, och samrådet kring etableringarna har både möjligheter och svårigheter ([Lundgren, 2017](https://doi.org/10.13140/RG.2.2.27746.02242)). Hur närboende kan få besked om ersättning före beslut har jag tagit upp i ett blogginlägg som jag tog fram tillsammans med generativ AI ([Lundgren, 2026c](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/)). I den miljön behövs tydliga och kontrollerbara uppgifter om vad som gäller ekonomiskt för olika parter. Det är den verksamhet där jag inventerar behovet av generativ AI. Rapporten är min egen analys och uttrycker inte akademins ståndpunkt.

Jag tolkar akademins syfte så att transparenta kalkyler, som visar inte bara verksamhetsutövarens ekonomi utan också hur andra berörda parter påverkas, kan vara ett sätt att "på ett balanserat sätt kanalisera" de ekonomiska aspekterna. Generativt AI-stöd kan bidra genom att göra kalkylernas antaganden och resultat lättare att förklara och granska. Det är min egen tolkning och inte en ståndpunkt från akademin.

Ekonomiska kalkyler är ett kärnverktyg i verksamhetsstyrning: de omvandlar antaganden om framtiden till jämförbara nyckeltal som beslut kan vila på. Som fall använder jag en investerings- och lönsamhetskalkyl för vindkraft som jag har utvecklat i flera steg. Den tidiga kalkylen utgick från projektörens ekonomi. Den nyare versionen, *Vindkraftens ekonomi – fem perspektiv*, är ett utkast och redovisar ekonomiska perspektiv för projektören (kallad investeraren i verktyget), markägaren, kommunen/samhället, andelsägare och närboende ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)). En äldre kalkyl och bakgrunden till den beskrivs i mitt blogginlägg från 2014 ([Lundgren, 2014](https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html)).

Min miljöekonomiska bakgrund och mitt arbete med ekonomistyrning och kalkyler gör att jag som controller är van vid att bedöma hur antaganden påverkar ett kalkylresultat, och jag har själv byggt och vidareutvecklat vindkraftskalkyler. I mitt ekonomiarbete har kalkyler ofta fokuserat på en parts lönsamhet, exempelvis ett företags eller en organisations, med mått som payback och nettonuvärde (NNV). Jag ser AI-stöd som en möjlighet att gå från en sådan avgränsad kalkyl till ett öppet verktyg som synliggör hur flera parter påverkas. Fler perspektiv ger ett bredare underlag, men ökar också modellens komplexitet och kan göra fel svårare att upptäcka om syfte, underlag eller antaganden är otydliga.

[KENT: ange vilka som är kalkylens avsedda användare (till exempel närboende, markägare och kommuner) och vilka beslut den ska ge underlag till (till exempel samråd, bygglov eller att bli andelsägare).]

#### Begreppsbakgrund: från AI till generativ AI och agentiska system

Kursen behandlar AI brett. OECD:s definition omfattar system som utifrån indata härleder hur exempelvis prognoser, innehåll, rekommendationer eller beslut ska skapas ([OECD, 2024](https://doi.org/10.1787/623da898-en)). Den [paraplybild som delats på kursplattformen](../../delprov1-vindkraftskalkyler/Bilder/AI_paraplyet.jpg) ger en översikt över flera AI-begrepp, men blandar metodfamiljer, modelltyper och sätt att bygga system. Bildens raka utvecklingskedja bör därför inte läsas som en strikt hierarki: RAG och agentiska system är sätt att kombinera funktioner, och en språkmodell behöver inte använda RAG för att ingå i ett agentiskt system. Bildens ursprungliga upphovsperson är inte fastställd.

Mitt fokus är generativ AI som stöd för att utveckla kalkyler och förklara deras antaganden, samt hur språkmodeller kan ingå i agentiska arbetsflöden. Anthropic skiljer mellan förutbestämda arbetsflöden och agenter där modellen själv väljer nästa steg och verktyg utifrån uppgiften och återkopplingen ([Anthropic, 2024](https://www.anthropic.com/research/building-effective-agents)). RAG innebär här att relevant information hämtas och tillförs modellen när ett svar skapas; det innebär inte i sig att systemet arbetar självständigt.

Med *harness* avser jag den programvara runt modellen som organiserar körningen: verktygsanrop, kontext, sparat arbetsläge och kontroller. Sådant stöd kan hjälpa en agent att fortsätta ett arbete över flera sessioner ([Anthropic, 2025](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)). I kalkylfallet blir frågan vilka moment AI får föreslå eller utföra, hur resultat granskas och vilka beslut jag behåller. Att ett verktyg kan redigera filer visar inte ensamt hur självständigt det arbetar. Inventeringen ska därför beskriva faktiskt använda funktioner och skilja dem från möjliga framtida agentfunktioner.

### Identifiera ansvar

Samarbetet med generativ AI kräver att jag formulerar mål, avgränsningar och instruktioner, ger relevant kontext och väljer verktyg och kontroller. AI kan föreslå kod, frågor, struktur och formuleringar, men förslagen behöver testas och omarbetas.

I dag äger, förvaltar och använder jag kalkylerna och jag granskar kod och resultat. En möjlig framtid är att kalkylmodeller publiceras på [akademins webbplats](https://skanesvindkraftsakademi.se/). Det skulle kräva att akademin tar ansvar för att kalkylerna fungerar och räknar rätt, vilket jag inte kan besluta om ensam. Det är verksamhetsledaren som på styrelsens uppdrag beslutar vad som ska vara på akademins hemsida.

### Avgränsning och vald process

Den process jag inventerar är kommunikationen om vindkraftens ekonomi, både generellt och vid konkreta lokala etableringar. Rapporten analyserar AI-stödd utveckling av kalkyl- och beslutsverktyg i den kommunikationen. Fokus är hur generativ AI kan hjälpa till när modeller byggs, förbättras och förklaras – inte att låta en språkmodell ersätta kalkylens kontrollerbara beräkningar.

Det här är en fokuserad inventering av en enda process. Jag har valt den därför att intäktsdelning är ett aktuellt ämne: intäktsdelningslagen (2026:1113) är ny och kan beröra många närboende, och ämnet står på programmet för föreningens årsmöte den 19 november 2026 ([Skånes vindkraftsakademi, 2026](https://www.linkedin.com/posts/sk%C3%A5nes-vindkraftsakademi_p%C3%A5-torsdag-%C3%A4r-det-dags-f%C3%B6r-sk%C3%A5nes-vindkraftsakademis-activity-7528364820270751744-ImjT)). Samma tabell och samma frågor om nytta, risk och ansvar kan användas för nästa process, och flera fokuserade inventeringar kan tillsammans ge en bild av hela organisationen. En organisation som vill ha en total inventering kan börja bredare, till exempel med Modlitbas kartläggning (2025, s. 76–79), och använda ett fokuserat exempel som det här för att se hur bedömningen görs i detalj.

Avgränsningen gäller utvecklingsprocessen och kalkylens två användningar: generellt som kunskapskälla om vindkraftens ekonomi för olika parter, och i konkreta fall som beslutsunderlag när en vindkraftspark ska byggas. Vindkraftsekonomin behandlas där den behövs för att analysera AI-användning, nytta och risk. Som huvudexempel har jag valt vindkraftsersättning till ägare av bostadsbyggnader nära vindkraftsanläggningar, enligt [lag (2026:1113) om intäktsdelning från vindkraftsanläggningar](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/) (i rapporten kallad intäktsdelningslagen), som trädde i kraft den 1 juli 2026. Vilka anläggningar och byggnader som omfattas beror på intäktsdelningslagens (2026:1113) villkor och övergångsbestämmelser. Kalkylen analyseras som beslutsunderlag, inte som ersättning för en rättslig bedömning.

[KENT: bekräfta vad som ligger utanför, till exempel att enskilda personers rätt till ersättning inte prövas, och om ett visst geografiskt område gäller.]

### Metod och underlag

Analysen bygger på jämförelser mellan kalkylens olika versioner, tidigare arbetsmaterial och min erfarenhet av att utveckla ekonomiska kalkyler. Utvecklingen från äldre webbkalkyler till en interaktiv modell med flera aktörsperspektiv beskrivs också i mitt blogginlägg om att göra vindkraftens ekonomi synlig ([Lundgren, 2026b](https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/)). Som jämförelsematerial använder jag den äldre webbkalkylen ([Lundgren, 2024](https://kentlundgren.se/kalkyler/vindkraftskalkyl_old.html)) och en senare kalkylversion ([Lundgren, 2025](https://kentlundgren.se/kalkyler/vindkraftskalkyl.html)). Den nuvarande versionen, *Vindkraftens ekonomi – fem perspektiv*, beskrivs under Beskriv din verksamhet kort ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).

För inventeringens upplägg stöder jag mig på [Modlitba (2025)](https://www.nok.se/titlar/laromedel-b2/vad-fan-ska-vi-med-ai-till/4fca71ea-b8d7-4940-871a-332c9dc68acf), kapitel 2, som presenteras i inledningen till kapitel 2. Boken är populär facklitteratur, så den ger en praktisk ram men inget vetenskapligt belägg.

Git är ett versionshanteringssystem: det sparar ändringar som versioner i projektets historik, så att utvecklingen kan följas och olika versioner jämföras ([Git, u.å.](https://git-scm.com/docs/git)). GitHub är plattformen där repot kan lagras och göras tillgängligt för granskning. Där visas Markdown-filer i läsbar form, och en README kan beskriva projektets syfte, användning och innehåll ([GitHub, u.å.a](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)). När ett projekt dessutom publiceras som en webbplats med GitHub Pages kan den interaktiva kalkylen användas i webbläsaren ([GitHub, u.å.b](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)). När jag under 2026 började använda AI-modeller i ett Git-baserat arbetsflöde blev det lättare att hantera många versioner. I mitt [Vindkraftsrepo på GitHub](https://github.com/kentlundgren/Vindkraft) kan läsaren följa dokumentation, kod och publicerade kalkylversioner. Det gör underlaget mer granskningsbart, men insyn i koden garanterar inte att antaganden eller beräkningar är korrekta; de behöver fortfarande kontrolleras.

För varje påstående om AI:s bidrag skiljer jag därför mellan vad jag själv gjorde, vad AI föreslog eller producerade och vad jag senare granskade, ändrade eller förkastade. I texten skiljer jag mellan verifierade uppgifter, egna erfarenheter, bedömningar och sådant som ännu är en hypotes.

#### AI-deklaration

I arbetet med rapporten använder jag generativ AI genom ChatGPT och AI-stöd i Cursor, samt vid vissa tillfällen Claude. AI hjälper till med struktur, textutkast, språklig bearbetning, källsökning och förslag till analys. Jag bidrar med egna erfarenheter, sakuppgifter, bedömningar och ändringar. Arbetet sker stegvis: jag redigerar texten och skriver önskemål, varefter AI bearbetar utkastet utifrån dessa. Jag granskar ändringarna och hanterar versionshistorik och publicering till GitHub via Cursor. Jag ansvarar för rapportens innehåll, källornas användning och den slutliga bedömningen.

Jag arbetar också på en metanivå: jag reflekterar över hur instruktioner, mallar, källkontroll och samspelet mellan mig och AI påverkar resultatet. Erfarenheterna dokumenteras i projektets arbetsbeskrivning och gemensamma arbetsregler för att förbättra kommande arbetsprocesser. Syftet är att utveckla både rapporten och min förmåga att använda generativ AI med omdöme. Denna deklaration gäller rapportarbetet; AI:s bidrag till själva vindkraftskalkylerna redovisas separat i inventeringen.

## 2. Kartläggning av AI-användning

Modlitba (2025, s. 73–75) beskriver en AI-transformation som en strukturerad och långsiktig förändringsprocess där organisationen steg för steg integrerar AI, och som inte bara handlar om att införa verktyg utan om att förändra sättet att arbeta. Resan innehåller bland annat fem delar: strategisk anpassning, kompetensutveckling, datahantering, processanpassning samt etiska och juridiska överväganden. Första steget är en kartläggning av nuläget, innan strategier formuleras eller pilotprojekt startas (s. 75). Den går igenom fem områden: nuvarande AI-användningar, AI-kompetens och resurser, data och infrastruktur, affärsmål och strategisk inriktning samt organisatorisk kultur och AI-mognad (s. 76–79). Jag använder dessa fem områden som lins för inventeringen av min verksamhet. Hur de täcks sammanfattas i kapitel 6.

### Lista användningar

De två perspektiven – projektörens kalkyl och kalkylen med flera aktörer – är inte automatiskt två olika AI-användningar. Inventeringen omfattar två befintliga eller möjliga användningar. En idé kan ingå utan att vara genomförd; förväntad nytta ska då skiljas från observerade resultat.

Inventeringen avgränsas här till två fall:

1. **Att utveckla och förklara kalkylscenarier.**
2. **Att analysera och förklara regler och aktörsperspektiv.**

Den gemensamma frågan är hur jag, tillsammans med generativ AI, kan göra vindkraftens ekonomiska konsekvenser och deras förutsättningar mer begripliga och granskningsbara för olika aktörer.

Kartläggningen omfattar också AI-användning som sker informellt. Modlitba (2025, s. 75) påpekar att många organisationer redan har AI-initiativ utan att kalla dem det, och att medarbetare som själva har börjat utforska tekniken kan bli värdefulla förändringsambassadörer.

### Beskriv varje användning

För varje användning beskrivs den konkreta uppgift AI utför eller skulle kunna utföra, underlag, ansvar, nytta, risk och mognadsgrad.

| Fall | Konkret arbetsuppgift och underlag | Befintligt arbete och möjlig fortsättning | Ansvar och kontroll |
|---|---|---|---|
| **1. Utveckla och förklara kalkylscenarier** | Utveckla kod och förklaringar utifrån kalkylens formler, indata och antaganden. Visa hur ett ändrat antagande påverkar projektörens och andra aktörers ekonomi. Underlag: [den publicerade vindkraftskalkylen](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html) och dess tidigare versioner. | Kalkyler har redan utvecklats tillsammans med generativ AI. En möjlig fortsättning är förklaringar anpassade till olika användare, där varje förklaring knyts till ett bestämt scenario och dess beräknade resultat. Ett sådant AI-lager i webbverktyget beskrivs här som en idé. | Jag formulerar frågorna, väljer antaganden och granskar kod och resultat. Beräkningar ska utföras i en kontrollerbar kalkyl och prövas mot kända exempel. AI:s förklaring får inte ändra eller hitta på siffror. |
| **2. Analysera och förklara regler och aktörsperspektiv** | Strukturera källor, jämföra perspektiv och formulera begripliga förklaringar om intäktsdelning: vad följer av reglerna, vad bygger på antaganden och vad är ett eget förbättringsförslag? Underlag: rättskällor och min bloggtext *Besked före beslut* ([Lundgren, 2026c](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/)). | Bloggtexten har tagits fram tillsammans med generativ AI. En möjlig fortsättning är en källanknuten frågeguide för exempelvis närboende och projektörer. En återkommande eller automatiserad tjänst är en utvecklingsidé, inte en redovisad införd lösning. | Jag väljer frågor och källor, granskar tolkningar och ansvarar för slutsatserna. Förklaringar måste skilja gällande regler från policyförslag och visa källornas datum. AI ska inte avgöra en enskild persons rätt till ersättning. |

Skillnaden ligger i huvuduppgiften: fall 1 handlar om **vad en kalkyl visar under angivna antaganden**, fall 2 om **hur regler, frågor och perspektiv ska förstås och beskrivas**. Intäktsdelningen kan användas som gemensamt exempel. Att bredda problemformuleringen och kritiskt granska resultaten ingår i båda fallen; de behöver inte bli ytterligare användningsfall.

Den offentliga kalkylen och bloggtexten visar att material har producerats; de visar inte i sig att andra har förstått det bättre eller att arbetet blivit effektivare.

#### Behovet av aktörsperspektiv

En traditionell kalkyl med projektörsperspektiv kan ge en avgränsad bild av investeringens ekonomi. En modell med flera aktörsperspektiv kan synliggöra hur samma projekt kan påverka olika grupper ekonomiskt: projektören, markägaren, kommunen/samhället, andelsägare och närboende. Perspektiven visas i *Vindkraftens ekonomi – fem perspektiv* ([Lundgren, 2026a](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)).

Behovet av flera perspektiv hänger samman med de två fallen: i fall 1 gör perspektiven det möjligt att visa vem som påverkas av ett ändrat antagande, och i fall 2 att förklara vad reglerna betyder för olika aktörer.

Aktörsperspektivet har sitt ursprung i min licentiatavhandling. Där utgick jag från aktörssynsättet (Arbnor & Bjerke, 1997): aktörers föreställningar om verkligheten är en del av den, och olika aktörer kan därför förstå samma sak olika (Lundgren, 1998, s. 26). Med typaktörer och tre logiker, affärsmässig produktionslogik, affärsmässig hållbarhetslogik och socio-ekonomisk hållbarhetslogik, beskrev jag hur aktörer i energisystemet bedömer konkurrenskraft på olika sätt (s. 77–99). Det finns en parallell till institutionella logiker (Thornton, Ocasio & Lounsbury, 2012) och till intressentteori, där [Mitchell, Agle & Wood (1997)](https://doi.org/10.5465/amr.1997.9711022105) skiljer parter efter makt, legitimitet och angelägenhet. För vindkraft används begreppet social acceptans, med lokal acceptans som en av tre dimensioner ([Wüstenhagen, Wolsink & Bürer, 2007](https://doi.org/10.1016/j.enpol.2006.12.001)). Kalkylens fem perspektiv kan läsas som en tillämpning: samma projekt ser olika ut för parter med olika logik. [KENT: pröva hypotesen att perspektiven motsvarar logikerna. Närboende saknar motsvarighet bland avhandlingens typaktörer. KONTROLLERA mot Arbnor & Bjerke (1997), Thornton et al. (2012) och de två artiklarna innan citering.]

### Bedöm mognad

Mognadsgraden skiljer här mellan det som har gjorts och det som är en idé. Underlaget är hämtat ur utkast 4d.

| Fall | Del | Mognad | Underlag |
|---|---|---|---|
| 1 | Kalkylutveckling tillsammans med generativ AI | [KENT: bekräfta, till exempel "införd i eget arbete"] | Kalkylerna har utvecklats tillsammans med generativ AI. |
| 1 | AI-lager med förklaringar för olika användare | Idé | Beskrivs som en möjlig fortsättning. |
| 2 | Regelanalys och bloggtext tillsammans med generativ AI | [KENT: bekräfta, till exempel "genomförd i eget arbete"] | Bloggtexten har tagits fram tillsammans med generativ AI. |
| 2 | Källanknuten frågeguide | Idé | Beskrivs som en möjlig fortsättning. |
| 2 | Återkommande eller automatiserad tjänst | Idé | Utvecklingsidé, inte en införd lösning. |

Mognaden kan också bedömas för verksamheten som helhet. Modlitba (2025, s. 79–81) föreslår ett AI-mognadstest med tio nyckelområden, bland annat ledarskap, data, teknik, användningsfall, organisation, kompetens, kultur samt säkerhet och etik. Hon beskriver också en trappmodell från nybörjare via utforskare, utövare och professionell till ledare, som kommer från det tyska bolaget AppliedAI och som AI Sweden använder i sina mognadsmätningar. [KENT: placera din verksamhet, eller ditt eget arbete med AI, på trappan och motivera kort.]

## 3. Enkel Inventeringstabell

### Nyttobedömning

Min avhandling skiljer mellan affärsmässig produktionslogik, affärsmässig hållbarhetslogik och socio-ekonomisk hållbarhetslogik ([Lundgren, 1998, s. 93–99](../../litteratur/More/Lundgren_1998_lic_arbete.pdf)). De betonar produktionskostnader, efterfrågan på miljöprofilerade produkter respektive lokal förankring och legitimitet. Här använder jag dem som analytiska perspektiv på vilka frågor ett beslutsunderlag behöver belysa. Avhandlingen behandlar främst bioenergi och energiföretag; överföringen till vindkraft är min tillämpning här.

Min bloggtext *Besked före beslut* (Lundgren, 2026c), som jag tog fram tillsammans med generativ AI, konkretiserar ett informationsbehov: att kunna redovisa beräknade ersättningsintervall och antaganden före beslut. Textens förslag om tidiga besked, automatisk rätt och uppföljning är policyförslag som ska skiljas från gällande regler. Långhult/Lunnarsbo används i underlaget som räkneillustration och Önnerup som kontrastfall. [KENT: förklara kort vad Långhult/Lunnarsbo och Önnerup är, till exempel vilka vindkraftsparker och i vilken kommun.] Intäktsdelningslagen (2026:1113) trädde i kraft den 1 juli 2026, och jag har inte identifierat några dokumenterade utbetalningsfall. Inventeringen bedömer möjliga nyttor och risker, inte uppmätta effekter.

Att material är tillgängligt på webben innebär inte automatiskt att läsaren kan förstå eller granska det. I fall 1 kan samarbetet med AI användas för att tydliggöra sambandet mellan antagande, beräkning och resultat. I fall 2 kan det användas för att skilja en regel från en tolkning eller ett förslag och förklara vad olika aktörer behöver veta. Nyttan kan prövas genom att låta läsare besvara några konkreta frågor utifrån materialet: kan de hitta rätt källa, förstå vad som påverkar utfallet och skilja ett scenario från ett besked om faktisk ersättning? Det är ett förslag, inte en genomförd mätning. 

Den möjliga nyttan är att fler antaganden och ekonomiska konsekvenser kan bli synliga i ett gemensamt beslutsunderlag. För att bedöma nyttan behöver jag jämföra vad användaren kunde förstå eller göra med den äldre kalkylen med vad den nyare modellen tillför. [KENT: ge ett konkret exempel på en fråga som den bredare modellen kan besvara bättre – och vad den inte kan besvara.]

Modlitba (2025, s. 83–86) rekommenderar att börja där teknisk genomförbarhet möter verklig verksamhetsnytta, med en modell som hon tillskriver Andrew Ng. Idéerna bedöms sedan tekniskt (kan AI utföra uppgiften, finns data, vilka resurser krävs) och affärsmässigt (effektivisering eller lägre kostnader, ökade intäkter, förbättrade eller nya tjänster), och sorteras i en fyrfältare efter effekt och ansträngning. Hög effekt och låg ansträngning är den mest lockande kombinationen, medan hög effekt och hög ansträngning ofta behöver brytas ner i mindre etapper. Jag läser effekt som hur mycket en del ökar berörda parters förståelse och möjlighet att granska, och ansträngning som tid, kunskap, granskning och risk. Delarna i mognadstabellen i kapitel 2 placeras så:

| Del | Effekt | Ansträngning | Ruta |
|---|---|---|---|
| 1a. Kalkylutveckling med generativ AI | Hög för mitt eget arbete. För andra oklar: kalkylen är offentlig, men jag vet inte om någon annan har använt den | Låg, eftersom verktygen finns | **Ja** |
| 1b. AI-lager med förklaringar för olika användare | Potentiellt hög | Hög: kvalitetskontroll, kostnad och risk att AI ändrar siffror | **Kanske** (hög effekt, hög ansträngning): dela upp i etapper |
| 2a. Regelanalys och bloggtext | Medel till hög, eftersom nya regler behöver förklaras | Låg till medel, eftersom arbetet redan är gjort | **Ja** |
| 2b. Källanknuten frågeguide | Hög om närboende och projektörer använder den | Hög: källor, granskning och uppdatering | **Kanske** (hög effekt, hög ansträngning): dela upp i etapper |
| 2c. Återkommande eller automatiserad tjänst | Oklar | Mycket hög, med rättsliga risker | **Nej**, tills vidare |

[KENT: bekräfta eller ändra rutorna. 2a kan också bli Kanske (låg effekt, låg ansträngning). Ange också vad som motsvarar "affärsnytta" i din verksamhet, där nyttan inte främst är intäkter.]

Jag behöver också bedöma processens strategiska betydelse och prioritera AI-initiativ utifrån verksamhetsmål, nytta, risk och genomförbarhet. [KENT: ange vilket mål eller vilket beslut kalkylen ska stödja och varför det är prioriterat.]

### Inventeringstabell

Tabellen sammanfattar de två fallen. Den bygger på beskrivningarna i kapitel 2 och på nyttobedömningen ovan.

| AI användning | Syfte | Data | Ansvarig | Risk/Åtgärd |
|---|---|---|---|---|
| 1. Utveckla och förklara kalkylscenarier | Göra ändrade antaganden och deras effekt på olika aktörers ekonomi begripliga | Kalkylens formler, indata, antaganden och tidigare versioner. [KENT: bekräfta att inga personuppgifter ingår] | Jag (Kent) granskar kod och resultat. [KENT: vem förvaltar kalkylen?] | Risk: AI-förklaring ändrar eller hittar på siffror. Åtgärd: beräkningar sker i en kontrollerbar kalkyl och prövas mot kända exempel |
| 2. Analysera och förklara regler och aktörsperspektiv | Skilja gällande regler från antaganden och förbättringsförslag och förklara vad de betyder för olika aktörer | Rättskällor ([SFS 2026:1113](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/)) och bloggtexten (Lundgren, 2026c) | Jag (Kent) väljer frågor och källor och granskar tolkningar | Risk: tolkning presenteras som regel, eller AI avgör en enskild persons rätt till ersättning. Åtgärd: visa källornas datum och skilj regel från förslag |

## 4. Risk, Juridik och Etik

### Risknivå

När kalkylen går från ett perspektiv till flera ökar antalet antaganden och samband. Modellen kan därför bli svårare att överblicka och kontrollera än en enkel kalkyl i Excel som fokuserar på en aktör. En mer avancerad presentation kan också få resultat att se säkrare ut än vad indata och antaganden medger. [KENT: bekräfta om detta motsvarar din erfarenhet och ge ett konkret exempel.]

Modlitba (2025, s. 79) nämner bristande insyn i hur AI-system fattar beslut, hantering av personuppgifter och risk för diskriminering som exempel på risker att identifiera, och menar att en tydlig AI-policy för etik och ansvar kan vara avgörande för långsiktigt förtroende.

AI-förordningen (förordning (EU) 2024/1689; [Europaparlamentet och Europeiska unionens råd, 2024](https://data.europa.eu/eli/reg/2024/1689/oj)) är den bindande ramen. Den delar in AI-användning efter risk, och kraven beror på hur systemet används. Bilaga III räknar upp högriskanvändningarna, till exempel rekrytering, bedömning av studenters resultat och prövning av rätten till offentliga förmåner. Kalkylerna i fall 1 och 2 finns inte bland dem: de visar hur antaganden och regler påverkar olika aktörers ekonomi och fattar inga beslut om enskilda personer. Jag bedömer därför att de inte är högrisk.

Artikel 50.4 gäller transparens ([Europaparlamentet och Europeiska unionens råd, 2024](https://data.europa.eu/eli/reg/2024/1689/oj)): AI-genererad text som publiceras för att informera allmänheten i frågor av allmänintresse ska märkas, om inte en person har granskat texten och har redaktionellt ansvar för den. Kalkylens förklaringar kan vara sådan text. Därför ska de granskas av en kalkylkunnig person eller ekonom och en jurist innan de publiceras, och kalkylen ska visa vem som har granskat och vem som ansvarar. Då krävs ingen märkning enligt artikel 50.4, och om föreningen ändå vill märka kalkylen som framtagen med AI är en fråga för föreningen.

Kalkylen är ett underlag och inte ett beslut. Min bedömning är att de som använder den, till exempel närboende och investerare, gör det på eget ansvar, men att kalkylen ska ge dem möjlighet att pröva själva. I fall 1 ska antagandena och deras effekt synas, och i fall 2 ska gällande regel skiljas från antagande och förslag, med källornas datum. En tanke för framtiden är en dialog vid kalkylen, där nya användare kan se vad andra tycker och frågar om.

Regeringens AI-strategi ([Regeringskansliet, 2026](https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/)) är inte bindande. Den anger en riktning: Sverige ska vara bland de tio främsta AI-nationerna, och AI ska ge samhällsnytta, hållbar utveckling, konkurrenskraft och innovation (s. 7). Strategin säger att den som använder AI ansvarar för både avsiktliga och oavsiktliga konsekvenser (s. 15). Det stämmer med att användarna ansvarar för hur de använder kalkylen och att jag ansvarar för att förklaringarna är granskade. Fall 2 ligger också i linje med strategins tanke att lagar ska göras maskinläsbara så att AI kan öka förståelsen för och efterlevnaden av regler (s. 9): AI hjälper till att läsa och förklara intäktsdelningslagen (2026:1113). Strategin vill samtidigt förenkla regelverk och att ny AI-lagstiftning inte införs förrän standarder finns (s. 3, 9). Någon särskild lag för en kalkyl som min finns därmed inte, och skyddet för användarna behöver i hög grad byggas in av mig: synliga antaganden, källdatum och granskade förklaringar.

### Data och integritet

I dag sparas inga uppgifter i kalkylen. Den består av en webbsida (frontend) utan databas, så inga namn eller andra personuppgifter lagras eller förs vidare. Om kalkylen byggs ut med en backend, till exempel för användarkonton eller för dialogen mellan användare, ändras det. Då hanteras uppgifter om varje användare, och namn och andra personuppgifter måste skyddas med säker hantering, bland annat lösenord, enligt EU:s dataskyddsförordning ([Europaparlamentet och Europeiska unionens råd, 2016](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32016R0679)). Strategin säger att cybersäkerhet, dataskydd och immateriella rättigheter alltid ska beaktas vid datadelning (s. 10). Dataskyddsfrågan behöver därför avgöras innan en backend byggs.

Kartläggningen frågar också efter datakvalitet, plattformar och integration (Modlitba, 2025, s. 78). I mitt fall är infrastrukturen enkel: kalkylen publiceras som en webbsida via GitHub Pages och versionshanteras i Git (se Metod och underlag). [KENT: bekräfta, och ange hur kalkylens indata och källdatum kvalitetssäkras.]

### Mänsklig kontroll

En central kontrollfråga är vem som granskar AI-genererade formler, kod och förklaringar. [KENT: beskriv din faktiska granskningsrutin, till exempel jämförelse med manuella beräkningar, testfall, källkontroll eller kodgranskning.] AI-stöd kan bidra till arbetet, men ansvaret för kalkylens användning, antaganden och publicerade resultat behöver vara tydligt placerat. [KENT: ange vem som i praktiken förvaltar kalkyl och källor.]

### Stoppsignal

Stoppsignalen gäller AI som påverkar rättighetsnära beslut. I fall 2 ska AI inte avgöra en enskild persons rätt till ersättning. [KENT: bedöm om någon av användningarna kan påverka individers rättigheter, och i så fall när frågan ska lyftas till juridiskt, etiskt och informationssäkerhetsansvarigt stöd innan fortsatt användning.]

Den samlade avvägningen bör visa vilken nytta den bredare modellen ger, vilka risker som följer av fler antaganden och hur riskerna kan minskas genom dokumentation, mänsklig kontroll och tydlig redovisning av osäkerhet. [KENT: ta ställning till om fortsatt utveckling är motiverad och på vilka villkor.]

## 5. Kompetens och Styrning

### AI-kompetens

Fallet väcker frågor om vilken kompetens som krävs för att använda generativ AI i kalkylutveckling. Den som leder arbetet behöver kunna bedöma både verksamhetsbehovet och hur beräkningar, antaganden och AI-bidrag ska granskas. [KENT: knyt detta till din erfarenhet av ekonomistyrning och ange vilka roller som behöver förstå AI-systemets möjligheter, begränsningar, risker och ansvar.]

Modlitba (2025, s. 77 och 82–83) menar att kompetensen behöver kartläggas både hos enskilda och i organisationen, att ledningsgrupp och styrelse bör få relevant kunskap och att alla som ansvarar för strategi, innovation och affärsutveckling bör få en grundutbildning. AI-kompetensen behöver inte bara finnas hos tekniska specialister. Kartläggningen omfattar också externa partners och leverantörer (s. 77–78). [KENT: vilka partners finns för kalkylarbetet, till exempel akademins medlemmar?]

Strategin säger att arbetsgivare behöver stärka AI-kompetensen bland sina medarbetare (Regeringskansliet, 2026, s. 17). I en förening där ledamöter arbetar ideellt eller på sin ordinarie arbetstid delas ansvaret mellan föreningen och ledamöternas arbetsgivare.

Artikel 4 i [AI-förordningen (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:02024R1689-20260727) kräver åtgärder som stöder AI-kunnigheten hos dem som arbetar med AI för verksamhetens räkning, anpassade till förkunskaper och sammanhang, men inte någon särskild kunskapsnivå hos den enskilde. För en liten ideell förening är det rimligt att åtgärderna blir små. Det som väger tyngst är att kalkylen granskas av en kalkylkunnig person eller ekonom, att förklaringarna av reglerna granskas av en jurist som kan läsa lagen rätt, och att granskarna känner till vanliga AI-fel, till exempel påhittade siffror och tolkningar som presenteras som regel. En AI-agent kan göra en förgranskning i varje roll, men en person behöver ta det slutliga ansvaret. För egen del behöver jag kunna granska AI-genererad kod, kontrollera källor och bedöma om förklaringar kan vilseleda exempelvis närboende eller investerare. Instruktionsfiler och skills kan stödja arbetet, men ersätter inte mitt eget omdöme.

### Styrning

Erfarenheterna från min AI-stödda kalkylutveckling kan ligga till grund för en enkel AI-policy. Den bör utgå från hur AI redan används, vilka möjligheter och risker jag har identifierat och vilka ramar som behövs för data, granskning och publicering. Om arbetssättet ska användas inom Skånes vindkraftsakademi behöver berörda roller såsom verksamhetsledaren och ordföranden i föreningen involveras och ansvar förankras. Instruktionsfiler och skills kan omsätta policyn i arbetsrutiner, medan upptäckta fel och nya erfarenheter används för att pröva och förbättra både rutinerna och policyn.

[KENT: finns policy, rutin, beslutsgång, dokumentation och uppföljning för AI-användningen i kalkylarbetet? Utgångspunkt: versionshistoriken i Git (se Metod och underlag) och de gemensamma arbetsreglerna som nämns i AI-deklarationen.]

Kartläggningen tittar också på kultur och förändringsberedskap, till exempel om det finns mandat, stöd och engagemang från ledningen (Modlitba, 2025, s. 79). [KENT: hur ser det ut i akademin, eller i ditt eget arbete, när det gäller att använda generativ AI i kommunikationen?]

### Ledningsfråga

[KENT: vad behöver du som chef eller ledare besluta, förankra eller följa upp? Utgångspunkt från 4d: vem som får föreslå förändringar, vem som kontrollerar dem, hur antaganden dokumenteras och när en uppdatering är tillräckligt säker för att användas.]

### Dokumentation

[KENT: hur sparas inventering, riskbedömning, beslut och ansvarsfördelning? Rekommendationen i kapitel 6 om att dokumentera vilka AI-verktyg som användes och vad de bidrog med i varje kalkylversion hör hit.]

## 6. Slutsats och prioriterad handlingsplan i korthet

Kapitlet är en kort avslutning och en försmak. Den fullständiga handlingsplanen görs i delprov 2, som bygger vidare på inventeringen.

### Slutsats

[KENT: Besvara rapportens syfte. Sammanfatta vad AI har bidragit med eller skulle kunna bidra med, skilj observerad från förväntad nytta, vilka risker som kräver kontroll och vad du rekommenderar som nästa steg. Slutsatsen ska uttrycka din bedömning, inte enbart återge tidigare avsnitt.]

Tabellen sammanfattar hur kartläggningens fem områden (Modlitba, 2025, s. 76–79) täcks av inventeringen.

| Område | Vad inventeringen visar i min verksamhet | Var i rapporten | Återstår |
|---|---|---|---|
| 1. Nuvarande AI-användningar | Två fall med generativ AI: kalkylutveckling och regelanalys. AI-lager, frågeguide och tjänst är idéer | Kapitel 2 och 3 | [KENT: finns fler användningar, även informella?] |
| 2. AI-kompetens och resurser | [KENT: vilka kan granska kalkyler och förklaringar, och vilken kompetens saknas?] | Kapitel 5, AI-kompetens | [KENT] |
| 3. Data och infrastruktur | Kalkylen är en offentlig webbsida via GitHub Pages med versionshistorik i Git | Kapitel 1 (Metod och underlag) och 4 | [KENT: hur kvalitetssäkras indata och källdatum?] |
| 4. Affärsmål och strategisk inriktning | Transparenta kalkyler som visar flera parters ekonomi, i linje med akademins syfte. Prioritering enligt fyrfältaren | Kapitel 1, 3 och 6 | [KENT: bekräfta målet] |
| 5. Organisatorisk kultur och AI-mognad | [KENT: placera verksamheten på mognadstrappan] | Kapitel 2 (Bedöm mognad) och 5 (Styrning) | [KENT] |

### Prioriterad handlingsplan i korthet

Prioriteringen kan följa samma tanke som i nyttobedömningen: åtgärder med hög effekt och låg ansträngning först, och större satsningar delas upp i etapper (Modlitba, 2025, s. 85–86).

Följande är arbetsförslag att ta ställning till, inte mina färdiga rekommendationer:

| Prioritet | Åtgärd/initiativ | Motivering | Ansvarig roll | Första steg/tid | Uppföljning |
|---|---|---|---|---|---|
| 1 | Dokumentera vilka AI-verktyg som användes och vad de bidrog med i respektive kalkylversion | Strategin lyfter transparens och spårbarhet (Regeringskansliet, 2026, s. 13) och att användaren ansvarar för konsekvenserna (s. 15). [KENT: vilka egna belägg finns?] | [KENT] | [KENT] | AI-bidrag kan särskiljas från egna beslut och manuellt arbete |
| 2 | Skapa en enkel kontrollista för formler, antaganden, källor och AI-genererad kod | Användaren ansvarar för avsiktliga och oavsiktliga konsekvenser (Regeringskansliet, 2026, s. 15), och kontrollen minskar risken för påhittade siffror. [KENT: vilka kontroller använder du redan?] | [KENT] | [KENT] | Ändringar kan följas och granskas innan publicering |
| 3 | Prioritera nästa utvecklingssteg utifrån användarbehov och risk | [KENT: vem är viktigaste användargruppen och vilken fråga behöver kalkylen hjälpa till att besvara?] | [KENT] | [KENT] | [KENT: välj mått eller kontroll] |

Prioriteringen behöver bli tydlig. En genomförbar AI-roadmap med ansvarig roll, första steg och uppföljning fördjupas i delprov 2. [KENT: välj vilka förslag du själv står bakom.]

## 7. Individuell reflektion

Min erfarenhet är att användning av färdiga generativa AI-verktyg kräver mer eget arbete än vad ordet ”användare” kan antyda. Jag behöver utveckla och underhålla instruktioner i exempelvis CLAUDE.md och skill-filer, ge relevant projektkontext och utforma rutiner för granskning och återkoppling. Arbetet gäller därmed både den konkreta uppgiften och hur samarbetet med AI ska fungera.

Med McKinseys indelning tolkar jag mitt arbetssätt som en kombination av taker och shaper: jag använder befintliga modeller men anpassar hur de ingår i mitt arbete ([McKinsey & Company, 2023](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/technologys-generational-moment-with-generative-ai-a-cio-and-cto-guide)). Anpassningen sker framför allt genom instruktioner, kontext, verktyg och kontroller runt modellen. Det är något annat än att finjustera modellens parametrar genom träning. Indelningen hjälper mig att beskriva vad jag anpassar, men synliggör inte i sig hur mycket löpande arbete detta kräver.

För min nyttobedömning innebär det att även tiden för att utveckla, testa och underhålla arbetssättet behöver räknas med. Återanvändbara instruktioner kan vara en investering, men deras värde behöver bedömas utifrån om de faktiskt minskar omarbete eller förbättrar kvaliteten. I kalkylutvecklingen blir det därför relevant att följa både AI:s bidrag och den mänskliga insats som behövs för att resultaten ska kunna användas.

Jag kan använda strategisk framsyn genom att följa utvecklingen inom AI, energipriser och regelverk samt pröva olika framtidsscenarier i vindkraftskalkylerna. Det hjälper mig att identifiera behov av förändringar i verktyg och arbetssätt i tid och förstå konsekvenserna för olika berörda aktörer.

Ledarskap i en ideell förening ser annorlunda ut än i en organisation med anställda. Ledamöterna leder, verkar och arbetar ideellt eller på sin arbetstid, och ingen kan beordra någon att använda AI på ett visst sätt. Ledarskapet blir i stället att skapa utrymme och trygghet. Min erfarenhet är att det händer spännande saker i mindre organisationer, där det finns frihet att testa, leka och lära tillsammans med generativ AI. Strategin nämner civilsamhället i samband med standardisering (Regeringskansliet, 2026, s. 11) men inte föreningars egen AI-användning, så erfarenheterna behöver samlas inifrån.

Friheten har ett pris: utan gemensamma ramar kan varje ledamot göra på sitt sätt, och fel upptäcks sent. Som ledare skulle jag därför vilja ha tre saker. Den första är en enkel regel om vem som granskar innan något publiceras: en kalkylkunnig person eller ekonom och en jurist (se kapitel 4 och 5). Den andra är att ledamöterna delar vad de har provat och vad som gick fel. Den tredje är en tydlig gräns: AI får testas fritt så länge resultatet inte publiceras eller påverkar enskilda, men publicerade kalkyler och förklaringar granskas. [KENT: stämmer detta med vad du själv skulle prioritera, och vilken av de tre kommer först?]

## Referenser

Anthropic (2024) *Building effective AI agents*. Tillgänglig på: https://www.anthropic.com/research/building-effective-agents (Hämtad: 11 november 2026). (*Utvecklarens beskrivning av skillnaden mellan fasta arbetsflöden och agenter som väljer steg och verktyg; används som teknisk primärkälla, inte som oberoende effektutvärdering.*)

Anthropic (2025) *Effective harnesses for long-running agents*. 26 november. Tillgänglig på: https://www.anthropic.com/research/effective-harnesses-for-long-running-agents (Hämtad: 11 november 2026). (*Beskriver hur programvara runt modellen stödjer arbetsläge, kontinuitet och kontroll vid längre agentuppgifter.*)

Arbnor, I. & Bjerke, B. (1997) *Methodology for Creating Business Knowledge*. SAGE. (*Beskriver tre metodsynsätt, analytiskt, system och aktörer; aktörssynsättet är grunden i avhandlingen Lundgren (1998).*) [KONTROLLERA: utgåva och sidor.]

Europaparlamentet och Europeiska unionens råd (2016) *Förordning (EU) 2016/679 om skydd för fysiska personer med avseende på behandling av personuppgifter och om det fria flödet av sådana uppgifter och om upphävande av direktiv 95/46/EG (dataskyddsförordningen).* Europeiska unionens officiella tidning, L 119. Tillgänglig på: https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32016R0679 (Hämtad: 16 november 2026). (*EU:s dataskyddsregler; används för att visa att namn och andra personuppgifter måste skyddas om kalkylen får en backend. Tillämpningen på kalkylen är min egen reflektion.*)

Europaparlamentet och Europeiska unionens råd (2024) *Förordning (EU) 2024/1689 om harmoniserade regler för artificiell intelligens (AI-förordningen).* Europeiska unionens officiella tidning, L 2024/1689. Tillgänglig på: https://data.europa.eu/eli/reg/2024/1689/oj (Hämtad: 11 november 2026). Konsoliderad lydelse 27 juli 2026: [https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:02024R1689-20260727](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:02024R1689-20260727) (Hämtad: 16 november 2026). (*EU:s rättsakt för den rättsliga analysen; artikel 4 används för kopplingen mellan AI-kunnighet, användningssammanhang och berörda personer, artikel 50 för transparens och bilaga III för högriskområdena. Tillämpningen på kalkylarbetet är min egen reflektion.*)

Git (u.å.) *Git documentation*. Tillgänglig på: https://git-scm.com/docs/git (Hämtad: 11 november 2026). (*Officiell dokumentation som beskriver Git som ett distribuerat versionshanteringssystem.*)

GitHub (u.å.a) *About repository README files*. Tillgänglig på: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (Hämtad: 11 november 2026). (*Beskriver hur README-filer presenterar ett projekts syfte och hjälper besökare att förstå repot.*)

GitHub (u.å.b) *Creating a GitHub Pages site*. Tillgänglig på: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (Hämtad: 11 november 2026). (*Beskriver publicering av statiska webbplatser från ett GitHub-repo.*)

Lundgren, K. (1998) *Förnyelsebara energibärares nuvarande och framtida konkurrenskraft: föreställningar om konkurrenskraft.* Licentiatavhandling, Lunds universitet. https://doi.org/10.13140/RG.2.2.19213.23528. (*Bakgrund till Kents miljöekonomiska perspektiv.*)

Lundgren, K. (2014) *Lönsamhet för stora (3 MW) vindkraftverk.* Blogginlägg. Tillgänglig på: https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html (Hämtad: 11 november 2026). (*Äldre kalkyl och bakgrund till den tidiga projektörskalkylen.*)

Lundgren, K. (2017) *Granskning av möjligheter och svårigheter i samband med ”public participation” (samråd)*. https://doi.org/10.13140/RG.2.2.27746.02242. Fulltext: https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/litteratur/M%C3%B6jligheter_och_sv%C3%A5righeter_i_samband_med_pp_KentLundgren_170609.pdf. (*Kents egen granskning av samråd kring etableringar; används som bakgrund till att vindkraftsetableringar väcker åsikter och att samrådet har både möjligheter och svårigheter.*)

Lundgren, K. (2024) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl_old.html (Hämtad: 11 november 2026). (*Äldre webbkalkyl med huvudsakligt fokus på projektörens ekonomi.*)

Lundgren, K. (2025) *Vindkraftskalkyl* [interaktiv kalkyl]. Tillgänglig på: https://kentlundgren.se/kalkyler/vindkraftskalkyl.html (Hämtad: 11 november 2026). (*Senare kalkylversion som används för att följa modellens utveckling.*)

Lundgren, K. (2026a) *Vindkraftens ekonomi – fem perspektiv* [interaktivt verktyg]. Tillgänglig på: https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html (Hämtad: 11 november 2026). (*Fallmaterial för den nyare kalkylen med flera aktörsperspektiv.*)

Lundgren, K. (2026b) ‘Att göra vindkraftens ekonomi synlig’. *Controller, lärare och coach utan gränser reflekterar*, 13 juli. Tillgänglig på: https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/ (Hämtad: 11 november 2026). (*Beskriver bakgrund och utveckling från kalkyler till interaktiva webbsidor.*)

Lundgren, K. (2026c) ‘Besked före beslut: att förbättra intäktsdelningen från vindkraft till närboende’. Blogginlägg, 11 november. Tillgänglig på: https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/ (*Författarens analys och förbättringsförslag, framtagen tillsammans med generativ AI. Används som fallmaterial, inte som primärkälla för gällande rätt eller belägg för observerade ersättningseffekter.*)

McKinsey & Company (2023) *Technology’s generational moment with generative AI: A CIO and CTO guide*. 11 juli. Tillgänglig på: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/technologys-generational-moment-with-generative-ai-a-cio-and-cto-guide (Hämtad: 16 november 2026). (*Originalbeskrivningen av taker, shaper och maker; används för reflektionen om anpassning av AI-arbetssätt och integration, som inte förutsätter modellträning.*)

Mitchell, R.K., Agle, B.R. & Wood, D.J. (1997) ‘Toward a theory of stakeholder identification and salience: Defining the principle of who and what really counts’, *Academy of Management Review*, 22(4), s. 853–886. https://doi.org/10.5465/amr.1997.9711022105. (*Ger ett sätt att avgöra vilka parter som räknas, utifrån makt, legitimitet och angelägenhet; används för att motivera kalkylens fem perspektiv.*) [KONTROLLERA mot originalet.]

Modlitba, P. (2025) *Vad fan ska vi med AI till? Affärsutveckling & innovation med AI*. 1 uppl. Stockholm: Natur & Kultur. E-bok (Epub3), ISBN 9789127470422. Tillgänglig på: https://www.nok.se/titlar/laromedel-b2/vad-fan-ska-vi-med-ai-till/4fca71ea-b8d7-4940-871a-332c9dc68acf (Hämtad 2026-11-16). (*Kursbok; kapitel 2 beskriver en AI-resa som börjar med kartläggning av nuläget och val av ett första användningsområde, och används som ram för inventeringen. Populär facklitteratur, inte en forskningsöversikt.*)

OECD (2024) *Explanatory memorandum on the updated OECD definition of an AI system*. OECD Artificial Intelligence Papers, nr 8. Paris: OECD Publishing. https://doi.org/10.1787/623da898-en. (*Ger en bred definition som placerar generativ AI inom ett större AI-område.*)

Regeringskansliet (2026) *Sveriges AI-strategi.* Publicerad 20 februari 2026, uppdaterad 26 februari 2026. Tillgänglig på: https://www.regeringen.se/informationsmaterial/2026/02/sveriges-ai-strategi/ (Hämtad: 16 november 2026). (*Regeringens strategiska inriktning för AI, med bilagan Handlingsplan för Sveriges AI-strategi. Anger riktning, inte bindande regler; används för att sätta kalkylarbetet i ett nationellt sammanhang.*)

SFS 2026:1113. *Lag om intäktsdelning från vindkraftsanläggningar.* Tillgänglig på: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20261113-om-intaktsdelning-fran_sfs-2026-1113/ (Hämtad: 11 november 2026). (*Primärkälla för rapportens konkreta exempel om intäktsdelning till närboende.*)

Skånes vindkraftsakademi (u.å.a) *Skånes vindkraftsakademi* [webbplats, startsida]. Tillgänglig på: https://skanesvindkraftsakademi.se/ (Hämtad: 15 november 2026). (*Föreningens egen beskrivning som regionalt forum för vindkraftsfrågor i Skåne; belägger beskrivningen av den miljö inventeringen avser.*)

Skånes vindkraftsakademi (u.å.b) *Styrelsen & Kansli* [webbsida]. Tillgänglig på: https://skanesvindkraftsakademi.se/om-oss/styrelsen-kansli/ (Hämtad: 15 november 2026). (*Anger styrelsens sammansättning, där Kent Lundgren står som suppleant, och föreningens verksamhet.*)

Skånes vindkraftsakademi (u.å.c) *Om oss* [webbsida]. Tillgänglig på: https://skanesvindkraftsakademi.se/om-oss/ (Hämtad: 16 november 2026). (*Föreningens egen beskrivning av syfte och verksamhet; belägger bildandeåret 2009 och de citerade formuleringarna om uppdraget.*)

Skånes vindkraftsakademi (2026) *På torsdag är det dags för Skånes vindkraftsakademis årsmöte* [LinkedIn-inlägg], 17 november. Tillgänglig på: [https://www.linkedin.com/posts/sk%C3%A5nes-vindkraftsakademi_p%C3%A5-torsdag-%C3%A4r-det-dags-f%C3%B6r-sk%C3%A5nes-vindkraftsakademis-activity-7528364820270751744-ImjT](https://www.linkedin.com/posts/sk%C3%A5nes-vindkraftsakademi_p%C3%A5-torsdag-%C3%A4r-det-dags-f%C3%B6r-sk%C3%A5nes-vindkraftsakademis-activity-7528364820270751744-ImjT) (Hämtad: 17 november 2026). (*Föreningens egen annons av årsmötet; belägger att intäktsdelning står på programmet.*)

Thornton, P.H., Ocasio, W. & Lounsbury, M. (2012) *The Institutional Logics Perspective: A New Approach to Culture, Structure, and Process*. Oxford: Oxford University Press. (*Beskriver institutionella logiker, där bland annat community är en egen ordning; används för parallellen till avhandlingens socio-ekonomiska hållbarhetslogik.*) [KONTROLLERA mot originalet.]

Wüstenhagen, R., Wolsink, M. & Bürer, M.J. (2007) ‘Social acceptance of renewable energy innovation: An introduction to the concept’, *Energy Policy*, 35(5), s. 2683–2691. https://doi.org/10.1016/j.enpol.2006.12.001. (*Beskriver social acceptans som socio-politisk, lokal och marknadsmässig; används för att koppla närboendes perspektiv till vindkraft.*) [KONTROLLERA mot originalet.]

## Punkter att gå igenom tillsammans

1. Precisera för de två föreslagna fallen vilka arbetsmoment som har prövats och vilka som är utvecklingsidéer. Skilj producerat material från utvärderad verksamhetsnytta.
2. Lägg in dina konkreta exempel och egna bedömningar där `[KENT: …]` står.
3. Stäm av AI-deklarationen mot den faktiska användningen och kursens regler för AI-stöd. Kontrollera i slutversionen att varje källa stöder det påstående den hänvisas till.
4. Gå igenom rapporten avsnitt för avsnitt och anpassa den till HKR-mallens rekommenderade omfång.
