## La Rete Interstellare dei Nati dalle Stelle

<a href="#">
    <img src="../../../Images/starborn.jpg" style="width: 830px" />
</a>

### Contesto

In una galassia lontana, lontana, le civiltà sono avanzate al punto che i viaggi interstellari e l'insediamento su pianeti lontani sono diventati comuni. Ogni pianeta è abitato dai "Nati dalle Stelle", esseri umani che si sono adattati ed evoluti secondo i loro nuovi pianeti di casa.

Le civiltà dei Nati dalle Stelle sono collegate da una vasta rete digitale conosciuta come "Rete Interstellare". Lo scopo principale di questa rete è mantenere i registri di ogni Nato dalle Stelle e i loro ruoli nella comunità interstellare.

Come i pianeti e le stelle hanno le loro orbite e gerarchie, così anche i Nati dalle Stelle. Ogni Nato dalle Stelle ha un superiore diretto a cui riportare, e questa catena risale al Sovrano Cosmico, il leader dell'intera civiltà dei Nati dalle Stelle.

### Obiettivo

Sei un nuovo Custode dei Sistemi sul pianeta Azurea. Il tuo primo compito è accedere al tenant della Rete Interstellare e svolgere le seguenti attività:

1. Crea un tenant della Rete Interstellare (se non ne hai già uno) visitando il loro sito web e unendoti al programma.
1. Studia la documentazione per imparare come accedere alla Rete Interstellare.
1. Anche se la Rete Interstellare è estremamente avanzata, utilizzano ancora HTML e JavaScript. Per interagire con la loro rete, crea una semplice pagina HTML con JavaScript che fa quanto segue:
    - Accedi alla Rete Interstellare utilizzando le tue credenziali di Nato dalle Stelle.
    - Visualizza le informazioni del tuo profilo.
    - Determina e visualizza a chi riporti direttamente nella gerarchia interstellare.

### Specifiche

1. **Accesso**:
    - Accedi alla Rete Interstellare e accedi utilizzando le tue credenziali di Nato dalle Stelle.
    - Recupera e visualizza il tuo profilo per assicurarti di aver accesso all'account corretto.

1. **Ricerca Gerarchica**:
    - Una volta effettuato l'accesso, utilizza la rete per determinare a chi riporti direttamente.
    - Visualizza il profilo del tuo superiore diretto.

1. **Endpoint API**:
    - Utilizza l'endpoint `/me` per recuperare il tuo profilo della Rete Interstellare.
    - Utilizza l'endpoint `/me/manager` per recuperare il profilo del tuo superiore diretto.

### Vincoli

- Scrivi un'applicazione console.
- Utilizza l'API Microsoft Graph per interagire con la Rete Interstellare.
- Assicura un accesso sicuro ed efficiente alla rete.
- Gestisci eventuali errori o problemi di accesso in modo elegante.

### Riassunto delle Attività ad Alto Livello da Eseguire

1. Effettua una chiamata API per accedere e recuperare il tuo profilo utilizzando l'endpoint `/me`.
2. Visualizza le informazioni del tuo profilo.
3. Effettua un'altra chiamata API all'endpoint `/me/manager` per determinare il tuo superiore diretto.
4. Visualizza il profilo del tuo superiore diretto.

### Dati di Esempio

Dopo aver effettuato l'accesso alla Rete Interstellare, il tuo profilo seguirà un formato simile al seguente:

```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
    "businessPhones": [
        "+1 412 555 0109"
    ],
    "displayName": "Megan Bowen",
    "givenName": "Megan",
    "jobTitle": "Auditor",
    "mail": "MeganB@M365x214355.onmicrosoft.com",
    "mobilePhone": null,
    "officeLocation": "12/1110",
    "preferredLanguage": "en-US",
    "surname": "Bowen",
    "userPrincipalName": "MeganB@M365x214355.onmicrosoft.com",
    "id": "48d31887-5fad-4d73-a9f5-3c356e68a038"
}
```

