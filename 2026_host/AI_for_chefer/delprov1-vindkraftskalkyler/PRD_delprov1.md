# PRD – Delprov 1: analys av ett AI-tillämpningsområde

**Kurs:** AI för chefer och ledare, AI101A, Högskolan Kristianstad  
**Status:** Arbetsversion, fas 4 – uppdaterad 12 november 2026
**Ägare och författare:** Kent Lundgren  
**Arbetsfil för rapporten:** [utkast 4d](../Analys/delprov1-vindkraftskalkyler/utkast-4d.md) (aktuell arbetsversion som Kent granskar och utvecklar)

## 1. Syfte

Ta fram en kort individuell rapport som analyserar hur generativ AI har använts eller kan användas i utvecklingen och förklaringen av Kents vindkraftskalkyler samt i analysen och förklaringen av intäktsdelningens regler och aktörsperspektiv. Rapporten ska bedöma möjlig verksamhetsnytta, risker och ledningsansvar i båda fallen: kontrollerbara kalkyler samt källgrundade analyser och förklaringar. Kents aktiva arbete och lärande tillsammans med generativ AI ska framgå.

Rapporten ska stödja examinationen av lärandemål 1–3 och 7–8. Den ska följa den officiella mallen för Delprov 1 så långt den stämmer med uppgiftens aktuella instruktioner i Canvas.

## 2. Problem och frågeställning

Vindkraftskalkyler kan ge beslutsunderlag för olika aktörer. En traditionell kalkyl kan fokusera på projektörens investering och lönsamhet. En modell med flera perspektiv kan dessutom visa beräkningar för exempelvis markägare, kommun/samhälle, andelsägare och närboende. Den bredare modellen kan synliggöra fler konsekvenser, men dess antaganden, formler och samband kan också bli svårare att överblicka och kontrollera.

Intäktsdelningen aktualiserar också frågor om hur regler, tolkningar och ekonomiska konsekvenser beskrivs för olika aktörer. Att kalkyler och texter är offentliga innebär inte automatiskt att de är begripliga. Rapporten ska därför inventera hur samarbetet med generativ AI kan förbättra både beräkningar och förklaringar, och vilka krav det ställer på granskning, kompetens och ansvar.

## 3. Föreslagen avgränsning

Rapporten avgränsas till två föreslagna användningsfall, med befintligt arbete som utgångspunkt och möjliga fortsättningar tydligt markerade:

1. **Utveckla och förklara kalkylscenarier tillsammans med generativ AI.** Underlag är [den publicerade kalkylen](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html), tidigare versioner, kod och antaganden. Undersök AI:s uppgifter i utvecklingen och hur scenarioförklaringar skulle kunna göra resultaten mer begripliga för olika aktörer. Ett integrerat AI-lager är en idé, inte en dokumenterad införd funktion.
2. **Analysera och förklara regler och aktörsperspektiv tillsammans med generativ AI.** Underlag är rättskällor och [Kents publicerade bloggtext *Besked före beslut*](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/). Undersök arbetet med källor, frågor, perspektiv och förklaringar, och möjligheten att utveckla en källanknuten frågeguide. Skilj gällande rätt från tolkningar och policyförslag.

Gemensam fråga: **Hur kan Kent, tillsammans med generativ AI, göra vindkraftens ekonomiska konsekvenser och deras förutsättningar mer begripliga och granskningsbara för olika aktörer?**

Avgränsningen bygger på olika arbetsuppgifter, inte på två generationer av kalkyler. Bredare problemformulering och kritisk granskning ingår i båda fallen. Konkurrenskraft är ett analytiskt perspektiv; rapporten ska inte bli en fullständig vindkraftspolitisk utredning. Publicering på webben skiljs från påvisad begriplighet, räckvidd eller verksamhetsnytta.

För varje fall skiljs producerade resultat från planerade användningar och uppmätta effekter. Kents arbete med mål, restriktioner, kontext, instruktioner, verktyg, kontroll och omarbetning ska framgå. Huvudhänvisningen för intäktsdelningsanalysen är [Lundgren (2026), *Besked före beslut: att förbättra intäktsdelningen från vindkraft till närboende*](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/). Enligt Kent innehåller bloggtexten och det lokala underlaget samma text. Assistenten har läst det lokala underlaget men har inte själv jämfört det med webbversionen. Bloggtexten används som fallmaterial; rättsliga påståenden kontrolleras mot rättskällorna.

## 4. Underlag och arbetsfiler

### Fil- och mappstruktur

