# GitHub Copilot Instructions for CopilotAdventures

## Project Overview

CopilotAdventures is an educational repository containing coding challenges designed to teach developers how to effectively use GitHub Copilot's different modes (Agent, Ask, and Edit). The repository consists of adventure-themed programming challenges across multiple difficulty levels and languages.

## Repository Structure

### Adventure Organization
- `Adventures/Agent/` - Autonomous AI agent mode challenges
- `Adventures/Ask/` - Interactive chat mode challenges  
- Adventures are categorized by difficulty: `1-Beginner/`, `2-Intermediate/`, `3-Advanced/`
- Each adventure has corresponding `-Agent.md` and `-Ask.md` variants

### Solutions Architecture
- `Solutions/` contains reference implementations in multiple languages
- `Solutions/CSharp/` - .NET console app with switch-case adventure selector in `Program.cs`
- `Solutions/JavaScript/` - Individual JS files per adventure
- `Solutions/Python/` - Individual Python files per adventure
- C# solutions use a centralized runner pattern: each adventure is a separate class with a `Run()` method

### Supporting Assets
- `Data/` - Shared data files (e.g., `scrolls.txt` for Eldoria adventure)
- `Images/` - Adventure artwork and UI assets, sized 1456x832 for consistency
- `_config.yml` - Jekyll configuration for GitHub Pages

## Development Patterns

### Adventure Structure Convention
Each adventure follows this markdown template:
1. Hero image with consistent styling (`width: 830px`)
2. Background story and context
3. **Objective** section with clear task definition
4. **Specifications** with technical requirements and sample data
5. **High-level Tasks** breaking down the solution approach
6. **GitHub Copilot Hints** with mode-specific guidance

### Code Organization Patterns
- **Single-file solutions**: Each adventure solution should be self-contained in one file
- **Clear documentation**: Include prompts and comments explaining Copilot usage
- **Multiple language support**: Solutions should be easily portable across languages
- **Console-based**: All solutions use console output for simplicity

### Naming Conventions
- Adventure files: `The-[Name]-of-[Location]-[Mode].md`
- Solution files: `The-[Name]-of-[Location].[ext]`
- C# classes: PascalCase matching adventure names
- Adventure themes use fantasy locations (Tempora, Algora, Lumoria, etc.)

## GitHub Copilot Integration

### Mode-Specific Features
- **Agent Mode**: Emphasizes autonomous task breakdown and multi-file coordination
- **Ask Mode**: Focuses on step-by-step collaboration and learning
- Adventures are designed to showcase specific Copilot capabilities per mode

### Educational Focus
- Warmup adventures introduce Copilot basics and mode selection
- Each adventure includes mode-specific prompting guidance
- Solutions demonstrate effective Copilot prompting patterns
- Comments should show the iterative process of working with Copilot

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
