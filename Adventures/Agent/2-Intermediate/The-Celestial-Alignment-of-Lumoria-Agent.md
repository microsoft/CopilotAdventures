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
2. **Set up GitHub Copilot in VS Code** - Follow the instructions at [Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup).

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

### Expected Output Example

When your Agent Mode implementation is complete, running the application should produce output similar to the following. AI is non-deterministic, so your results may vary slightly, but the structure should be similar.

```
🌌 Celestial Alignment of Lumoria - Light Intensity Analysis 🌌

🔬 Analyzing planetary positions and shadow effects...

🌟 Solar System Alignment:

🌟 Lumorian Sun
────🪐 Mercuria ☀️
───────🪐 Venusia 🌤️
──────────🪐 Earthia 🌤️
───────────────🪐 Marsia 🌑

📊 Detailed Light Intensity Results:

Planet      | Distance (AU) | Size (km) | Light Intensity | Explanation
──────────────────────────────────────────────────────────────────────────────────────────
Mercuria    | 0.4           | 4879      | Full            | Closest to sun - no shadows possible
Venusia     | 0.7           | 12104     | Partial         | Smaller planets create partial shadow
Earthia     | 1             | 12742     | Partial         | Smaller planets create partial shadow
Marsia      | 1.5           | 6779      | None (Multiple Shadows) | Multiple larger planets (2) create complete shadow

📈 Alignment Summary:
Full: 1 planet(s)
Partial: 2 planet(s)
None (Multiple Shadows): 1 planet(s)

🌑 Most affected planet: Marsia (None (Multiple Shadows))

✨ The celestial alignment analysis is complete! ✨
```

**Verification Checklist:**
- ✅ Correctly sorts planets by distance from sun
- ✅ Calculates light intensity based on shadow rules
- ✅ Identifies Marsia as having "None (Multiple Shadows)"
- ✅ Shows visual solar system alignment
- ✅ Provides detailed explanations for each result
- ✅ Includes comprehensive analysis statistics

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

### Troubleshooting Agent Mode

If Agent Mode isn't working as expected:

**Common Issues & Solutions:**

🔧 **Agent not creating files**
- Check your workspace permissions
- Ensure you're in a valid project directory
- Approve file creation when prompted

🔧 **Incomplete implementation**
- Your prompt may need more detail - be more comprehensive
- Add specific success criteria and requirements
- Include examples of expected behavior

🔧 **Tool confirmation needed**
- Agent Mode requires your approval for tool usage
- Click "Allow" when prompted for file operations
- Review what tools will be used before approving

🔧 **Agent stops mid-task**
- May have hit the 128 tool limit per request
- Break complex tasks into smaller chunks
- Continue with a follow-up prompt

**Setup Verification:**
1. **Check VS Code version**: Ensure you're using a recent version of VS Code
2. **Verify settings**: Confirm `chat.agent.enabled` is checked
3. **Check mode selection**: Make sure "Agent" is selected in the Chat dropdown
4. **Sign in**: Ensure you're signed in to GitHub with Copilot access
5. **Tool Permissions**: Approve tool usage when prompted

**Pro Tips:**
- Start with smaller tasks to get familiar with Agent Mode
- Be very specific about what "done" looks like
- Include testing and validation requirements in your prompts

### What's Next?

After trying out Agent Mode with this adventure:

1. Try the **Advanced adventures** using Agent Mode for more complex scenarios
2. Experiment with **custom tools and extensions** that integrate with Agent Mode
3. Use Agent Mode for **real projects** - it excels at creating complete applications
4. Share your experience and **provide feedback** to help improve Agent Mode

Remember: Agent Mode is your autonomous coding partner. Give it clear goals, let it work, and iterate together to build amazing software!