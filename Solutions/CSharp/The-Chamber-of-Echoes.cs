public class ChamberOfEchoes
{
    static List<int> echoes = new List<int> { 3, 6, 9, 12 };
    static List<int> memories = new List<int>();

    // Document what this code is doing
    // This code is predicting the next number in the sequence by finding the difference 
    // between the first two numbers and adding that difference to the last number in the sequence.
    static int PredictNext(List<int> echoes)
    {
        int difference = echoes[1] - echoes[0];
        int next = echoes[echoes.Count - 1] + difference;
        // Store the full sequence including the predicted number in memories
        memories.AddRange(echoes);
        memories.Add(next);
        return next;
    }

    public static void Run()
    {
        Console.WriteLine(PredictNext(echoes));
    }
}