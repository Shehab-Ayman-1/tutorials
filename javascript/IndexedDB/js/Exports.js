// Note: We Have Two Ways To Use Export & Import In JavaScript

// [1] Use Export:
// In This Way, We Import This Function In Other File With { } Like That => { uid }
export async function fetchData(func1) {
	await fetch("../js/api.json")
		.then((response) => response.json())
		.then((result) => {
			// Here We Callback The Functions From The Main File
			func1(result);
		})
		.catch((error) => console.error("Please Check The Fetch Function Because It Has An Error => ", error));
}

// [2] Use Export Default:
// In This Way, We Import This Function In Other File WithOut { } Like That => uid
const uid = () => {
	let timmy = Date.now().toString(36).toLocaleUpperCase();
	let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER)
		.toString(36)
		.slice(0, 12)
		.padStart(12, "0")
		.toLocaleUpperCase();
	return `${timmy}-${randy}`;
};

export default uid;
