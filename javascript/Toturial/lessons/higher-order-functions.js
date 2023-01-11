export const map = () => {
	/* Map(element, index, array) => Return Each Element After Update In New Array
	- element => The current element being processed in the array
	- index => the index of the current element being processed in the array
	- array => Return The main array 
    */

	// Addition
	let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
	let newArr1 = nums.map((ele) => ele + ele);
	console.log(newArr1);

	// Addition
	const addition = (ele) => ele + ele;
	let newArr2 = nums.map(addition);
	console.log(newArr2);

	// Swaping Case
	let swap = "elZERO";
	let swaping = swap.split("").map((ele) => (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()));
	console.log(swaping.join("")); // ELzero

	// Inverted Numbers
	let invert = [1, -10, -20, 15, 100, -30];
	let inverted = invert.map((ele) => -ele);
	console.log(inverted);

	// Ignore Numbers
	let ignore = "Elz123er4o";
	let ignored = ignore.split("").map((ele) => (isNaN(ele) ? ele : ""));
	console.log(ignored.join(""));
};

export const filter = () => {
	// filter(element, index, array) => Return Each Element Who Has A [True] Output

	// Return Friends Who Start With "A" Letter
	let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Issraa"];
	let aFriends = friends.filter((ele) => ele.startsWith("A"));
	console.log(aFriends);

	// Return Event Numbers
	let numbers = [11, 20, 2, 5, 17, 10, 22];
	let evenNumbers = numbers.filter((ele) => ele % 2 === 0);
	console.log(evenNumbers);

	// Filter words have more than 4 characters
	let words = "I Love Foods Code Too Playing Much";
	let rightWord = words.split(" ").filter((ele) => ele.length <= 4);
	console.log(rightWord.join(" | "));

	// Ignore Numbers
	let ignore = "Elz123er4o";
	let ignored = ignore.split("").filter((ele) => isNaN(ele));
	console.log(ignored.join(""));

	// Filter String, Then Multiply The Numbers
	let mix = "A13BS2ZX".split("");
	let multipy = mix.filter((ele) => !isNaN(ele)).map((ele) => ele * ele);
	console.log(multipy);
};

export const reduce = () => {
	/* reduce((accumelator, element, index, array) => {}, initial Value) => Return The Resulting in A Single Output Value
    - accumelator => The Previous Value Of The Last Stage
    - element => The Current Element Being Process In The Array
    - index => Starts From 1, But If The Initial Value Is Provided Then The Index Will Start From 0
    - array => The Main Array
    - initial value => It Is A Hidden Value Is Provided In The First Of The Main Array
    */

	// Return The Result Of The Array Numbers
	let numbers = [10, 20, 5, 15, 30];
	let result = numbers.reduce((acc, ele) => acc + ele);
	let initResult = numbers.reduce((acc, ele) => acc + ele, 3);
	console.log(result);
	console.log(initResult);

	// Return The Longest Word
	let words = ["Russia", "Propaganda", "Canada", "USA", "Austoralia", "German", "Egypt", "France", "Italia"];
	let longest = words.reduce((acc, current) => (acc.length > current.length ? acc : current));
	console.log(longest);

	// Create Join Method
	let removeChars = ["E", "L", "@", "@", "Z", "@", "E", "@", "R", "@", "O"];
	let joined = removeChars.reduce((acc, current) => (current === "@" ? acc : acc + current));
	console.log(joined);

	// Create Join Method With Other Way
	let joinedWord = removeChars.filter((ele) => ele !== "@").reduce((ele, current) => ele + current);
	console.log(joinedWord);
};

export const forEach = () => {
	/* forEach(element, index, array) => Isn't Return A New Array
        - Dosn't Return Anything
        - Can't Use Break In ForEach
    */

	let fruits = ["apple", "panana", "mango", "Papaz"];
	fruits.forEach((ele) => {
		console.log(ele);
		return "##############";
	});
};
