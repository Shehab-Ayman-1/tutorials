export const Class_Assign3 = () => {
	class Show {
		constructor(private _title: string) {}

		get title(): string {
			return this._title;
		}
		set title(val: string) {
			this._title = val;
		}
	}

	let tester = new Show("Osama");

	console.log(tester.title); // Property 'title' does not exist on type 'Show'
	tester.title = "Elzero"; // Property 'title' does not exist on type 'Show'
	console.log(tester.title); // Property 'title' does not exist on type 'Show'
};
