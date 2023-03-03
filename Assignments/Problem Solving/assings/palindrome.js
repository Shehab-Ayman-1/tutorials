export const fullPalindrome = () => {
	// Check If The Word === The Reversed Word
	function palindromes(word) {
		// The Word Without Any Unnecessery Addition [" ", ",", "|" , etc]
		let newWord = word.toLowerCase().replace(/[\W_]/g, "");
		// Reverse The Letters Of The Word
		let reverseWord = newWord.split("").reverse().join("");

		// newWord === reverseWord, Continue
		if (newWord === reverseWord) console.log(`${newWord} | ${reverseWord} | true`);
		else console.log(`${newWord} | ${reverseWord} | false`);
	}

	palindromes("eye"); // true
	palindromes("code"); // false
	palindromes("rar"); // true
	palindromes(",never,"); // false
	palindromes("Wooooow"); // true
	palindromes("Addition,"); // false
	palindromes("RaceCar"); // true
	palindromes("Halo, "); // false
	palindromes(", Never Odd | Or Even ,"); // true
};

export const halfPalindrome = () => {
	// Check If The First Part Of The Half Word === The Second Part Of The Reversed Word
	function halfPalindromes(word) {
		let newWord = word.replace(/[\W_]/g, "").toLowerCase();
		let halfLetter = newWord.charAt(newWord.length / 2);
		let diffWords = newWord.split(halfLetter);
		let reverseHalf = diffWords[1].split("").reverse().join("");
		if (diffWords[0] === reverseHalf) {
			console.log(word, true);
		} else {
			console.log(word, false);
		}
	}

	halfPalindromes(",eeyAyee"); // true
	halfPalindromes(",orange"); // false
	halfPalindromes("raIar,"); // true
	halfPalindromes(",fruits"); // false
	halfPalindromes(",Hol | Y | loh,"); // true
};
