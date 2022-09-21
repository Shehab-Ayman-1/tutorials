#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    string text = get_string("Text: ");
    int myLength(string text);
    printf("myLength Is: %i \n", myLength(text));
    printf("strlen Is: %lu \n", strlen(text));
}

int myLength(string st) {
    int i = 0;
    while (st[i] != '\0') {
        i++;
    }
    return i;
}