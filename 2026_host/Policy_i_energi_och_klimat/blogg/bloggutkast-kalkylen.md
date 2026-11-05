**Utkast (version 1, 2026-11-05)** · Kanal: blogg (klel) · Om kalkylen för Långhult, utan innehåll ur den opublicerade essän. Kent avgör vad som publiceras och när. `[KONTROLLERA: alla siffror är hämtade ur Kaufmann & Westander (2026) och kalkylen, inte kvalitetssäkrade mot andra källor.]`

---

# Vad får den som bor nära en vindkraftspark? Prova själv

Sedan 1 juli 2026 ska den som äger en bostad nära en ny vindkraftspark ha rätt till ersättning enligt [intäktsdelningslagen (2026:1113)](https://lagen.nu/2026:1113). Men hur mycket är det? Svaret beror på avståndet till verken, elpriset och hur många andra som delar på summan. Det är svårt att få en känsla för den med bara lagtexten, så jag lät bygga en kalkyl där man kan prova själv: [Vindkraftskalkyl, fall Långhult](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl_langhult.html). Jag byggde den i dialog med AI och bestämde vad den skulle räkna.

## Ett verk, fem steg

Kalkylen utgår från vindpark Långhult i Jönköpings och Gislaveds kommuner (upp till 20 verk, 270 meter höga) och från en konsultrapport om vad parken kan ge: [Kaufmann & Westander (2026)](https://fredolsenrenewables.com/media/1gpjqw0l/pm-intaektsdelning-vindpark-laanghult_gislaved.pdf). Ett verk ger cirka 23,8 GWh per år. Med 50 öre per kilowattimme och en viktning på 0,75 (konsultens antagande, eftersom vinden blåser mest när priset är lågt) blir intäkten cirka 8,9 miljoner kronor per verk. Ersättningen till en bostad är en liten andel av det: 2,5 promille inom 1 350 meter, och sedan färre steg ner till 0,5 promille vid 2 160–2 430 meter. Bortom 2 430 meter blir det ingenting.

## Tre saker som överraskade

**Spridningen.** Per verk går beloppet från cirka 22 300 kronor i den närmaste zonen till cirka 4 500 kronor i den yttersta. Det är en femfaldig skillnad. Konsulten skriver att genomsnittet blir drygt 18 000 kronor per bostad och år, men det säger lite om vad en enskild bostad får.

**Elpriset.** Ersättningen följer priset rakt av. Vid 30 öre blir den mindre än en tredjedel av vad den blir vid 100 öre. Den som bor nära delar alltså en del av prisrisken.

**Schablonen.** Intäkten som ersättningen räknas på är ett schablonbelopp för marknadsvärdet av elen, inte bolagets faktiska intäkt.

## Vad kalkylen inte kan

Den vet inte var du bor. Hur många bostäder som ligger i varje zon är ett antagande i kalkylen, och likadant är kostnadsvärdena för projektet. Det som kommer ur konsultrapporten är märkt med författare, år och sida, och det som är mitt antagande är märkt som det. Kontrollera mot källan innan du återger något.

Vill du prova? Ändra elpriset, verkshöjden eller antalet bostäder, och se hur summorna flyttar sig.

---

*Källor.*

Kaufmann, W. & Westander, H. (2026) *Intäktsdelning och ersättningar: Vindpark Långhult*. Westander Klimat och Energi, 2026-04-20. Tillgänglig: [https://fredolsenrenewables.com/media/1gpjqw0l/pm-intaektsdelning-vindpark-laanghult_gislaved.pdf](https://fredolsenrenewables.com/media/1gpjqw0l/pm-intaektsdelning-vindpark-laanghult_gislaved.pdf) (hämtad 2026-11-05). *(Konsultrapport publicerad på bolagets webbplats. Källa till parkens uppgifter, zonbelopp och uppskattningen av ersättningen.)*

Lundgren, K. (2026) *Vindkraftskalkyl, fall Långhult*. Interaktiv kalkyl. Tillgänglig: [https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl_langhult.html](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl_langhult.html) (hämtad 2026-11-05). *(Min egen kalkyl, som räknar om uppskattningen med valfritt elpris, verkshöjd och antal bostäder.)*

Lagen.nu (2026) *Lag (2026:1113) om intäktsdelning från vindkraftsanläggningar*. Tillgänglig: [https://lagen.nu/2026:1113](https://lagen.nu/2026:1113) (hämtad 2026-11-05). *(Intäktsdelningslagen (2026:1113), grunden för ersättningen. Zonerna och taket på sidan är återgivna ur konsultrapporten och inte kontrollerade mot lagtexten här.)*
