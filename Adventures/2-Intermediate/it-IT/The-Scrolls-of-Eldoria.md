## I Rotoli di Eldoria

<a href="#">
    <img src="../../../Images/eldoria.jpg" style="width: 830px" />
</a>

### Contesto

Nell'incantata terra di Eldoria, antichi rotoli contengono i segreti dell'universo. Questi rotoli, tuttavia, sono stati dispersi e protetti dagli Anziani usando potenti incantesimi. Questi incantesimi hanno nascosto i segreti nei rotoli, aggiungendo strati di informazioni fuorvianti per scoraggiare gli occhi indiscreti. Nel tempo, questi rotoli sono stati digitalizzati e conservati nella Grande Biblioteca di Eldoria, accessibile solo attraverso la Rete del Sapere di Eldoria.

### Obiettivo

Tu, un giovane apprendista stregone, hai ricevuto il compito di recuperare e decifrare uno di questi rotoli. Il rotolo è conservato come file sulla Rete del Sapere di Eldoria. Devi fare una chiamata HTTP per recuperare il contenuto del rotolo. Tuttavia, le informazioni fuorvianti degli Anziani devono essere filtrate usando l'antico metodo delle Espressioni Regolari per rivelare i veri segreti contenuti.

### Specifiche

1. **Recupero dei Dati:**
    - Usa la magica chiamata HTTP per recuperare il contenuto del rotolo. Troverai il rotolo nella posizione `https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt` della Grande Biblioteca di Eldoria.
    - Il contenuto sarà in formato di testo.

2. **Decifrare il Rotolo:**
    - Il rotolo contiene sia i segreti degli Anziani che le informazioni fuorvianti.
    - I veri segreti hanno un modello specifico: sono sempre circondati dai simboli `{*` e `*}`.
    - Estrai tutti i veri segreti dal rotolo.

3. **Output:**
    - Visualizza i segreti estratti in modo strutturato.
    - Assicurati che non vengano visualizzate informazioni fuorvianti.

### Vincoli

- Scrivi la simulazione usando GitHub Copilot e qualsiasi linguaggio tu scelga. Prova a imparare un nuovo linguaggio se sei pronto per la sfida!
- Assicurati di utilizzare algoritmi efficienti per gestire il recupero del testo e l'estrazione. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per visualizzare l'output.
1. Fai una chiamata HTTP per recuperare il contenuto del rotolo.
1. Usa un'espressione regolare per filtrare le informazioni fuorvianti ed estrarre i veri segreti.
1. Visualizza i segreti estratti.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per andare!
1. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Crea una cartella per il tuo codice. 
    - JavaScript: Crea una cartella chiamata `eldoria` e aggiungi un file chiamato `app.js`.
    - Python: Crea una cartella chiamata `eldoria` e aggiungi un file chiamato `app.py`.
    - C#: Crea una cartella chiamata `eldoria` e esegui `dotnet new console`.

### Suggerimenti per GitHub Copilot

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Usa Copilot per migliorare l'efficienza

Vedi se puoi usare Copilot per scoprire la complessità (notazione BigO) del codice.

1. Apri la [vista Chat di GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) nella barra laterale se non è già aperta. Assicurati che il tuo file di soluzione sia ancora aperto.
2. Chiedi a Copilot Chat qual è la complessità del codice.
3. Chiedi a Copilot Chat di rendere il codice più efficiente.
4. Chiedi di nuovo la complessità - è migliorata?

#### Usa Copilot per generare commenti al codice

1. Evidenzia tutto il codice con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.
2. Premi <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> per aprire la chat inline.
3. Digita "/doc"
4. Chiedi a Copilot Chat di documentare la funzione.

#### Usa Copilot per semplificare il tuo codice

1. Apri la Chat di GitHub Copilot nella barra laterale.
2. Digita "/simplify" e premi <kbd>Enter</kbd>. Puoi anche aggiungere qualsiasi testo desideri dopo "/simplify" per dare più istruzioni a Copilot.
3. Cosa ti ha suggerito Copilot Chat per semplificarlo?

#### Hai errori?

Anche la Chat di Copilot può aiutarti! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema.