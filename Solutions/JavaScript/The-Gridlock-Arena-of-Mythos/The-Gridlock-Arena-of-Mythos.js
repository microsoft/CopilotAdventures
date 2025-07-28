/**
 * The Gridlock Arena of Mythos - Complete Battle Simulation System
 * 
 * This system simulates epic battles between mystical creatures in a 5x5 grid arena.
 * Creatures move simultaneously and battle when they occupy the same cell.
 * 
 */

/**
 * Validates a creature object has all required properties
 * @param {Object} creature - The creature to validate
 * @throws {Error} If creature is invalid
 */
function validateCreature(creature) {
    if (!creature || typeof creature !== 'object') {
        throw new Error('Creature must be an object');
    }
    
    const requiredProps = ['name', 'start', 'moves', 'power', 'icon'];
    for (const prop of requiredProps) {
        if (!(prop in creature)) {
            throw new Error(`Creature missing required property: ${prop}`);
        }
    }
    
    if (typeof creature.name !== 'string' || creature.name.trim() === '') {
        throw new Error('Creature name must be a non-empty string');
    }
    
    if (!Array.isArray(creature.start) || creature.start.length !== 2 || 
        !creature.start.every(coord => Number.isInteger(coord) && coord >= 0 && coord < 5)) {
        throw new Error('Creature start position must be [row, column] with valid coordinates');
    }
    
    if (!Array.isArray(creature.moves) || creature.moves.length === 0) {
        throw new Error('Creature moves must be a non-empty array');
    }
    
    const validDirections = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
    if (!creature.moves.every(move => validDirections.includes(move))) {
        throw new Error(`Invalid move direction. Must be one of: ${validDirections.join(', ')}`);
    }
    
    if (!Number.isInteger(creature.power) || creature.power <= 0) {
        throw new Error('Creature power must be a positive integer');
    }
    
    if (typeof creature.icon !== 'string' || creature.icon.length === 0) {
        throw new Error('Creature icon must be a non-empty string');
    }
}

/**
 * Validates an array of creatures for the battle simulation
 * @param {Array} creatures - Array of creature objects
 * @throws {Error} If creatures array is invalid
 */
function validateCreatures(creatures) {
    if (!Array.isArray(creatures)) {
        throw new Error('Creatures must be an array');
    }
    
    if (creatures.length === 0) {
        throw new Error('At least one creature is required');
    }
    
    // Validate each creature
    creatures.forEach((creature, index) => {
        try {
            validateCreature(creature);
        } catch (error) {
            throw new Error(`Creature at index ${index}: ${error.message}`);
        }
    });
    
    // Check for duplicate names
    const names = creatures.map(c => c.name);
    const duplicateNames = names.filter((name, index) => names.indexOf(name) !== index);
    if (duplicateNames.length > 0) {
        throw new Error(`Duplicate creature names found: ${duplicateNames.join(', ')}`);
    }
    
    // Check for duplicate starting positions
    const startPositions = creatures.map(c => `${c.start[0]},${c.start[1]}`);
    const duplicatePositions = startPositions.filter((pos, index) => startPositions.indexOf(pos) !== index);
    if (duplicatePositions.length > 0) {
        throw new Error(`Duplicate starting positions found: ${duplicatePositions.join(', ')}`);
    }
    
    // Ensure all creatures have the same number of moves
    const movesCounts = creatures.map(c => c.moves.length);
    const uniqueMoveCounts = [...new Set(movesCounts)];
    if (uniqueMoveCounts.length > 1) {
        throw new Error('All creatures must have the same number of moves');
    }
}

/**
 * Checks if coordinates are within the grid boundaries
 * @param {number} row - Row coordinate
 * @param {number} col - Column coordinate
 * @param {number} gridSize - Size of the grid (default: 5)
 * @returns {boolean} True if coordinates are valid
 */
function isValidPosition(row, col, gridSize = 5) {
    return row >= 0 && row < gridSize && col >= 0 && col < gridSize;
}

/**
 * Calculates the new position after applying a movement direction
 * @param {Array} currentPosition - Current [row, col] position
 * @param {string} direction - Movement direction ('UP', 'DOWN', 'LEFT', 'RIGHT')
 * @param {number} gridSize - Size of the grid (default: 5)
 * @returns {Array} New [row, col] position (clamped to grid boundaries)
 */
