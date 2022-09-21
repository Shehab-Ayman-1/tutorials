#include <stdio.h>
#include <cs50.h>

int main(void) {
    void meow(int n);
    meow(5);

    float discount(float price);
    float userPrice = get_float("Product Price: ");
    float sale = discount(userPrice);
    printf("The Product Price After Discount: %.2f \n", sale);
}

void meow(int n) {
    for (int i = 0; i < n; i++) {
        printf("Meow ==> %d \n", i);
    }
}

// [2] Discount Function
float discount(float price) {
    float result = price * 0.85;
    return result;
}