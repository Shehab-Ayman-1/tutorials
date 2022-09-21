#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    void upperCase(string text);
    string st = get_string("Before: ");
    printf("After: ");
    upperCase(st);
    printf(" | ");

    for (int i = 0; i <= strlen(st); i++) {
        printf("%c", toupper(st[i]));
    }
    printf("\n");
}

void upperCase(string text) {
    char result[strlen(text)];

    for (int i = 0; i < strlen(text); i++) {
        if (text[i] >= 'a' && text[i] <= 'z') {
            result[i] = text[i] - 32;
        } else {
            result[i] = text[i];
        }
    }
    printf("%s", result);
}