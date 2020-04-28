# dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne oraz lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboard)

# widok dostępności stolików

- `/tables `
    - wybór daty i godziny
    - tabela z listą rezerwacji raz wydarzeń
        - każda kolummna = 1 stolik
        - każdy wiersz = blok 30 minut
        - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięviu rezerwacji oraz eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie info dot rezerwacji
    - umożliwia edycję i apisanie zmian
- `/tables/booking/new`
    - j.w bez początkowych info
- `/tables/events/:id`
    - j.w bez początkowych info dla eventów
- `/tables/events/new`
    - j.w bez początkowych info dla eventów
# widok kelnera

- `/waiter`
    - tabela 
        - w wierszach stoliki
        - w kolumnach - różne info  (status, czas od ostatniej aktywności)
        - ostatnia kolumna - dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia
- `/waiter/order/:id`

    -j.w.

# widok kuchni

- `/kitchen`
    - wyświetlanie listy zamówień w kolejności ich złożenia
    - lista musi zawierać nr stolika (lub zamóienia zdalnego) oraz pełne info zamówionych dań
    - na liście musi być m,ożliwość oznaczenia zamóienia jako zrealizowane