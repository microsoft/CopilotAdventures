record Position(int X, int Y)
{
    public Position MoveBy(int dx, int dy, int gridSize)
    {
        return new Position(Math.Clamp(X + dx, 0, gridSize - 1), Math.Clamp(Y + dy, 0, gridSize - 1));
    }
}

class Creature
{
    public string Name { get; }
    public Position Start { get; set; }
    public Direction[] Moves { get; }
    public int Power { get; set; }
    public string Icon { get; }

    public Creature(string name, Position start, Direction[] moves, int power, string icon)
    {
        Name = name;
        Start = start;
        Moves = moves;
        Power = power;
        Icon = icon;
    }
}

enum Direction
{
    Up,
    Down,
    Left,
    Right
}

class BattleSimulator
{
    private const int GridSize = 5;
    private const string OverlapIcon = "🤺";
    private const string EmptyCellIcon = "⬜";
    private const int InitialMove = -1;

    private static readonly Dictionary<Direction, (int, int)> Directions = new()
    {
        [Direction.Up] = (-1, 0),
        [Direction.Down] = (1, 0),
        [Direction.Left] = (0, -1),
        [Direction.Right] = (0, 1)
    };

    private readonly List<Creature> _creatures;

    public BattleSimulator(List<Creature> creatures)
    {
        _creatures = creatures;
    }

    public Dictionary<string, int> Battle()
    {
        var grid = new string?[GridSize, GridSize];
        var scores = _creatures.ToDictionary(creature => creature.Name, creature => 0);
        var activeCreatures = new List<Creature>(_creatures); // Track active creatures

        foreach (var creature in _creatures)
        {
            grid[creature.Start.X, creature.Start.Y] = creature.Icon;
        }

        var maxMoves = _creatures.Max(creature => creature.Moves.Length);
        
        // Display initial board
        RenderGrid(InitialMove, grid, scores, _creatures);
        
        for (int move = 0; move < maxMoves; move++)
        {
            // Clear the grid for this move
            for (int i = 0; i < GridSize; i++)
            {
                for (int j = 0; j < GridSize; j++)
                {
                    grid[i, j] = null;
                }
            }

            // First, calculate all new positions for active creatures only
            var newPositions = activeCreatures.Select(creature =>
            {
                var position = creature.Start;
                if (move < creature.Moves.Length)
                {
                    var (dx, dy) = Directions[creature.Moves[move]];
                    position = position.MoveBy(dx, dy, GridSize);
                }
                return new { Creature = creature, NewPosition = position };
            }).ToList();

            // Track creatures that will be defeated this round
            var defeated = new HashSet<string>();

            // Group creatures by position to handle multi-creature collisions
            var positionGroups = newPositions.GroupBy(item => item.NewPosition).ToList();

            // Process collisions for each position
            foreach (var group in positionGroups)
            {
                var creaturesAtPosition = group.ToList();
                if (creaturesAtPosition.Count > 1)
                {
                    // Multiple creatures at same position - battle!
                    var position = creaturesAtPosition[0].NewPosition;
                    grid[position.X, position.Y] = OverlapIcon; // Show battle
                    
                    // Find the strongest creature(s)
                    var maxPower = creaturesAtPosition.Max(item => item.Creature.Power);
                    var winners = creaturesAtPosition.Where(item => item.Creature.Power == maxPower).ToList();
                    var losers = creaturesAtPosition.Where(item => item.Creature.Power < maxPower).ToList();
                    
                    if (winners.Count == 1)
                    {
                        // Single winner - gets points for all defeated creatures
                        var winner = winners[0].Creature;
                        foreach (var loser in losers)
                        {
                            scores[winner.Name] += loser.Creature.Power;
                            defeated.Add(loser.Creature.Name);
                        }
                    }
                    else
                    {
                        // Multiple creatures with same max power - all defeated
                        foreach (var item in creaturesAtPosition)
                        {
                            defeated.Add(item.Creature.Name);
                        }
                    }
                }
            }

            // Update positions for surviving creatures and remove defeated ones
            activeCreatures = activeCreatures.Where(creature =>
            {
                if (defeated.Contains(creature.Name))
                {
                    return false; // Remove defeated creature
                }
                
                // Update position for surviving creature
                var newPosItem = newPositions.FirstOrDefault(np => np.Creature.Name == creature.Name);
                if (newPosItem != null)
                {
                    creature.Start = newPosItem.NewPosition;
                    var position = creature.Start;
                    if (grid[position.X, position.Y] != OverlapIcon) // Don't overwrite battle indicators
                    {
                        grid[position.X, position.Y] = creature.Icon;
                    }
                }
                return true;
            }).ToList();
            
            // Render grid after movement and battles
            RenderGrid(move, grid, scores, _creatures);
        }

        return scores;
    }

