## The Legendary Duel of Stonevale - Agent Mode Adventure

<a href="#">
    <img src="../../../Images/stonevale.jpg"  style="width: 830px" />
</a>

### Background

In the mystical realm of Stonevale, two warriors, Rok and Papyra, are chosen for a duel that determines the fate of their tribes for the next century. The arena, known as Scissoria, is where each move carries weight and consequences. This legendary duel follows ancient rules where different winning moves earn different points, making strategy crucial for victory.

### Objective

Your task is to create a system that simulates the legendary duel between Rok and Papyra. You'll need to implement the scoring system, track each warrior's moves over multiple rounds, and determine the winner of this fate-determining battle.

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

Now let's define the requirements for the legendary duel simulation so that you can start using Agent Mode effectively!

1. **Duel Mechanics:**
   - Each warrior can make: rock, paper, or scissors
   - Standard rules: Rock crushes scissors, paper covers rock, scissors cut paper
   - Duration: 5 rounds total
   - Draws: When both choose the same move, no points are awarded

2. **Scoring System:**
   - Rock win = 1 point
   - Paper win = 2 points
   - Scissors win = 3 points

3. **Predefined Warrior Moves:**
   - **Rok moves**: scissors, paper, scissors, rock, rock
   - **Papyra moves**: rock, rock, paper, scissors, paper

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```
Create a complete legendary duel simulation system for the warriors of Stonevale. The system should:

1. Create a console application in JavaScript (or your preferred language)
2. Define two warriors: Rok and Papyra with their predefined move sequences
3. Rok moves: [scissors, paper, scissors, rock, rock]
4. Papyra moves: [rock, rock, paper, scissors, paper]
5. Implement the duel logic with scoring system:
   - Rock win = 1 point, Paper win = 2 points, Scissors win = 3 points
   - Standard rock-paper-scissors rules apply
6. Simulate all 5 rounds of the duel
7. Track scores and determine the winner
8. Include beautiful console output with medieval/fantasy theme
9. Add proper error handling and documentation
10. Make the code readable and maintainable

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
- **Ask for improvements**: "Can you add ASCII art for the warriors and their moves?"
- **Request explanations**: "Explain how the scoring system rewards different moves"
- **Add features**: "Add the ability for players to input their own moves interactively"

#### Step 4: Explore Advanced Features

Once your basic system works, try asking Agent Mode to:

```
Enhance the legendary duel system with these features:
1. Add beautiful ASCII art representations of Rok and Papyra
2. Create visual representations of rock, paper, and scissors moves
3. Add a tournament system with multiple duels
4. Include a hint system suggesting optimal moves
5. Generate detailed battle reports and statistics
6. Create unit tests for the duel logic
7. Add sound effect descriptions for each move and outcome
```

### Expected Output

When your Agent Mode implementation is complete, running the application should produce output similar to the following. AI is non-deterministic, so your results may vary slightly, but the structure should be similar.

```
⚔️ Welcome to the Legendary Duel of Stonevale! ⚔️

🏛️ In the ancient arena of Scissoria, two warriors face destiny...

🛡️ Rok the Stone Warrior vs 📜 Papyra the Swift

=== Round 1 ===
⚔️ Rok chooses: Scissors ✂️
🛡️ Papyra chooses: Rock 🪨
🏆 Papyra wins! Rock crushes scissors (+1 point)

Current Scores: Rok: 0 | Papyra: 1

=== Round 2 ===
⚔️ Rok chooses: Paper 📜
🛡️ Papyra chooses: Rock 🪨
🏆 Rok wins! Paper covers rock (+2 points)

Current Scores: Rok: 2 | Papyra: 1

=== Round 3 ===
⚔️ Rok chooses: Scissors ✂️
🛡️ Papyra chooses: Paper 📜
🏆 Rok wins! Scissors cut paper (+3 points)

Current Scores: Rok: 5 | Papyra: 1

=== Round 4 ===
⚔️ Rok chooses: Rock 🪨
🛡️ Papyra chooses: Scissors ✂️
🏆 Rok wins! Rock crushes scissors (+1 point)

Current Scores: Rok: 6 | Papyra: 1

=== Round 5 ===
⚔️ Rok chooses: Rock 🪨
🛡️ Papyra chooses: Paper 📜
🏆 Papyra wins! Paper covers rock (+2 points)

Final Scores: Rok: 6 | Papyra: 3

👑 ROK THE STONE WARRIOR WINS THE LEGENDARY DUEL! 👑

🏛️ Rok's tribe shall prosper for the next century in Stonevale! 🏛️
```

### Agent Mode Tips

<a href="#">
    <img src="../../../Images/agent-mode-tips.jpg"  style="width: 830px" />
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

#### When to Use Agent Mode vs. Ask Mode

- **Use Agent Mode when**:
  - Creating new projects from scratch
  - Making changes across multiple files
  - Need autonomous problem-solving
  - Want comprehensive solutions

- **Use Ask Mode when**:
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