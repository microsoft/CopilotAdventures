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

        foreach (var creature in _creatures)
        {
            grid[creature.Start.X, creature.Start.Y] = creature.Icon;
        }

        var maxMoves = _creatures.Max(creature => creature.Moves.Length);
        for (int move = InitialMove; move < maxMoves; move++)
        {
            RenderGrid(move, grid, scores);
            if (move == maxMoves - 1) break;

            foreach (var creature in _creatures)
            {
                var position = creature.Start;
                if (move < creature.Moves.Length && move >= 0)
                {
                    var (dx, dy) = Directions[creature.Moves[move]];
                    position = position.MoveBy(dx, dy, GridSize);
                }

                var overlappingCreature = _creatures.FirstOrDefault(c => c.Start == position && c.Name != creature.Name);
                if (overlappingCreature != null)
                {
                    scores[overlappingCreature.Name] -= creature.Power;
                    scores[creature.Name] += creature.Power;
                    grid[position.X, position.Y] = OverlapIcon;
                }
                else
                {
                    grid[creature.Start.X, creature.Start.Y] = null;
                    creature.Start = position;
                    grid[position.X, position.Y] = creature.Icon;
                }
            }
        }

        return scores;
    }

    private static void RenderGrid(int move, string?[,] grid, Dictionary<string, int> scores)
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
        Console.WriteLine("Scores:");
        foreach (var score in scores)
        {
            Console.WriteLine($"{score.Key}: {score.Value}");
        }
        Console.WriteLine("-----");
    }
}

public class Mythos
{
    public static void Run()
    {
        var creatures = new List<Creature>
        {
            new Creature("Dragon", new Position(2, 2), new[] {Direction.Right, Direction.Left, Direction.Down}, 7, "🐉"),
            new Creature("Goblin", new Position(2, 3), new[] {Direction.Left, Direction.Right, Direction.Up}, 3, "👺"),
            new Creature("Ogre", new Position(0, 0), new[] {Direction.Right, Direction.Down, Direction.Down}, 5, "👹")
        };

        var simulator = new BattleSimulator(creatures);
        var scores = simulator.Battle();
        foreach (var score in scores)
        {
            Console.WriteLine($"{score.Key}: {score.Value}");
        }
    }
}