function calculateNewPosition(currentPosition, direction, gridSize = 5) {
    const directions = {
        'UP': [-1, 0],
        'DOWN': [1, 0],
        'LEFT': [0, -1],
        'RIGHT': [0, 1]
    };
    
    const [currentRow, currentCol] = currentPosition;
    const [deltaRow, deltaCol] = directions[direction];
    
    const newRow = Math.max(0, Math.min(gridSize - 1, currentRow + deltaRow));
    const newCol = Math.max(0, Math.min(gridSize - 1, currentCol + deltaCol));
    
    return [newRow, newCol];
}

/**
 * Clears all cells in the grid
 * @param {Array} grid - 2D array representing the arena grid
 */
function clearGrid(grid) {
    const gridSize = grid.length;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = null;
        }
    }
}

/**
 * Processes battles between creatures at the same position
 * @param {Array} creaturesAtPosition - Array of creatures at the same position
 * @param {Object} scores - Scores object to update
 * @returns {Set} Set of defeated creature names
 */
function processBattle(creaturesAtPosition, scores) {
    const defeated = new Set();
    
    if (creaturesAtPosition.length <= 1) {
        return defeated; // No battle if only one or no creatures
    }
    
    // Find the strongest creature(s)
    const maxPower = Math.max(...creaturesAtPosition.map(c => c.creature.power));
    const winners = creaturesAtPosition.filter(c => c.creature.power === maxPower);
    const losers = creaturesAtPosition.filter(c => c.creature.power < maxPower);
    
    if (winners.length === 1) {
        // Single winner - gets points for all defeated creatures
        const winner = winners[0].creature;
        let totalPowerGained = 0;
        
        losers.forEach(loser => {
            totalPowerGained += loser.creature.power;
            defeated.add(loser.creature.name);
        });
        
        scores[winner.name] += totalPowerGained;
    } else {
        // Multiple creatures with same max power - all defeated
        creaturesAtPosition.forEach(c => defeated.add(c.creature.name));
    }
    
    return defeated;
}

/**
 * Main battle simulation function for the Gridlock Arena of Mythos
 * @param {Array} creatures - Array of creature objects
 * @returns {Object} Final scores for all creatures
 * @throws {Error} If input validation fails
 */
function simulateBattle(creatures) {
    // Input validation
    validateCreatures(creatures);
    
    const gridSize = 5;
    const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
    const scores = {};
    // Create deep copies of creatures to avoid modifying the original array
    let activeCreatures = creatures.map(creature => ({
        name: creature.name,
        start: [...creature.start], // Copy the start position array
        moves: [...creature.moves], // Copy the moves array
        power: creature.power,
        icon: creature.icon
    }));
    
    // Initialize scores and place creatures on initial grid
    activeCreatures.forEach(({ start, icon, name }) => {
        grid[start[0]][start[1]] = icon;
        scores[name] = 0;
    });
    
    const maxMoves = activeCreatures[0].moves.length;
    
    // Display initial board
    renderGrid(-1, grid, scores, creatures);
    
    // Game loop for actual moves
    for (let moveIndex = 0; moveIndex < maxMoves; moveIndex++) {
        // Clear the grid for this move
        clearGrid(grid);
        
        // Calculate new positions for all active creatures
        const newPositions = activeCreatures.map(creature => {
            const currentDirection = creature.moves[moveIndex];
            const newPosition = calculateNewPosition(creature.start, currentDirection, gridSize);
            return { creature, newPosition };
        });
        
        // Group creatures by their destination position
        const positionGroups = new Map();
        newPositions.forEach(({ creature, newPosition }) => {
            const positionKey = `${newPosition[0]},${newPosition[1]}`;
            if (!positionGroups.has(positionKey)) {
                positionGroups.set(positionKey, []);
            }
            positionGroups.get(positionKey).push({ creature, newPosition });
        });
        
        // Track all defeated creatures this round
        let allDefeated = new Set();
        
        // Process each position group for battles
        positionGroups.forEach((creaturesAtPosition, positionKey) => {
            const [row, col] = positionKey.split(',').map(Number);
            
            if (creaturesAtPosition.length > 1) {
                // Battle occurs - mark with battle icon
                grid[row][col] = '🤺';
                
                // Process the battle and get defeated creatures
                const defeated = processBattle(creaturesAtPosition, scores);
                defeated.forEach(name => allDefeated.add(name));
            } else {
                // Single creature - place on grid
                const creature = creaturesAtPosition[0].creature;
                grid[row][col] = creature.icon;
            }
        });
        
        // Update active creatures list and positions
        activeCreatures = activeCreatures.filter(creature => {
            if (allDefeated.has(creature.name)) {
                return false; // Remove defeated creature
            }
            
            // Update position for surviving creature
            const newPositionData = newPositions.find(np => np.creature.name === creature.name);
            if (newPositionData) {
                creature.start = newPositionData.newPosition;
            }
            
            return true;
        });
        
        // Display the board after this move
        renderGrid(moveIndex, grid, scores, creatures);
        
        // Early termination if no creatures remain
        if (activeCreatures.length === 0) {
            console.log('All creatures have been defeated! Battle ends early.');
            break;
        }
    }
    
    return scores;
}

