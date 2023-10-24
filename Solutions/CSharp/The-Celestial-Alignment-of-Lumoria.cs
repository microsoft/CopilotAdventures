public class Planet
{
    public string Name { get; set; } = string.Empty;
    public double Distance { get; set; }
    public double Size { get; set; }
}

public class Lumoria
{
    public static int GetShadowCount(List<Planet> planets, int currentIndex)
    {
        return planets.Take(currentIndex)
                      .Count(planet => planet.Size > planets[currentIndex].Size);
    }

    public static string GetLightIntensity(int i, int shadowCount)
    {
        if (i == 0) return "Full";
        if (shadowCount == 1) return "None";
        if (shadowCount > 1) return "None (Multiple Shadows)";
        return "Partial";
    }

    public static List<(string Name, string Light)> CalculateLightIntensity(List<Planet> planets)
    {
        return planets.Select((planet, i) =>
        {
            var shadowCount = GetShadowCount(planets, i);
            var lightIntensity = GetLightIntensity(i, shadowCount);
            return (Name: planet.Name, Light: lightIntensity);
        }).ToList();
    }

    public static void Run()
    {
        var lumoriaPlanets = new List<Planet>
        {
            new Planet { Name = "Mercuria", Distance = 0.4, Size = 4879 },
            new Planet { Name = "Earthia", Distance = 1, Size = 12742 },
            new Planet { Name = "Venusia", Distance = 0.7, Size = 12104 },
            new Planet { Name = "Marsia", Distance = 1.5, Size = 6779 }
        };

        var sortedPlanets = lumoriaPlanets.OrderBy(p => p.Distance).ToList();
        var lightIntensities = CalculateLightIntensity(sortedPlanets);

        foreach (var item in lightIntensities)
        {
            Console.WriteLine($"Planet: {item.Name}, Light: {item.Light}");
        }

    }
}
