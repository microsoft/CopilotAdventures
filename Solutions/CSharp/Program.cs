public class Program
{
    public static void Main(string[] args)
    {
        if (args.Length == 0)
        {
            Console.WriteLine("Please specify which logic to run.");
            return;
        }

        switch (args[0].ToLower())
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
                Console.WriteLine($"Unknown option: {args[0]}");
                break;
        }
    }
}