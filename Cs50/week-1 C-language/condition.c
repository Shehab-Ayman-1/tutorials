#include <stdio.h>
#include <cs50.h>

int main(void) {
    int x = get_int("num1: ");
    int y = get_int("num2: ");
    if (x > y) {
        printf("x > y \n");
    } else if (x < y) {
        printf("x < y \n");
    } else {
        printf("x = y \n");
    }

    int z = get_int("num: ");
    if (z % 2 == 0) {
        printf("Even Number %d \n", z % 2);
    } else {
        printf("Odd Number %d \n", z % 2);
    }

    char a = get_char("char: ");
    if (a == 'y' || a == 'Y') {
        printf("Accept. \n");
    } else if (a == 'n' || a == 'N') {
        printf("Not Agree. \n");
    }
}