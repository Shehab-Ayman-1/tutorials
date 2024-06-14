#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

void pythagorionTriple(int a, int b, int c)
{
   int maxValue = max(a, max(b, c));
   cout << "Is Available = " << (c == maxValue ? "True" : "false") << endl;
}

void nThPower(vector<int> arr, int n)
{
   if (n == arr.size())
   {
      cout << "Output = -1" << endl;
      return;
   }

   cout << "Output = " << pow(arr.at(n), n) << endl;
}

int main()
{
   cout << "\n============================\n\n";
   pythagorionTriple(3, 4, 5);

   cout << "\n============================\n\n";
   vector<int> nums = {1, 2, 3};
   nThPower(nums, 2);

   return 0;
}