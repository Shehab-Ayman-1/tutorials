#include <stdio.h>
#include <cs50.h>

int main(void) {
    int num1 = 5;
    int num2 = 4;
    printf("%d %d \n", num1, num2);
    printf("%d \n", num1 + num2);
    printf("%d \n", num1 - num2);
    printf("%d \n", num1 * num2);
    printf("%d \n", num1 / num2);
    printf("%d \n", num1 % num2);
    num1 += 1;
    printf("%d \n", ++num1);
}