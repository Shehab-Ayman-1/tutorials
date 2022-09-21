#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    char c = 'a';
    int n = 10;
    int* p = &n;
    printf("%p %p \n", p, &c); // Pointer
    printf("%i \n", *p); // Value
    printf("%i \n", *&n); // Pointer Value
}