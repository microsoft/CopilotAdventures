def simulate_battle(creatures):
    grid_size = 5
    grid = [[None for _ in range(grid_size)] for _ in range(grid_size)]
    scores = {}

    directions = {
        'UP': [-1, 0],
        'DOWN': [1, 0],
        'LEFT': [0, -1],
        'RIGHT': [0, 1]
    }

    for creature in creatures:
        start, icon, name = creature['start'], creature['icon'], creature['name']
        grid[start[0]][start[1]] = icon
        scores[name] = 0

    max_moves = len(creatures[0]['moves'])
    for move in range(-1, max_moves):
        render_grid(move, grid, scores)
        if move == max_moves - 1:
            break

        for creature in creatures:
            x, y = creature['start']
            if creature['moves'][move]:
                dx, dy = directions[creature['moves'][move]]
                x = max(0, min(grid_size - 1, x + dx))
                y = max(0, min(grid_size - 1, y + dy))

            overlapping_creature = next((c for c in creatures if c['start'] == [x, y] and c['name'] != creature['name']), None)
            if overlapping_creature:
                scores[overlapping_creature['name']] -= creature['power']
                scores[creature['name']] += creature['power']
                grid[x][y] = '🤺'
            else:
                grid[creature['start'][0]][creature['start'][1]] = None
                creature['start'] = [x, y]
                grid[x][y] = creature['icon']

    return scores

def render_grid(move, grid, scores):
    move_text = 'Initial Board' if move == -1 else f'Move {move + 1}'
    print(move_text)
    for row in grid:
        print(' '.join(cell or '⬜️' for cell in row))
    print('Scores:', scores)
    print('-----')

creatures = [
    { 'name': "Dragon", 'start': [2, 2], 'moves': ["RIGHT", "LEFT", "DOWN"], 'power': 7, 'icon': '🐉' },
    { 'name': "Goblin", 'start': [2, 3], 'moves': ["LEFT", "RIGHT", "UP"], 'power': 3, 'icon': '👺' },
    { 'name': "Ogre", 'start': [0, 0], 'moves': ["RIGHT", "DOWN", "DOWN"], 'power': 5, 'icon': '👹' }
]

print(simulate_battle(creatures))