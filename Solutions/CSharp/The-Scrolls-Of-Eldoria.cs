using System.Net.Http.Headers;
using System.Text.RegularExpressions;

public class Eldoria
{
    private static async Task FetchAndDecipherScroll(string url)
    {
        Console.WriteLine($"Fetching scroll from {url}");
        try
        {
            using (var httpClient = new HttpClient())
            {
                string scrollContent = await httpClient.GetStringAsync(url);

                // Use regular expression to extract the secrets
                Regex secretsPattern = new Regex(@"\{\*(.*?)\*\}");
                MatchCollection matches = secretsPattern.Matches(scrollContent);

                // Display the extracted secrets
                foreach (Match match in matches)
                {
                    Console.WriteLine(match.Groups[1].Value);
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
        }
    }

    public static void Run()
    {
        string url = "https://raw.githubusercontent.com/DanWahlin/CopilotAdventures/main/Data/scrolls.txt";
        FetchAndDecipherScroll(url).Wait();
    }
}
