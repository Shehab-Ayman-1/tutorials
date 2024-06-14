#include <string.h>
#include <iostream>
using namespace std;

// Any String Has [/0] At The End Of The String To Break The String Array.

int structure()
{
   // Method [1]
   char str1[] = "Shehab";
   int length1 = sizeof(str1) / sizeof(str1[0]);

   cout << "String: " << str1 << endl;           // [6] Characters + [1] \0
   cout << "String Length: " << length1 << endl; // 7 = 6 [Shehab] + 1 [\0]

   // Method [2]
   char str2[] = {'S', 'h', 'e', 'h', 'a', 'b', '\0'};
   int length2 = sizeof(str2) / sizeof(str2[0]);

   cout << "String: " << str2 << endl;           // [6] Characters + [1] \0
   cout << "String Length: " << length2 << endl; // 7 = 6 [Shehab] + 1 [\0]

   // Method [3]
   string str3 = "Shehab";
   int length3 = sizeof(str3) / sizeof(str3[0]);

   cout << "String: " << str3 << endl;           // [6] Characters + [1] \0
   cout << "String Length: " << length3 << endl; // 7 = 6 [Shehab] + 1 [\0]
   return 0;
}

int concatenation ()
{
   // Method [1]
   char fName[] = "Shehab ";
   char lName[] = "Ayman";
   cout << "My Full Name Is: " << strcat(fName, lName) << endl;

   // Method [2]
   string firstName = "Shehab ";
   string secondName = "Ayman";
   cout << "My Full Name Is: " << firstName + secondName << endl;

   // Method [3]
   cout << "My Full Name Is: " << firstName.append(secondName) << endl;

   return 0;
}

int main()
{
   cout << "============================ \n";

   // structure();

   // concatenation();

   cout << "============================ \n";

   return 0;
}