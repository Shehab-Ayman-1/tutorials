#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void) {
    int numbers[] = {4, 6, 8, 2, 7, 5, 0};
    string names[] = {"shehab", "ayman", "hesham", "aya", "salma", "farha", "mahmoud"};

    for (int i = 0; i < 7; i++) {
        if (numbers[i] == 8) {
            printf("found number in: %i steps \n", i + 1);
        }
        if (strcmp(names[i], "farha") == 0) {
            printf("found name in: %i steps \n", i + 1);
            return 0;
        }
    }
    printf("This item Is Not Found. \n");
    return 1;
}