/* 
    Void
    -- Void Function => Have To Return An Undefined Value
    Never
    -- Never Function => Have To Return No Thing => No Value And No Undefined => No Thing
*/

export default function VoidAndNever() {
	// Void
	const login = (msg: string): void => {
		console.log(msg);
		// return msg // Type 'string' is not assignable to type 'void'
	};
	console.log(login("Void => This Function Have To Return Undefined Value"));

	// Never
	const failur = (msg: string): never => {
		throw new Error(msg); // This Code Line Has An Infinity Loop, So That The Next Lines Will Be Unreachable code detected
		const age = 0; // Unreachable code detected
		console.log(age); // Unreachable code detected
	};
	console.log(failur("Never => This Function Not Return Any Thing No Undefined And No Value"));

	const alwaysReturn = (msg: string): never => {
		while (true) {
			console.log(msg);
			// return msg; // Can't Return Any Type In Never DataType Method
		}
	};
	alwaysReturn("msg");
}
