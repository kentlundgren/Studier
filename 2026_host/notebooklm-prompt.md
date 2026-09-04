# Prompt till NotebookLM – AI-pod om höstens kurser

Kopiera texten nedan in i NotebookLM:s anpassningsfält ("Anpassa" /
"Customize") för Audio Overview / Ljudöversikt. Ladda först upp källorna
den ska utgå från – se förslag längst ner.

---

## Prompten

```
Du är två poddvärdar som ska spela in ett samtal om två kurser jag läser
hösten 2026 vid sidan av jobbet: AI101A – "AI för chefer och ledare"
(Högskolan Kristianstad, 3 hp, avancerad nivå) och ETE409 – "Policys i
energi- och klimatomställningen" (Linköpings universitet, 3 hp,
grundnivå). Utgå enbart från källmaterialet jag laddat upp (kursplaner,
litteraturlistor, kursöversikter, ev. egna anteckningar) – hitta inte på
fakta om kursinnehåll, litteratur eller examination som inte finns i
källorna. Säg öppet ifrån om något är osäkert eller saknas i materialet,
i stället för att gissa.

Täck gärna följande i samtalet:

1. Vad kurserna faktiskt går ut på – syfte, lärandemål och kursinnehåll
   för var och en, i vanligt språk (jag är ekonom/controller, inte
   tekniker eller jurist).

2. Hur de examineras – AI101A har två delprov (analys av ett
   AI-tillämpningsområde samt en handlingsplan/projekt), ETE409 har
   digitala kunskapstest per modul plus en individuell policyessä.
   Diskutera vad de olika formerna kräver av mig som student.

3. Kurslitteraturen – vad varje bok/källa bidrar med, och hur källorna
   kompletterar varandra inom respektive kurs (t.ex. EU:s AI-förordning
   kontra Floridis etikbok i AI101A; den svenska grundboken kontra den
   engelska companion-volymen i ETE409).

4. Vad kurserna har gemensamt – båda handlar i grunden om hur regelverk
   och styrmedel formar en teknisk omställning (AI-reglering respektive
   energi- och klimatpolicy), fast från olika håll. Diskutera vad jag kan
   vinna på att läsa dem parallellt.

5. Praktisk tillämpning – jag planerar att koppla examinationen till mitt
   eget arbete med vindkraftskalkyler (ekonomiska beslutsverktyg för
   vindkraftsinvesteringar som jag byggt vidare på i flera generationer,
   med stöd av AI). Resonera kring var i respektive kurs den kopplingen
   är starkast och var den är svagare eller inte relevant.

6. Studiestrategi – ge konkreta, praktiska tips för hur jag bäst lägger
   upp läsning och arbete under hösten, givet att båda kurserna går helt
   på distans och i lågt tempo (kvartsfart/deltid) vid sidan av jobb.

Ton: nyfiken och konkret, gärna lite kritiskt granskande mot varandra
snarare än bara samstämmig. Undvik generiska AI-floskler och
självklarheter. Håll er till svenska genomgående.
```

---

## Förslag på källor att ladda upp i samma notebook

Från detta repo:
- [`2026_host/README.md`](README.md) – sammanfattande jämförelse av båda kurserna
- [`AI_for_chefer/README.md`](AI_for_chefer/README.md) och [`AI_for_chefer/personlig-kursplan.md`](AI_for_chefer/personlig-kursplan.md)
- [`AI_for_chefer/litteratur/litteraturlista.md`](AI_for_chefer/litteratur/litteraturlista.md)
- [`Policy_i_energi_och_klimat/README.md`](Policy_i_energi_och_klimat/README.md) och [`Policy_i_energi_och_klimat/personlig-kursplan.md`](Policy_i_energi_och_klimat/personlig-kursplan.md)
- [`Policy_i_energi_och_klimat/litteratur/litteraturlista.md`](Policy_i_energi_och_klimat/litteratur/litteraturlista.md)

Valfritt, för djupare fakta direkt från källan:
- HKR:s kursplan-PDF (AI101A): `AI_for_chefer/kursplan/AI101A-kursplan.pdf`
- LiU:s officiella kursplan-PDF (ETE409): <https://studieinfo.liu.se/pdf/kursplan/ETE409/ht-2026>

**Obs:** NotebookLM känner inte till mina delprovsutkast (`delprov1-*`,
`delprov2-*`, `essa-upg2/`) som fakta om kurserna – de är mina egna,
opublicerade arbetsutkast, inte kursinnehåll. Ladda upp dem bara om du
vill att podden ska diskutera *din egen plan*, inte kursens innehåll –
och nämn i så fall det uttryckligen i prompten.
