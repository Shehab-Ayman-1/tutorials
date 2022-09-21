#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    void lowerCase(string text);
    string st = get_string("Before: ");
    printf("After: ");
    lowerCase(st);
    printf(" | ");

    for (int i = 0; i <= strlen(st); i++) {
        printf("%c", tolower(st[i]));
    }
    printf("\n");
}

void lowerCase(string text) {
    char result[strlen(text)];

    for (int i = 0; i < strlen(text); i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            result[i] = text[i] + 32;
        } else {
            result[i] = text[i];
        }
    }
    printf("%s", result);
}