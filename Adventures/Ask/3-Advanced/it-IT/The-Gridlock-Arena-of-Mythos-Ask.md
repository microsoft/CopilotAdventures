## L'Arena Gridlock di Mythos: Avventura Modalità Ask

<a href="#">
   <img src="../../../Images/mythos-arena-full.jpg" style="width: 830px" />
</a>

### Contesto

Nella terra mistica di Mythos, creature di vari regni si riuniscono per combattere nell'Arena Gridlock, una griglia simile a quella degli scacchi dove vengono testate strategia, potenza e astuzia. Ogni creatura ha una mossa unica, potere e strategia.

### Obiettivo

Il tuo compito è creare un sistema di simulazione di battaglia completo per l'Arena Gridlock. Dovrai implementare movimento basato su griglia, combattimento a turni, rilevamento delle collisioni e un sistema di punteggio che tiene traccia delle prestazioni di ogni creatura durante la battaglia.

**In questa avventura, imparerai a usare GitHub Copilot Ask Mode** - un assistente AI interattivo che può aiutarti a costruire applicazioni complete attraverso collaborazione step-by-step!

### Specifiche

1. **Dinamiche della Griglia:**

   - L'Arena Gridlock è una griglia 5x5.
   - Ogni cella della griglia può essere vuota o occupata da una creatura.
   - Le creature possono muoversi su, giù, a sinistra o a destra di una cella.
2. **Dati delle Creature:**

    | Nome   | Inizio | Mosse                | Potere | Icona |
    |--------|-------|----------------------|-------|------|
    | Drago  | 0,0   | DESTRA, GIÙ, DESTRA | 7     | 🐉   |
    | Goblin | 0,2   | SINISTRA, GIÙ, SINISTRA | 3  | 👺   |
    | Orco   | 2,0   | SU, DESTRA, GIÙ      | 5     | 👹   |
    | Troll  | 2,2   | SU, SINISTRA, SU     | 4     | 👿   |
    | Mago   | 4,1   | SU, SU, SINISTRA     | 6     | 🧙   |

3. **Regole di Movimento:**
    - Tutte le creature si muovono simultaneamente ogni turno.
    - Ogni creatura esegue la prossima mossa nella sua sequenza di mosse.
    - Le creature possono muoversi in qualsiasi posizione valida sulla griglia 5x5.
    - Se una creatura non ha più mosse rimaste, il gioco termina.

4. **Dinamiche della Battaglia:**

    - Quando più creature si muovono nella stessa cella, combattono.
    - La creatura con il potere più alto vince la battaglia.
    - Il vincitore guadagna punti pari alla somma di tutti i valori di potere delle creature sconfitte.
    - Tutte le creature sconfitte vengono eliminate dall'arena.
    - Se più creature hanno lo stesso potere più alto, tutte le creature in battaglia vengono eliminate.
    - Più battaglie separate possono verificarsi nello stesso turno in posizioni diverse.
5. **Output:**
    - Dopo ogni turno, visualizza la griglia stampandola sulla console usando ⬜️ per rappresentare celle vuote.
    - Sopra la griglia aggiungi un titolo che dice "Tavola Iniziale" (per mostrare lo stato iniziale della tavola) o "Mossa X" dove X è il numero della mossa corrente.
    - Usa l'icona di ogni creatura per rappresentarla sulla griglia.
    - Le celle di battaglia possono essere rappresentate da un 🤺.
    - Mostra i punteggi correnti di ogni creatura proprio sotto la griglia dopo ogni turno.
    - Il formato del punteggio deve includere le icone delle creature: `'🐉 Drago': 12`
    - Alla fine del gioco, restituisci il totale dei punti accumulati da ogni creatura.

6. **Punteggi Finali Attesi:**
    - Drago: 12 punti (sconfigge Goblin nella Mossa 1 per 3 punti, poi sconfigge Orco e Troll nella Mossa 2 per 5+4=9 punti)
    - Mago: 0 punti (sopravvive ma non vince battaglie)
    - Tutte le altre creature: 0 punti (eliminate durante le battaglie)

      
      <a href="#">
         <img src="../../../Images/mythos-board-example.png">
      </a>

### Vincoli e Migliori Pratiche

- Usa GitHub Copilot e scrivi la simulazione in qualsiasi linguaggio tu preferisca.
- Assicurati che gli algoritmi siano efficienti per gestire le dinamiche della battaglia. Chiedi a GitHub Copilot, "Come posso rendere questo codice più leggibile e manutenibile?".
- Segui le pratiche di sviluppo moderne per il linguaggio scelto:
  - **JavaScript**: Usa moduli ES (import/export), crea package.json con "type": "module"
  - **Python**: Usa Python moderno con definizioni di funzioni appropriate e strutture dati
  - **C#**: Usa funzionalità C# moderne, record, enum e struttura di classe appropriata
  - **Altri linguaggi**: Applica standard moderni equivalenti e strumenti
- Struttura il codice con export/import di moduli appropriati per la manutenibilità
- Usa nomi di funzioni e variabili chiari e descrittivi
- Includi gestione completa degli errori e documentazione

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per rendere l'output.

1. **Definisci Costanti e Strutture Dati**:
   - Definisci l'array `creatures` contenente tutte e cinque le creature con le loro proprietà.
   - Definisci un oggetto `directions` per mappare le direzioni di movimento ai cambiamenti di coordinate.

1. **Inizializza il Sistema di Battaglia**:
   - Imposta la dimensione della griglia a 5x5 e crea un array 2D con tutte le celle inizializzate a `null`.
   - Inizializza i punteggi per tutte le creature a 0.
   - Traccia le creature attive che sono ancora in battaglia.

