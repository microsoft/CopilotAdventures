public class Tempora
{
    /// <summary>
    /// Parses a string representation of time into separate hour and minute integers.
    /// </summary>
    /// <param name="time">The time string to parse (in the format "HH:mm").</param>
    /// <returns>A tuple containing the parsed hour and minute values.</returns>
    private static (int Hour, int Minute) ParseTime(string time)
    {
        var parts = time.Split(':').Select(int.Parse).ToArray();
        return (parts[0], parts[1]);
    }

    /// <summary>
    /// Calculates the time difference between two clock times.
    /// </summary>
    /// <param name="clockTime">The clock time to calculate the difference from.</param>
    /// <param name="grandClockTime">The grand clock time to calculate the difference to.</param>
    /// <returns>The time difference in minutes.</returns>
    public static int TimeDifference(string clockTime, string grandClockTime)
    {
        var (clockHour, clockMinute) = ParseTime(clockTime);
        var (grandClockHour, grandClockMinute) = ParseTime(grandClockTime);

        return (clockHour - grandClockHour) * 60 + (clockMinute - grandClockMinute);
    }

    /// <summary>
    /// Synchronizes a list of clock times to a grand clock time.
    /// </summary>
    /// <param name="clockTimes">The list of clock times to synchronize.</param>
    /// <param name="grandClockTime">The grand clock time to synchronize to.</param>
    /// <returns>A list of time differences in minutes.</returns>
    public static List<int> SynchronizeClocks(List<string> clockTimes, string grandClockTime)
    {
        return clockTimes.Select(clockTime => TimeDifference(clockTime, grandClockTime)).ToList();
    }

    /// <summary>
    /// Runs the Tempora class and outputs the synchronized clock times.
    /// </summary>
    public static void Run()
    {
        var clockTimes = new List<string> { "14:45", "15:05", "15:00", "14:40" };
        const string grandClockTime = "15:00";
        Console.WriteLine($"[{string.Join(", ", SynchronizeClocks(clockTimes, grandClockTime))}]");  // Outputs: [-15, 5, 0, -20]
    }
}
