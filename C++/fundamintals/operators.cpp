#include <iostream>
using namespace std;

int arithmetics()
{
   int num1 = 10;
   int num2 = 9;
   double num3 = 10.5;
   double num4 = 9.5;

   // Plus Operator
   cout << "Sum Of:  num1 + num2 = " << num1 + num2 << endl;
   cout << "Size Of:  num1 + num2 = " << sizeof(num1 + num2) << endl; // 4 Bytes - int + int

   cout << "Sum Of:  num3 + num4 = " << num3 + num4 << endl;
   cout << "Size Of:  num3 + num4 = " << sizeof(num3 + num4) << endl; // 8 Bytes - double + double

   cout << "Sum Of:  num3 + num4 = " << int(num3) + int(num4) << endl;
   cout << "Size Of:  num3 + num4 = " << sizeof(int(num3) + int(num4)) << endl; // 4 Bytes - int + int

   cout << "============================ \n";
   // Minus Operator
   cout << "Subtract Of:  num1 - -num2 = " << num1 - -num2 << endl;
   cout << "Size Of:  num1 - num2 = " << sizeof(num1 - num2) << endl; // 4 Bytes - int - int

   cout << "Subtract Of:  num3 - num4 = " << num3 - num4 << endl;
   cout << "Size Of:  num3 - num4 = " << sizeof(num3 - num4) << endl; // 8 Bytes - double - double

   cout << "============================ \n";
   // Multiplication Operator
   cout << "Multiply Of:  num1 * num2 = " << num1 * num2 << endl;
   cout << "Size Of:  num1 * num2 = " << sizeof(num1 * num2) << endl; // 4 Bytes - int * int

   cout << "============================ \n";
   // Divition Operator
   cout << "Divide Of:  num1 / num2 = " << num1 / num2 << endl;       // 1
   cout << "Size Of:  num1 / num2 = " << sizeof(num1 / num2) << endl; // 4 Bytes - int / int

   cout << "Divide Of:  num1 / num2 = " << double(num1) / double(num2) << endl;       // 1.1111
   cout << "Size Of:  num1 / num2 = " << sizeof(double(num1) / double(num2)) << endl; // 8 Bytes - double / double

   cout << "============================ \n";
   // Modules Operator
   cout << "Modules Of:  20 % 5 = " << 20 % 5 << endl;
   cout << "Size Of:  20 % 5 = " << sizeof(20 % 5) << endl; // 4 Bytes - int * int

   cout << "Modules Of:  24 % 5 = " << 24 % 5 << endl;
   cout << "Size Of:  24 % 5 = " << sizeof(24 % 5) << endl; // 4 Bytes - int * int

   return 0;
}

int assignment()
{
   int num1 = 10;
   int num2 = 15;

   num1 += 2;
   cout << "num1 - 2 = " << num1 << endl;

   num2 -= 2;
   cout << "num2 - 2 = " << num2 << endl;

   num1 *= 2;
   cout << "num1 * 2 = " << num1 << endl;

   num2 /= 2;
   cout << "num2 / 2 = " << num2 << endl;

   num1 %= 2;
   cout << "num1 % 2 = " << num1 << endl;

   return 0;
}

int incDec()
{
   int likes = 0;
   cout << "Post Increament: " << likes++ << endl;
   cout << "Post Decreament: " << likes << endl;

   int views = 0;
   cout << "Pre Decreament: " << --views << endl;
   cout << "Pre Decreament: " << views << endl;

   return 0;
}

int precedence()
{
   cout << 10 + 5 * 2 << endl; // 5 * 2 = 10 --> 10 + 10 = 10

   cout << 10 - 5 * 2 << endl; // 5 * 2 = 10 --> 10 - 10 = 0

   cout << 20 / 5 * 4 << endl; // 20 / 5 = 4 --> 4 * 4 = 16

   cout << 10 + 20 / 5 * 4 << endl; // 20 / 5 = 4 --> 4 * 4 = 16 --> 10 + 16 = 26

   cout << (10 + 5) * 2 << endl; // 10 + 5 = 15 --> 15 * 2 = 30

   return 0;
}

int logical()
{
   int grade = 80;
   int level = 3;

   cout << (grade >= 60 && level >= 2) << endl; // 1 | true
   cout << (grade >= 60 && level >= 4) << endl; // 0 | false

   cout << (grade >= 60 || level >= 4) << endl; // 1 | true
   cout << (grade >= 85 || level >= 4) << endl; // 0 | false

   cout << (grade == 80 && level == 3) << endl; // 1 | true
   cout << (grade != 60 && level != 3) << endl; // 0 | false

   cout << (grade == 80) << endl;  // 1 | true
   cout << !(grade == 80) << endl; // 0 | false

   return 0;
}

int main()
{
   cout << "============================ \n";

   // arithmetics();

   // assignment();

   // incDec();

   // precedence();

   // logical();

   cout << "============================ \n";

   return 0;
}