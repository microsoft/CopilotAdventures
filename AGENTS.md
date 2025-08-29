# AGENTS.md - CopilotAdventures Development Guide

## Project Structure

CopilotAdventures is an educational repository featuring fantasy-themed coding challenges designed to teach GitHub Copilot's different interaction modes. The repository is organized as follows:

### Directory Structure
```
CopilotAdventures/
├── Adventures/
│   ├── Agent/          # Autonomous AI agent mode challenges
│   └── Ask/            # Interactive chat mode challenges
├── Solutions/
│   ├── CSharp/         # C# solutions with centralized runner
│   ├── JavaScript/     # Standalone JavaScript solutions
│   └── Python/         # Standalone Python solutions
├── Data/
│   └── scrolls.txt     # Shared data for Eldoria adventure
├── Images/             # Adventure artwork (1456x832 landscape)
└── .github/
    └── copilot-instructions.md  # GitHub Copilot development guidelines
```

### Adventure Organization
- **Agent Mode** (`Adventures/Agent/`): Multi-file, autonomous project creation challenges
- **Ask Mode** (`Adventures/Ask/`): Step-by-step collaborative learning challenges
- **Difficulty Levels**: `1-Beginner/`, `2-Intermediate/`, `3-Advanced/`
- **Parallel Variants**: Each adventure has both `-Agent.md` and `-Ask.md` versions

### Solutions Architecture
**C# Centralized Pattern**: Single `Program.cs` with switch-case adventure selector
**JavaScript/Python Standalone Pattern**: Individual executable files per adventure

## Coding Conventions

### File Naming Standards
- **Adventure Files**: `The-[Name]-of-[Location]-[Mode].md`
- **Solution Files**: `The-[Name]-of-[Location].[ext]`
- **C# Classes**: PascalCase matching adventure names (e.g., `Tempora`, `Algora`)
- **Fantasy Themes**: Use mystical locations (Tempora, Algora, Lumoria, Eldoria)

### Code Style Guidelines
- **Single-File Solutions**: Complete adventure in one executable file
- **Console-Based I/O**: All interaction through console for simplicity
- **Educational Comments**: Include Copilot interaction patterns and prompts used
- **Fantasy Variable Naming**: Align with adventure themes (`clockTimes`, `scrollSecrets`)
- **Self-Contained**: Minimize external dependencies beyond standard libraries
- **Readability First**: Prioritize educational value over optimization

### Language-Specific Standards

#### C# Conventions
- Use PascalCase for class names and public methods
- Add new adventures to `Program.cs` switch statement
- Implement mandatory `Run()` method for each adventure class
- Use `dotnet run [adventure-name]` for execution

#### JavaScript/Python Conventions
- Use camelCase for variables and functions
- Direct execution: `node filename.js` or `python filename.py`
- Include educational comments showing Copilot prompts
- Handle console input/output consistently

### Adventure Content Standards
- **Hero Images**: Landscape format 1456x832 pixels
- **Structure**: Background story → Objective → Prerequisites → Specifications → Tasks
- **Educational Focus**: Demonstrate specific Copilot capabilities
- **Fantasy Theming**: Maintain whimsical, adventure-based context
- **Learning Outcomes**: Clear skill development goals

## Testing Protocols

### Solution Validation
1. **Functionality Testing**: Verify each solution runs without errors
2. **Educational Value**: Confirm adventure teaches intended Copilot skills
3. **Cross-Platform**: Test solutions on multiple environments
4. **Documentation**: Ensure clear instructions and expected outputs

### Testing Commands
```bash
# C# Solutions
cd Solutions/CSharp
dotnet build
dotnet run [adventure-name]

# JavaScript Solutions  
cd Solutions/JavaScript
node The-[Adventure-Name].js

# Python Solutions
cd Solutions/Python
python The-[Adventure-Name].py
```

### Quality Checklist
- [ ] Solution executes successfully
- [ ] Console output matches expected format
- [ ] Educational comments are clear and helpful
- [ ] Fantasy theme is consistent
- [ ] Copilot interaction patterns are demonstrated
- [ ] No external dependencies beyond standard libraries

## Pull Request Guidelines

### PR Title Format
Use: `New Copilot Adventure: [Your Adventure Name]` for new adventures

### PR Content Requirements
- **Difficulty Level**: Specify beginner, intermediate, or advanced
- **Adventure Template**: Follow existing markdown structure in Adventures folder
- **Hero Image**: Include landscape artwork (1456x832 pixels) using Microsoft Copilot Image Creator
- **Solution Code**: Provide complete solution in single file within appropriate Solutions language folder
- **Educational Value**: Demonstrate specific GitHub Copilot features or interaction modes

### PR Description Template
```markdown
## Adventure Details
- **Name**: [Adventure Name]
- **Difficulty**: [Beginner/Intermediate/Advanced]
- **Copilot Mode**: [Agent/Ask/Both]
- **Language**: [C#/JavaScript/Python]

## Learning Objectives
- [ ] Demonstrate [specific Copilot feature]
- [ ] Teach [programming concept]
- [ ] Practice [development skill]

## Files Included
- [ ] Adventure markdown file(s)
- [ ] Hero image (1456x832 landscape)
- [ ] Complete solution code
- [ ] Updated Program.cs (if C#)

## Testing Completed
- [ ] Solution builds and runs successfully
- [ ] Educational content is clear and engaging
- [ ] Fantasy theme is consistent
- [ ] Copilot interaction patterns are evident
```

### Review Criteria
1. **Educational Value**: Does the adventure effectively teach Copilot usage?
2. **Code Quality**: Is the solution clean, well-commented, and functional?
3. **Template Compliance**: Does it follow the established adventure structure?
4. **Fantasy Theme**: Is the adventure content engaging and thematically consistent?
5. **Technical Requirements**: Are all files properly formatted and executable?

### Contribution Workflow
1. Fork the repository
2. Create adventure content following templates
3. Test solution thoroughly
4. Submit PR with complete documentation
5. Address review feedback
6. Merge after approval

## GitHub Copilot Integration

### Mode-Specific Development
- **Agent Mode**: Use for autonomous project creation and multi-file coordination
- **Ask Mode**: Use for step-by-step learning and explanation-driven development
- **Edit Mode**: Use for iterative improvements and multi-file modifications

### Best Practices
- Include actual Copilot prompts used in solution comments
- Demonstrate progressive enhancement with Copilot assistance
- Show how different modes complement each other
- Provide clear examples of effective Copilot interaction patterns

## Common Adventure Patterns

### Algorithm Categories
- **Time Synchronization**: Parse time strings, calculate differences
- **Sequence Prediction**: Pattern recognition in arrays
- **Data Filtering**: Extract information using regex patterns
- **Grid Simulation**: 2D array manipulation for game mechanics
- **Logic Implementation**: Conditional rule systems

### Data Processing Examples
- Eldoria scrolls: Extract secrets using `{*...*}` pattern
- Tempora clocks: Time arithmetic and synchronization
- Mythos grids: 2D coordinate systems and pathfinding
- Chamber echoes: Number sequence pattern recognition

This documentation ensures consistent, high-quality contributions that enhance the educational value of CopilotAdventures while maintaining its engaging fantasy theme.