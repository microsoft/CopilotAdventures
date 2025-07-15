## L'Arena Gridlock di Mythos: Avventura Modalità Ask

<a href="#">
   <img src="../../../Images/mythos-arena-full.jpg" style="width: 830px" />
</a>

### Contesto

Nella terra mistica di Mythos, creature di vari regni si riuniscono per combattere nell'Arena Gridlock, una griglia simile a quella degli scacchi dove vengono testate strategia, potenza e astuzia. Ogni creatura ha una mossa unica, potere e strategia.

### Obiettivo

Il tuo compito è simulare una battaglia nell'Arena Gridlock. Ogni creatura farà una serie di mosse, e dopo ogni mossa, la creatura potrebbe infliggere danni al suo avversario se atterrano sulla stessa casella. L'obiettivo è accumulare il punteggio più alto alla fine della battaglia. Per tenere traccia dei progressi della battaglia, visualizza la griglia dopo ogni mossa e mostra i punteggi correnti proprio sotto la griglia.

### Specifiche

1. **Dinamiche della Griglia:**

   - L'Arena Gridlock è una griglia 5x5.
   - Ogni cella della griglia può essere vuota o occupata da una creatura.
   - Le creature possono muoversi su, giù, a sinistra o a destra di una cella.
2. **Dati delle Creature:**


   | Nome   | Inizio | Mosse                  | Potere | Icona |
   | -------- | -------- | ------------------------ | -------- | ------- |
   | Drago  | 2,2    | DESTRA, SINISTRA, GIÙ | 7      | 🐉    |
   | Goblin | 2,3    | SINISTRA, DESTRA, SU   | 3      | 👺    |
   | Orco   | 0,0    | DESTRA, GIÙ, GIÙ     | 5      | 👹    |
3. **Dinamiche della Battaglia:**

   - Le creature si alternano nelle mosse.
   - Se due creature atterrano sulla stessa cella dopo una mossa, entrambe infliggono danni l'una all'altra.
   - I punti vengono assegnati in base ai danni inflitti.
   - La battaglia termina quando tutte le mosse sono completate.
4. **Output:**

   - Dopo ogni mossa, visualizza la griglia stampandola sulla console usando ⬜️ per rappresentare una cella.
   - Sopra la griglia aggiungi un titolo che dice "Tavola Iniziale" (per mostrare lo stato iniziale della tavola) o "Mossa X" dove X è il numero della mossa corrente.
   - Usa l'icona di ogni creatura per rappresentarla sulla griglia.
   - Le celle vuote possono essere rappresentate da un ⬜️.
   - Le celle di battaglia possono essere rappresentate da un 🤺.
   - Mostra i punteggi correnti di ogni creatura proprio sotto la griglia dopo ogni mossa.
   - Alla fine della battaglia, restituisci il totale dei punti accumulati da ogni creatura.

     <a href="#">
        <img src="../../../Images/mythos-board-example.png">
     </a>

### Vincoli

- Usa GitHub Copilot e scrivi la simulazione in qualsiasi linguaggio tu preferisca.
- Assicurati che gli algoritmi siano efficienti per gestire le dinamiche della battaglia. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".
- Il programma dovrebbe avere una copertura di test del 100%. Usa il comando /tests in GitHub Copilot.

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per rendere l'output.
2. **Definisci Costanti e Strutture Dati**:

   - Definisci l'array `creatures` contenente i dettagli delle creature.
   - Definisci un oggetto `directions` per mappare le direzioni di movimento ai rispettivi cambiamenti di coordinate.
3. **Inizializza la Griglia di Battaglia**:

   - Imposta la dimensione della griglia e crea un array 2D (`grid`) con tutte le celle inizializzate a `null`.
4. **Inizializza Punteggi e Griglia**:

   - Scorri ogni creatura nell'array `creatures`.
   - Per ogni creatura, inizializza il suo punteggio a 0 nell'oggetto `scores`.
   - Posiziona ogni creatura sulla griglia usando la sua posizione iniziale e l'icona.
5. **Simula le Mosse della Battaglia**:

   - Scorri il numero di mosse, partendo da -1 (per rappresentare lo stato iniziale).
   - Se è lo stato iniziale (`move` è -1), rendi la griglia.
   - Se è l'ultima mossa, esci dal ciclo dopo aver reso.
   - Per ogni mossa:
     - Determina la nuova posizione della creatura in base alla sua direzione di movimento.
     - Controlla se la nuova posizione si sovrappone ad un'altra creatura.
     - Aggiorna i punteggi e lo stato della griglia in base alle sovrapposizioni o alle mosse riuscite.
6. **Rendi la Griglia**:

   - Per ogni stato della griglia (iniziale e dopo ogni mossa):
     - Mostra il numero della mossa o "Tavola Iniziale" per lo stato iniziale.
     - Stampa lo stato della griglia con le creature o una rappresentazione della cella vuota.
     - Mostra i punteggi correnti di tutte le creature.
7. **Restituisci i Punteggi Finali**:

   - Dopo che tutte le mosse sono state simulate, restituisci i punteggi finali di ogni creatura.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per andare!
2. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione.
   - [Node.js](https://nodejs.org)
   - [Python](https://www.python.org/downloads/)
   - [.NET](https://dot.net)
3. Crea una cartella per il tuo codice.
   - JavaScript: Crea una cartella chiamata `mythos` e aggiungi un file chiamato `app.js`.
   - Python: Crea una cartella chiamata `mythos` e aggiungi un file chiamato `app.py`.
   - C#: Crea una cartella chiamata `mythos` e esegui `dotnet new console`.

### Suggerimenti di GitHub Copilot

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Usa Copilot per migliorare l'efficienza

Vedi se puoi usare Copilot per scoprire la complessità (notazione BigO) del codice.

1. Apri la [vista Chat di GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) nella barra laterale se non è già aperta. Assicurati che il tuo file di soluzione sia ancora aperto.
2. Chiedi a GitHub Copilot qual è la complessità del codice.
3. Chiedi a GitHub Copilot di rendere il codice più efficiente.
4. Chiedi di nuovo la complessità - è migliore?

#### Usa Copilot per generare commenti al codice

1. Evidenzia tutto il codice con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.
2. Premi <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> per aprire la chat inline.
3. Digita "/doc"
4. Chiedi a GitHub Copilot di documentare la funzione.

#### Usa Copilot per semplificare il tuo codice

1. Apri la Chat di GitHub Copilot nella barra laterale.
2. Digita "/simplify" e premi <kbd>Enter</kbd>. Puoi anche aggiungere qualsiasi testo vuoi dopo il "/simplify" per dare più istruzioni a Copilot.
3. Cosa ha suggerito GitHub Copilot per renderlo più semplice?

#### Hai Errori?

Anche la Chat di Copilot può aiutare con quello! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema.
