# Besked före beslut: webbversion av policyrapporten

- **Live:** [https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/](https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/)

Webbversion av policyrapporten *Besked före beslut: att förbättra intäktsdelningen från vindkraft till närboende* (ETE409 UPG2, Linköpings universitet). Texten är rapporten ordagrant, hämtad ur [261120_3000_ord.md](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/261120_3000_ord.md). Den som vill ha Word-filen hittar den som [261120_3000_ord.docx](https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/261120_3000_ord.docx).

Version 1.0 · 2026-11-20

## Det extra på webben

Rutorna märkta "Extra på webben" ligger utanför rapportens ordantal och använder bara uppgifter som redan står i rapporten eller i lagtexten den hänvisar till.

| Del | Vad den gör |
|---|---|
| Gissa först | Frågar hur många av 46 projekt som stoppades av kommunerna 2025 och visar svaret (43 av 46, 93 procent) mot genomsnittet 68 procent 2021–2024. |
| Diagram 1. Vad hade jag fått? | Räknar ersättning per bostad ur avstånd, verkshöjd och elpris enligt 12–14 §§ och samma antaganden som Tabell 1. |
| Diagram 2. Var kommer beskedet? | Tidslinje med sju steg. Växlar mellan idag och med förslaget och visar i vilket steg ersättningen blir känd. |
| Ordlista | Fackord förklaras vid hovring, fokus och tryck, första gången de förekommer. |
| Källkort | Hänvisningar som "(Gross, 2007)" visar referensposten vid hovring, fokus och tryck. |
| Läsning | Framstegsstapel, innehållsförteckning, mörkt läge, utskriftsstil och knappen Kopiera hänvisning. |

## Filer

| Fil | Innehåll |
|---|---|
| [index.html](https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/) | Sidan. Genereras, ändras inte för hand. |
| [stil.css](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/stil.css) | Utseende, mörkt läge och utskrift. |
| [skript.js](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/skript.js) | Gissningen, kalkylen, tidslinjen, ordlistan, källkorten och teknik-modalen. Versionen står i `VERSION` och `VERSIONSDATUM`. |
| [bygg.py](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/bygg.py) | Läser md-filen och skriver `index.html`. Innehåller ordlistan och listan över källhänvisningar. |
| [mall.html](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/mall.html) | Sidans ram, delningstaggar och teknik-modal. |
| [del-kalkyl.html](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/del-kalkyl.html) och [del-tidslinje.html](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/del-tidslinje.html) | Markup för Diagram 1 och 2. |
| [og-mall.html](https://github.com/kentlundgren/Studier/blob/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/og-mall.html) | Källan till delningsbilden. |
| [og-bild.jpg](https://kentlundgren.github.io/Studier/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb/og-bild.jpg) | Delningsbilden, 1200 × 630 pixlar. |

## Bygga om sidan

Ändras rapporten ska sidan byggas om, annars glider den isär från md-filen:

```powershell
python bygg.py
```

Kör kommandot i den här mappen. Ändras sidans innehåll eller skript: höj `VERSION` och `VERSIONSDATUM` i `skript.js` och i `mall.html`, och skriv en `UPPDATERING`-rad i filhuvudet.

Delningsbilden görs om med Chrome och sparas som JPEG under 300 kB:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --window-size=1200,630 --force-device-scale-factor=1 --screenshot=og.png og-mall.html
```

## Efter publicering

LinkedIn sparar länkförhandsvisningar i cache. Testa adressen med LinkedIns Post Inspector efter att sidan är publicerad, så att bilden och texten visas.

## Repo

- GitHub: <https://github.com/kentlundgren/Studier/tree/main/2026_host/Policy_i_energi_och_klimat/essa-upg2/webb>
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\Studier\2026_host\Policy_i_energi_och_klimat\essa-upg2\webb`
