#include <iostream>
#include <vector>
using namespace std;

void twiceAsOld(int dad, int son)
{
   int twice = dad - (son * 2);
   cout << "Dad - (son * 2) = " << (twice < 0 ? -twice : twice) << endl;
}

void convertStringToArray(string word)
{
   vector<string> splitedWord;
   string temp = "";

   for (int i = 0; i < word.length(); i++)
   {
      if (isspace(word[i]))
      {
         splitedWord.push_back(temp);
         temp = "";
      }
      else
         temp += word[i];
   }
   splitedWord.push_back(temp);

   cout << splitedWord.at(0) << endl;
   cout << splitedWord.at(1) << endl;
   cout << splitedWord.at(2) << endl;
}

void howGoodAreYouReally(vector<int> classScores, int yourScore)
{
   float avg = 0;

   for (int score : classScores)
      avg += score;

   cout << "Avrage Score = " << (avg / classScores.size() < yourScore ? "True" : "False") << endl;
}

int main()
{
   // cout << "\n============================\n\n";
   // twiceAsOld(49, 24);

   cout << "\n============================\n\n";
   convertStringToArray("Shehab Hesham Aya");

   cout << "\n============================\n\n";
   vector<int> classScores = {100, 40, 34, 57, 29, 72, 57, 88};
   howGoodAreYouReally(classScores, 75);

   return 0;
}