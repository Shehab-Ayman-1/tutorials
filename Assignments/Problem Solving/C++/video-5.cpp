#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

void convertArrayToReversedArray(int num)
{
   vector<int> result;
   string str = to_string(num);

   for (int i = str.length() - 1; i >= 0; i--)
      result.push_back(str[i] - '0');

   for (int i = 0; i < str.length(); i++)
      cout << "Result [ " << i << " ]" << " = " << result.at(i) << endl;
}

void isPalindrome(string word)
{
   string reversedWord = "";

   for (int i = word.length() - 1; i >= 0; i--)
      reversedWord += word[i];

   cout << "Is Polindrome = " << (reversedWord == word ? "True" : "False") << endl;
}

void reversedWord(string word)
{
   string reversed = "";
   string temp = "";

   for (int i = 0; i < word.length(); i++)
   {
      if (isspace(word[i]))
      {
         reversed = temp + " " + reversed;
         temp = "";
      }
      else
         temp += word[i];
   }

   reversed = temp + " " + reversed; // Append The Last Word

   cout << "Reversed Word = " << reversed << endl;
}

int main()
{
   cout << "\n============================\n\n";

   // convertArrayToReversedArray(35231);

   cout << "\n============================\n\n";

   // isPalindrome("racecar");

   cout << "\n============================\n\n";

   reversedWord("The Greatest Victory Is That Which Required no Battle");

   return 0;
}