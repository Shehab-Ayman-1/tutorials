#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>

/*
    -- If We Need To Append Any Item To The Array, We Need To Create A New Array In The Memory With More Empty Bits,
    -- So That We Can To Use Realloc() To Copy The Old Array And Past It In A New Array With The Empty Bits That I Need.
*/

int main(void) {
    int* list = malloc(3 * sizeof(int));
    if (list == NULL) {return 1;}
    for (int i = 0; i < 3; i++) {
        list[i] = i + 1;
    }

    // The Normal Way
    int* newArr1 = malloc(4 * sizeof(int));
    if (newArr1 == NULL) {
        free(list);
        return 1;
    }
    for (int i = 0; i < 4; i++) {
        newArr1[i] = list[i];
    }
    newArr1[3] = 4;
    list = newArr1;
    // printf(" %i \n %i \n %i \n %i \n", list[0], list[1], list[2], list[3]); // 1, 2, 3, 4

    // The Advanced Way
    int* newArr2 = realloc(list, sizeof(int));
    newArr2[3] = 4;

    printf(" %i \n %i \n %i \n %i \n", newArr2[0], newArr2[1], newArr2[2], newArr2[3]); // 1, 2, 3, 4
    free(list);

    // The Advanced Way

}