| Del i arbetsflödet | Plats | Innehåll och roll |
|---|---|---|
| Kravunderlag och stöd | `delprov1-vindkraftskalkyler/mall/` | HKR:s originalmall, vår ifyllningsmall `mall-delprov1.md` och arbetsguiden `arbetsguide-delprov1.docx`. Dessa beskriver uppgiften och hur arbetet kan genomföras. |
| PRD | `delprov1-vindkraftskalkyler/PRD_delprov1.md` | Kursens arbetsbeskrivning: syfte, avgränsning, filstruktur, arbetsflöde, öppna frågor och kriterier. |
| Kursmoment och quiz | `delprov1-vindkraftskalkyler/Quiz/` | Relevanta quizfrågor, egna svar och kursmoment används som kompletterande signaler om centrala begrepp och kursledningens betoningar. |
| Utkastserie, fas 4 | `Analys/delprov1-vindkraftskalkyler/` | Samtliga versioner 4a, 4b, 4c och 4d samlas här. Gemensam namnstam `utkast-4a.md`, `utkast-4b.md` osv. gör ordningen tydlig; äldre utkast bevaras som underlag. |


- Den officiella Word-mallen `delprov1-vindkraftskalkyler/mall/AI Inventering Dokument för Uppgift 1.docx` är kravunderlag. Den anger bland annat rekommenderad längd 4–6 sidor exklusive bilagor och efterfrågar sammanfattning, 5–8 nyckelord, bakgrund/avgränsning, AI-inventering, nyttobedömning, risk- och konsekvensbedömning, kompetens/ansvar, metod, ifyllda tabeller, analys, prioriterad handlingsplan, individuell reflektion och referenser.
- `utkast-4a.md` (4 september 2026) är det tidiga, friare analysutkastet som skrevs innan kursmallen fanns. `utkast-4b.md` (10 november 2026) är det senare inventeringsutkastet, skrivet utifrån kursledningens mall. De är historiska underlag och ska inte konkurrera med den aktuella arbetsversionen `utkast-4d.md`.
- Fortsatt arbete utgår från 4d och följer kursens uppgiftsmall och betygsmatris. Gå tillbaka till 4a eller 4b endast när ett konkret innehåll, en källa eller en tidigare tanke behöver hämtas därifrån. Bevara äldre versioner när nya utkast skapas.
- Vindkraftskalkylens tidigare och nuvarande versioner används som fallmaterial. Påståenden om vad AI bidrog med ska beläggas med Kents minne, arbetsmaterial, versionshistorik eller annat verifierbart underlag.
- Kursplanen och uppgiftens instruktioner i Canvas styr om de skiljer sig från den lokala sammanfattningen eller mallens rekommendationer.

Utkast 4a och 4b visar att en rapport kan börja som ett friare analysutkast eller byggas direkt utifrån en föreskriven mall. För det här delprovet är beslutet taget: 4c och senare versioner följer kursens mall och betygsmatris. De äldre utkasten används selektivt som historiska underlag.

## 5. Innehåll som rapporten ska täcka

- Vad tillämpningsområdet och den analyserade processen omfattar.
- Minst två avgränsade befintliga eller möjliga AI-användningar, med syfte, användare, underlag, ansvar, påverkan och mognadsgrad enligt mallen.
- Verksamhetsnytta, till exempel effektivitet, kvalitet, begriplighet eller bredare beslutsunderlag.
- Risker i fall 1: komplexitet, svåröverblickbar beräkningslogik, felaktiga antaganden och falsk precision. Risker i fall 2: felaktiga eller inaktuella källor, missvisande tolkningar och sammanblandning av regler och egna förslag. Beskriv hur riskerna ska hanteras.
- Juridiska, etiska, organisatoriska, tekniska och pedagogiska aspekter i den omfattning som kurskrav och belägg medger.
- Vilken AI-kompetens, mänsklig kontroll, ansvarsfördelning och uppföljning som behövs.
- Kents egen reflektion och prioritering. AI får inte hitta på hans erfarenheter, slutsatser eller ställningstaganden.

## 6. Utanför omfattningen

- Den fullständiga projektrapporten för Delprov 2. Delprov 1 ska ändå innehålla de prioriterade rekommendationer och nästa steg som dess egen mall och betygsmatris efterfrågar.
- Att beskriva ett tänkt AI-lager i den färdiga kalkylen som om det redan vore byggt eller infört.
- Att likställa en modell med flera aktörsperspektiv med flera AI-användningar utan att ange AI:ns konkreta uppgifter.
- Att låta AI fatta eller avgöra rättsliga beslut om ersättning till enskilda.
- Att bygga eller införa de föreslagna AI-funktionerna som en del av Delprov 1. Inventeringen kan bedöma dem som möjliga användningar.

