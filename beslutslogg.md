# Beslutslogg – Studier

Daterade beslut och lägesnoteringar för repot. Nyast överst. Det som står
här är beslut *av dagsläget* – de får omprövas. Stabila konventioner bor i
`CLAUDE.md`.

---

## 2026-09-09

- **Nytt bygge i `synpalarande/`: Nr2** – *"Vad betyder 'bäst' när modellen
  skriver koden?"* En jämförelse av AI-modeller för kodning (Claude vs
  OpenAI/Codex), utifrån ett LinkedIn-inlägg. Fullständig plan:
  [`synpalarande/Nr2/PRD_nr2_ai-kodmodeller.md`](synpalarande/Nr2/PRD_nr2_ai-kodmodeller.md)
  (v0.4). Inget byggt än.
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
