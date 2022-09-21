#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
        /*
        fOpen(FileName, Mode)
        Mode
        ==========================================================================================================
                Mode Letter      |       Delete The File Data        |     Create New File If It Is Not Defined    |
        ==========================================================================================================
                r => Read        |               No                  |                       No                    |
                w => Write       |               Yes                 |                       Yes                   |
                a => Append      |               No                  |                       Yes                   |
        */

        FILE *myFile = fopen("files.txt", "a");

        char *username = get_string("Enter Your Username: ");
        char *email = get_string("Enter Your Email: ");
        char *password = get_string("Enter Your Password: ");

        fprintf(myFile, "\n============================= \n");
        fprintf(myFile, "username: %s \nemail: %s \npassword: %s \n", username, email, password);
        fclose(myFile);
}