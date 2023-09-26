export function ArrowFunction() {
	const showDetails = (name: string, age: number, salary: number): string => {
		if (false) return "SomeThing, Has An Error !";
		return `Hello: ${name}, Age: ${age}, Salary: ${salary}`;
	};
	showDetails("shehab", 21, 5000);
}
