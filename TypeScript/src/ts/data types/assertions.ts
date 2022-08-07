/* 
    Assertions
    -- The Default Assertions For All The Document Is HTMLElement
    -- The Ts Compiler Doesn't Check Any Thing After We Use As To Select The Type
*/

export default function Assertions() {
	const img = document.getElementById("img") as HTMLImageElement;
	// console.log(img.value); // Image Can't Has Value As An Attribute
	console.log(img.src); // image src

	const input = <HTMLInputElement>document.getElementById("input");
	// console.log(input.href); // Input Can't Has Href As An Attribute
	console.log(input.value);

	// The Compiler Doesn't Check The Code That Has An As [ Type ]
	const age: any = 21.54321;

	console.log((age as string).repeat(3)); // Error => Compiler Doesn't Check If Age Value Is A String OR Number
}
