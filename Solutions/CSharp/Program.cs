public class Program
{
    public static void Main(string[] args)
    {

        var adventure = args?.FirstOrDefault()?.ToLower();
        if (string.IsNullOrWhiteSpace(adventure))
        {
            Console.WriteLine("Please specify which logic to run: Sample names include: algora, chamberofechoes, elodoria, lumoria, mythos, stonevale, tempora.");
            adventure = Console.ReadLine();
        }

        switch (adventure)
        {
            case "algora":
                Algora.Run();
                break;
            case "chamberofechoes":
                ChamberOfEchoes.Run();
                break;
            case "eldoria":
                Eldoria.Run();
                break;
            case "lumoria":
                Lumoria.Run();
                break;
            case "mythos":
                Mythos.Run();
                break;
            case "stonevale":
                StoneVale.Run();
                break;
            case "tempora":
                Tempora.Run();
                break;
            default:
                Console.WriteLine($"Unknown option: {adventure}");
                break;
        }
    }
}
