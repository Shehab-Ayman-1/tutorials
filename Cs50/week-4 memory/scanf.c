#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    // String
    char st[5];
    printf("Enter Your String: \n");
    scanf("%s", st);
    printf("My String Is: %s \n", st);

    // Other Types
    int x;
    printf("Enter Your Number: \n");
    scanf("%i", &x); // Request A Value From The User In The Terminal.
    printf("X: %i \n", x);
}