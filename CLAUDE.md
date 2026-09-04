# CLAUDE.md – Studier

**Nivå:** Projekt (`C:\Users\kentl\OneDrive\AI\Studier\CLAUDE.md`)
**Gäller:** Claude Code-sessioner som är öppnade i den här mappen
**Skapad:** 2026-09-04 · **Senast ändrad:** 2026-09-04

Den här filen kompletterar den globala `C:\Users\kentl\.claude\CLAUDE.md`
(som alltid gäller). Vid konflikt: fråga Kent.

Filen håller bara **stabila** fakta: scope, struktur, repo-identitet,
konventioner. Rörligt innehåll – kursstrategi, val av tillämpningsområde,
planering – bor i vanliga arbetsdokument (t.ex. `personlig-kursplan.md`) och
beslut loggas i `beslutslogg.md`. Skriv inte in "aktuellt läge" här; det
blir inaktuellt och riskerar att låsa fast tänkandet.

---

## Scope

Mappen samlar Kent Lundgrens **kurser och studier** – kursplaner,
antagningsbesked, anteckningar, inlämningar och kursmaterial, organiserat
per termin.

Uppdrag som hör hemma här: allt som rör pågående eller kommande kurser
(HKR eller andra lärosäten), studieadministration (registrering, a-kassa/AEA,
CSN), samt anteckningar och uppgifter kopplade till en kurs.

Uppdrag som **inte** hör hemma här: Kents blogginlägg, jobbansökningar,
AI-tekniska projekt, fristående kalkyler och liknande – de har egna
mappar/repon. Om ett uppdrag tydligt hör hemma någon annanstans: stanna
och fråga.

---

## Lärandeprojekt – håll tänkandet öppet

Kursmapparna under `2026_host/` är **lärandeprojekt**. Kursupplägg, val av
tillämpningsområde/case och prioritering mellan lärandemål är **hypoteser
under utveckling** – inte beslut.

- `AI_for_chefer/` (AI101A): vindkraftskalkyler som case för båda delproven.
- `Policy_i_energi_och_klimat/` (ETE409): sektor och policyinstrument för
  essän (UPG2) är uttryckligen **öppet** – se `essa-upg2/disposition-essa.md`.

När Kent tänker högt om en kurs: brainstorma med honom, ställ frågor, föreslå
alternativ. Behandla inte tidigare val i repot – inklusive utkast i
`delprov1-*`, `delprov2-*` och `essa-upg2/` – som låsta. Den här filen är
ett skydd mot inlåsning, inte en källa till den.

---

## Struktur

```
Studier/
├── CLAUDE.md
├── README.md
└── 2026_host/                         # höstterminen 2026
    ├── AI_for_chefer/                 # AI101A – AI för chefer och ledare (HKR)
    │   ├── README.md
    │   ├── personlig-kursplan.md      # levande: läsplan, koppling litteratur–lärandemål
    │   ├── Bilder/
    │   ├── kursplan/AI101A-kursplan.pdf
    │   ├── litteratur/litteraturlista.md
    │   ├── delprov1-vindkraftskalkyler/
    │   └── delprov2-handlingsplan/
    └── Policy_i_energi_och_klimat/     # ETE409 (LiU)
        ├── README.md
        ├── personlig-kursplan.md
        ├── litteratur/litteraturlista.md
        └── essa-upg2/                 # UPG2 – sektor/policyinstrument ännu öppet
```

Namnkonvention: en mapp per termin (`ÅÅÅÅ_host` / `ÅÅÅÅ_var`), och under den
en mapp per kurs. Ingen egen `CLAUDE.md` per kursmapp – strategin lever i
kursens arbetsdokument, inte i en regelfil.

---

## Repo-identitet

| | |
|---|---|
| GitHub | <https://github.com/kentlundgren/Studier> (publikt) |
| Lokal sökväg | `C:\Users\kentl\OneDrive\AI\Studier` |
| Default-branch | `main` |
| Status | Känt-gott – lokalt och `origin` i synk sedan 2026-09-04 |

---

## Konventioner

- **Git commit/push:** Kent gör det själv via Cursor. Claude Code committar/
  pushar bara på Kents uttryckliga begäran (se globala reglerna).
- **README:** håll `README.md` (rot och kursmapp) uppdaterad med aktuell
  kurs och struktur; ska innehålla både GitHub-URL och lokal sökväg.
- **Källor:** följ Kents Harvard-/referensstandard om texter med externa
  påståenden skrivs här (se skill `kent-referens-skill`).
- **Svenska** som standard i all text.
- **Beslut** som är värda att minnas loggas i `beslutslogg.md` med datum –
  inte i den här filen.

---

## Uppdateringslogg

- 2026-09-04 (skapad): scope, struktur, repo-identitet, konventioner,
  "Aktuellt läge"-avsnitt.
- 2026-09-04 (revision): "Aktuellt läge" borttaget och flyttat till
  `beslutslogg.md`; nytt avsnitt "Lärandeprojekt – håll tänkandet öppet";
  struktur uppdaterad mot faktiskt innehåll. Bakgrund: samtal med Kent om
  att en lokal CLAUDE.md inte ska låsa fast provisoriska val.