## 7. Arbetsprinciper mellan Kent, ChatGPT Work, Cursor och Claude

- Kent äger innehåll, egna erfarenheter, slutsatser och slutlig text.
- Kent gör och granskar sina ändringar i Cursor och hanterar själv Git, commit och push.
- ChatGPT Work och Claude arbetar mot en tydligt angiven lokal eller publicerad version. Granskning ska skiljas från textförslag och från verifiering av källor.
- Kent skriver och lägger vid behov önskemål inom hakparenteser i 4d. Assistenten läser den aktuella lokala texten och Git-diffen, genomför önskemålen och redovisar vilka filer som ändrats. Hanterade anteckningar tas bort; endast verkligt återstående frågor lämnas kvar. Kent granskar ändringarna i Cursor och avgör vad som behålls. Ingen modell committar eller pushar utan uttryckligt uppdrag.
- Vid en separat granskning får Claude en avgränsad fråga och samma version av PRD eller rapport. Kent jämför råden och fattar beslut; modellerna skriver inte samtidigt i samma fil.
- För varje arbetspass antecknas kort: datum, modell/verktyg, uppgift, AI-bidrag, Kents egna beslut/ändringar och om källor har kontrollerats. Loggens placering och eventuell redovisning i inlämningen bestäms först efter kontroll av kursens regler.

### Så användes sjustegsprocessen i Delprov 1

Den generella arbetsordningen finns i Studier-repots [`AGENTS.md`](../../../AGENTS.md). Tabellen nedan visar hur stegen har tillämpats i just det här arbetet. Kursens instruktioner, mall och betygsmatris är styrande för Delprov 1.

