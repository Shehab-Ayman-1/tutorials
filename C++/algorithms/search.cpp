#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/* Search
   Linear Search
   - Search In A Random Data Start From The First Element To The End Element As Linear -> Big O = [n]
   Binary Search
   - Search In A Sorted Data Start From The Middle Of The Array, Then Remove The Wronge Side, And Return
      Search At The Other Side With The Same Way -> Big O = [log|n|]
 */

void linearSearch(vector<int> list, int search)
{
   int tries = 0;
   for (int i = 0; i < list.size(); i++)
   {
      tries++;
      if (list[i] == search)
      {
         cout << search << " Was Found, With " << tries << " Tries." << endl;
         return;
      }
   }
   cout << search << " Was Not Found, With" << tries << " Tries." << endl;
}

void binarySearch(vector<int> list, int search)
{
   int tries = 0;

   sort(list.begin(), list.end());
   while (list.size() > 0)
   // for (int i = 0; i < 2; i++)
   {
      int middle = list.size() / 2;
      int target = list.at(middle);
      tries++;

      cout << "- Search = " << search << ", Middle = " << middle << ", Target = " << target << endl;

      // The Search Number Was Found
      if (target == search)
      {
         cout << search << " Was Found, After " << tries << " Tries." << endl;
         return;
      }
      // We Need To Search In The Second Half Of The Array
      else if (target > search)
         list.erase(list.begin() + middle, list.end());
      // We Need To Search In The First Half Of The Array
      else if (target < search)
         list.erase(list.begin(), list.begin() + middle);
   }

   // If The Search Number Is Not Found
   cout << "This Search Number Is Not Found." << endl;
}

int main()
{
   vector<int> list = {30, 10, 20, 50, 40, 70, 60, 90, 80, 100};

   cout << "============== Linear Search ==============" << endl;
   linearSearch(list, 40);

   cout << "============== Binary Search ==============" << endl;
   binarySearch(list, 100);

   return 0;
}