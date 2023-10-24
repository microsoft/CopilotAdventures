public class StoneVale
{
    private static readonly Dictionary<string, string> WinningMoves = new Dictionary<string, string>
    {
        { "rock", "scissors" },
        { "scissors", "paper" },
        { "paper", "rock" }
    };

    private static readonly Dictionary<string, int> Points = new Dictionary<string, int>
    {
        { "rock", 1 },
        { "paper", 2 },
        { "scissors", 3 }
    };

    private static void PlayRounds(List<string> player1Moves, List<string> player2Moves, ref int player1Score, ref int player2Score)
    {
        int rounds = Math.Min(player1Moves.Count, player2Moves.Count);
        for (int i = 0; i < rounds; i++)
        {
            string move1 = player1Moves[i];
            string move2 = player2Moves[i];

            if (move1 == move2) continue;

            if (IsWinningMove(move1, move2))
            {
                player1Score += Points[move1];
            }
            else
            {
                player2Score += Points[move2];
            }
        }
    }

    private static bool IsWinningMove(string move1, string move2)
    {
        return WinningMoves[move1] == move2;
    }

    private static void DisplayResults(int player1Score, int player2Score)
    {
        Console.WriteLine($"Player 1 Score: {player1Score}");
        Console.WriteLine($"Player 2 Score: {player2Score}");

        string winnerMessage = DetermineWinner(player1Score, player2Score);
        Console.WriteLine(winnerMessage);
    }

    private static string DetermineWinner(int player1Score, int player2Score)
    {
        if (player1Score > player2Score) return "Player 1 wins!";
        if (player2Score > player1Score) return "Player 2 wins!";
        return "It's a draw!";
    }

    public static void Run()
    {
        List<string> player1Moves = new List<string> { "scissors", "paper", "scissors", "rock", "rock" };
        List<string> player2Moves = new List<string> { "rock", "rock", "paper", "scissors", "paper" };

        int player1Score = 0;
        int player2Score = 0;

        PlayRounds(player1Moves, player2Moves, ref player1Score, ref player2Score);
        DisplayResults(player1Score, player2Score);
    }
}