/**
 * Renders the current state of the arena grid and scores
 * @param {number} moveIndex - Current move index (-1 for initial board, 0+ for moves)
 * @param {Array} grid - 2D array representing the arena
 * @param {Object} scores - Current scores for all creatures
 * @param {Array} creatures - Original creatures array for reference
 */
function renderGrid(moveIndex, grid, scores, creatures) {
    const moveText = moveIndex === -1 ? 'Initial Board' : `Move ${moveIndex + 1}`;
    console.log(moveText);
    
    // Display the grid with proper spacing
    grid.forEach(row => {
        console.log(row.map(cell => cell || '⬜️').join(' '));
    });
    
    // Create scores object with icons for display
    const scoresWithIcons = {};
    Object.keys(scores).forEach(name => {
        const creature = creatures.find(c => c.name === name);
        const displayName = creature ? `${creature.icon} ${name}` : name;
        scoresWithIcons[displayName] = scores[name];
    });
    
    console.log('Scores:', scoresWithIcons);
    console.log('-----');
}

/**
 * Formats final scores with creature icons for display
 * @param {Object} scores - Final scores object
 * @param {Array} creatures - Array of creatures for icon reference
 * @returns {Object} Formatted scores with icons
 */
function formatFinalScores(scores, creatures) {
    const finalScoresWithIcons = {};
    Object.keys(scores).forEach(name => {
        const creature = creatures.find(c => c.name === name);
        const displayName = creature ? `${creature.icon} ${name}` : name;
        finalScoresWithIcons[displayName] = scores[name];
    });
    return finalScoresWithIcons;
}

// ============================================================================
// MAIN EXECUTION - The Epic Battle Begins!
// ============================================================================

/**
 * The legendary creatures of Mythos, each with their unique abilities and strategies
 */
const creatures = [
    { name: "Dragon", start: [0, 0], moves: ["RIGHT", "DOWN", "RIGHT"], power: 7, icon: '🐉' },
    { name: "Goblin", start: [0, 2], moves: ["LEFT", "DOWN", "LEFT"], power: 3, icon: '👺' },
    { name: "Ogre", start: [2, 0], moves: ["UP", "RIGHT", "DOWN"], power: 5, icon: '👹' },
    { name: "Troll", start: [2, 2], moves: ["UP", "LEFT", "UP"], power: 4, icon: '👿' },
    { name: "Wizard", start: [4, 1], moves: ["UP", "UP", "LEFT"], power: 6, icon: '🧙' }
];

/**
 * Main execution function that can be called programmatically
 * @param {Array} testCreatures - Optional creatures array for testing
 * @returns {Object} Final battle results
 */
function runBattleSimulation(testCreatures = null) {
    const battleCreatures = testCreatures || creatures;
    
    try {
        console.log('🏟️  Welcome to the Gridlock Arena of Mythos! 🏟️');
        console.log('Preparing for an epic battle between legendary creatures...\n');
        
        const finalScores = simulateBattle(battleCreatures);
        const finalResults = formatFinalScores(finalScores, battleCreatures);
        
        console.log('🏆 FINAL BATTLE RESULTS 🏆');
        console.log(finalResults);
        console.log('\nThe battle has concluded! May the strongest creature be victorious!');
        
        return finalResults;
    } catch (error) {
        console.error('❌ Battle simulation failed:', error.message);
        throw error;
    }
}

// Run the simulation if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runBattleSimulation();
}

// Export functions for testing and external use
export {
    simulateBattle,
    validateCreature,
    validateCreatures,
    calculateNewPosition,
    isValidPosition,
    processBattle,
    formatFinalScores,
    runBattleSimulation,
    creatures
};
