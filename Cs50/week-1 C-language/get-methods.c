#include <stdio.h>
#include <cs50.h>

int main(void) {
    /* Ask For Name: */
    string answer = get_string("What's Your Name? ");
    printf("Hello, %s\n", answer);
}