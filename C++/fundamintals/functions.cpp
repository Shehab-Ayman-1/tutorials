#include <iostream>
#include <cmath>
#include <cctype>
#include <algorithm>
using namespace std;

void sayHello(string msg, string name, int age); // Forward Declaration Used To Declare The Function After Its Callback

float calculator(float nums[], char sign = '+', int length = 0)
{
   float result = 0;

   for (int i = 0; i < length; i++)
   {
      if (sign == '+')
         result += nums[i];
      if (sign == '-')
         result -= nums[i];
      if (sign == '*')
         result == 0 ? (result = nums[i]) : (result *= nums[i]);
      if (sign == '/')
         result == 0 ? (result = nums[i]) : (result /= nums[i]);
   }

   if (sign == '+' || sign == '-' || sign == '*' || sign == '/')
      cout << "The Result = " << result << endl;
   else
      cout << "Invalide Operator, Allowed Operators Are [+ | - | * | /]" << endl;

   return result;
}

void mathMethods()
{
   int num1 = 5;
   int num2 = 2;
   float num3 = 5.7;
   int nums[] = {10, 20, 10, 30, 10, 40, 10, 50};

   cout << "Power = " << pow(num1, num2) << endl;
   cout << "Float Modules = " << fmod(num3, num2) << endl;

   cout << "Ceil = " << ceil(num3) << endl;
   cout << "Floor = " << floor(num3) << endl;

   cout << "Round = " << round(num3) << endl;
   cout << "Trunc = " << trunc(num3) << endl; // Remove The Fraction

   cout << "Min = " << min(num1, num2) << endl;
   cout << "Min = " << min('a', 'C') << endl; // Work On The ASCII Values

   cout << "Max = " << max(num1, num2) << endl;
   cout << "Max = " << max('a', 'C') << endl; // Work On The ASCII Values
}

void stringMethod()
{
   string name = "ShehaB AymaN";

   cout << "toLower = " << char(tolower('A')) << endl; // tolower => Return The ASCII Value
   cout << "toUpper = " << char(toupper('a')) << endl; // tolower => Return The ASCII Value

   // Swape Cases App
   string swapped = "";
   for (int i = 0; i < size(name); i++)
   {
      if (isupper(name[i]))
         swapped += char(tolower(name[i]));
      else
         swapped += char(toupper(name[i]));
   }
   cout << "Swapped = " << swapped << endl;

   // Remove Spaces
   string trimed = "";
   for (int i = 0; i < size(name); i++)
   {
      if (!isspace(name[i]))
         trimed += name[i];
   }

   cout << "Trimed Name = " << trimed << endl;
}

int recursion(int num)
{
   if (num == 0)
      return 0;

   cout << "Num = " << num << endl;
   cout << "=======================" << endl;

   return num + recursion(num - 1);
}

void overload(int a, int b)
{
   cout << "Overload 1 = " << a << " | " << b << endl;
}

void overload(int a, int b, int c)
{
   cout << "Overload 2 = " << a << " | " << b << " | " << c << endl;
}

void overload(string a, string b, string c)
{
   cout << "Overload 3 = " << a << " | " << b << " | " << c << endl;
}

int main()
{

   cout << "============================ \n";
   // sayHello("Hi", "Shehab", 24);

   // float nums[] = {10, 20};
   // calculator(nums, '/', size(nums));

   // mathMethods();

   // stringMethod();

   // int recursionResult = recursion(5);
   // cout << "Recursion Result = " << recursionResult << endl;

   // Target The Needed Overload Function With The Number Of The Parameters, And Its Type
   // overload(10, 20);
   // overload(10, 20, 30);
   // overload("Shehab", "Hesham", "Aya");

   cout << "============================ \n";

   return 0;
}

void sayHello(string msg, string name, int age)
{
   cout << msg << " " << name << "." << endl;
   cout << name << "\'s Age Is: " << age << endl;
   cout << "=========== " << endl;
}