| Steg | Delprov 1: konkret underlag och arbete | Läge |
|---|---|---|
| 1. Uppgift, sammanhang och mall | Kursplan och lärandemål: [HKR:s kursplan](https://www.hkr.se/kurs/ai101a/kursplan/) och [Kents studieplan](../personlig-kursplan.md). Uppgiftsmall: [officiell Word-mall](mall/AI%20Inventering%20Dokument%20f%C3%B6r%20Uppgift%201.docx) och [läsbar Markdown-mall](mall/mall-delprov1.md). Kursunderlag: [quizresultat](Quiz/Bilder/Resultat1_1a_quizet.jpg) och [kursanteckningar](../Analys/kursens-ai-introduktion-och-generativ-ai.md). | Underlagen är samlade. Canvas-instruktioner och AI-regler behöver slutkontrolleras. |
| 2. Mål och bedömningskriterier | [Betygsmatrisen för AI101A](../kursplan/betygsmatris_AI101A.jpg); G- och VG-kriterierna kopplas till rapportens delar. | Första kartläggningen finns i arbetsguiden; den ska användas som kontroll när 4d utvecklas. |
| 3. Arbetsguide | Den [läsbara ifyllningsmallen](mall/mall-delprov1.md) och [arbetsguiden i Word](mall/arbetsguide-delprov1.docx) översätter uppgift, mall och matris till frågor och arbetsordning. | Framtaget; kan förtydligas om kurskraven ändras eller en lucka upptäcks. |
| 4. Innehållsutkast | [Utkast 4a](../Analys/delprov1-vindkraftskalkyler/utkast-4a.md) är det tidiga friare analysutkastet; [utkast 4b](../Analys/delprov1-vindkraftskalkyler/utkast-4b.md) skrevs senare utifrån kursmallen; [utkast 4c](../Analys/delprov1-vindkraftskalkyler/utkast-4c.md) är bevarad föregångare; [utkast 4d](../Analys/delprov1-vindkraftskalkyler/utkast-4d.md) är aktuell arbetsversion. | Pågår i 4d. Äldre versioner används selektivt, inte som alternativa huvudtexter. |
| 5. Tillräckligt innehåll | Kontrollera [utkast 4d](../Analys/delprov1-vindkraftskalkyler/utkast-4d.md) mot uppgiftsmallen och [betygsmatrisen](../kursplan/betygsmatris_AI101A.jpg): krav, belägg, Kents egna resonemang och återstående `[KENT: …]`-punkter. | Inte påbörjat som gallringsfas. |
| 6. Rätt omfattning och detaljredigering | Anpassa [utkast 4d](../Analys/delprov1-vindkraftskalkyler/utkast-4d.md) till omfånget i [kursmallen](mall/AI%20Inventering%20Dokument%20f%C3%B6r%20Uppgift%201.docx) och finslipa språk och hänvisningar när större innehållsfrågor är lösta. | Inte påbörjat. |
| 7. Färdig rapport | Slutkontroll mot [kursens instruktioner och lärandemål](https://www.hkr.se/kurs/ai101a/kursplan/), [mallen](mall/AI%20Inventering%20Dokument%20f%C3%B6r%20Uppgift%201.docx), [betygsmatrisen](../kursplan/betygsmatris_AI101A.jpg), källor och AI-regler; Kent avgör när rapporten är klar. | Inte påbörjat. Kent hanterar inlämning och Git i Cursor. |

För Delprov 1 är vi nu i **fas 4**, med utkast 4d. Fas 5 börjar när Kent bedömer att rapporten täcker det som behövs och vi ska i huvudsak gallra och strama upp texten. Metanivån dokumenteras under arbetets gång: AI-bidrag, Kents egna beslut och ändringar, källkontroller samt lärdomar om arbetssättet. Hur AI-stödet får användas och redovisas i examinationen kontrolleras mot Canvas innan rapporten färdigställs.

Den generella sjustegsprocessen finns redan i rotens [AGENTS.md](../../../AGENTS.md). Denna PRD beskriver tillämpningen i Delprov 1. Nya erfarenheter dokumenteras här och förs vidare till den generella processen när de är användbara även för andra uppgifter.

## 8. Kriterier för en färdig rapport

- Rapportens struktur följer Canvas-instruktionen och den officiella mallen, inklusive eventuella krav på omfång och format.
- Minst två befintliga eller möjliga AI-användningar är tydligt avgränsade och skiljer mellan genomfört, testat och planerat.
- Nytta, risk och kontroll analyseras för båda fallen. Rekommendationerna prioriteras utifrån verksamhetsmål och genomförbarhet; producerat material skiljs från belägg för bättre förståelse eller andra effekter.
- Alla uppgifter om Kents erfarenheter och ställningstaganden är bekräftade av Kent.
- Fakta och källor är kontrollerade mot relevanta originalkällor; osäkra uppgifter markeras tills de är kontrollerade. Relevanta kursmoment och quizbegrepp har kopplats till rapportens analys utan att quizmaterialet okritiskt kopierats in.
- Rapporten innehåller Kents egen analys, reflektion och slutliga argumentation.
- AI-användning redovisas på det sätt som kursen kräver.

## 9. Öppna frågor före fastställande

1. Vilken är den fullständiga uppgiftsinstruktionen och bedömningsmatrisen i Canvas? Stämmer Word-mallens rekommendation om 4–6 sidor med uppgiftens instruktion?
2. Vilka regler gäller i kursen för AI-stöd, AI-deklaration och eget författarskap?
3. Vilka konkreta arbetsmoment, verktyg och granskningssteg kan beskrivas i respektive fall: kalkylutvecklingen och arbetet med bloggtexten? Vilka fortsättningar är fortfarande idéer?
4. Vilken verksamhet, processägare och huvudsaklig användargrupp ska inventeringen utgå från? Vilket informationsbehov ska prioriteras i vart och ett av fallen?
5. Vilka kurskällor krävs eller rekommenderas utöver de källor som redan finns i utkasten?


## 10. Metainsikt att bära vidare

En rapport kan börja friare när ingen föreskriven struktur finns, eller följa en mall som kursledning eller organisation har fastställt. En mall kan göra krav, täckning och bedömning tydligare, men den kan också påverka hur personlig och självständigt disponerad texten blir. Detta ska inte antas på förhand.

Inför en framtida rapport ska arbetsstarten därför klargöra om en mall är obligatorisk, vägledande eller saknas. Om en mall gäller följer arbetet dess krav och bedömningskriterier, samtidigt som utrymmet för Kents egna exempel, analys och röst synliggörs. Om ingen mall finns formas dispositionen utifrån syfte, målgrupp, lärandemål och bedömningskriterier.

Efter färdigställandet ska Kent få reflektera över hur mycket struktur mallen gav, vad den begränsade och om den påverkade textens egen röst. Den erfarenheten kan sedan användas när nästa rapport planeras. För Delprov 1 är mallen och betygsmatrisen redan valda som styrande underlag; den diskussionen ska inte öppna den avgränsningen på nytt.

Denna PRD är en arbetsversion. Den fastställs först när de öppna kurskraven har kontrollerats och Kent har godkänt avgränsningen och de befintliga eller möjliga AI-användningarna.

## Förtydligande av inventeringens omfattning, 11 november 2026

[HKR:s originalmall](mall/AI%20Inventering%20Dokument%20f%C3%B6r%20Uppgift%201.docx) anger ”befintliga eller möjliga AI-användningar” och mognadsgrader från idé till införd lösning. [Betygsmatrisen](../kursplan/betygsmatris_AI101A.jpg), G punkt 2, kräver minst två AI-användningar eller möjliga AI-användningar. Två redan genomförda användningar är alltså inte ett krav i dessa underlag. Befintliga erfarenheter ska fortfarande beskrivas sanningsenligt; möjliga användningar analyseras med tydlig status, ansvar, underlag, förväntad nytta och risk.

[Avhandlingen](../litteratur/More/Lundgren_1998_lic_arbete.pdf), särskilt s. 93–99, ger tre analytiska perspektiv. [Bloggtexten *Besked före beslut*](https://controllerutangranser.wordpress.com/2026/11/11/besked-fore-beslut-att-forbattra-intaktsdelningen-fran-vindkraft-till-narboende/) ger ett konkret informationsbehov och scenarioexempel. Dessa används som bakgrund till AI-inventeringen; policyförslag och beräkningsexempel ska inte framställas som gällande rätt eller observerade effekter.

## 11. Arbetsanteckning – 11 november 2026

PRD:n har setts över tillsammans med ChatGPT. Kent har valt den publicerade bloggtexten som huvudhänvisning och uppgett att den motsvarar den lokala texten. Uppgiften om överensstämmelse kommer från Kent; assistenten har inte själv jämfört versionerna. Avgränsning, risker, färdigkriterier och öppna frågor har samordnats kring de två användningsfallen. Den generella processen finns kvar i AGENTS.md, medan den konkreta tillämpningen finns här. Blogglänkens åtkomst kunde inte verifieras med läsverktyget vid föregående kontroll; detta ändrar inte Kents val av hänvisning. Kent granskar ändringarna och hanterar commit och push.

## Versionsbyte – 12 november 2026

Kent har begärt att 4c bevaras och att fortsatt arbete sker i 4d. Utkast 4d är en kopia av 4c med enbart versionsbeteckningen uppdaterad. Markdown- och Word-filerna för 4c är lokalt skrivskyddade. Windows skrivskydd följer inte med Git; assistenter ska därför respektera denna versionsregel även i andra arbetskopior. Ändra inte 4c utan Kents uttryckliga önskemål. Word-filen för 4c har fått exportdatum 2026-11-12 och sidfält enligt den generella regeln i AGENTS.md.

## Lärdom från Agent Review – 12 november 2026

Cursor Agent Review invände mot att PRD:n angav att Kent bekräftat att bloggtexten och det lokala underlaget var samma text, samtidigt som assistentens läsverktyg inte hade kunnat hämta bloggsidan. Kent hade uttryckligen lämnat denna uppgift i samtalet. Vi bedömde därför att formuleringarna inte motsäger varandra: författarens bekräftelse och assistentens egen verifiering är olika saker. En tydligare formulering vid behov är: ”Enligt Kent innehåller bloggtexten och det lokala underlaget samma text. Assistenten har läst det lokala underlaget men har inte själv jämfört det med webbversionen.”

Kents skärmbild visade att ”Start Agent Review on Commit” var aktiverat. Efter att ha förstått inställningen uttryckte Kent att automatisk granskning gärna kan vara kvar som extra återkoppling, även om vissa invändningar är onödiga. Att stänga av automatisk start skulle inte hindra en manuellt startad granskning från att ge samma påpekande. Vi har inte ändrat inställningen åt Kent och har inte verifierat att det enskilda påpekandet avfärdats i Cursor.

Lärdomen är att även AI-granskarens analys behöver bedömas. Ett påpekande kan vara vällovligt och användbart utan att visa ett faktiskt fel. Läs motiveringen, granska underlaget och välj mellan rättning, förtydligande och avfärdande. Undvik att automatiskt acceptera ”Fix All Issues”. I detta fall var nyttan framför allt att tydliggöra vem som hade bekräftat vad. Den generella arbetsregeln finns i [AGENTS.md](../../../AGENTS.md#bedöm-ai-granskningar-som-kvalificerade-förslag).
