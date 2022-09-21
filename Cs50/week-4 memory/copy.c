#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    // Malloc(bypes)
    // -- Reserve Empty Space In The Memory Manually
    // -- If The Memory Has't Enough Bits, Return Null.
    // Free(copy)
    // -- Release The Reserved Spaces In The Memory Manually

    char* st = get_string("txt: ");
    // char* copy = st; // When Using This Line, Update The st & copy Variables, Because These Have The Same Pointer
    char* copy = malloc(strlen(st) + 1); // Now We Have The ( String Length + 1 ) Empty Space In The Memory

    if (copy == NULL) { return 1; } // Quit The Application

    for (int i = 0; i < strlen(st) + 1; i++) { copy[i] = st[i]; } // Copy The Letters Now
    copy[0] = toupper(copy[0]); // Edit The First Letter

    printf("txt: %s \ncopy: %s \n", st, copy);
    free(copy); // Release The Empty Spaces From The Memory
}