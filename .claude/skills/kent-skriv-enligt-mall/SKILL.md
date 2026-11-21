---
name: kent-skriv-enligt-mall
description: >-
  Förmågan att skriva och bygga en rapport enligt en föreskriven mall: kursledningens, institutionens eller
  uppdragsgivarens. Aktivera alltid när Kent ska skriva en uppgift, rapport eller inlämning där det finns en mall,
  ett formkrav, en rekommenderad längd eller en layout (till exempel HKR:s mall för examensarbete eller en kurs
  Word-mall), och innan jag gör en Word-fil av ett markdown-utkast som ska lämnas in. Mallen går före Kents
  vanliga Word-standard. Innehåller rangordning mellan mallar, läs-och-jämför-steg, ett skript som fyller
  mallen med python-docx, en avvikelselista och kontroll före leverans.
metadata:
  type: process
  version: "1.1"
  last_updated: "2026-11-21"
  scope: projektskill i Studier-repot (.claude/skills/kent-skriv-enligt-mall) med tunn global pekare i ~/.claude/skills/kent-skriv-enligt-mall
  skript: md2mall.py i samma mapp
---

# Skriv enligt mall (v1.1, 2026-11-21)

*Senast uppdaterad: 2026-11-21 (svensk tid, Stockholm)*

Mallen styr. Kents vanliga Word-standard (Calibri 11 pt, marginaler 2,5 cm, datum och "sid X (Y)" i sidfoten) gäller
bara när ingen mall finns. Finns en mall bygger jag slutdokumentet i den, med dess formatmallar, och följer dess
rubriker, kolumner, sidnumrering, sidfot och rekommenderade längd.

## 1. Rangordning vid konflikt

1. Uppgiftsinstruktionen i kursplattformen (till exempel Canvas) eller uppdragsgivarens direkta instruktion.
2. Kursledningens eller uppdragsgivarens mall för just den uppgiften.
3. Institutionens allmänna mall (till exempel HKR:s mall för examensarbete) för sådant den specifika mallen inte anger.
4. Kents egna standarder (CLAUDE.md, skills) och våra egna arbetsfiler.

Motsäger en instruktion en annan: stanna och fråga Kent, och skriv beslutet i README:n för mallarna.

## 2. Läs den riktiga mallen

Läs Word-filen själv (python-docx), inte bara en markdown-kopia. Anteckna:
- sidstorlek, marginaler, typsnitt och storlekar i formatmallarna (Normal, Rubrik 1–3, Titel, Blockcitat, listor);
- framsidans delar (titel, undertitel, författare, abstract, ämnesord, innehållsförteckning) och eventuell engelsk abstract;
- sidhuvud och sidfot, och var sidnumret står (sidnumret kan ligga i sidhuvudet, i en tabell);
- kapitel och rubriker i exakt den ordning och stavning mallen har, och tabellernas kolumner;
- text som är instruktion och ska raderas, och rekommenderad längd (ofta längst ned i mallen);
- Canvas- eller uppdragstexten om kriterier, omfattning, bilagor och inlämningstyp.

## 3. Skriv en mall-README

Finns ingen, skriv en `README.md` i mallmappen med en tabell över varje mallfil (vad den är, vad den styr, status),
rangordningen, layoutuppgifterna, innehållet och längden, och hur slutdokumentet byggs. Länka filnamnen enligt
README-reglerna i CLAUDE.md. Kursfakta står där, inte i den här skillen.

## 4. Jämför utkastet mot mallen (avvikelselista)

Jämför varje rubrik, tabellkolumn och formkrav i utkastet mot mallen och skriv en lista:
- **Följer mallen:** samma rubrik, samma kolumner.
- **Tillägg:** rubriker eller kapitel som mallen inte har (till exempel kapitel för metod eller reflektion). Ange varför och om mallen
  uttryckligen efterfrågar dem (till exempel i slutstycket).
- **Avvikelser:** rubriker som bytt namn, krympt tabelltext, annat sidnummer. Rätta dem, om inte Kent uttryckligen godkänner avvikelsen.
- **Längd:** mät sidantalet i Word och jämför med rekommendationen. Är det för långt: föreslå gallring och vad som kan bli bilaga.

