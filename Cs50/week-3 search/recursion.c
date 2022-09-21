#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void) {
    void recursion(int count, string txt);
    void pyramid1(int count);
    void pyramid2(int count);

    int count = get_int("Count: ");
    recursion(count, "Hello World");
    pyramid1(count);
    pyramid2(count);
}

void recursion(int count, string txt) {
    if (count == 0) {
        return;
    }

    printf("%s | %i \n", txt, count);
    recursion(count - 1, txt);
}

void pyramid1(int count) {
    if (count == 0) {
        return;
    }

    pyramid1(count - 1);

    for (int i = 0; i < count; i++) {
        printf("%c", '#');
    }
    printf("\n");
}

void pyramid2(int count) {
    if (count == 0) {
        return;
    }

    for (int i = 0; i < count; i++) {
        printf("%c", '#');
    }

    printf("\n");
    pyramid2(count - 1);
}
