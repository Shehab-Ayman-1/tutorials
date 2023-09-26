export function Alias() {
	// Single Type
	type st = string;
	let name: st = "shehab";

	type num = number;
	let age = 21;

	type bool = boolean;
	let isAvailable: bool = true;

	type stNumBool = st | num | bool;
	let mix: stNumBool = `My Name Is: [ ${name} ], Age: [ ${age} ], is Available: [ ${isAvailable} ]`;
	console.log(mix);

	// Multible Types
	type buttons = { up: string; bottom: string; right: string; left: string };
	function move1(btns: buttons) {
		console.log(`Up Key => ${btns.up}`);
		console.log(`Bottom Key => ${btns.bottom}`);
		console.log(`Right Key => ${btns.right}`);
		console.log(`Left Key => ${btns.left}`);
	}
	move1({ up: "Go Up", bottom: "Go Down", right: "Go Right", left: "Go Left" });

	// Inherite Type
	type extenedType = buttons & { space: string };
	function move2(btns: extenedType) {
		console.log(`Up Key => ${btns.up}`);
		console.log(`Bottom Key => ${btns.bottom}`);
		console.log(`Right Key => ${btns.right}`);
		console.log(`Left Key => ${btns.left}`);
		console.log(`Space Key => ${btns.space}`);
	}
	move2({ up: "Go Up", bottom: "Go Down", right: "Go Right", left: "Go Left", space: "Jump" });
}
