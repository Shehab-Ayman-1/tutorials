#include <stdio.h>
#include <cs50.h>

int main(void) {
    int x = 0;
    while (x < 3) {
        printf("While Meow \n");
        x++;
    }

    for (int i = 0; i < 3; i++) {
        printf("For Meow \n");
    }
}