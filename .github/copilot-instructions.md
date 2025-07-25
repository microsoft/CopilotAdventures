# GitHub Copilot Instructions for CopilotAdventures

## Project Overview

CopilotAdventures is an educational repository containing adventure-themed coding challenges designed to teach developers GitHub Copilot's different interaction modes (Agent, Ask, and Edit). The core concept is fantasy-themed programming puzzles that demonstrate specific Copilot capabilities.

## Architecture & Data Flow

### Adventure Organization
- `Adventures/Agent/` - Autonomous AI agent mode challenges (multi-file, project creation)
- `Adventures/Ask/` - Interactive chat mode challenges (step-by-step collaboration)  
- Difficulty hierarchy: `1-Beginner/`, `2-Intermediate/`, `3-Advanced/`
- Parallel adventure variants: each has both `-Agent.md` and `-Ask.md` versions

### Solutions Architecture
**C# Centralized Runner Pattern:**
- `Solutions/CSharp/Program.cs` - Main entry point with switch-case adventure selector
- Each adventure = separate class with mandatory `Run()` method
- Adventure classes follow PascalCase naming (e.g., `Tempora`, `Algora`)
- Console arguments or user input selects which adventure to execute

**JavaScript/Python Standalone Pattern:**
- Individual self-contained files per adventure
- Direct execution: `node filename.js` or `python filename.py`
- No shared runner - each file is completely independent

### Data Dependencies
- `Data/scrolls.txt` - Shared data for Eldoria adventure (contains secrets in `{*...*}` format)
- `Images/` - 1456x832 landscape artwork for each adventure location
- Adventure-specific assets in themed subdirectories

## Development Workflows

### Running Solutions
**C# Solutions:**
```bash
cd Solutions/CSharp
dotnet run [adventure-name]  # e.g., dotnet run tempora
```

**JavaScript/Python Solutions:**
```bash
cd Solutions/JavaScript
node The-Clockwork-Town-of-Tempora.js

cd Solutions/Python  
python The-Clockwork-Town-of-Tempora.py
```

### Adding New C# Adventures
1. Create adventure class with `Run()` method
2. Add case to `Program.cs` switch statement
3. Use fantasy-themed class names matching adventure locations

### MCP Architecture (Advanced Adventures)
Knowledge Cartographer adventure demonstrates proper MCP integration:
- **MCP tools handle external operations** (web scraping via FireCrawl, file system via File System MCP)
- **Applications read MCP results** from structured files (`entities.json`, `relationships.json`, `sources.json`)
- **Clean separation**: MCP → Files → Application (not direct MCP → Application)
- See `Solutions/JavaScript/README-Knowledge-Cartographer.md` for reference architecture

## Adventure Development Patterns

### Standard Adventure Structure
1. **Hero image** (`width: 830px`) - landscape 1456x832 format
2. **Background story** - fantasy context and world-building
3. **Objective** - clear task definition with learning outcomes
4. **Prerequisites** - VS Code setup, Copilot mode selection
5. **Specifications** - technical requirements with sample data
6. **High-level Tasks** - solution approach breakdown
7. **Mode-specific guidance** - Agent vs Ask prompting patterns

### Code Organization Requirements
- **Single-file solutions**: Complete adventure in one executable file
- **Console-based**: All I/O through console for simplicity
- **Educational comments**: Show Copilot interaction patterns and prompts used
- **Fantasy variable naming**: Align with adventure themes (clockTimes, grandClockTime, scrollSecrets)
- **Self-contained**: No external dependencies beyond standard libraries

### Naming Conventions
- Adventure files: `The-[Name]-of-[Location]-[Mode].md`
- Solution files: `The-[Name]-of-[Location].[ext]`
- C# classes: PascalCase matching adventure names
- Adventure themes use fantasy locations (Tempora, Algora, Lumoria, etc.)

## Key Integration Patterns

### GitHub Copilot Mode Specialization
- **Agent Mode**: High-level task delegation, autonomous problem-solving, multi-file coordination
  - Prompt: "Create a complete [adventure] system that [comprehensive requirements]"
  - Agent breaks down, implements, tests, and iterates independently
- **Ask Mode**: Step-by-step collaboration, learning-focused interaction
  - Prompt: "Help me understand how to [specific concept] for [adventure context]"
  - Interactive guidance with explanation and code examples

### Common Algorithm Patterns
- **Time synchronization** (Tempora): Parse time strings, calculate minute differences
- **Sequence prediction** (Chamber of Echoes): Pattern recognition in number arrays  
- **Data filtering** (Eldoria): Extract secrets from noise using regex `{*...*}` patterns
- **Grid simulation** (Mythos): 2D array manipulation for game mechanics
- **Rock-paper-scissors logic** (Stonevale): Conditional game rule implementation

### Data Processing Examples
```javascript
// Tempora pattern: time difference calculation
const timeDifference = (clockTime, grandClockTime) => {
    const [clockHour, clockMinute] = clockTime.split(":").map(Number);
    return (clockHour - grandClockHour) * 60 + (clockMinute - grandClockMinute);
};

// Eldoria pattern: secret extraction from Data/scrolls.txt
const extractSecrets = (text) => text.match(/{\\*(.+?)\\*}/g)?.map(match => 
    match.replace(/{\\*|\\*}/g, '')) || [];
```

## Contributing Guidelines

### New Adventure Requirements
- Follow the established markdown template structure
- Include landscape image (1456x832 pixels)
- Provide solution in at least one language in `Solutions/`
- Adventure should demonstrate specific Copilot features or techniques
- Include both Agent and Ask mode variants

### Code Style
- Prioritize readability and educational value over optimization
- Include extensive comments showing Copilot interaction
- Use descriptive variable names that align with adventure themes
- For C#: Add new adventures to the `Program.cs` switch statement

## Common Adventure Patterns

### Algorithm Types
- **Sequence prediction** (Tempora, Chamber of Echoes)
- **Pattern matching** (Algora, Stonevale)  
- **Data parsing/filtering** (Eldoria scrolls)
- **Game mechanics simulation** (Mythos grid, celestial alignment)

### Data Structures
- Most adventures use arrays/lists as primary data structures
- Time-based adventures work with time parsing and arithmetic
- Grid-based adventures use 2D arrays or coordinate systems
- String processing adventures focus on parsing and pattern extraction

When creating new content, maintain the whimsical fantasy theme while ensuring technical challenges are appropriate for the target difficulty level.
