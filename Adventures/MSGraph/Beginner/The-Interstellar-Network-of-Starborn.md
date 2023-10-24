## The Interstellar Network of Starborn

<a href="#">
    <img src="../../../Images/starborn.jpg" style="width: 830px" />
</a>

### Background

In a galaxy far, far away, civilizations have advanced to the point where interstellar travel and settling on distant planets have become commonplace. Each planet is inhabited by "Starborn", humans who have adapted and evolved according to their new home planets.

The Starborn civilizations are connected by a vast digital network known as the "Interstellar Network". The primary purpose of this network is to maintain records of each Starborn and their roles in the interstellar community.

As planets and stars have their own orbits and hierarchies, so do the Starborn. Each Starborn has a direct superior they report to, and this chain goes up to the Cosmic Overlord, the leader of the entire Starborn civilization.

### Objective

You are a newly appointed Systems Keeper on the planet Azurea. Your first task is to access the Interstellar Network tenant and perform the following tasks:

1. Create an Interstellar Network tenant (if you don't have one already) by [visiting their website](https://developer.microsoft.com/microsoft-365/dev-program) and joining the program.
1. Study the [documentation](https://learn.microsoft.com/training/paths/m365-msgraph-fundamentals/) to learn how to access the Interstellar Network.
1. Although the Intersteller Network is extremely advanced, they still use HTML and JavaScript. To interact with their network, create a simple HTML page with JavaScript that does the following:
    - Sign into the Interstellar Network using your Starborn credentials.
    - Display your profile information.
    - Determine and display who you directly report to in the interstellar hierarchy.

### Specifications

1. **Sign-In**:
    - Access the Interstellar Network and sign in using your Starborn credentials.
    - Retrieve and display your profile to ensure you've accessed the correct account.

1. **Hierarchy Lookup**:
    - Once signed in, use the network to determine who you report to directly.
    - Display the profile of your direct superior.

1. **API Endpoints**:
    - Use the `/me` endpoint to retrieve your Interstellar Network profile.
    - Use the `/me/manager` endpoint to retrieve the profile of your direct superior.

### Constraints

- Use the Microsoft Graph API to interact with the Interstellar Network.
- Ensure secure and efficient access to the network.
- Handle any potential errors or access issues gracefully.

### Summary of High-Level Steps to Perform

1. Make an API call to sign in and retrieve your profile using the `/me` endpoint.
2. Display your profile information.
3. Make another API call to the `/me/manager` endpoint to determine your direct superior.
4. Display the profile of your direct superior.

### Sample Data

After signing into the Interstellar Network, your profile will follow a format similar to the following:

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

