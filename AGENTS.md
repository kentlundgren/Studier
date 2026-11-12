# AGENTS.md – Studier

**Gäller:** AI-assistenter som arbetar med skriftliga uppgifter i Studier-repot. Den här filen är den gemensamma källan för arbetsordningen. Kursens eller uppdragsgivarens instruktioner styr alltid när de ställer särskilda krav.

Kent är författare och äger innehåll, erfarenheter, analys, slutsatser och slutlig text. Arbeta mot den lokala filversion Kent har angett. Kent granskar och hanterar själv Git, commit och push via Cursor.

## Sjustegsprocess från uppgift till färdig text

Stegen ger en gemensam karta. Arbetet kan gå fram och tillbaka mellan stegen när en verklig lucka upptäcks, men numreringen visar huvudriktningen.

1. **Uppgift, sammanhang och mall.** Klargör syfte, målgrupp, uppgiftsinstruktion, lärandemål och formkrav. Ta reda på om en mall är obligatorisk, vägledande eller saknas. Samla relevanta kursmoment, quizfrågor, Kents quizsvar och återkoppling; använd dem som signaler om kursens begrepp och betoningar, inte som material som automatiskt ska kopieras in i rapporten.
2. **Mål och bedömningskriterier.** Läs betygsmatrisen bakifrån från önskad nivå. Gör en karta mellan kriterier, rapportdelar och det underlag som behövs. Kursens matris och instruktioner kompletteras av quiz och undervisning, inte ersätts av dem.
3. **Arbetsguide.** Översätt uppgiften, mallen och kriterierna till en hanterbar arbetsordning, kontrollpunkter och öppna frågor. Håll obligatoriska krav åtskilda från rekommendationer och egna val.
4. **Innehållsutkast.** Utveckla texten stegvis och bevara meningsfulla versioner med kronologiska filnamn och tydligt angivna roller. Använd äldre utkast selektivt som källor till idéer eller belägg; låt den aktuella versionen och beslutade kraven styra fortsatt arbete. Markera sådant som kräver Kents innehåll eller beslut, och skilj det från fakta som behöver källkontroll.
5. **Tillräckligt innehåll.** Bedöm om texten täcker uppgiften och kriterierna, innehåller nödvändiga belägg och rymmer Kents egna resonemang. När den gör det, sluta lägga till och identifiera upprepningar, sidospår och luckor.
6. **Rätt omfattning och detaljredigering.** Anpassa texten till ord-, tecken- eller sidram. När innehållet är på plats arbetar vi främst med tydlighet, disposition, meningsbyggnad, språk och konsekventa hänvisningar. Öppna nya sakfrågor endast om granskningen visar en faktisk brist.
7. **Färdig text.** Stäm av slutversionen mot uppgift, mall, matris, källor, formkrav och regler för AI-stöd. Kent avgör när utkastet är färdigt och tar hand om eventuell inlämning samt Git, commit och push.

## Länka till underlag

När en text, tabell eller PRD nämner ett underlag som läsaren sannolikt vill granska, gör underlagets namn eller en tydlig beskrivning till en klickbar länk. För filer i repot används relativa Markdown-länkar, så att de fungerar både lokalt i editorn och som läsbara GitHub-länkar till filen.

- Föredra en läsbar `.md`-version när den finns, men länka även till originalet när det är ett viktigt kravdokument eller källunderlag.
- Länka direkt till den enskilda filen, inte bara till en mapp, när läsaren behöver se ett bestämt dokument.
- För PDF-, Word-, bild- och andra binärfiler länka till själva filen och kalla den för vad den är; länken kan öppna förhandsvisning eller nedladdning.
- Skriv inte en intern filväg som kod om den lika gärna kan presenteras som en klickbar länk.
- Kontrollera att länkmålet finns och att en relativ länk utgår från rätt mapp innan leverans.

## Metareflektion att föra vidare

Efter en färdig rapport ska assistenten bjuda in Kent att kort reflektera över arbetsprocessen. När en mall använts, fråga vad den hjälpte med, vad den begränsade och hur den påverkade textens egen röst. När ingen mall fanns, fråga hur dispositionen växte fram och vilket stöd den gav. Spara den konkreta erfarenheten i uppgiftens PRD eller arbetsanteckning; för över en generell lärdom hit först när Kent bedömer att den är användbar för kommande uppgifter.

## Word-export och versionsskydd

När Kent ber om en Word-fil ska sidfoten på samtliga sidor, även första sidan, innehålla exportens aktuella datum till vänster i formatet ÅÅÅÅ-MM-DD och sidnumrering till höger i formatet `sid 1 (7)`. Använd Word-fälten PAGE och NUMPAGES så att sidnummer och totalt sidantal följer dokumentets layout. Datumet ska vara ett fast exportdatum enligt Europe/Stockholm, inte ett fält som ändras när filen öppnas. Uppdatera fälten och kontrollera sidlayouten när verktygen medger det; redovisa om visuell kontroll inte kunde genomföras. Kursens uttryckliga formkrav eller Kents särskilda instruktioner har företräde.

Markdown-filen är huvudversion om inget annat avtalats. Word-filen är en export av den versionen. Vid ett begärt versionsbyte kopieras innehållet till nästa utkast, versionsbeteckningen uppdateras och PRD samt länken till aktuellt utkast pekas om. Tidigare versioner bevaras. Om Kent begär låsning används lokalt skrivskydd som skydd mot misstag; det är inte ett lösenordsskydd och följer inte med Git. Dokumentera därför också i uppgiftens PRD vilka versioner som är arkiverade och vilken som ska redigeras. Ändra inte arkiverade versioner utan Kents uttryckliga uppdrag.

## Bedöm AI-granskningar som kvalificerade förslag

Kent vill kunna behålla automatisk AI-granskning som extra återkoppling, även när vissa påpekanden visar sig obefogade. Rekommendera inte att stänga av granskningen enbart för att den ger en tveksam varning. Principen gäller Cursor Agent Review och motsvarande granskningar i andra verktyg.

När ett påpekande kommer:

1. Läs hela motiveringen och den aktuella texten eller ändringen. Skilj granskarens iakttagelse från dess tolkning; en varning är inte i sig ett konstaterat fel.
2. Pröva invändningen mot underlaget och sammanhanget. Skilj mellan vad Kent uppger, vad assistenten själv verifierat och vad som ännu är osäkert. Att ett verktyg inte kan hämta en webbsida bevisar varken att sidan är otillgänglig för andra eller att uppgifterna är felaktiga. Kents uppgift ska tillskrivas honom, inte beskrivas som assistentens egen verifiering.
3. Rätta ett verkligt fel, förtydliga en oklar formulering eller rekommendera att ett obefogat påpekande avfärdas med en kort motivering. Använd inte automatisk rättning som ersättning för denna bedömning.
4. Ta vara på lärdomen även när ingen rättning behövs. En välmenande invändning kan synliggöra ett behov av tydligare källredovisning eller arbetsprocess. Kent avgör vad som ska ändras.

Instruktionerna här styr vårt sätt att hantera granskningar; de aktiverar inte någon granskningsfunktion och är inte en garanti för att varje verktygs specialiserade granskare läser denna fil. Uppgiftsspecifika erfarenheter dokumenteras i respektive PRD.
