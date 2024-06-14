#include <array>
#include <iostream>
using namespace std;

int cStyleArray()
{
   int views[4] = {100, 200, 300, 400};
   cout << sizeof(int) << endl;   // 4 Bytes
   cout << sizeof(views) << endl; // 16 Bytes

   string students[] = {"Shehab", "Hesham", "Aya"};
   cout << sizeof(string) << endl;   // 32 Bytes
   cout << sizeof(students) << endl; // 96 Bytes

   double grads[]{3.62, 3.54, 3.79};
   cout << sizeof(double) << endl; // 8 Bytes
   cout << sizeof(grads) << endl;  // 24 Bytes

   return 0;
}

int accessElements()
{
   int nums[] = {0, 100, 200, 300, 400, 500, 600};

   // Access
   cout << "The First Element: " << nums[0] << endl;
   cout << "The Last Element: " << nums[6] << endl;

   // Update
   nums[2] = 2000;
   cout << nums << endl;

   return 0;
}

int classArray()
{
   array<int, 4> results = {0, 1, 2, 3};

   cout << "First Element Is: " << results[0] << endl;
   cout << "Last Element Is: " << results[3] << endl;

   return 0;
}

int dimensionalArray()
{
   const int rows = 3;
   const int columns = 3;
   int nums[rows][columns] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

   cout << "nums[1][2] = " << nums[1][2] << endl; // 6
   cout << "nums[2][0] = " << nums[2][0] << endl; // 7
   cout << "nums[2][2] = " << nums[2][2] << endl; // 9

   return 0;
}

int methods()
{
   array<int, 4> views = {100, 200, 300, 400};
   cout << "at() = " << views.at(0) << endl;      // Return The Element By Index
   cout << "front() = " << views.front() << endl; // Return The First Element
   cout << "back() = " << views.back() << endl;   // Return The Last Element
   cout << "data() = " << views.data() << endl;   // Return The Path Of The Array In The Memory
   cout << "size() = " << views.size() << endl;   // Return The Length Of The Array
   cout << "empty() = " << views.empty() << endl; // Check If The Array Is Empty

   return 0;
}

int getLength()
{
   // By Sizeof
   array<int, 4> views = {0, 100, 200, 300};
   int length = sizeof(views) / sizeof(views[0]);
   cout << "Length Of The Array = " << length << endl;

   // By Size Method
   cout << "Size Of The Array = " << views.size() << endl;
   return 0;
}

int guessTheNumber()
{
   int score = 0;
   int failures = 0;
   int answers[3];
   int sequences[3][5] = {{1, 5, 10, 16, 23}, {2, 4, 8, 16, 32}, {1, 1, 2, 3, 5}};

   // Start The Game
   cout << "Type The Missing Number In The Squences:" << endl;

   // Sequence [1]
   cout << "Sequence [1]: 1 | 5 | 10 | 16 | ???" << endl;
   cin >> answers[0];

   if (answers[0] != sequences[0][4])
   {
      failures++;
      cout << "Wrong, Try Again. \nSequence [1]: 1 | 5 | 10 | 16 | ???" << endl;
      cin >> answers[0];
      answers[0] == sequences[0][4] ? score++ : failures++;
   }
   else
      score++;

   // Sequence [2]
   cout << "Sequence [2]: 2 | 4 | 8 | 16 | ???" << endl;
   cin >> answers[1];

   if (answers[1] != sequences[1][4])
   {
      failures++;
      cout << "Wrong, Try Again. \nSequence [2]: 2 | 4 | 8 | 16 | ???" << endl;
      cin >> answers[1];
      answers[1] == sequences[1][4] ? score++ : failures++;
   }
   else
      score++;

   // Sequence [3]
   cout << "Sequence [3]: 1 | 1 | 2 | 3 | ???" << endl;
   cin >> answers[2];

   if (answers[2] != sequences[2][4])
   {
      failures++;
      cout << "Wrong, Try Again. \nSequence [3]: 1 | 1 | 2 | 3 | ???" << endl;
      cin >> answers[2];
      answers[2] == sequences[2][4] ? score++ : failures++;
   }
   else
      score++;

   // Result
   if (score >= 2)
      cout << "Congratz, You Are Atchieved " << score << " From 3" << " With " << score + failures << " Tries." << endl;
   else
      cout << "Sorry, You Are Failed, Try It Leter. " << endl;

   return 0;
}

int main()
{

   cout << "============================ \n";

   // cStyleArray();

   // accessElements();

   // classArray();

   // getLength();

   // methods();

   // dimensionalArray();

   // guessTheNumber();

   cout << "============================ \n";

   return 0;
}