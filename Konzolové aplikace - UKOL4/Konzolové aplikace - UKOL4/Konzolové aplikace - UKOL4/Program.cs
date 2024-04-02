using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Konzolové_aplikace___UKOL4
{
    using System;
    using System.Collections.Generic;

    class Program
    {
        static void Main(string[] args)
        {
            var commandProcessor = new CommandProcessor();
            while (true)
            {
                string input = Console.ReadLine();
                string output = commandProcessor.ProcessCommand(input);
                Console.WriteLine(output);
            }
        }
    }

    public class CommandProcessor
    {
        private LinkedList<string> words = new LinkedList<string>();
        private LinkedListNode<string> currentWord;

        public string ProcessCommand(string command)
        {
            if (command.StartsWith("Pridat:"))
            {
                string word = command.Substring(7);
                AddWord(word);
                return word;
            }
            else if (command == "Zpet")
            {
                return MoveBackward();
            }
            else if (command == "Vpred")
            {
                return MoveForward();
            }
            else
            {
                return "Neznamy prikaz";
            }
        }

        private void AddWord(string word)
        {
            words.AddLast(word);
            if (currentWord == null)
            {
                currentWord = words.First;
            }
        }

        private string MoveBackward()
        {
            if (currentWord != null && currentWord.Previous != null)
            {
                currentWord = currentWord.Previous;
                return currentWord.Value;
            }
            else
            {
                return words.First?.Value ?? "Nic k zobrazeni";
            }
        }

        private string MoveForward()
        {
            if (currentWord != null && currentWord.Next != null)
            {
                currentWord = currentWord.Next;
                return currentWord.Value;
            }
            else
            {
                return words.Last?.Value ?? "Nic k zobrazeni";
            }
        }
    }

}
