export const promise = () => {
	/* 
    promise(resolve, reject) -> Send The Result To Then().
    - then(resolveValue, rejectValue) -> Recieve The Promise Result.
    - catch(reason) -> Catch The Error If It's Defined
    - finally() -> Do Something In Resolving And Rejected
    */

	let promise = new Promise((resolve, reject) => {
		let connection = true;
		if (connection) resolve("fullFilled Message");
		else reject("Rejecting Message");
	});

	promise.then(
		(resolveValue) => console.log("From Then -> ", resolveValue),
		(rejectValue) => console.log(`From Then -> ${rejectValue}`)
	);

	promise.catch((rejected) => console.error(`From Catch -> ${rejected}`));

	promise.finally(() => console.log(`From Finally -> Do Some Thing In Resolving And Rejected`));

	console.log("Console Message");
};

export const promiseXHR = () => {
	const fetchData = (api) => {
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			req.open("Get", api);
			req.onload = function () {
				if (this.readyState === 4 && this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject(new Error("Data Is Not Ready"));
				}
			};
			req.send();
		});
	};
	let response = fetchData("https://api.github.com/users/elzerowebschool/repos");
	response.then((res) => res);
	response.catch((rej) => rej);
};

export const Fetch = () => {
	// [1] The Normal Way
	let req = fetch("https://api.github.com/users/elzerowebschool/repos");
	req.then((res) => res.json()).then((data) => console.log(data));

	// [2] The Advanced Way
	async function fetchData() {
		try {
			let data = await fetch("https://api.github.com/users/elzerowebschool/repos");
			console.log(await data.json());
		} catch (error) {
			console.error(`Something Was Happend ${error}`);
		}
	}
	fetchData();
};

export const methods = () => {
	/* 
    - all() -> Return Response If All The Promises Are Resolved, If Any Of Them Rejected Then Doen't Work
    - allSettled() -> Return All The Promises Whatever Resolved OR Rejected
    - race() -> Return The First Promise That Arrived In The First
    */
	let promise1 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("From Promise 1"), 1000);
	});

	let promise2 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("From Promise 2"), 2000);
	});

	let promise3 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("From Promise 3"), 3000);
	});

	let promise4 = new Promise((resolve, reject) => {
		setTimeout(() => reject("From Promise 4"), 4000);
	});

	Promise.all([promise1, promise2, promise3])
		.then((response) => console.log(response))
		.catch((rej) => console.error(rej));

	Promise.allSettled([promise1, promise2, promise3, promise4])
		.then((response) => console.log(response))
		.catch((rej) => console.error(rej));

	Promise.race([promise1, promise2, promise3, promise4])
		.then((response) => console.log(response))
		.catch((rej) => console.error(rej));
};

export const sync = () => {
	/* 
    - resolve() -> Return Promise With The Resolved Data
    - reject() -> Return Promise With The Rejected Data
    - async -> Is Used Before The Function To Make The Function Return A Promise
    */

	// [1] The First Way
	function getData() {
		let users = true;
		if (users) {
			return Promise.resolve("Found Users");
		} else {
			return Promise.reject("Not Found Users");
		}
	}
	// getData()
	// 	.then((resolve) => console.log(resolve))
	// 	.catch((rej) => console.error(rej));

	// [2] The Second Way
	async function fetchData() {
		let users = true;
		if (users) {
			return "Found Users";
		} else {
			return "Not Found Users";
		}
	}
	console.log(fetchData()); // Promise {<fulfilled>: 'Not Found Users'}

	fetchData()
		.then((resolve) => console.log(resolve))
		.catch((rej) => console.log(rej));
};

export const Await = () => {
	// await -> Is Stopping Anything After The Await Until The Promise Is Finish [as Alert When Stop The Page Working]

	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Resolved Promise"), 3000);
	});

	async function syncAwait() {
		console.log("Before");
		console.log(await promise);
		console.log("After");
	}
	syncAwait();
};

export const tryCatch = () => {
	let promise = new Promise((resolve, reject) => {
		let connect = true;
		if (connect) {
			setTimeout(() => {
				resolve("From Resolve");
			}, 3000);
		} else {
			reject("From Reject");
		}
	});

	async function getData() {
		console.log("Before");
		try {
			console.log(await promise);
		} catch (reason) {
			console.error(`Error Message: ${reason}`);
		} finally {
			console.log("After");
		}
	}
	// getData();

	async function fetchData() {
		try {
			let res = await fetch("https://api.github.com/users/elzerowebschool/repos");
			console.log(await res.json());
		} catch (error) {
			console.error(`Error Reason: ${error}`);
		}
	}
	// fetchData();
};
