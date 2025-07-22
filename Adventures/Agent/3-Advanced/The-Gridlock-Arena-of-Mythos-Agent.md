## The Gridlock Arena of Mythos - Agent Mode Adventure

<a href="#">
    <img src="../../../Images/mythos-arena-full.jpg"  style="width: 830px" />
</a>

### Background

In the mystical land of Mythos, creatures from various realms come together to battle in the Gridlock Arena, a chess-like grid where strategy, power, and cunning are tested. Each creature has its unique move, power, and strategy. The arena is a 5x5 grid where creatures battle for supremacy, earning points by inflicting damage on opponents while avoiding taking damage themselves.

### Objective

Your task is to create a comprehensive battle simulation system for the Gridlock Arena. You'll need to implement grid-based movement, turn-based combat, collision detection, and a scoring system that tracks each creature's performance throughout the battle.

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

Now let's define the requirements for the arena battle simulation so that you can start using Agent Mode effectively!

1. **Arena Setup:**
   - 5x5 grid battle arena
   - Grid cells can be empty or occupied by creatures
   - Visual representation using Unicode characters

2. **Creature Data:**
   | Name   | Start Position | Moves                | Power | Icon |
   |--------|---------------|----------------------|-------|------|
   | Dragon | 2,2           | RIGHT, LEFT, DOWN    | 7     | 🐉   |
   | Goblin | 2,3           | LEFT, RIGHT, UP      | 3     | 👺   |
   | Ogre   | 0,0           | RIGHT, DOWN, DOWN    | 5     | 👹   |

3. **Battle Mechanics:**
   - Turn-based movement (creatures move one at a time)
   - When creatures land on the same cell, they battle
   - Damage inflicted = creature's power value
   - Points gained = damage inflicted
   - Points lost = damage received
   - Each pair can only battle once per round

4. **Grid Visualization:**
   - ⬜️ for empty cells
   - Creature icons (🐉, 👺, 👹) for positions
   - 🤺 for battle locations

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```
Create a complete Gridlock Arena battle simulation system for the mystical land of Mythos. The system should:

1. Create a console application in JavaScript (or your preferred language)
2. Implement a 5x5 grid arena with visual representation
3. Define three creatures with specific properties:
   - Dragon: starts at (2,2), moves [RIGHT, LEFT, DOWN], power 7, icon 🐉
   - Goblin: starts at (2,3), moves [LEFT, RIGHT, UP], power 3, icon 👺
   - Ogre: starts at (0,0), moves [RIGHT, DOWN, DOWN], power 5, icon 👹
4. Implement turn-based movement and battle mechanics
5. Handle collision detection and battle resolution
6. Track scores (points gained from damage inflicted minus damage received)
7. Visualize the grid state after each round with proper Unicode characters
8. Display current scores and determine the winner
9. Include comprehensive error handling and documentation
10. Create unit tests to ensure 100% test coverage
11. Make the code efficient and maintainable

Please create the project structure, write the code, test it thoroughly, and demonstrate the battle simulation.
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
- **Ask for improvements**: "Can you add special abilities for each creature type?"
- **Request explanations**: "Explain how the collision detection algorithm works"
- **Add features**: "Add support for larger grids and more creature types"

#### Step 4: Explore Advanced Features

Once your basic system works, try asking Agent Mode to:

```
Enhance the Gridlock Arena system with these advanced features:
1. Add special abilities and spell casting for creatures
2. Implement different arena sizes and terrain types
3. Create a tournament system with multiple battles
4. Add AI strategy patterns for autonomous creature movement
5. Generate detailed battle reports and statistics
6. Create a web-based visualization of the arena
7. Add multiplayer support for human players to control creatures
8. Implement save/load functionality for battle replays
```

### Expected Output

When your Agent Mode implementation is complete, running the application should produce output similar to the following. AI is non-deterministic, so your results may vary slightly, but the structure should be similar.

```
⚔️ Welcome to the Gridlock Arena of Mythos! ⚔️

🏟️ Initial Board:
👹⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️
⬜️⬜️🐉👺⬜️
⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️

=== Round 1 ===
🐉 Dragon moves RIGHT to (2,3)
🤺 Dragon battles Goblin at (2,3)!
   - Dragon deals 7 damage to Goblin
   - Goblin deals 3 damage to Dragon

👺 Goblin moves LEFT to (2,2)
👹 Ogre moves RIGHT to (0,1)

Round 1 Board:
⬜️👹⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️
⬜️⬜️👺🐉⬜️
⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️

Current Scores: Dragon: 4 | Goblin: -4 | Ogre: 0

=== Round 2 ===
🐉 Dragon moves LEFT to (2,2)
🤺 Dragon battles Goblin at (2,2)!
   - Dragon deals 7 damage to Goblin
   - Goblin deals 3 damage to Dragon

👺 Goblin moves RIGHT to (2,3)
👹 Ogre moves DOWN to (1,1)

Round 2 Board:
⬜️⬜️⬜️⬜️⬜️
⬜️👹⬜️⬜️⬜️
⬜️⬜️🐉👺⬜️
⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️

Current Scores: Dragon: 8 | Goblin: -8 | Ogre: 0

=== Round 3 ===
🐉 Dragon moves DOWN to (3,2)
👺 Goblin moves UP to (1,3)
👹 Ogre moves DOWN to (2,1)

Final Board:
⬜️⬜️⬜️⬜️⬜️
⬜️👹⬜️👺⬜️
⬜️👹⬜️⬜️⬜️
⬜️⬜️🐉⬜️⬜️
⬜️⬜️⬜️⬜️⬜️

🏆 FINAL RESULTS 🏆
👑 Dragon: 8 points (WINNER!)
👺 Goblin: -8 points
👹 Ogre: 0 points

🎉 The Dragon emerges victorious in the Gridlock Arena! 🎉
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

After mastering Agent Mode with this advanced adventure:

1. Use Agent Mode for **complex real-world projects** - it excels at sophisticated applications
2. Experiment with **advanced integrations** and custom tools that work with Agent Mode
3. Contribute to **open source projects** using Agent Mode for rapid development
4. Share your experience and **provide feedback** to help improve Agent Mode capabilities

Remember: Agent Mode is your autonomous coding partner. Give it clear goals, let it work, and iterate together to build incredible software!