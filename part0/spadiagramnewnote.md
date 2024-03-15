sequencediagram
    participant browser
    participant server

    activate server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server ->>browser: server has pushed note to notes list and rerenders the notes list without reloading
    decativate server