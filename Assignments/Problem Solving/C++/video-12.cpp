#include <iostream>
#include <array>
#include <vector>
#include <numeric>
using namespace std;

void sumArray(vector<int> arr)
{
   int sum = reduce(arr.begin(), arr.end());
   cout << "Sum = " << sum << endl;
}

void totalPoints(array<string, 10> &games)
{
   int points = 0;
   for (string score : games)
   {
      int teamX = score[0];
      int teamY = score[2];
      if (teamX > teamY)
         points += 3;
      if (teamX == teamY)
         points += 1;
   }
   cout << "Points = " << points << endl;
}

int main()
{
   cout << "\n============================\n\n";
   vector<int> nums = {10, 20, 30, 40};
   sumArray(nums);

   cout << "\n============================\n\n";
   array<string, 10> games = {"1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "1:4", "2:3", "2:4", "3:4"};
   totalPoints(games);

   return 0;
}