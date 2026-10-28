# Beslutslogg – Studier

Daterade beslut och lägesnoteringar för repot. Nyast överst. Det som står
här är beslut *av dagsläget* – de får omprövas. Stabila konventioner bor i
`CLAUDE.md`.

---

## 2026-10-28

- **Nätkursstruktur som parallell studie.** Kent vill observera hur
  nätkurser är lagda (hitta rätt, förstå upplägg, lärar- och
  studentkontakt), med ETE409 som fall. Bakgrund: blogginlägget
  [Nätkurser](https://synpalarande.wordpress.com/2021/06/17/natkurser/)
  (2021) och [#nätkurs](https://x.com/search?q=%23n%C3%A4tkurs%20(from%3Akentlundgren)&src=typed_query).
  Levande fil: `synpalarande/natkurser-struktur-ete409.md`. Samma sak
  sparad som minne i Claude-projektminnet och i Cursor-store. Inte ett
  Nr-bygge, inte ett låst omdöme om hur social ETE409 är.
- **ETE409 – Modul 1 sammanfattad.** Egen fil
  `moduler/modul-1-transport.md` (svenska/EU-mål, MLP, drönare, officiellt
  vs tolkning vs scenario). Mallfiler skapade för modul 2 och 3. Quiz
  modul 1 avprickat.
- **ETE409 – URL-mismatch på Modul 1.** Sidan som visar transportmodulen
  har filnamnet `Modul-2.-Industisektor-test.aspx` (fel modul, stavfel,
  ordet test). Titel och meny säger Modul 1 Transport. Lita på sidans
  synliga titel.
- **ETE409 – quizytan hittad.** UPG3-testerna ligger i Moodle/Moodular
  bakom Lisam
  ([testlista](https://moodle.integration.it.liu.se/moodular/#/quiz?SPHostUrl=https:%2F%2Fliuonline.sharepoint.com%2Fsites%2FLisam_ETE409_2026HT_DY&HostTitle=Policys%20i%20energi-%20och%20klimatomst%C3%A4llningen%20(ETE409%202026HT%20DY)&CourseMomentCode=ETE409_2026HT_DY&CourseOfferingKey=ETE409_2026HT_DY&View=quiz&lang=sv)).
  Tre tester bekräftade. Kent gör dem senare.
- **ETE409 – examination enligt Lisam.** UPG2 = essä (2 000–3 000 ord,
  27 nov kl. 20). UPG3 = tre quiz (transport / industri / bostad-service,
  till 20 nov kl. 20). **UPG1 saknas** (fortfarande okänt varför). Modul-
  nummer ≠ UPG-nummer. Sidan 0:s "modul 1–3" är en tredje, tematisk karta.
  AI tillåtet med redovisning på essän, inte på quiz. Examinationen är
  individuell – relevant för frågan om studentkontakt.
- **ETE409 – sidan 0, tre tematiska moduler** (policylandskap → utformning
  → styrmedel). Vänstermenyn är en annan karta (sektor + test + essä).
- **ETE409 – kursrum i Lisam hittat.** Startsida:
  [Lisam_ETE409_2026HT_DY](https://liuonline.sharepoint.com/sites/Lisam_ETE409_2026HT_DY)
  (*Policys i energi- och klimatomställningen*, 3 hp). Menyn visar
  kursplan, modulerna transport/industri/bostad med tester, individuell
  essä, medlemmar och grupp, inlämningar och schema. Skärmbild i
  `2026_host/Policy_i_energi_och_klimat/Bilder/`.
- **Rättelse:** en första skrivning hamnade i AI101A-mappen, eftersom den
  visade Ladok-sidan gällde HKR/AI101A. De ändringarna är återställda.
  Ladok-status för ETE409 är inte införd (ingen LiU-Ladok-sida visad).
- Uppdaterat: `2026_host/Policy_i_energi_och_klimat/README.md`,
  `2026_host/Policy_i_energi_och_klimat/personlig-kursplan.md`,
  `2026_host/README.md`.

---

## 2026-09-09

- **GitHub Pages påslaget för `Studier`.** Live-URL:er under
  <https://kentlundgren.github.io/Studier/> fungerar nu (t.ex.
  `.../synpalarande/Nr1/` och `.../synpalarande/Nr2/`). Inaktuella "Pages inte
  påslaget"-noter borttagna i `Nr1/README.md`, `synpalarande/README.md` och
  syn-pa-larande-skillens README.
- **Nytt bygge i `synpalarande/`: Nr2** – *"Vad betyder 'bäst' när modellen
  skriver koden?"* En jämförelse av AI-modeller för kodning (Claude vs
  OpenAI/Codex), utifrån Osama Romohs LinkedIn-inlägg. Planering, research (två
  pass), kostnadskalkyl, bygge, fräscha-ögon-genomläsning och en **engelsk
  version** (`index_eng.html`, med språkknapp `SV·EN`) gjort samma dag. Sidan
  är **live** på sv + en. Kent lämnade en kommentar med länk till den engelska
  sidan under Osamas inlägg – reflektionen kring inlägget är därmed genomförd i
  detalj. Nr2 blir en levande sida (som Nr1), inte ett avslutat projekt. Plan
  och detaljer:
  [`synpalarande/Nr2/PRD_nr2_ai-kodmodeller.md`](synpalarande/Nr2/PRD_nr2_ai-kodmodeller.md)
  (v0.13). Öppen punkt utan brådska: verifiera fyra antaganden i
  `kostnadskalkyl-35h.md` §8.
- **Mappkontroll:** Nr2 lades medvetet i `synpalarande/` och *inte* i
  `AI-teknik` (dit tekniska modelljämförelser annars hör). Motivering: "kvalitet
  = nytta/kostnad" är en kunskapssyns-fråga, och benchmark-debatten illustrerar
  Bernsteins performativa vs kompetensinriktade modell.
- **Format:** hybrid – Nr1:s essä-ram + strukturerade jämförelsedimensioner +
  en plats för andras röster.
- **Dimensioner: tre, inte fyra.** Kents "harness" och "app-hanterbarhet"
  slogs ihop (harness realiseras av klienten), med fasetterna *mekanism* och
  *ergonomi*.
- **Verktygskedjan oförändrad:** Cursor för Git/GitHub/Pages oavsett modell;
  Claude-kompassen som arbetssätt.
- **nytta/kostnad:** kvot – "dubbelt så dyr ⇒ måste vara dubbelt så bra".
  Täljarens proxy spikas i en kommande SPEC.md (som ska skrivas före bygget).
- **Modell-namn-svårigheten** (namn vs nummer, paraplynamn, tyst omruttning)
  blir ett eget stycke i texten – Kents tillägg.

---

## 2026-09-05

- **Andra kursmappen skapad:** `2026_host/Policy_i_energi_och_klimat/`
  (ETE409 "Policys i energi- och klimatomställningen", LiU, kurstillfälle
  HT 2026). README, personlig kursplan, litteraturlista (Thollander m.fl.
  2019 och 2020) och en öppen disposition för essän (UPG2).
- **UPG2 (öppet, ej låst):** sektor (industri/transport/byggnader/förnybart)
  och policyinstrument för den individuella essän är inte valda. En möjlig
  – inte beslutad – koppling till vindkraftskalkylerna nämns i
  `essa-upg2/disposition-essa.md`.
- **Kursmatrisen på LiU** är den generella CDIO-kompetensmatrisen, inte en
  lärandemål-till-examination-koppling. Kopplingen i kursens
  `personlig-kursplan.md` är Claudes tolkning, flaggad som sådan.
- **Sammanfattande README** skapad på `2026_host/README.md` (jämförelse av
  AI101A och ETE409), plus `2026_host/notebooklm-prompt.md` för en AI-pod
  om terminens kurser.
- **CDIO/UPG förklarat i detalj** i ETE409:s `personlig-kursplan.md`
  (avsnitt 1): CDIO = Conceive-Design-Implement-Operate, grundat år 2000 av
  MIT, Chalmers, KTH och LiU; UPG = "uppgift" (Ladok-momentkod); varför
  UPG1 saknas i just ETE409 är Claudes rimliga gissning, inte ett
  bekräftat faktum.
- **Kandidatämne för UPG2 (fortfarande öppet, ej beslutat):** vindkraftens
  intäktsdelning till närboende (ny lag, ikraftträdande 1 juli 2026) –
  konkret utformat i `essa-upg2/disposition-essa.md` avsnitt 4, med
  källhänvisning till regeringens pressmeddelande. Samma sakfråga används
  redan i AI101A-mappens delprovsutkast – flaggat som något att stämma av
  med respektive kursledning om Kent går vidare med det.

---

## 2026-09-04

- **Repot skapat** och kopplat till <https://github.com/kentlundgren/Studier>
  (tomt repo, "känt-nytt"-läge). README, `.gitignore` och kursmaterial
  pushade av Claude Code på Kents uttryckliga begäran.
- **Kurs igång:** AI101A "AI för chefer och ledare" (HKR, antagningskod
  HKR-09GQQ). Registreringsperiod **2–9 nov 2026**. Kalenderpåminnelser
  inlagda (registrering + avstämning 26 okt).
- **AEA:** "Ansökan om studier" inskickad till a-kassan (AEA) 2026-09-04;
  avvaktar godkännande.
- **Litteraturlista** sammanställd (`litteratur/litteraturlista.md`) – fyra
  titlar från HKR:s lista. Kan revideras fram till åtta veckor före
  kursstart.
- **Val av inriktning på examinationen (HYPOTES, ej låst):**
  vindkraftskalkyler som genomgående case – Delprov 1 = analys av
  AI-stödda ekonomiska kalkylverktyg, Delprov 2 = handlingsplan för Skånes
  vindkraftsakademi. Utkast finns i `delprov1-*` och `delprov2-*`.
  Omprövas fritt tills Kent bestämt sig.
- **CLAUDE.md-linje:** lokal CLAUDE.md hålls till stabila fakta; strategi
  och läge hålls utanför för att inte låsa fast tänkandet.