    private static void RenderGrid(int move, string?[,] grid, Dictionary<string, int> scores, List<Creature> creatures)
    {
        var moveText = move == InitialMove ? "Initial Board" : $"Move {move + 1}";
        Console.WriteLine(moveText);
        for (int i = 0; i < GridSize; i++)
        {
            for (int j = 0; j < GridSize; j++)
            {
                Console.Write($"{grid[i, j] ?? EmptyCellIcon} ");
            }
            Console.WriteLine();
        }
        
        // Create scores with icons
        var scoresWithIcons = scores.ToDictionary(
            kvp => {
                var creature = creatures.FirstOrDefault(c => c.Name == kvp.Key);
                return creature != null ? $"{creature.Icon} {kvp.Key}" : kvp.Key;
            },
            kvp => kvp.Value
        );
        
        Console.WriteLine("Scores: {");
        var scoreItems = scoresWithIcons.ToArray();
        for (int i = 0; i < scoreItems.Length; i++)
        {
            var comma = i < scoreItems.Length - 1 ? "," : "";
            Console.WriteLine($"  '{scoreItems[i].Key}': {scoreItems[i].Value}{comma}");
        }
        Console.WriteLine("}");
        Console.WriteLine("-----");
    }
}

public class Mythos
{
    public static void Run()
    {
        Console.WriteLine("🏟️  Welcome to the Gridlock Arena of Mythos! 🏟️");
        Console.WriteLine("Preparing for an epic battle between legendary creatures...");
        Console.WriteLine();
        
        var creatures = new List<Creature>
        {
            new Creature("Dragon", new Position(0, 0), new[] {Direction.Right, Direction.Down, Direction.Right}, 7, "🐉"),
            new Creature("Goblin", new Position(0, 2), new[] {Direction.Left, Direction.Down, Direction.Left}, 3, "👺"),
            new Creature("Ogre", new Position(2, 0), new[] {Direction.Up, Direction.Right, Direction.Down}, 5, "👹"),
            new Creature("Troll", new Position(2, 2), new[] {Direction.Up, Direction.Left, Direction.Up}, 4, "👿"),
            new Creature("Wizard", new Position(4, 1), new[] {Direction.Up, Direction.Up, Direction.Left}, 6, "🧙")
        };

        var simulator = new BattleSimulator(creatures);
        var scores = simulator.Battle();
        
        // Create final scores with icons
        var finalScoresWithIcons = scores.ToDictionary(
            kvp => {
                var creature = creatures.FirstOrDefault(c => c.Name == kvp.Key);
                return creature != null ? $"{creature.Icon} {kvp.Key}" : kvp.Key;
            },
            kvp => kvp.Value
        );
        
        Console.WriteLine("🏆 FINAL BATTLE RESULTS 🏆");
        Console.WriteLine("{");
        var scoreItems = finalScoresWithIcons.ToArray();
        for (int i = 0; i < scoreItems.Length; i++)
        {
            var comma = i < scoreItems.Length - 1 ? "," : "";
            Console.WriteLine($"  '{scoreItems[i].Key}': {scoreItems[i].Value}{comma}");
        }
        Console.WriteLine("}");
        Console.WriteLine();
        Console.WriteLine("The battle has concluded! May the strongest creature be victorious!");
    }
}
