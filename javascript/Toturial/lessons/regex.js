export const pattern = () => {
	/* 
    Flags:
    - i -> Case Insensitive [Ignore If The Letters Are [Upper || Lower] Case]
    - g -> Global
    - m -> Multilines
    */

	let paragraph = `Elzero Web School elzero web school`;

	console.log(paragraph.match(/Elzero/)); // Elzero

	console.log(paragraph.match(/Elzero/i)); // Elzero
	console.log(paragraph.match(/elzero/i)); // Elzero

	console.log(paragraph.match(/elzero/g)); // ['elzero']
	console.log(paragraph.match(/Elzero/gi)); // ['Elzero', 'elzero']
};

export const ranges = () => {
	/* 
    (x|y)        -> X OR Y
    [0-9]        -> 0 TO 9
    [^0-9]       -> Not 0 To 9
    [a-z]        -> lower Case
    [A-Z]        -> Upper Case
    [^a-z]       -> Ignore Lower Case
    [^A-Z]       -> Ignore Upper Case
    [^0-9a-zA-Z] -> Ignore 0-9 & a-z & A-Z
    [^any, ]     -> Ignore Empty Space
    [any,]       -> Ignore Empty Space
    [abc]        -> Accept [a, b, c] Letters
    [^abc]       -> Reject [a, b, c] Letters
    */

	const regex = "123 Com Org 456 Info Io 789";

	let OR = /org|info|io/gi;
	console.log("(x|y)", regex.match(OR));

	let numbers = /[0-9]/gi;
	console.log("\n[0-9]", regex.match(numbers));

	let notNumbers = /[^0-9 ]/gi;
	console.log("\n[^0-9]", regex.match(notNumbers));

	let zero_five = /[0-5]/gi;
	console.log("\n[0-5] ", regex.match(zero_five));

	let not_zero_five = /[^0-5 ]/gi;
	console.log("\n[^0-5]", regex.match(not_zero_five));

	let a_z = /[a-z]/g;
	console.log("\n[a-z] ", regex.match(a_z));

	let not_a_z = /[^a-z ]/g;
	console.log("\n[^a-z]", regex.match(not_a_z));

	let A_Z = /[A-Z]/g;
	console.log("\n[A-Z] ", regex.match(A_Z));

	let not_A_Z = /[^A-Z ]/g;
	console.log("\n[^A-Z]", regex.match(not_A_Z));

	let abc_Only = /[abc]/gi;
	console.log("\n[abc]", regex.match(abc_Only));

	let not_abc_only = /[^abc, ]/g;
	console.log("\n[^abc]", regex.match(not_abc_only));

	let chars = "a!b@c#d$e%f^gk_l+1!2@3#4$5%6^7&8*9(0)";
	let specialChars = /[^0-9a-z]/gi;
	console.log(chars.match(specialChars));

	let os = "Os1 Os1OS Os2 Os8 Os8Os";
	let OS_5_9_OS = /os[5-9]Os/gi;
	console.log(os.match(OS_5_9_OS));
};

export const characters = () => {
	/* 
    .  -> Any Character, Ignore New Lines
    \w -> Any Characters [a-z, A-Z, 0-9, _]
    \W -> Any Special Characters
    \d -> Any Number
    \D -> None Numbers
    \s -> Whitespace
    \S -> None Whitespace
    \b -> Start With OR End With
    \B -> None Start With OR End With
    */

	let regex = "a!b@c#d$ e%f^gk_l+ 1!2@3#4$ 5%6^7&8 *9(0)";

	let dot = /./g;
	console.log("\n [/./g]", regex.match(dot));

	let word = /\w/g;
	console.log("\n [\\w/g]", regex.match(word));

	let chars = /\W/g;
	console.log("\n [\\W/g]", regex.match(chars));

	let degits = /\d/g;
	console.log("\n [\\d/g]", regex.match(degits));

	let not_digits = /\D/g;
	console.log("\n [\\D/g]", regex.match(not_digits));

	let whitespace = /\s/g;
	console.log("\n [\\s/g]", regex.match(whitespace));

	let none_whitespace = /\S/g;
	console.log("\n [\\S/g]", regex.match(none_whitespace));

	// =======================
	let email = "O@@@micro...com O@gmail.com O@hotmail.net A@outlook.com O@drive.com o@viver.org 1@look.net";

	let validEmail = /\w@(gmail|hotmail|outlook).(net|com)/g;
	console.log(email.match(validEmail));

	// =======================
	let spammers = "shehab 1spam osama spam2 salma AspamO aya";

	let startSpam = /\bspam/g;
	console.log(spammers.match(startSpam));

	let endSpam = /spam\b/g;
	console.log(spammers.match(endSpam));

	let startEndSpam = /(\bspam|spam\b)/g;
	console.log(spammers.match(startEndSpam));

	// =======================
	console.log(startSpam.test(spammers)); // true, Check If Start With Spam
	console.log(endSpam.test(spammers)); // true, Check If End With Spam
	console.log(startEndSpam.test(spammers)); // true, Check If Start OR End With Spam
};

