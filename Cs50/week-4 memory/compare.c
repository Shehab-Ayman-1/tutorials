#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void)
{
    string x = get_string("x = ");
    string y = get_string("y = ");

    if (strcmp(x, y) == 0)
    {
        printf("Same. \n");
    }
    else
    {
        printf("Defferant. \n");
    }
}