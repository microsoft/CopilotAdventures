def simulate_battle(creatures):
    grid_size = 5
    grid = [[None for _ in range(grid_size)] for _ in range(grid_size)]
    scores = {}
    active_creatures = creatures.copy()  # Track active creatures

    directions = {
        'UP': [-1, 0],
        'DOWN': [1, 0],
        'LEFT': [0, -1],
        'RIGHT': [0, 1]
    }

    # Initialize scores for all creatures
    for creature in creatures:
        start, icon, name = creature['start'], creature['icon'], creature['name']
        grid[start[0]][start[1]] = icon
        scores[name] = 0

    max_moves = len(creatures[0]['moves'])
    for move in range(-1, max_moves):
        render_grid(move, grid, scores, creatures)
        if move == max_moves - 1:
            break

        # Clear the grid for this move
        for i in range(grid_size):
            for j in range(grid_size):
                grid[i][j] = None

        # First, calculate all new positions for active creatures only
        new_positions = []
        for creature in active_creatures:
            x, y = creature['start']
            if move >= 0 and move < len(creature['moves']):
                dx, dy = directions[creature['moves'][move]]
                x = max(0, min(grid_size - 1, x + dx))
                y = max(0, min(grid_size - 1, y + dy))
            new_positions.append({'creature': creature, 'new_position': [x, y]})

        # Track creatures that will be defeated this round
        defeated = set()

        # Group creatures by position to handle multi-creature collisions
        position_groups = {}
        for item in new_positions:
            pos_key = f"{item['new_position'][0]},{item['new_position'][1]}"
            if pos_key not in position_groups:
                position_groups[pos_key] = []
            position_groups[pos_key].append(item)

        # Process collisions for each position
        for creatures_at_position in position_groups.values():
            if len(creatures_at_position) > 1:
                # Multiple creatures at same position - battle!
                x, y = creatures_at_position[0]['new_position']
                grid[x][y] = '🤺'  # Show battle
                
                # Find the strongest creature(s)
                max_power = max(item['creature']['power'] for item in creatures_at_position)
                winners = [item for item in creatures_at_position if item['creature']['power'] == max_power]
                losers = [item for item in creatures_at_position if item['creature']['power'] < max_power]
                
                if len(winners) == 1:
                    # Single winner - gets points for all defeated creatures
                    winner = winners[0]['creature']
                    for loser in losers:
                        scores[winner['name']] += loser['creature']['power']
                        defeated.add(loser['creature']['name'])
                else:
                    # Multiple creatures with same max power - all defeated
                    for item in creatures_at_position:
                        defeated.add(item['creature']['name'])

        # Update positions for surviving creatures and remove defeated ones
        new_active_creatures = []
        for creature in active_creatures:
            if creature['name'] not in defeated:
                # Update position for surviving creature
                new_pos_item = next((item for item in new_positions if item['creature']['name'] == creature['name']), None)
                if new_pos_item:
                    creature['start'] = new_pos_item['new_position']
                    x, y = creature['start']
                    if grid[x][y] != '🤺':  # Don't overwrite battle indicators
                        grid[x][y] = creature['icon']
                new_active_creatures.append(creature)
        active_creatures = new_active_creatures

    return scores

def render_grid(move, grid, scores, creatures):
    move_text = 'Initial Board' if move == -1 else f'Move {move + 1}'
    print(move_text)
    for row in grid:
        print(' '.join(cell or '⬜️' for cell in row))
    
    # Create scores dict with icons
    scores_with_icons = {}
    for name, score in scores.items():
        creature = next((c for c in creatures if c['name'] == name), None)
        display_name = f"{creature['icon']} {name}" if creature else name
        scores_with_icons[display_name] = score
    
    print('Scores:', scores_with_icons)
    print('-----')

creatures = [
    { 'name': "Dragon", 'start': [0, 0], 'moves': ["RIGHT", "DOWN", "RIGHT"], 'power': 7, 'icon': '🐉' },
    { 'name': "Goblin", 'start': [0, 2], 'moves': ["LEFT", "DOWN", "LEFT"], 'power': 3, 'icon': '👺' },
    { 'name': "Ogre", 'start': [2, 0], 'moves': ["UP", "RIGHT", "DOWN"], 'power': 5, 'icon': '👹' },
    { 'name': "Troll", 'start': [2, 2], 'moves': ["UP", "LEFT", "UP"], 'power': 4, 'icon': '👿' },
    { 'name': "Wizard", 'start': [4, 1], 'moves': ["UP", "UP", "LEFT"], 'power': 6, 'icon': '🧙' }
]

final_scores = simulate_battle(creatures)
final_scores_with_icons = {}
for name, score in final_scores.items():
    creature = next((c for c in creatures if c['name'] == name), None)
    display_name = f"{creature['icon']} {name}" if creature else name
    final_scores_with_icons[display_name] = score
print(final_scores_with_icons)