export const quantifiers = () => {
	/* 
	- n+ -> [+] One OR More  [1-9]
	- n* -> [*] Zero OR More [0-9]
	- n? -> [?] Zero OR one  [optional]
	- {} -> Range [From, To] Characters
	- $  -> End With Something
	- ^  -> Start With Something
	- ?= -> Followed By Character
	- ?! -> Not Followed By Character
	*/

	let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
	console.log(mails.match(/\w+@\w+.(com|net)/gi));
	console.log(mails.match(/\w+@\w+.\w+/gi));

	let nums = "0110 10 150 05120 0560 350 00";
	console.log(nums.match(/0\d+0/gi)); // ['0110', '05120', '0560']
	console.log(nums.match(/0\d*0/gi)); // ['0110', '05120', '0560', '00']

	let urls = "https://google.com http://www.website.net web.com";
	console.log(urls.match(/(https?:\/\/)?(www.)?\w+.\w+/gi)); // ['https://google.com', 'http://www.website.net', 'web.com']

	let serials = "s100s s3000s s50000s s950000s";
	console.log(serials.match(/s\d\d\ds/gi)); // s[three numbers]s
	console.log(serials.match(/s(\d\d\d\d|\d\d\d\d\d)s/gi)); // s[4 or 5 numbers]s
	console.log(serials.match(/s\d\d\d\d+s/gi)); // s[at least four numbers]s

	console.log(serials.match(/s\d{3}s/gi)); // s[three numbers]s
	console.log(serials.match(/s\d{4,5}s/gi)); // s[4 or 5 numbers]s
	console.log(serials.match(/s\d{4,}s/gi)); // s[at least four numbers]s

	let word = "We Love Programming";
	let names = "10samaZ 2AhmedZ 3Mohamed 4MoustafaZ 5GamalZ";
	console.log(/^we/gi.test(word)); // true
	console.log(/we$/gi.test(word)); // false
	console.log(/^\d/gi.test(names)); // true
	console.log(/aHz$/gi.test(names)); // false

	console.log(names.match(/\d\w{5}(?=Z)/gi)); // ['10sama', '2Ahmed', '5Gamal']
	console.log(names.match(/\d\w{7,}(?!Z)/gi)); // ['4MostafaZ']
};

export const validation = () => {
	let form = document.createElement("form");
	let input = document.createElement("input");
	let btn = document.createElement("input");
	let btnText = document.createTextNode("Submit");

	form.appendChild(input);
	form.appendChild(btn);
	btn.appendChild(btnText);
	document.body.appendChild(form);

	form.method = "get";
	btn.type = "submit";
	input.placeholder = "(1234) 567-8910";
	input.name = "phone-number";
	input.id = "phone";

	form.style.cssText = `width: 400px; display: flex;`;
	btn.style.cssText = `background: orange; color: black; font-weight: bold; font-size: 16px; cursor: pointer`;

	input.onfocus = () => (input.style.color = "white");

	form.onsubmit = () => {
		let value = input.value;
		let regex = /\(\d{4}\)\s\d{3}-\d{4}/gi;
		if (regex.test(value)) {
			input.style.color = "green";
		} else {
			input.style.color = "red";
			return false;
		}
		return true;
	};
};
