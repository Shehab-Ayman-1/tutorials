#include <iostream>
using namespace std;

int forLoop()
{
   int nums[] = {100, 200, 300, 400, 500, 600};
   int size = sizeof(nums) / sizeof(nums[0]); // 5

   cout << "============= Method 1 =============== \n";
   for (int i = 0; i <= 4; i++)
      cout << "Number: " << nums[i] << endl; // 100, 200, 300, 400, 500

   cout << "============= Method 2 =============== \n";
   for (int i = 0; i <= size - 1; i++)
   {
      cout << "Number " << nums[i] << endl; // 100, 300, 500
      i++;
   }

   cout << "============= Method 3 =============== \n";
   for (int i = size - 1; i > 1; i--)
      cout << "Number " << nums[i] << endl; // 600, 500, 400, 300

   cout << "============= Method 4 =============== \n";
   int i = 0;
   for (;;)
   {
      cout << "Number " << nums[i] << endl; // 100, 200, 300, 400, 500, 600
      i++;
      if (i == size)
         break;
   }

   cout << "============= Method 5 =============== \n";
   for (int i = 0; i <= size - 1; i++)
   {
      if (nums[i] == 200)
         continue;
      if (nums[i] == 500)
         break;
      cout << "Number " << nums[i] << endl;
   }

   cout << "============= Method 6 =============== \n";
   for (int value : nums)
   {
      cout << "Ranged Loop " << value << endl;
   }

   return 0;
}

int nestedFor()
{
   string categories[] = {"Laptop", "Computer", "IPad"};
   string products[] = {"Keyboard", "Mouse", "Touchpad"};
   int categoriesLength = sizeof(categories) / sizeof(categories[0]);
   int productsLength = sizeof(products) / sizeof(products[0]);

   for (int i = 0; i < categoriesLength; i++)
   {
      cout << categories[i] << endl;
      for (int j = 0; j < productsLength; j++)
         cout << "-- " << products[j] << endl;
   }

   return 0;
}

int whileLoop()
{
   int i = 0;

   while (i < 5)
   {
      cout << "Turn Number = " << i << endl;
      i++;
      if (i == 3)
         break;
   }

   do
   {
      cout << "Do Something Before While Loop." << endl;
   } while (i < 0);
   {
      cout << "Turn After Do = " << i << endl;
   }

   return 0;
}

int countEvenAndPostiveNumbersApp()
{
   int nums[] = {10, 20, -20, 13, 30, -30, 40};
   int size = sizeof(nums) / sizeof(nums[0]);
   int value = 0;

   for (int i = 0; i < size; i++)
   {
      if (nums[i] < 0 || nums[i] % 2)
         continue;
      value += nums[i];
   }

   cout << "value = " << value << endl;

   return 0;
}

int guessNumberApp()
{
   int guessNumber = 7;
   int failurs = 0;
   int tries = 3;
   int input;

   cout << "Guess The Hidden Number From [0 - 10] " << endl;
   cin >> input;

   for (int i = tries; i > 0; i--)
   {
      if (input == guessNumber)
      {
         cout << "Congratz! You Win After " << tries - failurs << " Tries." << endl;
         break;
      }

      failurs++;

      if (tries == failurs)
      {
         cout << "Sorry, You Got The Maximum Tries, Try Again Later." << endl;
      }
      else
      {
         cout << "Wrong Guess, Try Again " << endl;
         cin >> input;
      }
   }

   return 0;
}

int reverseArrApp()
{
   int nums[5];
   int range = size(nums);

   cout << "Enter The 5 Numbers To Reverse Them:  " << endl;
   for (int i = range; i > 0; i--)
      cin >> nums[i - 1];

   for (int i = 0; i < range; i++)
      cout << "Number = " << nums[i] << endl;

   return 0;
}

int main()
{
   cout << "============================ \n";

   // forLoop();

   // nestedFor();

   // whileLoop();

   // countEvenAndPostiveNumbersApp();

   // guessNumberApp();

   // reverseArrApp();

   cout << "============================ \n";

   return 0;
}