#include <stdio.h>
#include <cs50.h>

int main(void) {
    int num1 = get_int("num1: ");
    int num2 = get_int("num2: ");
    int result = num1 + num2;
    printf("%d \n", result);

    // Its Easy
    printf("%d \n", get_int("num1: ") + get_int("num2: "));
}