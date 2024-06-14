#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void sortAndStar(vector<string> str)
{
   string result = *min_element(str.begin(), str.end());

   for (int i = 1; i < result.size(); i += 4)
      result.insert(i, "***");

   cout << "Result = " << result << endl;
}

int main()
{
   cout << "\n============================\n\n";
   vector<string> str = {"bitcoin", "take", "over", "the", "world", "maybe"};
   sortAndStar(str);

   return 0;
}






