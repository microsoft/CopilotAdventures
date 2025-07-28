public class Algora
{

    static string danceEffect(string loxMove, string drakoMove, Dictionary<string, string> effects)
    {
        return effects.TryGetValue($"{loxMove}{drakoMove}", out string? effect) ? effect : "A mysterious effect takes place.";
    }

    static IEnumerable<string> simulateDance(string[] loxMoves, string[] drakoMoves, Dictionary<string, string> effects)
    {
        return loxMoves.Select((move, index) => danceEffect(move, drakoMoves[index], effects));
    }

    public static void Run()
    {
        string[] loxMoves = new string[] { "Twirl", "Leap", "Spin", "Twirl", "Leap" };
        string[] drakoMoves = new string[] { "Spin", "Twirl", "Leap", "Leap", "Spin" };

        Dictionary<string, string> effects = new Dictionary<string, string>()
        {
            { "TwirlTwirl", "Fireflies light up the forest." },
            { "LeapLeap", "The forest grows taller." },
            { "SpinSpin", "The forest shrinks." },
            { "TwirlLeap", "The forest becomes more dense." },
            { "LeapSpin", "Gentle rain starts falling." },
            { "SpinLeap", "A rainbow appears in the sky." },
            { "TwirlSpin", "The forest becomes less dense." },
            { "LeapTwirl", "The forest becomes more vibrant." }
        };

        Console.WriteLine(string.Join(Environment.NewLine, simulateDance(loxMoves, drakoMoves, effects)));
    }
}