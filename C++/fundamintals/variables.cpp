#include <iostream>
using namespace std;

int declareVariables()
{
   const char *name = "Computer";
   int cost, count;
   cost = 2, count = 5;

   cout << "Product Name Is: " << name << "\n";
   cout << "Product Cost Is:  " << count << "\n";

   cost = count = 30;
   cout << "Product Count Is: " << cost << "\n";
   return 0;
}

int updateVariables()
{
   int price = 150;
   int quantity = 2;
   int total = price * quantity;

   cout << "The Product Price Is: " << price << "$\n";
   cout << "The Products Cost With Fees Is: " << total + 30 << "$\n";

   quantity += 3;
   cout << "Products Quantity Is: " << quantity << "\n";
   return 0;
}

int calculateAge()
{
   int age;
   cout << "Enter Your Age: ";
   cin >> age;

   int days = age * 365;
   int hours = days * 24;

   cout << "Your Age In Days Is: " << days << " Days \n";
   cout << "Your Age In Hours Is: " << hours << " Hours \n";

   return 0;
}

int main()
{
   cout << "============================ \n";

   // declareVariables();

   // updateVariables();

   // calculateAge();

   cout << "============================ \n";

   return 0;
}
