## The Scrolls of Eldoria - Agent Mode Adventure

<a href="#">
    <img src="../../../Images/eldoria.jpg"  style="width: 830px" />
</a>

### Background

In the enchanted land of Eldoria, ancient scrolls containing the secrets of the universe were scattered and protected by the Elders using powerful spells. These spells concealed the secrets within the scrolls, adding layers of misleading information to deter prying eyes. Over time, these scrolls were digitized and stored in the Great Eldorian Library, accessible only through the Eldorian Web of Knowledge.

### Objective

Your task is to create a system that retrieves a digitized scroll from the Eldorian Web of Knowledge and deciphers it by filtering out the Elders' misleading information. As a young sorcerer's apprentice, you must extract the true secrets hidden within the scroll using pattern recognition and reveal the ancient wisdom.

**In this adventure, you'll learn to use GitHub Copilot Agent Mode** - an autonomous AI assistant that can understand complex tasks and break them down into multiple steps, creating entire applications from scratch!

### Prerequisites

Before starting this adventure, you'll need to perform the following steps:

1. **Install VS Code** - Download from [VS Code](https://code.visualstudio.com/).
2. **Set up Copilot in VS Code** - Follow the instructions at [Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup).

### Learning Outcomes

By completing this adventure with Agent Mode, you'll learn:

- ✅ How to give high-level instructions to an AI agent
- ✅ How Agent Mode breaks down complex tasks autonomously
- ✅ How to iterate and refine solutions with an AI pair programmer
- ✅ The power of autonomous coding assistance for complete projects
- ✅ Best practices for prompting Agent Mode effectively

### Setting Up Agent Mode

1. **Open VS Code** and ensure you're signed in to GitHub.
2. **Open the Chat view** by selecting the chat icon in the top bar.
3. **Select "Agent" mode** from the dropdown at the bottom of the Chat panel.

### Specifications

Now let's define the requirements for the scroll deciphering system so that you can start using Agent Mode effectively!

1. **Data Retrieval:**
   - Make HTTP call to: `https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt`
   - Content is in text format containing mixed information

2. **Deciphering Requirements:**
   - True secrets follow pattern: surrounded by `{*` and `*}` symbols
   - Extract all true secrets from the scroll
   - Filter out all misleading information

3. **Output Requirements:**
   - Display extracted secrets in structured manner
   - Beautiful console interface with mystical theme
   - Clear separation between secrets

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```
Create a complete scroll deciphering system for the ancient scrolls of Eldoria. The system should:

1. Create a console application in JavaScript (or your preferred language)
2. Make an HTTP request to retrieve the digitized scroll from:
   https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt
3. Parse the scroll content to extract true secrets using regular expressions
4. True secrets are enclosed in {* and *} pattern markers
5. Filter out all misleading information added by the Elders
6. Display the extracted secrets in a beautiful, mystical-themed console interface
7. Include proper error handling for network requests
8. Add comprehensive documentation explaining the deciphering process
9. Make the code readable and maintainable

Please create the project structure, write the code, and test it.
```

#### Step 2: Watch Agent Mode Work

Agent Mode will autonomously:
- 🔍 **Analyze** your workspace and determine what files to create
- 📁 **Create** the necessary project structure
- 💻 **Write** the complete application code
- 🧪 **Test** the application by running it
- 🔧 **Fix** any issues that arise automatically

You'll see each step in the UI, showing every tool invocation.

#### Step 3: Interact and Refine

As Agent Mode works, you can:
- **Approve or modify** proposed changes
- **Ask for improvements**: "Can you add a mystical animation for revealing secrets?"
- **Request explanations**: "Explain how the regular expression pattern matching works"
- **Add features**: "Add the ability to save deciphered secrets to a file"

#### Step 4: Explore Advanced Features

Once your basic system works, try asking Agent Mode to:

```
Enhance the scroll deciphering system with these features:
1. Add support for multiple scroll sources and different secret patterns
2. Create a web interface for the scroll deciphering tool
3. Implement secret categorization and analysis
4. Add encryption/decryption capabilities for protecting discovered secrets
5. Generate detailed reports about the deciphering process
6. Create unit tests for the text processing logic
7. Add progress indicators for network requests and processing
```

### Expected Output

When your Agent Mode implementation is complete, running the application should produce output similar to the following. AI is non-deterministic, so your results may vary slightly, but the structure should be similar.

```
📜 Welcome to the Great Eldorian Library! 📜

🔮 Accessing the Eldorian Web of Knowledge...
✨ Scroll retrieved successfully from the ancient archives

🧙‍♂️ Beginning deciphering process...
🔍 Filtering out the Elders' misleading information...

═══════════════════════════════════════
✨ ANCIENT SECRETS OF ELDORIA REVEALED ✨
═══════════════════════════════════════

🌟 Secret 1: The key to unlocking magical potential lies in understanding the harmony between elements.

🌟 Secret 2: Time flows differently in the realm of pure thought and meditation.

🌟 Secret 3: The greatest power comes from the unity of knowledge and wisdom.

🌟 Secret 4: Ancient runes hold the power to bridge realms when properly channeled.

═══════════════════════════════════════
📚 Total Secrets Discovered: 4
🔮 The wisdom of Eldoria is now yours!
═══════════════════════════════════════

🎓 Your apprenticeship advances! You have successfully deciphered the ancient scrolls.
```

### Agent Mode Tips

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Effective Prompting Strategies

1. **Be Comprehensive**: Give Agent Mode the full context and all requirements upfront
2. **Specify Preferences**: Mention your preferred programming language, frameworks, or patterns
3. **Set Clear Goals**: Define what "done" looks like for your project
4. **Ask for Best Practices**: Request clean, maintainable, and well-documented code

#### Leverage Agent Mode's Autonomy

1. **Let it work**: Allow Agent Mode to complete multi-step tasks without interruption
2. **Review and approve**: Check the proposed changes before they're applied
3. **Iterate naturally**: Ask for improvements or modifications as needed
4. **Learn from the process**: Observe how Agent Mode structures and solves problems

#### When to Use Agent Mode vs. Regular Chat

- **Use Agent Mode when**:
  - Creating new projects from scratch
  - Making changes across multiple files
  - Need autonomous problem-solving
  - Want comprehensive solutions

- **Use regular Chat/Edit mode when**:
  - Making small, targeted changes
  - Need quick suggestions
  - Want faster responses

### Important Agent Mode Considerations

**Tool Confirmation & Limits:**
- Agent Mode requires your confirmation before invoking tools or running commands
- Maximum of 128 tools can be used per request
- You can interrupt or pause requests at any time
- Always review suggested edits before accepting

### Troubleshooting

If Agent Mode isn't working:

1. **Check VS Code version**: Ensure you're using a recent version of VS Code
2. **Verify settings**: Confirm `chat.agent.enabled` is checked
3. **Check mode selection**: Make sure "Agent" is selected in the Chat dropdown
4. **Sign in**: Ensure you're signed in to GitHub with Copilot access
5. **Tool Permissions**: Approve tool usage when prompted

### What's Next?

After trying out Agent Mode with this adventure:

1. Try the **Advanced adventures** using Agent Mode for more complex scenarios
2. Experiment with **custom tools and extensions** that integrate with Agent Mode
3. Use Agent Mode for **real projects** - it excels at creating complete applications
4. Share your experience and **provide feedback** to help improve Agent Mode

Remember: Agent Mode is your autonomous coding partner. Give it clear goals, let it work, and iterate together to build amazing software!