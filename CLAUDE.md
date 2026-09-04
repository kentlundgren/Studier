# CLAUDE.md – Studier

**Nivå:** Projekt (`C:\Users\kentl\OneDrive\AI\Studier\CLAUDE.md`)
**Gäller:** Claude Code-sessioner som är öppnade i den här mappen
**Skapad:** 2026-09-04

Den här filen kompletterar den globala `C:\Users\kentl\.claude\CLAUDE.md`
(som alltid gäller). Vid konflikt: fråga Kent.

---

## Scope

Mappen samlar Kent Lundgrens **kurser och studier** – kursplaner,
antagningsbesked, anteckningar, inlämningar och kursmaterial, organiserat
per termin.

Uppdrag som hör hemma här: allt som rör pågående eller kommande kurser
(HKR eller andra lärosäten), studieadministration (registrering, a-kassa/AEA,
CSN), samt anteckningar och uppgifter kopplade till en kurs.

Uppdrag som **inte** hör hemma här: Kents blogginlägg, jobbansökningar,
AI-tekniska projekt, kalkyler och liknande – de har egna mappar/repon.
Om ett uppdrag tydligt hör hemma någon annanstans: stanna och fråga.

---

## Struktur

```
Studier/
└── 2026_host/                     # höstterminen 2026
    ├── AI_for_chefer/             # AI101A – AI för chefer och ledare (HKR)
    │   ├── antagen_till_kursen_...jpg
    │   └── kursplan/AI101A-kursplan.pdf
    └── Policy_i_energi_och_klimat/
```

Namnkonvention: en mapp per termin (`ÅÅÅÅ_host` / `ÅÅÅÅ_var`), och under den
en mapp per kurs.

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
- **README:** håll `README.md` uppdaterad med aktuell kurs och struktur;
  den ska innehålla både GitHub-URL och lokal sökväg.
- **Källor:** följ Kents Harvard-/referensstandard om texter med externa
  påståenden skrivs här (se skill `kent-referens-skill`).
- **Svenska** som standard i all text.

---

## Aktuellt läge (2026-09-04)

- **AI101A – AI för chefer och ledare** (HKR, antagningskod HKR-09GQQ).
  Registreringsperiod 2–9 nov 2026. Kalenderpåminnelser inlagda.
- "Ansökan om studier" inskickad till AEA (a-kassan) 2026-09-04; avvaktar
  godkännande. Avstämning inlagd i kalendern 26 okt 2026.
