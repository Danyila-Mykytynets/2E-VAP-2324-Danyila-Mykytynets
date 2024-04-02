using System;

namespace Konzolové_aplikace___UKOL2
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Zadejte první komplexní číslo:");
                Console.Write("Reálná část: ");
                double real1 = double.Parse(Console.ReadLine());
                Console.Write("Imaginární část: ");
                double imaginary1 = double.Parse(Console.ReadLine());

                Console.WriteLine("Zadejte druhé komplexní číslo:");
                Console.Write("Reálná část: ");
                double real2 = double.Parse(Console.ReadLine());
                Console.Write("Imaginární část: ");
                double imaginary2 = double.Parse(Console.ReadLine());

                ComplexNumber complex1 = new ComplexNumber(real1, imaginary1);
                ComplexNumber complex2 = new ComplexNumber(real2, imaginary2);

                Console.WriteLine($"První číslo: {complex1}");
                Console.WriteLine($"Druhé číslo: {complex2}");

                ComplexNumber sum = complex1.Add(complex2);
                ComplexNumber difference = complex1.Subtract(complex2);
                ComplexNumber product = complex1.Multiply(complex2);
                ComplexNumber quotient = complex1.Divide(complex2);

                Console.WriteLine("Součet: " + sum);
                Console.WriteLine("Rozdíl: " + difference);
                Console.WriteLine("Součin: " + product);
                Console.WriteLine("Podíl: " + quotient);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Došlo k chybě: " + ex.Message);
            }
        }
    }

    class ComplexNumber
    {
        public double Real { get; private set; }
        public double Imaginary { get; private set; }

        public ComplexNumber(double real, double imaginary)
        {
            Real = real;
            Imaginary = imaginary;
        }

        public ComplexNumber Add(ComplexNumber other)
        {
            double newReal = Real + other.Real;
            double newImaginary = Imaginary + other.Imaginary;
            return new ComplexNumber(newReal, newImaginary);
        }

        public ComplexNumber Subtract(ComplexNumber other)
        {
            double newReal = Real - other.Real;
            double newImaginary = Imaginary - other.Imaginary;
            return new ComplexNumber(newReal, newImaginary);
        }

        public ComplexNumber Multiply(ComplexNumber other)
        {
            double newReal = Real * other.Real - Imaginary * other.Imaginary;
            double newImaginary = Imaginary * other.Real + Real * other.Imaginary;
            return new ComplexNumber(newReal, newImaginary);
        }

        public ComplexNumber Divide(ComplexNumber other)
        {
            double divisor = other.Real * other.Real + other.Imaginary * other.Imaginary;
            double newReal = (Real * other.Real + Imaginary * other.Imaginary) / divisor;
            double newImaginary = (Imaginary * other.Real - Real * other.Imaginary) / divisor;
            return new ComplexNumber(newReal, newImaginary);
        }

        public override string ToString()
        {
            return $"{Real} + {Imaginary}i";
        }
    }
}
