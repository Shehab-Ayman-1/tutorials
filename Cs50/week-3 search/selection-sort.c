#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void) {
    int arr[] = {5, 3, 7, 9, 1, 0, 6, 2, 4, 8};
    int sortedNumbers[10];
    int counter = 0;

    for (int i = 0; i < 10; i++) {
        for (int n = 0; n < 10; n++) {
            if (arr[n] == counter) {
                sortedNumbers[counter] = arr[n];
                counter++;
            }
        }
        printf("My Sorted Numbers Is: [ %i | ] \n", sortedNumbers[i]);
    }
}