/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;*/

using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.WriteLine("Zadej sekvenci čísel oddělených čárkou:");

        string input = Console.ReadLine();
        string[] numbers = input.Split(',');

        int[] parsedNumbers = new int[numbers.Length];
        bool validInput = true;

        for (int i = 0; i < numbers.Length; i++)
        {
            if (int.TryParse(numbers[i], out parsedNumbers[i]))
            {
                
            }
            else
            {
                Console.WriteLine($"Chyba: '{numbers[i]}' není validní celé číslo. Zadejte prosím pouze celá čísla.");
                validInput = false;
                break;
            }
        }

        if (validInput)
        {
            Console.WriteLine($"Nejmenší číslo je {parsedNumbers.Min()}.");
            Console.WriteLine($"Největší číslo je {parsedNumbers.Max()}.");

            int longestAscendingSequence = GetLongestAscendingSequence(parsedNumbers);
            Console.WriteLine($"Délka nejdelšího vzestupného intervalu je {longestAscendingSequence}.");
        }

        Console.ReadLine();
    }

    static int GetLongestAscendingSequence(int[] numbers)
    {
        int currentLength = 1;
        int maxLength = 1;

        for (int i = 1; i < numbers.Length; i++)
        {
            if (numbers[i] > numbers[i - 1])
            {
                currentLength++;
                maxLength = Math.Max(maxLength, currentLength);
            }
            else
            {
                currentLength = 1;
            }
        }

        return maxLength;
    }
}
