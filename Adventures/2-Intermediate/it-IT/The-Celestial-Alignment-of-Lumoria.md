## L'Allineamento Celeste di Lumoria

<a href="#">
    <img src="../../../Images/lumoria.jpg" style="width: 830px" />
</a>

### Contesto

Nell'immensa distesa della Nebulosa Galaxia, sta per verificarsi un raro fenomeno nel sistema stellare di Lumoria. I pianeti, che ruotano attorno al Sole Lumoriano, si stanno allineando in una danza celeste che si verifica solo una volta ogni pochi millenni. Questo allineamento ha un effetto unico su come la luce del Sole Lumoriano raggiunge ogni pianeta.

### Obiettivo

Il tuo compito è calcolare l'intensità della luce che ogni pianeta riceve durante questo allineamento. Dati le distanze dei pianeti dal Sole Lumoriano e le loro posizioni relative, determina quali pianeti potrebbero sperimentare una diminuzione dell'intensità della luce a causa delle ombre proiettate su di essi da altri pianeti.

### Specifiche

1. **Dati Planetari:**


| Nome del Pianeta | Distanza (UA) | Dimensione (km) |
| ------------------ | --------------- | ----------------- |
| Mercuria         | 0.4           | 4879            |
| Earthia          | 1             | 12742           |
| Marsia           | 1.5           | 6779            |
| Venusia          | 0.7           | 12104           |

I pianeti non sono ordinati per la loro distanza dal Sole Lumoriano, quindi dovrai gestire questo.

2. **Dinamiche della Luce:**

- Se un pianeta più piccolo si trova dietro a un pianeta più grande (rispetto al Sole Lumoriano), sarà in ombra e non riceverà luce (`Nessuna`).
- Se un pianeta più grande si trova dietro a un pianeta più piccolo (rispetto al Sole Lumoriano), avrà luce `Parziale`.
- Se un pianeta è in ombra di più pianeti, sarà contrassegnato come `Nessuna (Ombre Multiple)`.
- Se due pianeti sono di dimensioni simili e si trovano vicini l'uno all'altro in allineamento, potrebbero eclissarsi parzialmente l'un l'altro, ma per semplicità, puoi considerare che entrambi ricevano luce piena.

3. **Output:**
   - Il tuo sistema dovrebbe produrre un elenco di pianeti e l'intensità della luce che ricevono: `Piena`, `Parziale`, `Nessuna`, o `Nessuna (Ombre Multiple)`.

### Vincoli

- Usa GitHub Copilot e scrivi la simulazione in qualsiasi linguaggio tu preferisca.
- Concentrati su un codice chiaro e conciso che gestisca i controlli dei pianeti in modo efficiente. Chiedi a GitHub Copilot/Chat, "Come posso rendere questo codice più leggibile e manutenibile?".
- Creare una rappresentazione SVG visuale per i pianeti è opzionale ma incoraggiata se hai tempo.

### Riassunto delle Attività di Alto Livello da Eseguire

1. Usa un'applicazione console per visualizzare l'output.
2. Ordina l'elenco dei pianeti in base alla loro distanza dal Sole Lumoriano.
3. Attraversa l'elenco ordinato dei pianeti.
4. Per ogni pianeta, controlla i pianeti che sono più vicini al Sole Lumoriano per vedere se proiettano un'ombra su altri pianeti.
5. Mostra l'intensità della luce che ogni pianeta riceve.

### Suggerimenti per Iniziare

1. Se stai usando un GitHub Codespace, sei pronto per partire!
2. Se stai eseguendo localmente, assicurati di avere installato il tuo linguaggio/framework di destinazione.
   - [Node.js](https://nodejs.org)
   - [Python](https://www.python.org/downloads/)
   - [.NET](https://dot.net)
3. Crea una cartella per il tuo codice.
   - JavaScript: Crea una cartella chiamata `lumoria` e aggiungi un file chiamato `app.js`.
   - Python: Crea una cartella chiamata `lumoria` e aggiungi un file chiamato `app.py`.
   - C#: Crea una cartella chiamata `lumoria` e esegui `dotnet new console`.

### Suggerimenti di GitHub Copilot

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

Prima di tutto, dovrai inserire i pianeti in una struttura dati con cui puoi lavorare.

1. Copia la tabella Markdown mostrata in precedenza.
2. Apri la [vista Chat di GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) e inserisci il seguente testo. Sostituisci il tuo linguaggio di scelta con "JavaScript".

   ```text
   trasforma questo elenco markdown in un array di oggetti JavaScript
   ```
3. Incolla la tabella Markdown sotto il tuo commento e premi INVIO
4. Inserisci l'array di pianeti generato nel tuo codice

```js
// light intensity array

// traverse the sorted array

    // create an object to track the count of Larger and Smaller planets that are closer to the sun than the current planet

    // for all the planets that come before this planet in the planets array, increment Larger if they are larger than the current planet or Smaller if they are smaller than the current planet

    // if count.larger === 0 and count.smaller === 0 push planet name and "Full" to lightIntensity 

    // if count.smaller > 0 and count.larger === 0 push planet name and "Partial" to lightIntensity

    // if count.larger === 1 push planet name and "None" to lightIntensity

    // if count.larger > 1 push planet name and "None (Multiple Shadows)" to lightIntensity

// print the lightIntensity array
```

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

Anche la Chat di Copilot può aiutarti! Basta copiare il messaggio di errore e incollarlo in Chat. Spesso è tutto ciò di cui Copilot ha bisogno per risolvere il tuo problema
