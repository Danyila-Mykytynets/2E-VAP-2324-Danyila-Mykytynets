using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Konzolové_aplikace
{
    using System;
    using System.Collections.Generic;

    class Program
    {
        static void Main(string[] args)
        {
            var cityPopulationRegistry = new CityPopulationRegistry();
            while (true)
            {
                string input = Console.ReadLine();
                string output = cityPopulationRegistry.ProcessCommand(input);
                Console.WriteLine(output);
            }
        }
    }

    public class CityPopulationRegistry
    {
        private Dictionary<string, int> cities = new Dictionary<string, int>();
        private string lastAddedCity = "";

        public string ProcessCommand(string command)
        {
            string[] parts = command.Split(' ');
            string keyword = parts[0];

            switch (keyword)
            {
                case "Pridej":
                    if (parts.Length >= 3)
                    {
                        string cityName = parts[1];
                        int population;
                        if (int.TryParse(parts[2], out population))
                        {
                            AddCity(cityName, population);
                            return $"{cityName} s počtem obyvatel {population} bylo přidáno.";
                        }
                        else
                        {
                            return "Chybný formát počtu obyvatel.";
                        }
                    }
                    else
                    {
                        return "Chybějící název města nebo počet obyvatel.";
                    }

                case "Obyvatele":
                    if (parts.Length >= 2)
                    {
                        string cityName = parts[1];
                        int population;
                        if (cities.TryGetValue(cityName, out population))
                        {
                            return $"{cityName} má {population} obyvatel.";
                        }
                        else
                        {
                            return "Neznámé město.";
                        }
                    }
                    else
                    {
                        return "Chybějící název města.";
                    }

                case "Posledni":
                    if (string.IsNullOrEmpty(lastAddedCity))
                    {
                        return "Nebylo přidáno žádné město.";
                    }
                    else
                    {
                        int population = cities[lastAddedCity];
                        return $"{lastAddedCity} s počtem obyvatel {population}.";
                    }

                case "Mesta":
                    if (cities.Count == 0)
                    {
                        return "Nebylo přidáno žádné město.";
                    }
                    else
                    {
                        string result = "Seznam měst a jejich obyvatel:\n";
                        foreach (var city in cities)
                        {
                            result += $"{city.Key}: {city.Value} obyvatel\n";
                        }
                        return result;
                    }

                default:
                    return "Neznámý příkaz.";
            }
        }

        private void AddCity(string name, int population)
        {
            cities[name] = population;
            lastAddedCity = name;
        }
    }

}
