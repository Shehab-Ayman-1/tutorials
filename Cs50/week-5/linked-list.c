#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>

/*
    Create The Linked List:
    -- Create An Empty List.
    -- Create A New Node [item]
    -- Set The Number Value Of The Node
    -- Set The Direction Of The Node
    -- Insert The Node In The List

    Insert A New Node [Item] In The Linked List
    -- Create A New Node [Item]
    -- Set The Number Value Of The Node
    -- Set The Direction Of The Node [The Index Of This Node In The Linked List]
    -- Edit The Before Node To Pointing To The New Node
 */

typedef struct myNode {
    int number;
    struct myNode* next; // The Node Dir Name.
} myNode;

int main(void) {
    myNode* list = NULL; // Create New List.

    /* Create The Linked List */
    // [1] Create The First Item [Node]
    myNode* node = malloc(sizeof(myNode)); // Create The Node [Item]
    if (node == NULL) {return 1;} // Check If The Node Is Valid
    node -> number = 10; // node -> number = 10 === *(node).number = 10
    node -> next = NULL; // Set The Direction Of The First Item Is Null For Now, Because The List Dosn't Has Any Item yet
    list = node; // Append The New Item In The List, And Make The Main List Pointing To This Node

    // [2] Create The Second Item [Node]
    node = malloc(sizeof(myNode));
    if (node == NULL) {
        free(list);
        return 1;
    }
    node -> number = 20;
    node -> next = NULL;
    list -> next = node; // Append The New Item In The List, And Make The First Node Pointing To This Node [Second Node]

    // [3] Create The Third Item [Node]
    node = malloc(sizeof(myNode));
    if (node == NULL) {
        free(list -> next);
        free(list);
        return 1;
    }
    node -> number = 30;
    node -> next = NULL;
    list -> next -> next = node; // Append The New Item In The List, And Make The Second Node Pointing To This Node [Third Node]

/* Insert New Items In The List */
    node = malloc(sizeof(myNode));
    if (node != NULL) {
        node -> number = 100;
        node -> next = list;
        list = node;
    }

    // [4] Now, Print The Items
    for (myNode* tmp = list; tmp != NULL; tmp = tmp -> next) {
        printf("%i \n", tmp -> number);
    }

    // [5] Release The Reserved Bits
    while (list != NULL) {
        myNode* tmp = list -> next;
        free(list);
        list = tmp;
    }

}
