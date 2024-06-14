#include <iostream>
#include <regex>
using namespace std;

void fakeBinary(string str)
{
   string fakerBinary = "";

   for (char letter : str)
      fakerBinary += letter >= '5' ? '1' : '0';

   cout << "FakerBinary = " << fakerBinary << endl;
}

void theFallingSpeedOfPetals(int velocity)
{
   if (velocity <= 0)
      cout << "Time = " << 0 << endl;

   cout << "Time = " << (5 * 80) / velocity << " Sec" << endl;
}

void replaceVowelsToExclamationMark(const string &str)
{
   regex pattern("[aeiouAEIOU]");
   cout << "Result = " << regex_replace(str, pattern, "!") << endl;

}

int main()
{
   cout << "\n============================\n\n";
   // fakeBinary("135792468");

   cout << "\n============================\n\n";
   // theFallingSpeedOfPetals(5);

   cout << "\n============================\n\n";
   replaceVowelsToExclamationMark("ABCDEELLE");
   return 0;
}