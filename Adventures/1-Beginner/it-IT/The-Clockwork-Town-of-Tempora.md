## La Città Meccanica di Tempora

<a href="#">
    <img src="../../../Images/tempora-clocks.jpg"  style="width: 830px" />
</a>

### Contesto

Nella città meccanica di Tempora, tutto funziona a orologeria e con un timing preciso. Al centro della città si trova la Grande Torre dell'Orologio, responsabile della gestione del tempo per tutte le attività della città. Tuttavia, nel corso degli anni, alcuni orologi più piccoli in città hanno iniziato a deviare dal tempo esatto.

### Obiettivo

Il tuo compito è creare un sistema che controlla tutti gli orologi della città e li sincronizza con la Grande Torre dell'Orologio. Ti verrà fornito un elenco di orari da vari orologi in giro per la città, e devi determinare quanti minuti ogni orologio è avanti o indietro rispetto all'orario della Grande Torre dell'Orologio.

### Specifiche

1. **Dati dell'Orologio:**
    - Gli orari degli orologi sono forniti in formato 24 ore.
    - La Grande Torre dell'Orologio è alle 15:00.
    - Orari degli orologi in città:
        - Orologio 1: 14:45
        - Orologio 2: 15:05
        - Orologio 3: 15:00
        - Orologio 4: 14:40

2. **Analisi del Tempo e Output:**
    - Devi determinare quanti minuti ogni orologio è avanti o indietro rispetto alla Grande Torre dell'Orologio.
    - Il risultato dovrebbe essere un array di interi che rappresentano la differenza di tempo in minuti. I valori positivi indicano che l'orologio è avanti, e i valori negativi indicano che è indietro.

### Vincoli

- Usa GitHub Copilot e scrivi la simulazione in qualsiasi linguaggio tu preferisca.
- Concentrati su un codice chiaro e conciso. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".
- Creare una rappresentazione visiva per gli orologi è opzionale ma incoraggiato se hai tempo.

### Riassunto delle Attività di Alto Livello da Eseguire
1. Usa un'applicazione console per visualizzare l'output.
1. Analizza i dati temporali per ogni orologio e la Grande Torre dell'Orologio.
1. Calcola la differenza in minuti tra ogni orologio e la Grande Torre dell'Orologio.
1. Mostra la lista delle differenze di tempo.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per iniziare!
1. Se stai lavorando localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Crea una cartella per il tuo codice. 
    - JavaScript: Crea una cartella chiamata `tempora` e aggiungi un file chiamato `app.js`.
    - Python: Crea una cartella chiamata `tempora` e aggiungi un file chiamato `app.py`.
    - C#: Crea una cartella chiamata `tempora` e esegui `dotnet new console`.

### Suggerimenti per GitHub Copilot

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Usa Copilot per migliorare l'efficienza

Vedi se puoi usare Copilot per scoprire la complessità (notazione BigO) del codice.

1. Apri la [vista Chat di GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) nella barra laterale se non è già aperta. Assicurati che il tuo file di soluzione sia ancora aperto.

1. Chiedi a Copilot Chat qual è la complessità del codice.

1. Chiedi a Copilot Chat di rendere il codice più efficiente.

1. Chiedi di nuovo la complessità - è migliorata?

#### Usa Copilot per generare commenti al codice

1. Evidenzia tutto il codice con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.

1. Premi <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> per aprire la chat inline. 

1. Digita "/doc"
1. Chiedi a Copilot Chat di documentare la funzione.

#### Usa Copilot per semplificare il tuo codice

1. Apri la Chat di GitHub Copilot nella barra laterale.

1. Digita "/simplify" e premi <kbd>Enter</kbd>. Puoi anche aggiungere qualsiasi testo desideri dopo "/simplify" per dare più istruzioni a Copilot.

1. Cosa ha suggerito Copilot Chat per semplificare il codice?

#### Hai Errori?

Anche la Chat di Copilot può aiutarti! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema.