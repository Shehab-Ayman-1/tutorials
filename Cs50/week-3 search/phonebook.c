#include <stdio.h>
#include <cs50.h>
#include <string.h>

struct phonebook {
    string number;
    string name;
};

int main(void) {
    // C Language Don't Have An Object Type So That We Need To Use Struct To Build A Custome Type Like Object.
    struct phonebook list[2];
    list[0].name = "shehab";
    list[0].number = "01067421381";

    list[1].name = "hesham";
    list[1].number = "01554566092";
    for (int i = 0; i < 2; i++) {
        if (strcmp(list[i].name, "hesham") == 0) {
            printf("Phone Number Is %s \n", list[i].number);
            return 0;
        }
    }
    printf("This Phone Number Is Not Found. \n");
    return 1;
}