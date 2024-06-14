#include <iostream>
using namespace std;

int ifCondition()
{
	int age = 18;
	int score = 1500;
	float rank = 3.f;

	if (age >= 20)
		cout << "Welcome To Out Game, Your [Age] Is OK ! " << endl;
	else if (score >= 500)
	{
		cout << "Welcome To Out Game, Your [Score] Is OK ! " << endl;
		if (score >= 1000)
			cout << "VIP User ! " << endl;
	}
	else if (rank >= 2.5)
		cout << "Welcome To Out Game, Your [Rank] Is OK ! " << endl;
	else
		cout << "Sorry, You Can't Signup To Our Game, Please Try Again Leter. " << endl;

	return 0;
}

int ternaryOperator()
{
	int age = 18;
	int score = 1000;
	int rank = 4;
	string vip = score >= 1000 ? "VIP" : "Score Ok";

	cout << (age > 20 ? "Age Ok "
							: (score >= 500 ? vip
												 : (rank >= 2.5 ? "Welcome To Out Game, Your [Rank] Is OK ! " : "Sorry")))
		  << endl;

	return 0;
}

int switchCondition()
{
	char day = 'M';

	switch (day)
	{
	case 'M':
	case 'T':
		cout << "Open From 12PM to 2PM." << endl;
		break;
	case 'W':
		cout << "Open From 10AM to 2PM." << endl;
		break;
	default:
		cout << "Closed";
		break;
	}

	return 0;
}

int evenOddApp()
{
	int number;
	cout << "Enter A Number: ";

	cin >> number;
	cout << (number % 2 == 0 ? "Even Number" : "Odd Number") << endl;

	return 0;
}

int findGreatestNumberApp()
{
	int num1, num2, num3; // 3, 2, 1
	cout << "Enter The First Number:  ";
	cin >> num1;

	cout << "Enter The Second Number:  ";
	cin >> num2;

	cout << "Enter The Third Number:  ";
	cin >> num3;

	if (num1 > num2 && num1 > num3)
		cout << num1 << " --> Is The Greatest Number." << endl;
	else if (num2 > num3)
		cout << num2 << " --> Is The Greatest Number." << endl;
	else
		cout << num3 << " --> Is The Greatest Number." << endl;

	return 0;
}

int simpleCalculatorApp()
{
	int num1, num2, operation;

	cout << "Enter The First Number:  ";
	cin >> num1;

	cout << "Enter The Second Number:  ";
	cin >> num2;

	cout << "Enter The Operator:  [1: sum | 2: subtract | 3: multiply | 4: divide | 5: modules]";
	cin >> operation;

	if (operation == 1)
		cout << num1 + num2 << endl;
	else if (operation == 2)
		cout << num1 - num2 << endl;
	else if (operation == 3)
		cout << num1 * num2 << endl;
	else if (operation == 4)
		cout << num1 / num2 << endl;
	else if (operation == 5)
		cout << num1 % num2 << endl;
	else
		cout << "Invalid Operation." << endl;

	return 0;
}

int main()
{
	cout << "============================ \n";

	// ifCondition();

	// ternaryOperator();

	// evenOddApp();

	// findGreatestNumberApp();

	// simpleCalculatorApp();

	// switchCondition();

	cout << "============================ \n";

	return 0;
}
