## The Scrolls of Eldoria

<a href="#">
    <img src="../../Images/eldoria.jpg" style="width: 830px" />
</a>

### Background

In the enchanted land of Eldoria, ancient scrolls contain the secrets of the universe. These scrolls, however, were scattered and protected by the Elders using powerful spells. These spells concealed the secrets within the scrolls, adding layers of misleading information to deter prying eyes. Over time, these scrolls were digitized and stored in the Great Eldorian Library, accessible only through the Eldorian Web of Knowledge.

### Objective

You, a young sorcerer's apprentice, have been given the task to retrieve and decipher one such scroll. The scroll is stored as a file on the Eldorian Web of Knowledge. You have to make an HTTP call to fetch the scroll's content. However, the Elders' misleading information must be filtered out using the ancient method of Regular Expressions to reveal the true secrets within.

### Specifications

1. **Data Retrieval:**
    - Use the magical HTTP call to fetch the scroll's content. You'll find the scroll in the Great Eldorian Library's `https://raw.githubusercontent.com/DanWahlin/CopilotAdventures/main/Data/scrolls.txt` location.
    - The content will be in text format.

2. **Deciphering the Scroll:**
    - The scroll contains both the Elders' secrets and misleading information.
    - The true secrets have a specific pattern: they are always surrounded by the symbols `{*` and `*}`.
    - Extract all the true secrets from the scroll.

3. **Output:**
    - Display the extracted secrets in a structured manner.
    - Ensure that no misleading information is displayed.

### Constraints

- Write the simulation using GitHub Copilot and any language you choose. Try learning a new language if you're up for the challenge!
- Ensure efficient algorithms to handle text retrieval and extraction. Ask GitHub Copilot/Chat, "How can I make this code more readable and maintainable?".

### Summary of High-Level Steps to Perform

1. Make an HTTP call to retrieve the content of the scroll.
2. Use a regular expression to filter out the misleading information and extract the true secrets.
3. Display the extracted secrets.

### GitHub Copilot Tips

<a href="#">
    <img src="../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Use Copilot to improve efficiency

See if you can use Copilot to find out the complexity (BigO notation) of the code.

1. Open the [GitHub Copilot Chat view](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) in the sidebar if it's not already open. Make sure your solution file is still open as well.

1. Ask Copilot Chat what the complexity of the code is.

1. Ask Copilot Chat to make the code more efficient.

1. Ask for the complexity again - is it better?

#### Use Copilot to generate code comments

1. Highlight all of the code with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.

1. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> to open the inline chat. 

1. Type "/doc"

1. Ask Copilot Chat to document the function.

#### Use Copilot to simplify your code

1. Open GitHub Copilot Chat in the sidebar.

1. Type "/simplify" and press <kbd>Enter</kbd>. You can also add any text you want after the "/simplify" to give Copilot more instructions.

1. What did Copilot Chat suggest you do to make it simpler?

#### Got Errors?

Copilot Chat can help with that too! Just copy the error message and paste it into Chat. Often that's all Copilot needs to resolve your issue.