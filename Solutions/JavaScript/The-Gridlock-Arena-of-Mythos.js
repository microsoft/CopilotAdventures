function simulateBattle(creatures) {
    const gridSize = 5;
    const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
    let scores = {};

    const directions = {
        'UP': [-1, 0],
        'DOWN': [1, 0],
        'LEFT': [0, -1],
        'RIGHT': [0, 1]
    };

    creatures.forEach(({ start, icon, name }) => {
        grid[start[0]][start[1]] = icon;  // Use icon for grid visualization
        scores[name] = 0;
    });

    const maxMoves = creatures[0].moves.length;
    for(let move = -1; move < maxMoves; move++) {
        renderGrid(move, grid, scores);
        if (move === maxMoves - 1) break;

        creatures.forEach(creature => {
            let [x, y] = creature.start;
            if (creature.moves[move]) {
                const [dx, dy] = directions[creature.moves[move]];
                x = Math.max(0, Math.min(gridSize - 1, x + dx));
                y = Math.max(0, Math.min(gridSize - 1, y + dy));
            }

            const overlappingCreature = creatures.find(c => c.start[0] === x && c.start[1] === y && c.name !== creature.name);
            if (overlappingCreature) {
                scores[overlappingCreature.name] -= creature.power;
                scores[creature.name] += creature.power;
                grid[x][y] = '🤺';  // Indicate overlap
            } else {
                grid[creature.start[0]][creature.start[1]] = null;
                creature.start = [x, y];
                grid[x][y] = creature.icon; // Use icon for grid visualization
            }
        });
    }

    return scores;
}

function renderGrid(move, grid, scores) {
    const moveText = move === -1 ? 'Initial Board' : `Move ${move + 1}`;
    console.log(moveText);
    grid.forEach(row => console.log(row.map(cell => cell || '⬜️').join(' ')));
    console.log('Scores:', scores);
    console.log('-----');
}

const creatures = [
    { name: "Dragon", start: [2, 2], moves: ["RIGHT", "LEFT", "DOWN"], power: 7, icon: '🐉' },
    { name: "Goblin", start: [2, 3], moves: ["LEFT", "RIGHT", "UP"], power: 3, icon: '👺' },
    { name: "Ogre", start: [0, 0], moves: ["RIGHT", "DOWN", "DOWN"], power: 5, icon: '👹' }
];

console.log(simulateBattle(creatures));
