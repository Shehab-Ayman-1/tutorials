#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/* vertor
   - Its Similar To Arrays
   - We Must Use The Vector Class Methods

   Containers
   - Array
   - Vector
   - List

   What Is Iterators
   - Iterators Used To Point The Memory Address Of The Container

   Why We Use Iterators
   - Simplify The Code => No Need To See The Full Iteration On Containers
   - Support For Many Algorithms Like Sorting And Finding
   - Allow The Dealing With One Element Without The Need To Load The Full List
   - Work The Same Way With All Containers
   - It Reduce The Complexity And Execution Time Of The Application

   Syntax
   - Container<Type>::iterator IteratorName;

   Initialize
   - With Vector Syntax
   - With Auto Keyword

   Print
   - [*] Dereference => Dont Print The Iterator, Print What Its Point To

   Notes
   - This Is Not Pointer, We Will Talk About Pointer Later

*/

void print(vector<int> nums, int label = 1)
{
   if (!nums.size())
   {
      cout << "Sorry, Can't Print Empty Vector!!! " << endl;
      return;
   }
   for (int i = 0; i < nums.size(); i++)
      cout << "Num " << label << " = " << nums.at(i) << endl;
   cout << "====================" << endl;
}

void structure(vector<int> nums1, vector<int> nums2, vector<int> nums3)
{
   print(nums1, 1);

   print(nums2, 2);

   print(nums3, 3);

   // Push New Element
   // nums1[6] = 6; // Error
   nums2.push_back(11);
   nums2.at(0) = 600;

   print(nums2, 2);
}

void sum(vector<int> nums)
{
   int result = 0;
   for (int i = 0; i < nums.size(); i++)
      result += nums.at(i);
   cout << "List Sum = " << result << endl;
}

void vectorCRUD(vector<int> nums)
{
   // Read
   cout << "nums.at(2) =" << nums.at(2) << endl;
   ; // 3

   // Create
   nums.push_back(6);
   print(nums, 1); // {1, 2, 3, 4, 5, 6}

   // Update
   nums.at(1) = 200;
   print(nums, 2); // {1, 200, 3, 4, 5, 6}

   // Delete
   nums.pop_back();
   print(nums, 3); // {1, 200, 3, 4, 5}
}

void vectorMethods(vector<int> nums)
{
   cout << "Front() = " << nums.front() << endl;

   cout << "Back() = " << nums.back() << endl;

   cout << "Empty() = " << nums.empty() << endl;

   nums.clear();

   print(nums);
}

void iterators(vector<int> nums)
{
   vector<int>::iterator firstIterator = nums.begin();  // Method 1
   vector<int>::iterator lastIterator = nums.end() - 1; // Method 2
   auto thirdIterator = nums.begin() + 2;               // Method 3

   cout << "========= Read ============" << endl;

   cout << "First Iterator = " << *firstIterator << endl; // 1
   cout << "Last Iterator = " << *lastIterator << endl;   // 5
   cout << "Third Iterator = " << *thirdIterator << endl; // 3

   cout << "========= Access ============" << endl;

   cout << "Next Iterator = " << firstIterator[1] << endl;          // 2
   cout << "Before End Iterator = " << lastIterator[-1] << endl;    // 4
   cout << "Before End Iterator = " << *(lastIterator - 1) << endl; // 4

   cout << "========= Advance ============" << endl;

   advance(firstIterator, 2);                                 // Move +-2 Step
   cout << "New First Iterator = " << *firstIterator << endl; // 3

   cout << "========= Usage ============" << endl;

   // nums.erase(0, 3); // Problem
   nums.erase(firstIterator, thirdIterator);           // Similar To Slice()
   cout << "Front Element = " << nums.front() << endl; // 3
}

void iteratorLoopAndRangedLoop(vector<int> nums)
{
   vector<int>::iterator it;

   // Iterator Loop
   for (it = nums.begin(); it < nums.end(); it++)
   {
      cout << "Iterator Loop " << *it << endl;
   }

   cout << "\n============================\n\n";

   // Ranged Loop
   for (int value : nums)
   {
      cout << "Ranged Loop " << value << endl;
   }
}

void iteratorMethods(vector<int> nums)
{
   int countRange = count(nums.begin(), nums.end(), 20);
   cout << "Count Of [20] = " << countRange << endl;

   cout << "\n============= Before Sort ===============\n\n";
   print(nums, 1);
   sort(nums.begin(), nums.end());

   cout << "\n============= After Sort ===============\n\n";
   print(nums, 2);
   sort(nums.begin(), nums.end());

   cout << "\n============= Reverse ===============\n\n";
   reverse(nums.begin(), nums.end());
   print(nums, 3);
}

int main()
{
   vector<int> nums1 = {1, 2, 3, 4, 5};
   vector<int> nums2{6, 7, 8, 9, 10};
   vector<int> nums3(5, 50);
   vector<int> randomNumers = {10, 20, -50, 20, -20, 30, 80, 20, 100, 20};

   cout << "============================\n";

   // structure(nums1, nums2, nums3);

   // sum(nums1);

   // vectorCRUD(nums1);

   // vectorMethods(nums1);

   // iterators(nums1);

   // iteratorLoopAndRangedLoop(nums1);

   // iteratorMethods(randomNumers);

   cout << "============================\n";

   return 0;
}
