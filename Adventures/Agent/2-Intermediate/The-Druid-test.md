## The Druid Test

<a href="#">
    <img src="../../../Images/druid-test.png"  style="width: 830px" />
</a>

### Background

Long before the written word, when the forests whispered secrets and the stars guided the wise, the druids of the Verdant Circle upheld a sacred tradition: The Rite of Verdant Trial. This was the only path by which an aspirant could earn the title of Druid.

To prove their worth, each candidate had to face the Triad of Elements—a ceremonial duel known as Root, Flame, and Wind.

### Objective

Your task is to an app that implements the ancient rules of the Verdant Trial. 

> It is said that the forest itself would whisper approval when a true druid rose—leaves would stir without wind, flames would flicker in reverence, and the roots would pulse with life.

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

### Using Agent Mode to Solve the Adventure

#### Step 1: Give Agent Mode a High-Level Task

In the Chat panel with "Agent" mode selected, provide a comprehensive prompt like:

```text
Create a JavaScript game with the following rules:

🌿 Root – Flame – Wind: Druidic Duel Rules

🌀 The Elements
  🌿 Root (Earth): Entangling vines and ancient roots.
  🔥 Flame (Fire): Dancing fire spirits and scorching embers.
  💨 Wind (Air): Whirling gusts and whispering breezes.

🔁 Elemental Dominance
  Root entangles Wind (vines trap the air, grounding it).
  Wind extinguishes Flame (gusts blow out the fire).
  Flame burns Root (fire consumes the vines).

🎮 How to Play
  Each druid secretly chooses one element to cast.
  Both reveal their choice simultaneously.
  The stronger element wins the round based on the dominance rules above.
  If both choose the same element, it’s a draw—nature remains in balance.

Create a text based version that works in the terminal

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
- **Ask for improvements**: "Can you create it as a web page with input elements"
- **Add features**: "Add the ability to add another element and define how this element fits into the existing rule system"

#### Step 4: Explore Advanced Features

Once your basic system works, try asking Agent Mode to:

```
Enhance the the system with these features:
  Lunar Blessing: Once per game, a druid may call upon the moon to reverse the outcome of a round.
  Nature’s Wrath: If a druid wins three rounds in a row, they summon a storm and win the match outright.
  Elemental Tokens: Use carved stones or leaves marked with symbols to represent each element for a tactile, ritualistic feel.
```

### Expected Output Example

When your Agent Mode implementation is complete, running the application should produce output similar to the following. AI is non-deterministic, so your results may vary slightly, but the structure should be similar.

<a href="#">
    <img src="../../../Images/druid-test-outcome.png"  style="width: 830px" />
</a>

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