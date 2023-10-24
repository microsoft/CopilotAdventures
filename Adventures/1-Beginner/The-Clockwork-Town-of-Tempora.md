## The Clockwork Town of Tempora

<a href="#">
    <img src="../../Images/tempora-clocks.jpg"  style="width: 830px" />
</a>

### Background

In the mechanical town of Tempora, everything operates on clockwork and precise timing. At the heart of the town is the Grand Clock Tower, responsible for keeping time for all the town's activities. However, over the years, some smaller clocks in the town have started to drift away from the accurate time.

### Objective

Your task is to create a system that checks all the clocks in the town and synchronizes them with the Grand Clock Tower. You'll be given a list of times from various clocks around the town, and you must determine how many minutes each clock is ahead or behind the Grand Clock Tower's time.

### Specifications

1. **Clock Data:**
    - The clock times are provided in a 24-hour format.
    - The Grand Clock Tower is at 15:00.
    - Clock times around town:
        - Clock 1: 14:45
        - Clock 2: 15:05
        - Clock 3: 15:00
        - Clock 4: 14:40

2. **Time Analysis and Output:**
    - You need to determine how many minutes each clock is ahead or behind the Grand Clock Tower.
    - The result should be an array of integers representing the time difference in minutes. Positive values indicate the clock is ahead, and negative values indicate it's behind.

### Constraints

- Use GitHub Copilot and write the simulation in any language you'd like.
- Focus on clear and concise code. Ask GitHub Copilot/Chat, "How can I make this code more readable and maintainable?".
- Creating a visual representation for the clocks is optional but encouraged if you have time.

### Summary of High-Level Steps to Perform

1. Parse the time data for each clock and the Grand Clock Tower.
2. Calculate the difference in minutes between each clock and the Grand Clock Tower.
3. Output the list of time differences.

### Tips to Get Started

1. If you're using a GitHub Codespace, you're ready to go!
1. If running locally, ensure that you have your target language/framework installed. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Create a folder for your code. 
    - JavaScript: Create a folder called `tempora` and add a file named `app.js`.
    - Python: Create a folder called `tempora` and add a file named `app.py`.
    - C#: Create a folder called `tempora` and run `dotnet new console`;

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