# Palindrome
word_1 = 'racecar'
word_2 = 'shehab'


def check_palindrome_word(word):
    if word == word[::-1]:
        print("IS PALINDROME WORD")
    else:
        print("NOT PALINDROME WORD")


check_palindrome_word(word_1)
check_palindrome_word(word_2)
