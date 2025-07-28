"""
The Gridlock Arena of Mythos - Battle Simulation Module

This module contains all the core functions for the Gridlock Arena battle simulation,
separated for testing and reusability.
"""

def validate_creature(creature):
    """Validates a creature object has all required properties"""
    if not isinstance(creature, dict):
        raise ValueError("Creature must be a dictionary")
    
    required_props = ['name', 'start', 'moves', 'power', 'icon']
    for prop in required_props:
        if prop not in creature:
            raise ValueError(f"Creature missing required property: {prop}")
    
    # Validate name
    if not isinstance(creature['name'], str) or not creature['name'].strip():
        raise ValueError("Creature name must be a non-empty string")
    
    # Validate start position
    start = creature['start']
    if not isinstance(start, list) or len(start) != 2:
        raise ValueError("Creature start position must be [row, column]")
    
    if not all(isinstance(coord, int) for coord in start):
        raise ValueError("Start coordinates must be integers")
    
    if not (0 <= start[0] < 5 and 0 <= start[1] < 5):
        raise ValueError("Start position must be valid coordinates within 5x5 grid")
    
    # Validate moves
    moves = creature['moves']
    if not isinstance(moves, list) or len(moves) == 0:
        raise ValueError("Creature moves must be a non-empty array")
    
    valid_directions = ['UP', 'DOWN', 'LEFT', 'RIGHT']
    for move in moves:
        if move not in valid_directions:
            raise ValueError(f"Invalid move direction: {move}")
    
    # Validate power
    power = creature['power']
    if not isinstance(power, int) or power <= 0:
        raise ValueError("Creature power must be a positive integer")
    
    # Validate icon
    if not isinstance(creature['icon'], str) or not creature['icon'].strip():
        raise ValueError("Creature icon must be a non-empty string")
    
    return True

def validate_creatures(creatures):
    """Validates an array of creatures"""
    if not isinstance(creatures, list):
        raise ValueError("Creatures must be a list")
    
    if len(creatures) == 0:
        raise ValueError("At least one creature is required")
    
    # Validate each creature
    for creature in creatures:
        validate_creature(creature)
    
    # Check for duplicate names
    names = [c['name'] for c in creatures]
    if len(names) != len(set(names)):
        raise ValueError("Duplicate creature names are not allowed")
    
    # Check for duplicate positions
    positions = [tuple(c['start']) for c in creatures]
    if len(positions) != len(set(positions)):
        raise ValueError("Duplicate starting positions are not allowed")
    
    # Check that all creatures have the same number of moves
    move_counts = [len(c['moves']) for c in creatures]
    if len(set(move_counts)) > 1:
        raise ValueError("All creatures must have the same number of moves")
    
    return True

def is_valid_position(row, col, grid_size=5):
    """Checks if a position is valid within the grid"""
    return 0 <= row < grid_size and 0 <= col < grid_size

def calculate_new_position(current_pos, direction, grid_size=5):
    """Calculates new position based on direction with boundary clamping"""
    directions = {
        'UP': [-1, 0],
        'DOWN': [1, 0],
        'LEFT': [0, -1],
        'RIGHT': [0, 1]
    }
    
    dx, dy = directions[direction]
    new_row = max(0, min(grid_size - 1, current_pos[0] + dx))
    new_col = max(0, min(grid_size - 1, current_pos[1] + dy))
    
    return [new_row, new_col]

def process_battle(creatures_at_position, scores):
    """Processes a battle between creatures at the same position"""
    defeated = set()
    
    if len(creatures_at_position) <= 1:
        return defeated
    
    # Find the strongest creature(s)
    max_power = max(item['creature']['power'] for item in creatures_at_position)
    winners = [item for item in creatures_at_position if item['creature']['power'] == max_power]
    losers = [item for item in creatures_at_position if item['creature']['power'] < max_power]
    
    if len(winners) == 1:
        # Single winner - gets points for all defeated creatures
        winner = winners[0]['creature']
        total_points = sum(loser['creature']['power'] for loser in losers)
        scores[winner['name']] += total_points
        for loser in losers:
            defeated.add(loser['creature']['name'])
    else:
        # Multiple creatures with same max power - all defeated
        for item in creatures_at_position:
            defeated.add(item['creature']['name'])
    
    return defeated

def format_final_scores(scores, creatures):
    """Formats final scores with creature icons"""
    formatted_scores = {}
    for name, score in scores.items():
        creature = next((c for c in creatures if c['name'] == name), None)
        display_name = f"{creature['icon']} {name}" if creature else name
        formatted_scores[display_name] = score
    return formatted_scores

def simulate_battle(creatures):
    """Main battle simulation function"""
    # Validate input
    validate_creatures(creatures)
    
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
    
    # Display initial board
    render_grid(-1, grid, scores, creatures)
    
    for move in range(max_moves):
        # Clear the grid for this move
        for i in range(grid_size):
            for j in range(grid_size):
                grid[i][j] = None

        # First, calculate all new positions for active creatures only
        new_positions = []
        for creature in active_creatures:
            x, y = creature['start']
            if move < len(creature['moves']):
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
                
                battle_defeated = process_battle(creatures_at_position, scores)
                defeated.update(battle_defeated)

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
        
        # Render grid after movement and battles
        render_grid(move, grid, scores, creatures)

    return scores

def render_grid(move, grid, scores, creatures):
    """Renders the current state of the grid"""
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
    
    print('Scores: {')
    for i, (name, score) in enumerate(scores_with_icons.items()):
        print(f"  '{name}': {score}{',' if i < len(scores_with_icons) - 1 else ''}")
    print('}')
    print('-----')

def run_battle_simulation(creatures=None):
    """Runs the complete battle simulation with output"""
    if creatures is None:
        creatures = DEFAULT_CREATURES.copy()
    
    print('🏟️  Welcome to the Gridlock Arena of Mythos! 🏟️')
    print('Preparing for an epic battle between legendary creatures...')
    print()

    final_scores = simulate_battle(creatures)
    final_scores_with_icons = format_final_scores(final_scores, creatures)

    print('🏆 FINAL BATTLE RESULTS 🏆')
    print('{')
    for i, (name, score) in enumerate(final_scores_with_icons.items()):
        print(f"  '{name}': {score}{',' if i < len(final_scores_with_icons) - 1 else ''}")
    print('}')
    print()
    print('The battle has concluded! May the strongest creature be victorious!')
    
    return final_scores_with_icons

# Default creatures configuration
DEFAULT_CREATURES = [
    { 'name': "Dragon", 'start': [0, 0], 'moves': ["RIGHT", "DOWN", "RIGHT"], 'power': 7, 'icon': '🐉' },
    { 'name': "Goblin", 'start': [0, 2], 'moves': ["LEFT", "DOWN", "LEFT"], 'power': 3, 'icon': '👺' },
    { 'name': "Ogre", 'start': [2, 0], 'moves': ["UP", "RIGHT", "DOWN"], 'power': 5, 'icon': '👹' },
    { 'name': "Troll", 'start': [2, 2], 'moves': ["UP", "LEFT", "UP"], 'power': 4, 'icon': '👿' },
    { 'name': "Wizard", 'start': [4, 1], 'moves': ["UP", "UP", "LEFT"], 'power': 6, 'icon': '🧙' }
]