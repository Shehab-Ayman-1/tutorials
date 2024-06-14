#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void gravityFlip(char dir, vector<int> arr)
{
   sort(arr.begin(), arr.end());

   cout << "Output = ";
   if (dir == 'R')
   {
      for (int num : arr)
         cout << num;
   }
   else
   {
      reverse(arr.begin(), arr.end());
      for (int num : arr)
         cout << num;
   }
}

void collatzConjecture(int num)
{
   // If num = Even -> num / 2
   // If num = Odd -> 3 * num + 1
   int count = 0;

   while (num != 1)
   {
      count++;
      if (num % 2 == 0)
         num /= 2;
      else
         num = (3 * num) + 1;
   }

   cout << "Count = " << count << endl;
}

int main()
{
   // cout << "\n============================\n\n";
   // vector<int> arr = {1, 4, 5, 3, 5};
   // gravityFlip('L', arr);

   cout << "\n============================\n\n";

   collatzConjecture(23);

   return 0;
}