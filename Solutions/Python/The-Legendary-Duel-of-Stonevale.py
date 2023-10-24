# Lookup tables
WINNING_MOVES = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
}

POINTS = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

# Sample moves
player1_moves = ['scissors', 'paper', 'scissors', 'rock', 'rock']
player2_moves = ['rock', 'rock', 'paper', 'scissors', 'paper']

# Initialize scores
player1_score = 0
player2_score = 0

# Play the game based on the number of rounds present in the moves
rounds = min(len(player1_moves), len(player2_moves))
for i in range(rounds):
    move1 = player1_moves[i]
    move2 = player2_moves[i]

    if move1 == move2:
        continue
    elif WINNING_MOVES[move1] == move2:
        player1_score += POINTS[move1]
    else:
        player2_score += POINTS[move2]

# Display the final scores and winner
print(f"Player 1 Score: {player1_score}")
print(f"Player 2 Score: {player2_score}")

if player1_score > player2_score:
    winner_message = 'Player 1 wins!'
elif player2_score > player1_score:
    winner_message = 'Player 2 wins!'
else:
    winner_message = "It's a draw!"
print(winner_message)