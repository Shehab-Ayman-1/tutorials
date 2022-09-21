#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    typedef char* str; // Create An Alias From Char* To st
    char* st = "Hi!";
    int nums[] = {4, 7, 6, 9};
    str myString = "shehab";
    printf("%s \n", myString); // shehab
    printf("%s \n", st); // Hi!, Get The Pointer String Value
    printf("%p \n", st); // The First Character Pointer In The Memory
    printf("%p \n", &st[0]); // The First Character Pointer In The Memory
    printf("%i \n", *nums); // Get The Value Of The First Number [ Pointer ] In The Array
    printf("%i \n", *(nums + 2)); // Get The Value Of The Third Number [ Pointer ] In The Array
}