export const Generic_Assign1 = () => {
	// Write Function Code Here
	function showTypes<genType1 = string, genType2 = number, genType3 = boolean>(val1?: genType1, val2?: genType2, val3?: genType3) {
		return `${val1 || "Nothing"} - ${val2 || "Nothing"} - ${val3 || "Nothing"}`;
	}

	// Do Not Edit Here
	console.log(showTypes()); // Nothing - Nothing - Nothing
	console.log(showTypes<string>("String")); // String - Nothing - Nothing
	console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
	console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
};
