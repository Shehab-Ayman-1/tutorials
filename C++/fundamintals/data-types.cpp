#include <iostream>
using namespace std;

/* Memory Usage
   - String = 32 Bytes
   - Boolean = 1 Byte
   - Intger = 2 OR 4 Bytes
   - Float = 4 Bytes
   - Double = 8 Bytes

   Modefiers
   - Signed [int, char]: Store Postive, Negative, OR Zero -> Default Int
   - Unsigned [int, char]: Store Postive, OR Zero -> Default Int
 */

int memorySize()
{
   string name = "shehab";

   short age = 24;           // 2 Bytes
   int subscribes = 3000;    // 4 Bytes
   long long views = 500000; // 8 Bytes

   float grade = 3.62;               // 4 Bytes
   double bigFraction = 3.123456789; // 8 Bytes

   bool accepted = true;                          // 1 Bytes
   auto university = "Alexandria Of Engineering"; // 8 Bytes - Automatically Generate The Data type

   cout << "Size Of String: " << sizeof(name) << endl;
   cout << "Size Of Number: " << sizeof(age) << endl;
   cout << "Size Of Number: " << sizeof(views) << endl;
   cout << "Size Of Number: " << sizeof(subscribes) << endl;
   cout << "Size Of Boolean: " << sizeof(accepted) << endl;
   cout << "Size Of Float: " << sizeof(grade) << endl;
   cout << "Size Of Auto: " << sizeof(university) << endl;

   return 0;
}

int calculateMemorySize()
{
   int kiloBytes;
   cout << "Enter The Number Of Kilobytes: ";
   cin >> kiloBytes;

   int bytes = kiloBytes * 1024;
   int bits = bytes * 8;

   cout << "Number Of Kilobytes: " << kiloBytes << endl;
   cout << "Number Of Bytes: " << bytes << endl;
   cout << "Number Of Bits: " << bits << endl;
   return 0;
}

int integer()
{
   int num1 = 100;
   int num2 = 0;
   int num3 = -100;
   int num4 = true;
   int num5 = false;

   short int maxShortInteger = SHRT_MAX; // Max Value -> 32767
   short minShortInteger = SHRT_MIN;     // Max Value -> -32767

   long int maxInteger = INT_MAX; // Max Value -> 2147483647
   long minInteger = INT_MIN;     // Max Value -> -2147483647

   long long int maxLongInteger = LLONG_MAX; // Max Value -> 9223372036854775807
   long long minLongInteger = LLONG_MIN;     // Max Value -> -9223372036854775807

   cout << "Num1: " << num1 << endl;
   cout << "Num2: " << num2 << endl;
   cout << "Num3: " << num3 << endl;
   cout << "Num4: " << num4 << endl;
   cout << "Num5: " << num5 << endl;
   cout << "max Short Integer: " << maxShortInteger << endl;
   cout << "min Short Integer: " << minShortInteger << endl;
   cout << "max Integer: " << maxInteger << endl;
   cout << "min Integer: " << minInteger << endl;
   cout << "max Long Integer: " << maxLongInteger << endl;
   cout << "min Long Integer: " << minLongInteger << endl;

   return 0;
}

int floatDouble()
{
   float num1 = 100.123456789; // Write The Number As A Double Number, Then Convert It To Float
   double num2 = -100.123456789;
   float sum1 = 10.5 + 9.5;   // Double + Double
   float sum2 = 10.5f + 9.5;  // float + Double
   float sum3 = 10.5f + 9.5f; // float + float // We Make The Calculation On Float Numbers To Make It Faster

   cout << "Num1: " << num1 << endl;
   cout << "Num2: " << num2 << endl;
   cout << "Sum1: " << sum1 << endl;
   cout << "Sum2: " << sum2 << endl;
   cout << "Sum3: " << sum3 << endl;

   return 0;
}

int charASCII()
{
   char char1 = 'A'; // Character - Write Between Single Quotation Marks
   auto char2 = "B"; // String - Write Between Double Quotation Marks

   cout << sizeof(char1) << endl;
   cout << sizeof(char2) << endl;
   cout << int('%') << endl; // 37       - ASCII Code
   cout << int('a') << endl; // 97        - ASCII Code
   cout << int('g') << endl; // 12592  - ASCII Code
   cout << int('A') << endl; // 65        - ASCII Code

   cout << char(65) << endl; // A - Character

   return 0;
}

int convertToASCII()
{
   char character;

   cout << "Please Enter The Character:" << endl;
   cin >> character;

   int ascii = int(character);
   cout << ascii << endl;

   return 0;
}

int convertToCharacter()
{
   int ascii;

   cout << "Please Enter The ASCII Code:" << endl;
   cin >> ascii;

   char character = char(ascii);
   cout << character << endl;

   return 0;
}

int boolean()
{
   bool num1 = 100;
   bool num2 = 0;
   bool num3 = -100;

   cout << "Num1: " << num1 << endl;
   cout << "Num2: " << num2 << endl;
   cout << "Num3: " << num3 << endl;
   return 0;
}

int modefiersTypeAlias()
{
   signed int num1 = -100;   // -100
   unsigned int num2 = -100; // Error

   cout << "Num 1: " << num1 << endl;
   cout << "Num 2: " << num2 << endl;

   // Alias Method [1]
   using sInt = signed int;
   using unInt = unsigned int;

   sInt signedInt = -10;    // -10
   unInt unsignedInt = -10; // Error

   // Alias Method [2]
   typedef long long int llInt;
   typedef short int shInt;

   llInt bigInt = 1000;
   shInt shortInt = 10;

   cout << "Using:  " << signedInt << endl;
   cout << "typedef:  " << bigInt << endl;

   return 0;
}

int typeConverstion()
{
   int num1 = 10;
   double num2 = 20.5;

   cout << "Sum Of Num1 + Num2:  " << num1 + num2 << endl;          // 30.5
   cout << "Size Of Num1 + Num2:  " << sizeof(num1 + num2) << endl; // 8 - Double

   cout << "============= \n";

   cout << "Sum Of Num1 + Num2:  " << num1 + int(num2) << endl;          // 30
   cout << "Size Of Num1 + Num2:  " << sizeof(num1 + int(num2)) << endl; // 4 - Integer

   return 0;
}

int main()
{
   cout << "============================ \n";

   // memorySize();

   // calculateMemorySize();

   // integer();

   // floatDouble();

   // charASCII();

   // convertToASCII();

   // convertToCharacter();

   // boolean();

   // modefiersTypeAlias();

   // typeConverstion();

   cout << "============================ \n";

   return 0;
}