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
   | Dragon | 0,0           | RIGHT, DOWN, RIGHT   | 7     | 🐉   |
   | Goblin | 0,2           | LEFT, DOWN, LEFT     | 3     | 👺   |
   | Ogre   | 2,0           | UP, RIGHT, DOWN      | 5     | 👹   |
   | Troll  | 2,2           | UP, LEFT, UP         | 4     | 👿   |
   | Wizard | 4,1           | UP, UP, LEFT         | 6     | 🧙   |

3. **Battle Mechanics:**
   - All creatures move simultaneously each round
   - When multiple creatures land on the same cell, they battle
   - The creature with highest power wins and earns points equal to all defeated creatures' power
   - Defeated creatures are eliminated from the arena
   - If creatures have equal power, all are eliminated
   - Multiple separate battles can occur in the same round

4. **Grid Visualization:**
   - ⬜️ for empty cells
   - Creature icons (🐉, 👺, 👹, 👿, 🧙) for positions
   - 🤺 for battle locations

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```
Create a complete Gridlock Arena battle simulation system for the mystical land of Mythos. The system should:

1. **Project Setup**:
   - Create a console application in your preferred language
   - Single file implementation for simplicity (e.g., `The-Gridlock-Arena-of-Mythos.js`)
   - Use modern module/import system for your chosen language
   - Follow current best practices for project structure and dependencies

2. **Grid Arena Implementation**:
   - 5x5 grid arena using a 2D array
   - Grid coordinates: [row, column] where [0,0] is top-left
   - Visual representation using Unicode characters:
     - ⬜️ for empty cells
     - Creature icons for occupied positions
     - 🤺 for battle locations where creatures fought

3. **Creature Data Structure** (exactly as specified):
   Each creature must have these properties:
   - **name**: String identifier for the creature
   - **start**: Starting position as [row, column] coordinates
   - **moves**: Array of movement directions in sequence
   - **power**: Integer representing battle strength
   - **icon**: Unicode emoji for visual representation

   **Required Creatures** (in this exact order):
   | Name   | Start Position | Move Sequence           | Power | Icon |
   |--------|---------------|-------------------------|-------|------|
   | Dragon | [0, 0]        | ["RIGHT", "DOWN", "RIGHT"] | 7     | 🐉   |
   | Goblin | [0, 2]        | ["LEFT", "DOWN", "LEFT"]   | 3     | 👺   |
   | Ogre   | [2, 0]        | ["UP", "RIGHT", "DOWN"]    | 5     | 👹   |
   | Troll  | [2, 2]        | ["UP", "LEFT", "UP"]       | 4     | 👿   |
   | Wizard | [4, 1]        | ["UP", "UP", "LEFT"]       | 6     | 🧙   |

4. **Movement System** (CRITICAL - Follow This Exact Sequence):
   - Direction mapping: UP=[-1,0], DOWN=[1,0], LEFT=[0,-1], RIGHT=[0,1]
   - All creatures move simultaneously each round using their NEXT move in sequence
   - Move indexing: Move 1 uses index 0, Move 2 uses index 1, Move 3 uses index 2
   - Boundary checking: creatures cannot move outside the 5x5 grid (clamp to boundaries)
   - After 3 moves, all creatures complete their movement sequences

5. **Battle Mechanics** (critical implementation details):
   - When multiple creatures move to the same cell, they battle
   - Battle resolution: creature with highest power wins
   - Winner earns points equal to the sum of ALL defeated creatures' power values
   - ALL defeated creatures are immediately eliminated from the arena
   - If multiple creatures have the same highest power, ALL battling creatures are eliminated
   - Multiple separate battles can occur in the same round at different locations

6. **Scoring System**:
   - Initialize all creatures with 0 points
   - Winners gain points equal to defeated creatures' power
   - Defeated creatures remain at 0 points
   - Score format includes creature icons: "🐉 Dragon: 12"

7. **Game Flow**:
   - Display "Initial Board" first (shows starting positions)
   - Then "Move 1", "Move 2", "Move 3" for each subsequent round
   - Game ends when all moves are completed or no creatures remain
   - Track active creatures (remove defeated ones from processing)

8. **Required Output Format** (Match This Exactly):
   ```
   Initial Board
   🐉 ⬜️ 👺 ⬜️ ⬜️
   ⬜️ ⬜️ ⬜️ ⬜️ ⬜️
   👹 ⬜️ 👿 ⬜️ ⬜️
   ⬜️ ⬜️ ⬜️ ⬜️ ⬜️
   ⬜️ 🧙 ⬜️ ⬜️ ⬜️
   Scores: {
     '🐉 Dragon': 0,
     '👺 Goblin': 0,
     '👹 Ogre': 0,
     '👿 Troll': 0,
     '🧙 Wizard': 0
   }
   -----
   ```

9. **Movement Verification** (CRITICAL - Use This to Debug):
   Verify your movement logic produces these positions:
   
   **Move 1**: Dragon: [0,1], Goblin: [0,1], Ogre: [1,0], Troll: [1,2], Wizard: [3,1]
   - Battle at [0,1]: Dragon (7) defeats Goblin (3) → Dragon gains 3 points
   
   **Move 2**: Dragon: [1,1], Ogre: [1,1], Troll: [1,1], Wizard: [2,1]  
   - Battle at [1,1]: Dragon (7) defeats Ogre (5) and Troll (4) → Dragon gains 9 points (total: 12)
   
   **Move 3**: Dragon: [1,2], Wizard: [2,0]
   - No battles, both creatures survive

10. **Expected Final Results**:
    - Dragon: 12 points (defeats Goblin for 3 points in Move 1, then defeats Ogre and Troll for 9 points in Move 2)
    - Wizard: 0 points (survives all battles)
    - All other creatures: 0 points (defeated)
    - Final output: { '🐉 Dragon': 12, '👺 Goblin': 0, '👹 Ogre': 0, '👿 Troll': 0, '🧙 Wizard': 0 }

11. **Technical Implementation Requirements**:
    - Use proper separation between calculation phase (determine new positions) and application phase (resolve battles, update positions)
    - Clear the grid each round and rebuild it with current creature positions
    - Group creatures by destination position to detect collisions
    - Handle multi-creature battles correctly (not just 2-creature battles)
    - Use modern language features and follow current coding standards
    - **Algorithm Flow**: Display initial board → For each move: calculate new positions → resolve battles → update grid → display results

12. **Code Quality**:
    - Include comprehensive error handling and documentation
    - Create unit tests to ensure 100% test coverage
    - Make the code efficient and maintainable
    - Use clear, descriptive function and variable names
    - Structure code with proper module exports/imports for testability
    - Include build/run scripts appropriate for your chosen language
    - Follow modern coding standards and best practices for your language

**Language-Specific Modern Practices** (choose what applies):
- **JavaScript/Node.js**: Use ES6 modules (import/export), create package.json with "type": "module"
- **Python**: Use modern Python with proper function definitions and data structures
- **C#**: Use modern C# features, records, enums, and proper class structure
- **Other languages**: Apply equivalent modern standards and tooling

**Critical Implementation Notes for All Languages**:
- Movement timing is crucial: render Initial Board first, then process each move and render results
- Battle resolution must handle multi-creature collisions correctly
- Score display should include creature emojis in quoted format
- Final output should match the expected battle timing exactly

IMPORTANT: If your output doesn't match the expected battle results in section 9, debug your movement logic. The battle timing is critical for the educational value of this adventure.
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
Initial Board
🐉 ⬜️ 👺 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
👹 ⬜️ 👿 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
Scores: {
  '🐉 Dragon': 0,
  '👺 Goblin': 0,
  '👹 Ogre': 0,
  '👿 Troll': 0,
  '🧙 Wizard': 0
}
-----
Move 1
⬜️ 🤺 ⬜️ ⬜️ ⬜️
👹 ⬜️ ⬜️ 👿 ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Scores: {
  '🐉 Dragon': 3,
  '👺 Goblin': 0,
  '👹 Ogre': 0,
  '👿 Troll': 0,
  '🧙 Wizard': 0
}
-----
Move 2
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ 🤺 ⬜️ ⬜️ ⬜️
⬜️ 🧙 ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Scores: {
  '🐉 Dragon': 12,
  '👺 Goblin': 0,
  '👹 Ogre': 0,
  '👿 Troll': 0,
  '🧙 Wizard': 0
}
-----
Move 3
⬜️ ⬜️ 🐉 ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
🧙 ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
⬜️ ⬜️ ⬜️ ⬜️ ⬜️
Scores: {
  '🐉 Dragon': 12,
  '👺 Goblin': 0,
  '👹 Ogre': 0,
  '👿 Troll': 0,
  '🧙 Wizard': 0
}
-----
🏆 FINAL BATTLE RESULTS 🏆
{
  '🐉 Dragon': 12,
  '👺 Goblin': 0,
  '👹 Ogre': 0,
  '👿 Troll': 0,
  '🧙 Wizard': 0
}

The battle has concluded! May the strongest creature be victorious!
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