Bilagor: det som behövs för att uppfylla kriterierna ska stå i brödtexten. Brödtexten ska kunna läsas fristående, och bilagor
får bara vara fördjupning. Är det oklart om referenser och bilagor räknas i längden: skriv ner antagandet och föreslå att Kent frågar.

## 5. Bygg i mallen

```
python md2mall.py UTKAST.md UT.docx MALL.docx --author "Namn"
```

Skriptet `md2mall.py` (i den här mappen) öppnar mallen, fyller framsidan, tar bort instruktionstexten och lägger in brödtexten med
mallens egna format. Det rör inte mallens sidhuvud, sidfot och sidnumrering. Använd inte egna stilar. Tabelltext följer mallens
storlek om inte `--table-size` anges. Utkastets markdown ska ha `## Sammanfattning`, `## Ämnesord`, kapitel som `## 1. …`,
`### …` för underrubriker och en rad `**Undertitel:** …`. Byt `--stop-at` om utkastet har ett avslutande arbetsavsnitt med annat namn.
Skriptet skriver filen bredvid utkastet med samma namn och ändelsen `.docx`, om inte Kent säger annat.

## 6. Mät och kontrollera i Word

Skriptet uppdaterar inte innehållsförteckning, fält eller sidantal. Öppna filen i Word (COM i PowerShell) och:
1. uppdatera innehållsförteckningen och alla fält (`TablesOfContents(1).Update()`, `Fields.Update()`);
2. räkna sidor och ord (`ComputeStatistics`), och läs av vilken sida varje kapitel och Referenser börjar på;
3. exportera en PDF och granska ett par sidor som bild: titelsidan, en sida med tabell, en sida med referenser, och kontrollera sidnumrets
   plats och sidfotens text;
4. säg i svaret att jag har mätt i Word, och om jag inte har öppnat filen på skärmen.

## 7. Kontroll före leverans

- Rubrikerna är mallens, i mallens ordning, med eventuella tillägg angivna i avvikelselistan.
- Tabellkolumnerna är mallens.
- Framsidan har titel, undertitel, författare, sammanfattning (inom ordgränsen) och ämnesord (inom antalet).
- Sidnummer, sidfot och typsnitt är mallens, inte våra.
- Arbetsmarkeringar (`[KENT: …]`, läsanvisningar, processnoteringar) är borta i den slutliga inlämningsversionen.
- Längden är mätt och jämförd med rekommendationen.
- Filnamnet är samma som md-filen, bara ändelsen skiljer. Finns en äldre Word-fil med det namnet läggs den i `old/` med eget datum.
- Kent avgör när texten är färdig och tar hand om inlämning, commit och push.

## Förhållande till andra regler

- Kents standard för Word-filer från markdown (CLAUDE.md, "Word-filer från markdown") gäller när ingen mall finns. Den här skillen går före den när en mall finns.
- Källhänvisningar följer `kent-referens-skill`, språk och röst `humanizer_ton`, och arbetsordningen i kursrepots `AGENTS.md`.
- Placering (regel 4 i `kent-meta-regler-for-code`): den fullständiga skillen och skriptet ligger här, i Studier-repots `.claude/skills/`, så att de syns på GitHub och följer med kursarbetet. En tunn pekare i `~/.claude/skills/kent-skriv-enligt-mall/` gör att skillen också hittas i andra projekt. Innehållet finns bara här.

## Uppdateringslogg

- 2026-11-21 (v1.1, Code): Flyttad till Studier-repots `.claude/skills/` med global pekare (regel 4). Innehållet är oförändrat. Rangordning mellan mallar, läs-och-jämför-steg, avvikelselista, skriptet `md2mall.py`, mätning i Word och kontroll före leverans. Utlöst av delprov 1 i AI101A (HKR), där utkasten först byggdes med Kents Word-standard i stället för kursledningens mall.

- 2026-11-21 (v1.0, Code): Skapad. Rangordning mellan mallar, läs-och-jämför-steg, avvikelselista, skriptet `md2mall.py`, mätning i Word och kontroll före leverans. Utlöst av delprov 1 i AI101A (HKR), där utkasten först byggdes med Kents Word-standard i stället för kursledningens mall.
