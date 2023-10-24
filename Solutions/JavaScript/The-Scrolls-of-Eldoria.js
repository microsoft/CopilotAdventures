// Node.js 17.5 or higher has fetch built-in. Otherise, run `npm install node-fetch` first.

async function fetchAndDecipherScroll(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const scrollContent = await response.text();

        // Use regular expression to extract the secrets
        const secretsPattern = /\{\*(.*?)\*\}/g;
        const secrets = [];
        let match;

        while ((match = secretsPattern.exec(scrollContent)) !== null) {
            secrets.push(match[1]);
        }

        // Display the extracted secrets
        secrets.forEach(secret => {
            console.log(secret);
        });

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// URL to the Eldorian Web of Knowledge (Replace with actual URL)
const url = 'https://raw.githubusercontent.com/DanWahlin/CopilotAdventures/main/Data/scrolls.txt';
fetchAndDecipherScroll(url);
