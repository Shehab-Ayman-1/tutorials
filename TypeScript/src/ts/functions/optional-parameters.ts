export default function OptionalParameters() {
	// ? => Optional Parameter [ Have To Be In The Last Parameters ]
	function showUser(name: string, age: number, country: string = "egypt", isAvailable?: boolean) {
		if (!isAvailable) return console.log("Sorry, This User Is Not Available");
		return `My Name: ${name}, Age: ${age}, Country: ${country}`;
	}
	showUser("shehab", 21, "egypt", true);
}
