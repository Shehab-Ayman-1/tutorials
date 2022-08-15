export const Anno_Assign4 = () => {
	/* 
        Assignment
        -- Edit The tsconfig.json To Ignore The Paramater Annotation
        -- Edit The tsconfig.json To Warning Us When Using Unused Variables
        -- Edit The tsconfig.json To Warning Us When Using Unused Paramenters
        -- Edit The tsconfig.json To Warning Us When Using UnreachableCode
    */
	function reportErrors(username, age: number) {
		// let rank = "Professor"; // Unused
		return `Username: ${username}, age: ${age}`;
		// console.log("We Will Not Reach Here"); // Unused
	}

	console.log(reportErrors("Elzero", 40));
};
