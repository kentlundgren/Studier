# Andras röster – Claude Code mot OpenAI/Codex för kodning

*Underlag till [`index.html`](index.html), avsnittet
[Andras röster](https://kentlundgren.github.io/Studier/synpalarande/Nr2/#AndraRoster).
Senast sökt: 2026-09-09. Framtaget med en språkmodell som verktyg för sökning;
Kent står för hur underlaget används och för kommentarerna.*

En **röst** tas in om den (1) går att attribuera med länk och datum, (2) säger
något konkret om kodförmåga, harness eller pris/nytta, och (3) är
förstahandserfarenhet, ett test med metod, eller en resonerande jämförelse –
inte ren hype. Se `SPEC.md` avsnitt 7.

---

## Rösterna

| # | Vem | Källa (var / när) | Vad de hävdar | Dimension | Kents kommentar |
|---|---|---|---|---|---|
| 1 | **Osama Romoh**, AI Strategist & Educator | [LinkedIn-inlägget](https://lnkd.in/p/efrssr5X), ~7–8 sep 2026 (kortlänk delad av författaren; inlägget kräver inloggning) | GPT‑6 Astra följer instruktioner tätare och svarar mindre pratigt; "giving me what I actually asked for". Köpte ChatGPT Pro vid sidan av Claude Max – behåller båda. | Harness (ergonomi), pris | Inlägget som startade det här numret. Smalare än rubriken: handlar om instruktionsföljsamhet, inte kodkvalitet, och utan siffror. Poängen jag tar med mig är att svaret blev "båda", inte "antingen eller". |
| 2 | **Prathit Joshi**, Composio | [Composio-bloggen](https://composio.dev/content/claude-code-vs-openai-codex), 2026-08-18, "100+ hours with both" | Codex vann 3–2 i deras genomgång. Men blinda granskare bedömde Claude‑koden som renare i 2 fall av 3. "If someone made me uninstall one today, it's not Codex." Codex Cloud och `/review` lyfts fram; Claude starkare på mycket långa sessioner. | Alla tre | Den mest metodiska källan jag hittade. Att daglig preferens och blindbedömd kvalitet pekar åt olika håll är själva den nyans jag vill ha med. |
| 3 | **Naresh B A** | [Medium](https://medium.com/@phoenixarjun007/i-switched-from-claude-code-to-codex-heres-what-surprised-me-facaab06a2e6), juli 2026, "I Switched from Claude Code to Codex" (ej öppnad/verifierad) | Claude Code känns "som en kollega som hela tiden berättar vad den gör"; Codex "hand it a task, get the implementation back". | Harness (ergonomi) | Fångar filosofiskillnaden i en mening. Formuleringen används i `index.html` som allmän beskrivning, inte som verifierat citat. |
| 4 | **Peter Yang** (@petergyang, nyhetsbrev ~110k) | [X / @petergyang](https://x.com/petergyang), 2026 (exakt inlägg ej spårat) | Bytte till Codex: "Fast mode + generous limits = more reps", "little touches like steering, auto remote control on phone". Har även intervjuat Claude Code‑teamet och påpekat att Claude Code "is useful for much more than just coding". | Harness, pris | Byter av iterationstakt, inte kapacitet. Det stämmer med min egen slutsats att gränserna, inte listpriset, är det som märks. **Inte** med i skylten i `index.html` eftersom citatet inte gått att verifiera. |
| 5 | Refererad utvecklarenkät ("500+ på Reddit") | Via flera sekundärkällor, 2026 (originalet ej hittat) | 65 % föredrar Codex i vardagen; 67 % blindbedömer Claude‑koden som renare. | Kodförmåga | Citeras flitigt men originalet är inte hittat. Med i skylten men märkt som andrahandsuppgift. |
| 6 | Sammanvägning (Claude‑positiv sida) | Flera jämförelser, 2026 – källorna i [index.html:s referenslista](https://kentlundgren.github.io/Studier/synpalarande/Nr2/#Referenser) | Seniora utvecklare rankar Claude Code högre på ren kodkvalitet och i "most loved"‑mätningar; vanligaste rådet är "kör båda – Claude för arkitektur och planering, Codex för tät implementation". | Kodförmåga, harness | Balans mot att skörden annars lutar Codex‑positivt. En namngiven källa återstår att sätta här. |

---

## Att göra vid nästa uppdatering

- Spåra röst 4 (Peter Yang) och 5 (enkäten) till sina original.
- Sätt en namngiven källa på röst 6.
- Verifiera Romohs permalänk och datum.

---

## Färdig prompt: sök fler röster

Kopiera, byt ut `<datum>` mot dagens datum, klistra in i en Claude Code‑session
med `Studier` öppet:

> Öppna `synpalarande/Nr2/`. Läs `SPEC.md` avsnitt 7 (röst‑definitionen) och den
> här filen (`jamforelse-roster.md`). Sök på webben efter **nya offentliga
> röster** – personer eller organisationer – som jämför Claude med OpenAI/Codex
> **för kodning**, publicerade ungefär det senaste halvåret fram till `<datum>`.
> En röst tas bara in om den (1) går att attribuera med länk och hämtdatum,
> (2) säger något konkret om minst en av dimensionerna kodförmåga / harness /
> pris–nytta, och (3) är förstahandserfarenhet, ett test med metod, eller en
> resonerande jämförelse – inte hype. Lägg till varje ny röst som en rad i
> tabellen: **vem · vad de hävdar · vilken dimension · (lämna "Kents kommentar"
> tom åt mig)**. Blanda hållning, inte bara den ena sidan. Redovisa i chatten
> vad du hittade, vad du valde bort och varför. Uppdatera "senast sökt"‑datumet
> överst i filen. **Committa inte – jag gör det själv i Cursor.** Om nya röster
> ändrar bilden i någon dimension, säg det, men ändra inte `index.html` utan
> att fråga.
