#include <iostream>
using namespace std;

void multiplicationTable(int multipler)
{
   for (int i = 1; i <= 10; i++)
   {
      if (i == 10)
         cout << i << " * " << multipler << " = " << i * multipler;
      else
         cout << i << " * " << multipler << " = " << i * multipler << endl;
   }
}

void doIGetBonus(int salary, bool bonus)
{
   cout << "Your Salary = " << (bonus ? salary * 10 : salary) << endl;
}

int main()
{
   cout << "\n============================\n\n";
   multiplicationTable(5);

   cout << "\n============================\n\n";
   doIGetBonus(3000, false);

   cout << "\n============================\n\n";
   return 0;
}