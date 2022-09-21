#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    int x = 1;
    int y = 2;
    int tmp = x;

    void swap(int *one, int *two);
    swap(&x, &y);

    printf("%i %i \n", x, y);
}

void swap(int *one, int *two) {
    int tmp = *one;
    *one = *two;
    *two = tmp;
}