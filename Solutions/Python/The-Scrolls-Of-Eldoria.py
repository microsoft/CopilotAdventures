import requests
import re

def fetch_and_decipher_scroll(url):
    try:
        response = requests.get(url)
        response.raise_for_status()

        scroll_content = response.text

        # Use regular expression to extract the secrets
        secrets_pattern = re.compile(r'\{\*(.*?)\*\}')
        secrets = secrets_pattern.findall(scroll_content)

        # Report the extraction without displaying secret values
        print(f"Extracted {len(secrets)} secret(s); values are not displayed.")

    except requests.HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'An error occurred: {err}')

# URL to the Eldorian Web of Knowledge (Replace with actual URL)
url = 'https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt'
fetch_and_decipher_scroll(url)