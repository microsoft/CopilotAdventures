## La Foresta Magica di Algora: Avventura Modalità Ask

<a href="#">
    <img src="../../../Images/algora-forest.jpg" style="width: 830px" />
</a>

### Contesto

Nel profondo dell'incantata Foresta di Algora, due creature mistiche, il Lox e il Faelis, eseguono una danza sacra ogni millennio. Questa danza non è solo una celebrazione, ma è un rituale per riportare l'equilibrio nella foresta.

### Obiettivo

Il tuo compito è simulare la danza tra Lox e Faelis. Ogni creatura ha il suo insieme di mosse di danza, e la combinazione di mosse crea vari effetti magici nella foresta. Il tuo obiettivo è determinare lo stato della foresta dopo che la danza è completa.

### Specifiche

1. **Mosse di Danza ed Effetti:**
    - Ogni creatura può eseguire una delle tre mosse di danza: `Giro`, `Salto`, o `Ruota`.
    - La combinazione di mosse da entrambe le creature risulta in un effetto magico:
        - Giro + Giro = Le lucciole illuminano la foresta.
        - Salto + Ruota = Inizia a cadere una pioggia leggera.
        - Ruota + Salto = Un arcobaleno appare nel cielo.
        - Altre combinazioni creano diversi effetti che puoi immaginare.

2. **Dinamiche della Danza:**
    - Ogni effetto cambierà lo stato della foresta.
    - Alcuni effetti possono essere benefici, mentre altri possono essere dannosi.

3. **Sequenza di Danza:**
    - La danza consiste in 5 sequenze.
    - Devi mostrare lo stato della foresta dopo ogni sequenza.

4. **Mosse delle Creature:**

    **Mosse per Lox (Creatura 1)**

    | Sequenza 1 | Sequenza 2 | Sequenza 3 | Sequenza 4 | Sequenza 5 |
    |------------|------------|------------|------------|------------|
    | Giro       | Salto      | Ruota      | Giro       | Salto      |

    **Mosse per Faelis (Creatura 2)**
    | Sequenza 1 | Sequenza 2 | Sequenza 3 | Sequenza 4 | Sequenza 5 |
    |------------|------------|------------|------------|------------|
    | Ruota      | Giro       | Salto      | Salto      | Ruota      |

5. **Funzionalità Avanzate (se il tempo lo permette):**
    - Implementa un sistema che permette agli utenti di aggiungere nuove mosse di danza ed effetti.
    - Gli utenti possono selezionare la mossa di danza per ogni sequenza.

### Vincoli

- Usa GitHub Copilot e scrivi la simulazione in qualsiasi linguaggio tu preferisca.
- Concentrati su un codice chiaro e conciso che gestisca le dinamiche della danza in modo efficiente. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".
- Creare una rappresentazione visiva per la danza e gli effetti è opzionale ma incoraggiato se hai tempo.

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per visualizzare l'output.
1. Inizializza lo stato della foresta.
1. Ogni creatura seleziona una mossa di danza per ogni sequenza.
1. Determina l'effetto delle mosse di danza combinate sulla foresta.
1. Aggiorna lo stato della foresta dopo ogni sequenza.
1. Mostra lo stato finale della foresta dopo che la danza è completa.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per andare!
1. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Crea una cartella per il tuo codice. 
    - JavaScript: Crea una cartella chiamata `algora` e aggiungi un file chiamato `app.js`.
    - Python: Crea una cartella chiamata `algora` e aggiungi un file chiamato `app.py`.
    - C#: Crea una cartella chiamata `algora` e esegui `dotnet new console`.

### Suggerimenti di GitHub Copilot

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

1. Digita "/simplify" e premi <kbd>Enter</kbd>. Puoi anche aggiungere qualsiasi testo vuoi dopo il "/simplify" per dare più istruzioni a Copilot.

1. Cosa ha suggerito Copilot Chat per renderlo più semplice?

#### Hai Errori?

Anche la Chat di Copilot può aiutare con quello! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema.