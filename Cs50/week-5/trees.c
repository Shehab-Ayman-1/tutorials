#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>

/*
    Create New Tree In The Tree:
    -- Create The Root Of The Tree
    -- Create New Node [Item]
    -- Check If The Node Is Valid Of Not
    -- Set The Value Number Of The Tree
    -- Set The Pointer Of The Left And Right Directions
    -- Set The Location Of The Node In The Root

    Insert New Node In The Tree:
    -- Create New Node [Item]
    -- Check If The Node Is Valid Of Not
    -- Set The Value Number Of The Tree
    -- Set The Pointer Of The Left And Right Directions
    -- Set The Location Of The Node In Other Node

    Search In The Tree:
    --
    --
    --
    --
    --
 */

typedef struct myNode {
    int number;
    struct myNode* left;
    struct myNode* right;
} myNode;

int main(void) {
    myNode* root = NULL;
    myNode* node = malloc(sizeof(myNode));

    // [1] The First Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 2;
    node -> left = NULL;
    node -> right = NULL;
    root = node;

    // [2] The Second Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 1;
    node -> left = NULL;
    node -> right = NULL;
    root -> left = node;

    // [3] The Third Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 3;
    node -> left = NULL;
    node -> right = NULL;
    root -> right = node;

    /* New Branch */
    // [4] The Forth Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 4;
    node -> left = NULL;
    node -> right = NULL;
    root -> left -> left = node;

    // [5] The Forth Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 5;
    node -> left = NULL;
    node -> right = NULL;
    root -> left -> right = node;

    // [6] The Sixth Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 6;
    node -> left = NULL;
    node -> right = NULL;
    root -> right -> left = node;

    // [7] The Seventh Node [Item]
    node = malloc(sizeof(myNode));
    if (node == NULL) { return 1; }
    node -> number = 7;
    node -> left = NULL;
    node -> right = NULL;
    root -> right -> right = node;

    // [8] Print The Tree
    void print_tree(myNode* root, string branch);
    // print_tree(root, "Root");

    // [9] Search In Tree
    int search_tree(myNode* root, int value);
    search_tree(root, 1);
}

void print_tree(myNode* root, string branch) {
    if (root == NULL) { return; }
    print_tree(root -> left, "Left Branch");
    printf("%s %i \n", branch, root -> number);
    print_tree(root -> right, "Right Branch");
}

int search_tree(myNode* root, int value) {
    if (root == NULL) {
        printf("Not Found \n");
        return 1;
    } else if (value < root -> number) {
        // Search In Left Side
        printf("Left Branch \n");
        return search_tree(root -> left, value);
    } else if (value > root -> number) {
        // Search In Right Side
        printf("Right Branch \n");
        return search_tree(root -> right, value);
    } else {
        printf("Some Thing Went Wrong \n");
        return 1;
    }
    return 0;
}