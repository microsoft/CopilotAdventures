## Il Leggendario Duello di Stonevale: Avventura Modalità Ask

<a href="#">
    <img src="../../../Images/stonevale.jpg" style="width: 830px" />
</a>

### Contesto

Nel mistico regno di Stonevale, due guerrieri, Rok e Papyra, sono scelti per un duello che determina il destino delle loro tribù per il prossimo secolo. L'arena, conosciuta come Scissoria, è il luogo in cui ogni mossa ha peso e conseguenze.

### Obiettivo

Il tuo compito è simulare il duello tra Rok e Papyra. Ogni guerriero fa una serie di mosse, e ogni mossa ha un esito specifico. Per vincere il duello, un guerriero deve accumulare il punteggio più alto in una serie di round.

### Specifiche

1. **Mosse e Punti:**
    - Ogni guerriero può fare una delle tre mosse: sasso, carta o forbici.
        - Una vittoria con il sasso = 1 punto
        - Una vittoria con la carta = 2 punti
        - Una vittoria con le forbici = 3 punti

1. **Dinamiche del Duello:**
    - Quando entrambi i guerrieri scelgono la stessa mossa, è un pareggio e non vengono assegnati punti.
    - Il sasso schiaccia le forbici, la carta copre il sasso, e le forbici tagliano la carta.
    - I punti vengono assegnati in base alla mossa vincente.

1. **Modalità di Gioco:**
    - Il duello consiste in 5 round.
    - L'obiettivo è accumulare il punteggio più alto in questi round per vincere il duello.

1. **Mosse dei Giocatori:**

    **Mosse per Rok (Giocatore 1)**

    | Round 1 | Round 2 | Round 3 | Round 4 | Round 5 |
    |---------|---------|---------|---------|---------|
    | forbici    | carta   | forbici| sasso    | sasso   |

    **Mosse per Papyra (Giocatore 2)**

    | Round 1 | Round 2 | Round 3 | Round 4 | Round 5 |
    |---------|---------|---------|---------|---------|
    | sasso | sasso    | carta   | forbici| carta    |


1. **Funzionalità Avanzate (se il tempo lo permette):**
    - Implementa un sistema di suggerimenti che suggerisce una mossa al giocatore.
    - I giocatori possono selezionare la loro mossa per ogni round invece che essere automatizzata.

### Vincoli

- Scrivi la simulazione usando GitHub Copilot e qualsiasi linguaggio tu scelga. Prova a imparare un nuovo linguaggio se sei pronto per la sfida!
- Assicurati di utilizzare algoritmi efficienti per gestire le dinamiche del duello. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".
- Fornire un'interfaccia grafica per la simulazione è opzionale.

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per visualizzare l'output.
1. Inizializza i punteggi per entrambi i guerrieri.
1. Ogni guerriero seleziona una mossa per ogni round.
1. Determina il vincitore di ogni round e assegna i punti.
1. Tally i punteggi dopo 5 round.
1. Dichiarare il vincitore generale del duello.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per andare!
1. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Crea una cartella per il tuo codice. 
    - JavaScript: Crea una cartella chiamata `stonevale` e aggiungi un file chiamato `app.js`.
    - Python: Crea una cartella chiamata `stonevale` e aggiungi un file chiamato `app.py`.
    - C#: Crea una cartella chiamata `stonevale` e esegui `dotnet new console`.

### Suggerimenti per GitHub Copilot

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Usa Copilot per migliorare l'efficienza

Vedi se puoi usare Copilot per scoprire la complessità (notazione BigO) del codice.

1. Apri la [vista Chat di GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) nella barra laterale se non è già aperta. Assicurati che il tuo file di soluzione sia ancora aperto.
2. Chiedi a GitHub Copilot qual è la complessità del codice.
3. Chiedi a GitHub Copilot di rendere il codice più efficiente.
4. Chiedi di nuovo la complessità - è migliorata?

#### Usa Copilot per generare commenti al codice

1. Evidenzia tutto il codice con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.
2. Premi <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> per aprire la chat inline.
3. Digita "/doc"
4. Chiedi a GitHub Copilot di documentare la funzione.

#### Usa Copilot per semplificare il tuo codice

1. Apri la Chat di GitHub Copilot nella barra laterale.
2. Digita "/simplify" e premi <kbd>Enter</kbd>. Puoi anche aggiungere qualsiasi testo desideri dopo "/simplify" per dare più istruzioni a Copilot.
3. Cosa ti ha suggerito GitHub Copilot per semplificarlo?

#### Hai errori?

Anche la Chat di Copilot può aiutarti! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema.