// Lookup tables
const WINNING_MOVES = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
};

const POINTS = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
};

// Sample moves
const player1Moves = ['scissors', 'paper', 'scissors', 'rock', 'rock'];
const player2Moves = ['rock', 'rock', 'paper', 'scissors', 'paper'];

// Initialize scores
let player1Score = 0;
let player2Score = 0;

// Play the game based on the number of rounds present in the moves
const rounds = Math.min(player1Moves.length, player2Moves.length);
for (let i = 0; i < rounds; i++) {
    const move1 = player1Moves[i];
    const move2 = player2Moves[i];

    if (move1 === move2) continue;
    else if (WINNING_MOVES[move1] === move2) {
        player1Score += POINTS[move1];
    } else {
        player2Score += POINTS[move2];
    }
}

// Display the final scores and winner
console.log(`Player 1 Score: ${player1Score}`);
console.log(`Player 2 Score: ${player2Score}`);

const winnerMessage = player1Score > player2Score ? 'Player 1 wins!' :
                      player2Score > player1Score ? 'Player 2 wins!' : 'It\'s a draw!';
console.log(winnerMessage);
