#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    // Example [1]
    int length = get_int("How Many Scores Would You Like To Create: ");
    int scores[length];
    int result = 0;
    for (int i = 0; i < length; i++) {
        scores[i] = get_int("Score %i %s", (i + 1), ": ");
        result += scores[i];
    }
    printf("Average Number Is: %f \n", result / (float) length);

    // Example [2]
    // Ascii Code
    char ascii[3] = {'H', 'I', '!'};
    printf("%i %i %i \n", ascii[0], ascii[1], ascii[2]); // 72, 73, 33
}