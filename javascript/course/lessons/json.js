export const manageData = () => {
	fetch("./assets/users.json")
		.then((response) => response.json())
		.then((data) => {
			let stringData = JSON.stringify(data);
			let parseData = JSON.parse(stringData);

			console.log(stringData);
			console.log(parseData);
		});
};

export const synchronous = () => {
	/* 
    Synchronous
    - Operations Runs in Sequence
    - Each Operation Must Wait For The Previous One To Complete

    Asynchronous
    - Operations Runs In Parallel
    - This Means That An Operation Can Occur while Another One Is Still Being Processed
    */

	(async function fetchData() {
		await fetch("./assets/.json")
			.then((res) => res.json())
			.then((data) => console.log(data));
	})();

	// Example On Synchronous To Explain It
	// console.log("1");
	// console.log("2");
	// window.alert("Operation");
	// console.log("3");

	// Example On Asynchronous To Explain It
	console.log("1");
	console.log("2");
	setTimeout(() => console.log("Operation"), 3000);
	console.log("3");
};
