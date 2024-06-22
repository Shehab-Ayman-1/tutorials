#include <iostream>
#include <vector>
using namespace std;

/* Sorting
   Bubble Sort
   - Compare Between The Current Element And The Next Element, Then Swap Them If Needed.
   - Big O = [n^2] And Big Omiga = [n].
   - It Is The Slowest Algorithm.

   Selection Sort
   - Move As A Linear Motion, And Then Compare Between The Current Element And All The Forward Elements.
   - Big O = [n^2], And Big Omiga = [n^2].
   - It Is Relatively Fast.

   Merge Sort
   - Seperate The Array Until Each Element Is Alone, Then Start To Connect The Seperated Elements Together..
   - Big O = [n log|n|], And Big Omiga = [n log|n|].
   - It Is Fastest Algorithm.
*/

void selectionSort(vector<int> arr)
{
   // [1] Loop On The Data Array
   for (int i = 0; i < arr.size(); i++)
   {
      int smallest = arr[i];
      int smallestIndex = i;
      // [2] Loop Other Time To Find The Smallest Number
      for (int j = i; j < arr.size(); j++)
      {
         if (smallest > arr[j])
         {
            smallest = arr[j];
            smallestIndex = j;
         }
      }
      // [3] Swap The Smallest Element With Current Element
      int temp = arr[i];
      arr[i] = smallest;
      arr[smallestIndex] = temp;
   }

   cout << "Index 0 = " << arr[0] << endl;
   cout << "Index 1 = " << arr[1] << endl;
   cout << "Index 2 = " << arr[2] << endl;
   cout << "Index 3 = " << arr[3] << endl;
   cout << "Index 4 = " << arr[4] << endl;
   cout << "Index 5 = " << arr[5] << endl;
   cout << "Index 6 = " << arr[6] << endl;
   cout << "Index 7 = " << arr[7] << endl;
   cout << "Index 8 = " << arr[8] << endl;
   cout << "Index 9 = " << arr[9] << endl;
}

void bubbleSort(vector<int> arr)
{
   for (int i = 0; i < arr.size(); i++)
   {
      for (int j = 0; j < arr.size(); j++)
      {
         if (arr[j] > arr[j + 1])
         {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }
      }
   }
   cout << "Index 0 = " << arr[0] << endl;
   cout << "Index 1 = " << arr[1] << endl;
   cout << "Index 2 = " << arr[2] << endl;
   cout << "Index 3 = " << arr[3] << endl;
   cout << "Index 4 = " << arr[4] << endl;
   cout << "Index 5 = " << arr[5] << endl;
   cout << "Index 6 = " << arr[6] << endl;
   cout << "Index 7 = " << arr[7] << endl;
   cout << "Index 8 = " << arr[8] << endl;
   cout << "Index 9 = " << arr[9] << endl;
}

int main()
{
   vector<int> list = {30, 10, 20, 50, 40, 70, 60, 90, 80, 100};
   // vector<int> list = {30, 20, 10};

   cout << "============== Selection Sort ==============" << endl;
   // selectionSort(list);

   cout << "==============  Bubble  Sort  ==============" << endl;
   // bubbleSort(list);

   return 0;
}