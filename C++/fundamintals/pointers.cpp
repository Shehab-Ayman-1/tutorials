#include <iostream>
using namespace std;

/* Pointers.
   What Are Pointers ?
   - A Variable That Store Memory Address Of Other Variable

   Why We Need Pointers ?
   - To Iterate On Elements In Data Structures Like Array
   - Pass Function To Other Function
   - Dynamic Memory Allocation

   Benefits Of Using Pointers
   - Reduce The Code and Increase Performance

   Note
   - There's Raw Pointer And Smart Pointer

   Syntax
   - Declare A Pointer
   - Print Variable Memory Address => Reference Operator || Address Of [&]
   - Print Value That Memory Address Point To => Dereference Operator [*]
   - Change Variable Value With Pointer
 */

void structure()
{
   int num = 10;
   int *ptr = &num;

   cout << "Number Value = " << num << endl;
   cout << "Pointer OR Value Address = " << &num << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;

   cout << "\n============================\n\n";
   *ptr = 20; // Just Update The Address Value, But Address Not Changed

   cout << "Number Value = " << num << endl;
   cout << "Pointer OR Value Address = " << &num << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;
}

void pointerWithArray()
{
   int nums[] = {10, 20, 30, 40, 50};
   int *ptr = &nums[0];

   cout << "\n============= First Element ===============\n\n";
   cout << "First Value = " << nums[0] << endl;
   cout << "Pointer OR Value Address = " << nums << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *nums << endl;

   cout << "\n============= Second Element ===============\n\n";
   cout << "Number Value = " << nums[0] << endl;
   cout << "Pointer OR Value Address = " << &nums[0] << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;

   cout << "\n============= Third Element ===============\n\n";
   cout << "Number Value = " << nums[1] << endl;
   cout << "Pointer OR Value Address = " << &nums[1] << endl;
   cout << "Pointer OR Value Address = " << ptr + 1 << endl;
   cout << "Pointer Value = " << *(ptr + 1) << endl;

   cout << "\n============= Fourth Element ===============\n\n";
   cout << "Number Value = " << nums[1] << endl;
   cout << "Pointer OR Value Address = " << &nums[1] << endl;
   cout << "Pointer OR Value Address = " << ptr + 1 << endl;
   cout << "Pointer Value = " << *(ptr + 1) << endl;
}

void arithmetic()
{
   int nums[] = {10, 20, 30, 40, 50};
   int *ptr = nums;

   cout << "\n============== First Element ==============\n\n";
   cout << "Number Value = " << *nums << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;

   cout << "\n============== Second Element ==============\n\n";
   ptr++;
   cout << "Number Value = " << *nums << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;

   cout << "\n============== Fourth Element ==============\n\n";
   ptr += 2;
   cout << "Number Value = " << *nums << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;

   cout << "\n============== Third Element ==============\n\n";
   ptr--;
   cout << "Number Value = " << *nums << endl;
   cout << "Pointer OR Value Address = " << ptr << endl;
   cout << "Pointer Value = " << *ptr << endl;
}

int main()
{

   // structure();

   // pointerWithArray();

   // arithmetic();

   cout << "============================\n";

   return 0;
}