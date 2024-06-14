#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

void printVector(vector<int> nums)
{
   cout << "[ ";

   for (int i = 0; i < nums.size(); i++)
      cout << nums[i] << (i == nums.size() - 1 ? "" : ", ");

   cout << " ]";
}

void powerOf2(int n)
{
   vector<int> exponentials;

   for (int i = 0; i <= n; i++)
      exponentials.push_back(pow(2, i));

   printVector(exponentials);
}

void summation(int n) {
   int result = 0;

   for (int i = 1; i <= n; i++)
      result += i;
   
   cout << "Result = " << result << endl;
}

void trafficLights(string light) {
   if (light == "green") cout << "Green => Yellow " << endl;
   else if (light == "yellow") cout << "Yellow => Red " << endl;
   else if (light == "red") cout << "Red => Green " << endl;
   else cout << "Invalid Light Color !!! " << endl;
}

int main()
{
   cout << "\n============================\n\n";
   powerOf2(4);

   cout << "\n============================\n\n";
   summation(8);

   cout << "\n============================\n\n";
   trafficLights("s");
   return 0;
}