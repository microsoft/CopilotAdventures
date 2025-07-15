## The Celestial Alignment of Lumoria - Agent Mode Adventure

<a href="#">
    <img src="../../../Images/lumoria.jpg"  style="width: 830px" />
</a>

### Background

In the vast expanse of the Galaxia Nebulae, a rare phenomenon is about to occur in the Lumoria star system. The planets, revolving around the Lumorian Sun, are aligning in a celestial dance that happens only once every few millennia. This alignment has a unique effect on how the light from the Lumorian Sun reaches each planet, as planets cast shadows on those behind them.

### Objective

Your task is to create a system that calculates the intensity of light each planet receives during this celestial alignment. Given the distances and relative positions of planets, you must determine which planets experience decreased light intensity due to other planets casting shadows on them.

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

Now let's define the requirements for the celestial light calculation system so that you can start using Agent Mode effectively!

1. **Planetary Data:**
   | Planet Name | Distance (AU) | Size (km) |
   |-------------|---------------|----------|
   | Mercuria    | 0.4           | 4879     |
   | Earthia     | 1             | 12742    |
   | Marsia      | 1.5           | 6779     |
   | Venusia     | 0.7           | 12104    |

2. **Light Dynamics Rules:**
   - Smaller planet behind larger planet = `None` (complete shadow)
   - Larger planet behind smaller planet = `Partial` light
   - Planet in shadow of multiple planets = `None (Multiple Shadows)`
   - Similar-sized planets near each other = both receive `Full` light

3. **Algorithm Requirements:**
   - Sort planets by distance from Lumorian Sun
   - For each planet, check planets closer to the sun
   - Count larger and smaller planets that could cast shadows
   - Apply light intensity rules based on counts

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```
Create a complete celestial light intensity calculation system for the Lumoria star system. The system should:

1. Create a console application in JavaScript (or your preferred language)
2. Define the planetary data with distances and sizes:
   - Mercuria: 0.4 AU, 4879 km
   - Earthia: 1 AU, 12742 km  
   - Marsia: 1.5 AU, 6779 km
   - Venusia: 0.7 AU, 12104 km
3. Implement light intensity calculation logic:
   - Sort planets by distance from sun
   - For each planet, count how many larger/smaller planets are closer to sun
   - Apply shadow rules: Full, Partial, None, or None (Multiple Shadows)
4. Display results clearly showing each planet's light intensity
5. Include beautiful console output with celestial theme
6. Add proper error handling and documentation
7. Make the code readable and maintainable

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
- **Ask for improvements**: "Can you add a visual SVG representation of the alignment?"
- **Request explanations**: "Explain how the shadow calculation algorithm works"
- **Add features**: "Add the ability to input custom planetary data"

#### Step 4: Explore Advanced Features

Once your basic system works, try asking Agent Mode to:

```
Enhance the celestial alignment system with these features:
1. Create a visual SVG representation of the planetary alignment
2. Add animation showing how shadows change during alignment
3. Include scientific accuracy improvements for shadow calculations
4. Generate detailed reports about the celestial phenomenon
5. Create unit tests for the light intensity calculations
6. Add support for different star systems with custom planets
```

### Expected Output

Your completed system should produce output similar to:
```
🌟 Lumoria Star System - Celestial Alignment Analysis 🌟

Analyzing light intensity during the rare planetary alignment...

Planetary Data (sorted by distance from Lumorian Sun):
================================
🪐 Mercuria  | Distance: 0.4 AU  | Size: 4,879 km
🪐 Venusia   | Distance: 0.7 AU  | Size: 12,104 km  
🪐 Earthia   | Distance: 1.0 AU  | Size: 12,742 km
🪐 Marsia    | Distance: 1.5 AU  | Size: 6,779 km

Light Intensity Results:
================================
☀️ Mercuria:  Full Light (No obstructions)
🌕 Venusia:   Full Light (No obstructions)  
🌗 Earthia:   Partial Light (Behind smaller planet Mercuria)
🌑 Marsia:    None (Behind larger planets Venusia and Earthia)

🌌 Celestial alignment analysis complete!
   2 planets in full light, 1 in partial light, 1 in shadow
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