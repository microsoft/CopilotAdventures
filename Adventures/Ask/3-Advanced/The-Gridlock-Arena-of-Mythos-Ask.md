## The Gridlock Arena of Mythos: Ask Mode Adventure

<a href="#">
   <img src="../../../Images/mythos-arena-full.jpg" style="width: 830px" />
</a>

### Background

In the mystical land of Mythos, creatures from various realms come together to battle in the Gridlock Arena, a chess-like grid where strategy, power, and cunning are tested. Each creature has its unique move, power, and strategy.

### Objective

Your task is to simulate a battle in the Gridlock Arena. Each creature will make a series of moves, and after each move, the creature might inflict damage on its opponent if they land on the same square. The goal is to accumulate the highest score by the end of the battle. A round is completed when all creatures have taken one move this round. To track the progress of the battle, visualize the grid after each round and display the current scores right below the grid.

### Specifications

1. **Grid Dynamics:**
    - The Gridlock Arena is a 5x5 grid.
    - Each cell in the grid can be empty or occupied by a creature.
    - Creatures can move up, down, left, or right by one cell.

2. **Creature Data:**

    | Name   | Start | Moves                | Power | Icon |
    |--------|-------|----------------------|-------|------|
    | Dragon | 0,0   | RIGHT, DOWN, RIGHT   | 7     | 🐉   |
    | Goblin | 0,2   | LEFT, DOWN, LEFT     | 3     | 👺   |
    | Ogre   | 2,0   | UP, RIGHT, DOWN      | 5     | 👹   |
    | Troll  | 2,2   | UP, LEFT, UP         | 4     | 👿   |
    | Wizard | 4,1   | UP, UP, LEFT         | 6     | 🧙   |

3. **Movement Rules:**
    - All creatures move simultaneously each round.
    - Each creature executes the next move in its move sequence.
    - Creatures can move to any valid position on the 5x5 grid.
    - If a creature has no more moves left, the game ends.

4. **Battle Dynamics:**

    - When multiple creatures move to the same cell, they battle.
    - The creature with the highest power wins the battle.
    - The winner earns points equal to the sum of all defeated creatures' power values.
    - All defeated creatures are eliminated from the arena.
    - If multiple creatures have the same highest power, all battling creatures are eliminated.
    - Multiple separate battles can occur in the same round at different locations.

5. **Output:**
    - After each round, visualize the grid by printing it to the console using ⬜️ to represent empty cells. 
    - Above the grid add a title that either says "Initial Board" (to show the initial state of the board) or "Move X" where X is the current move number.
    - Use each creature's icon to represent it on the grid. 
    - Battle cells can be represented by a 🤺.
    - Display the current scores for each creature right below the grid after each round.
    - At the end of the game, return the total points each creature accumulated.

6. **Expected Final Scores:**
    - Dragon: 12 points (defeats Goblin in Move 2 for 3 points, then defeats Ogre and Troll in Move 3 for 5+4=9 points)
    - Wizard: 0 points (survives but wins no battles)
    - All other creatures: 0 points (eliminated during battles)

      
      <a href="#">
         <img src="../../../Images/mythos-board-example.png">
      </a>

### Constraints

- Use GitHub Copilot and write the simulation in any language you'd like.
- Ensure efficient algorithms to handle the battle dynamics. Ask GitHub Copilot, "How can I make this code more readable and maintainable?".
- The program should have 100% test coverge. Use the /tests command in GitHub Copilot.

### Summary of High-Level Tasks to Perform

1. Use a console application to render the output.

1. **Define Constants and Data Structures**:
   - Define the `creatures` array containing all five creatures with their properties.
   - Define a `directions` object to map movement directions to coordinate changes.

1. **Initialize the Battle System**:
   - Set the grid size to 5x5 and create a 2D array with all cells initialized to `null`.
   - Initialize scores for all creatures to 0.
   - Track active creatures that are still in the battle.

1. **Initialize Grid Display**:
   - Place each creature on the grid using its starting position and icon.
   - Render the initial board state.

1. **Simulate Battle Rounds**:
   - Loop through each move (starting from -1 for initial display).
   - For each round:
     - Clear the grid for new positions.
     - Calculate new positions for all active creatures simultaneously.
     - Group creatures by their new positions to detect collisions.
     - Resolve battles: determine winners, award points, eliminate defeated creatures.
     - Update the grid with surviving creatures and battle indicators.
     - Remove defeated creatures from the active list.

1. **Battle Resolution Logic**:
   - When multiple creatures move to the same cell, compare their power values.
   - The creature with highest power wins and earns points equal to sum of defeated creatures' power.
   - Remove all defeated creatures from the arena.
   - Handle ties by eliminating all creatures with equal highest power.

1. **Grid Rendering**:
   - Display move number or "Initial Board" as title.
   - Show the grid state with creature icons, empty cells (⬜️), and battle locations (🤺).
   - Display current scores below the grid.

1. **Game Completion**:
   - Continue until all moves are executed or no active creatures remain.
   - Return final scores with Dragon having 12 points and Wizard having 0 points. 

### Tips to Get Started

1. If you're using a GitHub Codespace, you're ready to go!
1. If running locally, ensure that you have your target language/framework installed. 
    - [Node.js](https://nodejs.org)
    - [Python](https://www.python.org/downloads/)
    - [.NET](https://dot.net)
1. Create a folder for your code. 
    - JavaScript: Create a folder called `mythos` and add a file named `app.js`.
    - Python: Create a folder called `mythos` and add a file named `app.py`.
    - C#: Create a folder called `mythos` and run `dotnet new console`.

### GitHub Copilot Tips

<a href="#">
    <img src="../../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

#### Use Copilot to improve efficiency

See if you can use Copilot to find out the complexity (BigO notation) of the code.

1. Open [GitHub Copilot](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) in the sidebar if it's not already open. Make sure your solution file is still open as well.

1. Ask GitHub Copilot what the complexity of the code is.

1. Ask GitHub Copilot to make the code more efficient.

1. Ask for the complexity again - is it better?

#### Use Copilot to generate code comments

1. Highlight all of the code with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.

1. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> to open the inline chat. 

1. Type "/doc"

1. Ask GitHub Copilot to document the function.

#### Use Copilot to simplify your code

1. Open GitHub Copilot in the sidebar.

1. Type "/simplify" and press <kbd>Enter</kbd>. You can also add any text you want after the "/simplify" to give Copilot more instructions.

1. What did GitHub Copilot suggest you do to make it simpler?

#### Got Errors?

GitHub Copilot can help with that too! Just copy the error message and paste it into the chat. Often that's all Copilot needs to resolve your issue.