1. **Inizializza Visualizzazione Griglia**:
   - Posiziona ogni creatura sulla griglia usando la sua posizione iniziale e l'icona.
   - Rendi lo stato iniziale della tavola.

1. **Simula i Turni di Battaglia**:
   - **Flusso Algoritmo Critico**: Visualizza tavola iniziale → Per ogni mossa: calcola nuove posizioni → risolvi battaglie → aggiorna griglia → visualizza risultati
   - Visualizza prima la "Tavola Iniziale", poi cicla attraverso ogni mossa (0, 1, 2).
   - Per ogni turno:
     - Pulisci la griglia per le nuove posizioni.
     - Calcola nuove posizioni per tutte le creature attive simultaneamente.
     - Raggruppa le creature per le loro nuove posizioni per rilevare collisioni.
     - Risolvi battaglie: determina vincitori, assegna punti, elimina creature sconfitte.
     - Aggiorna la griglia con creature sopravvissute e indicatori di battaglia.
     - Visualizza la griglia e i punteggi per questa mossa.
     - Rimuovi le creature sconfitte dalla lista attiva.

1. **Logica di Risoluzione Battaglia**:
   - Quando più creature si muovono nella stessa cella, confronta i loro valori di potere.
   - La creatura con il potere più alto vince e guadagna punti pari alla somma del potere delle creature sconfitte.
   - Rimuovi tutte le creature sconfitte dall'arena.
   - Gestisci i pareggi eliminando tutte le creature con il potere più alto uguale.

1. **Rendering Griglia**:
   - Visualizza il numero della mossa o "Tavola Iniziale" come titolo.
   - Mostra lo stato della griglia con icone delle creature, celle vuote (⬜️), e posizioni di battaglia (🤺).
   - Visualizza i punteggi correnti sotto la griglia.

1. **Completamento Gioco**:
   - Continua finché tutte le mosse sono eseguite o non rimangono creature attive.
   - Restituisci i punteggi finali con Drago che ha 12 punti e Mago che ha 0 punti.

### Requisiti di Implementazione Tecnica

1. **Logica di Movimento**:
   - Mappatura direzioni: SU=[-1,0], GIÙ=[1,0], SINISTRA=[0,-1], DESTRA=[0,1]
   - Tutte le creature si muovono simultaneamente ogni turno usando la loro PROSSIMA mossa in sequenza
   - Indicizzazione mosse: Mossa 1 usa indice 0, Mossa 2 usa indice 1, Mossa 3 usa indice 2
   - Controllo confini: le creature non possono muoversi fuori dalla griglia 5x5 (limita ai confini)

2. **Risoluzione Battaglia**:
   - Usa separazione appropriata tra fase di calcolo (determina nuove posizioni) e fase di applicazione (risolvi battaglie, aggiorna posizioni)
   - Pulisci la griglia ogni turno e ricostruiscila con le posizioni attuali delle creature
   - Raggruppa le creature per posizione di destinazione per rilevare collisioni
   - Gestisci correttamente battaglie multi-creatura (non solo battaglie a 2 creature)

3. **Organizzazione Codice**:
   - Struttura funzioni per riusabilità e manutenibilità
   - Usa funzionalità moderne del linguaggio e segui standard di codifica attuali
   - Includi gestione completa degli errori e validazione input

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per andare!
1. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione.
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Crea una cartella per il tuo codice e imposta una struttura di progetto moderna:
    - **JavaScript**: Crea una cartella chiamata `mythos`, aggiungi `app.js`, e crea `package.json` con `"type": "module"` per supporto ES6
    - **Python**: Crea una cartella chiamata `mythos`, aggiungi `app.py`, e struttura con definizioni di funzioni appropriate per modularità
    - **C#**: Crea una cartella chiamata `mythos`, esegui `dotnet new console`, e usa funzionalità C# moderne come record ed enum

### Esempio di Output Atteso

La tua implementazione dovrebbe produrre output simile a questo:

```
Tavola Iniziale
🐉 ⬜️ 👺 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
👹 ⬜️ 👿 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
Punteggi: { '🐉 Drago': 0, '👺 Goblin': 0, '👹 Orco': 0, '👿 Troll': 0, '🧙 Mago': 0 }
-----
Mossa 1
⬜️ 🤺 ⬜️ ⬜️ ⬜️
👹 ⬜️ 👿 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Punteggi: { '🐉 Drago': 3, '👺 Goblin': 0, '👹 Orco': 0, '👿 Troll': 0, '🧙 Mago': 0 }
-----
Mossa 2
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🤺 ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Punteggi: { '🐉 Drago': 12, '👺 Goblin': 0, '👹 Orco': 0, '👿 Troll': 0, '🧙 Mago': 0 }
-----
Mossa 3
⬜️ ⬜️ 🐉 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
🧙 ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Punteggi: { '🐉 Drago': 12, '👺 Goblin': 0, '👹 Orco': 0, '👿 Troll': 0, '🧙 Mago': 0 }
```

### Debug della Tua Implementazione

Se il tuo output non corrisponde ai risultati attesi, controlla questi problemi comuni:

1. **Timing del Movimento**: Assicurati di visualizzare prima "Tavola Iniziale", poi processare le mosse nella sequenza corretta
2. **Logica di Battaglia**: Il Drago dovrebbe combattere il Goblin nella Mossa 1, poi combattere Orco+Troll nella Mossa 2
3. **Formato Punteggio**: Includi le emoji delle creature nella visualizzazione del punteggio
4. **Gestione Confini**: Le creature dovrebbero rimanere entro i confini della griglia quando si muovono verso posizioni non valide

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
