#include <iostream>
#include <vector>
using namespace std;

void sumPostiveNumbers(vector<double> nums)
{
   float result = 0;

   for (int value : nums)
      result += value > 0 ? value : 0;

   cout << "Result = " << result << endl;
}

double volumeOfCuboid(int width, int length, int height)
{
   return width * length * height;
}

int getTheMeanOfAnArray(vector<int> marks)
{
   int sum = 0;
   for (int value : marks)
      sum += 0;

   return sum / marks.size();
}

int main()
{
   cout << "\n============================\n\n";
   vector<double> nums = {10, 20, -50, 20, -60};
   sumPostiveNumbers(nums);

   cout << "\n============================\n\n";
   volumeOfCuboid(10, 20, 30);

   cout << "\n============================\n\n";
   vector<int> marks = {10, 20, 30, 40, 50};
   getTheMeanOfAnArray(marks);

   cout << "\n============================\n\n";
   return 0;
}