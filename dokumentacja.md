# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

Zespół: Svitlana Tatarchenko & Marcel Freitag
Klasa: 3 Technikum
Data: 16.03.26

---
## 1. Analiza wymagań klienta

Na podstawie e-maila od klienta należy przygotować prosty kalkulator wynajmu sprzętu wodnego. Aplikacja ma pozwalać użytkownikowi wpisać swoje imię, a następnie wybrać sprzęt do wynajęcia (kajak, rower wodny lub flagową Omegę). Użytkownik wybiera także czas wynajmu w godzinach. Dodatkowo może zaznaczyć opcjonalne dodatki(kapok dla dziecka, opiekę instruktora). Kalkulator powinien automatycznie obliczać i wyświetlać aktualną cenę wynajmu na podstawie wybranych opcji.

---
## 2. Architektura rozwiązania

Zdecydowaliśmy się na jeden główny komponent App.ts, ponieważ aplikacja jest niewielka i pełni funkcję prostego kalkulatora wynajmu sprzętu wodnego. Cała logika formularza znajdują się w jednym miejscu, dzięki temu kod jest czytelniejszy do zarządzania i zrozumienia.
Kod w pliku App.ts został podzielony na logiczne sekcje, co pozwala zachować spójność i porządek, mimo że cały kod znajduje się w jednym pliku. Są to sekcje: Importy, stan aplikacji (State), funkcje obsługi zdarzeń(Event Handlers), widok aplikacji (JSX).
---

## 3. Zarządzanie stanem (`useState`)

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada?
|:---------------------|:-------|:----------------------------------------------------------------------------------|
| textImie             | string | Przechowuje imię klienta wpisane w formularz                                      |
| selectWypozy         | string | Przechowuje typ wypożyczanego sprzętu wodnego (kajak, rower wodny, flagowa omega) |
| intSuwake            | string | Przechowuje czas wypożyczenia w godzinach (wartość suwaka)                        |
| karok                | string | Określa, czy opcja „Kapok dla dziecka” jest włączona czy wyłączona.               |
| opieka               | string | Określa, czy opcja „Opieka instruktora” jest włączona czy wyłączona               |
| regulamin            | string | Określa, czy użytkownik zaakceptował regulamin ("on"/"off")                       |
| suma                 | number | Przechowuje wyliczoną cenę wynajmu na podstawie wybranych opcji                   |
| paymentMethod        | string |  Przechowuje wybraną metodę płatności (BLIK, karta, gotówka)                      |
| disabled             | boolean|  Steruje włączeniem lub wyłączeniem przycisku „Wylicz Cenę”                       |
| wiadomość            | string | Zwraca uwagę jeśli użytkownik potrzebuje patentu.				    |

---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

FUNKCJA refresh(wybor, czas, kapok, opieka)

    czass = zamień czas na liczbę

    JEŻELI wybor = "kajak" TO
        suma = 20
        prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        ZWRÓĆ prawdziwaSuma

    W PRZECIWNYM RAZIE JEŻELI wybor = "rowerwodny" TO
        suma = 35
        prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        ZWRÓĆ prawdziwaSuma

    W PRZECIWNYM RAZIE JEŻELI wybor = "omega" TO
        suma = 150
        prawdziwaSuma = sprawdzWyjatki(kapok, opieka, suma, czass)
        ZWRÓĆ prawdziwaSuma

    W PRZECIWNYM RAZIE
        WYPISZ "Błąd w kalkulatorze"
        ZWRÓĆ 0

KONIEC FUNKCJI

FUNKCJA sprawdzWyjatki(kapok, opieka, suma, czas)

    JEŻELI opieka = "on" TO
        suma ← suma + 50
        suma ← suma * czas
    W PRZECIWNYM RAZIE
        suma ← suma * czas

    JEŻELI kapok = "on" TO
        suma ← suma + 5

    ZWRÓĆ suma

KONIEC FUNKCJI


* **Cena bazowa: sprawdzane na początku jest co użytkownik wybrał a następnie obliczne są do tego reszta** (jak jest ustalana?)
* **Wpływ godzin: Jest obliczna przed ostatnia zaraz przed obliczeniem czy użytkownik wybrał kapok** (jak suwak zmienia cenę?)
* **Opcje dodatkowe: w odrębnej funkcji to sprawdzającą** (jak doliczacie kapoki i instruktora?)
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: ...` - (opis zastosowania)
2. `...` - (opis zastosowania)
3. `...` - (opis zastosowania)
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** Algorytm obliczeniowy, miałem z 4 pomysły na niego lecz wybrałem najłatwiejszy ale i tak zajął trochę.
* **Czego nowego się nauczyliście?** Pracy z gitem brakuje go najbardziej powinno się to trenować.
* **Co byście zmienili, gdybyście mieli więcej czasu?** Wymiar czasu tu jest co godzinę było by super kiedy mógłbym zrobić co do minuty.
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.