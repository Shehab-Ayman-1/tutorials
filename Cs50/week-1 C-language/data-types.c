#include <stdio.h>
#include <cs50.h>

int main(void) {
    string st = "shehab";
    int in = 5;
    float fl = 5.4;
    char ch = 'a';
    long lon = 1234567890;
    printf("string, %s\n",st);
    printf("int, %i\n",in);
    printf("int, %d\n",in);
    printf("float, %f\n",fl);
    printf("char, %c\n",ch);
    printf("long, %li\n",lon);
    printf("long, %ld\n",lon);
}