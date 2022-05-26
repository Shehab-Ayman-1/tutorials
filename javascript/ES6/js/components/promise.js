export default function promise() {
	// ========================================= Intro In Promise ==========================================
	/* 
		// [1] The First Example
		// JavaScript Make The Normall Console In The Track ( In The First ) & The Methods In The Quoue To CallBack From The Browser ( In The Last )
		console.log("One");
		setTimeout(() => console.warn("Two"), 0);
		console.log("Three"); // OutPut Is => One, Three, Two

		// [2] The Second Example
		// We Can Intialize The Variables Before Create Them With The setTimeOut Method, Because The Methode Put In The Browser Callback Quoue
		let myNumber = 21;
		console.log(myNumber);
		setTimeout(() => console.warn(myName), 0); // OutPut Is => One, Three, 21, Two, Shehab Ayman
		let myName = "Shehab";
		myName += " Ayman";
	*/
	// ======================================== What Is The Promise ========================================
	/* 
		// - The Promise One Of The Best Fueture In ES6
		// - The Promise Make It Easy To Support Asynchronous Programming
		// - The Promise In JavaScript Like The Real Promise In Our Life
		// - The Promise Is Just A Promise To Make Something In The Fuetures
		// - The Promise Is A Placeholder For A Fueture Value
		// - Examples => If You Got Any Job To Do In Your Work, It's Mean That You Promised Your Boss To Do This Task

		// - JavaScript Use Callbacks For Asynchronous Programming
		// 	[1] JavaScript Call The First Function ( Promise ) & Do This Task
		// 	[2] JavaScript Finish This Task
		// 	[3] JavaScript Call Another Function ( Another Promise ) & Do This Task
		// 	[4] JavaScript Finish This Task As well

		// - The Promise Value Is Has To Be One Of These Status
		// 	[1] FullFilled => The Operation Is Successed
		// 	[2] Pending => The Operation Is Waiting Something Not [ FullFilled || Rejected ]
		// 	[3] Rejected => The Operation Is Failed

		// ================================
		// [1] The First Example
		// const myPromise = new Promise((resolve, reject) => {
		// 	// console.log("Now The Promise Type Is Pending");
		// 	let connect = false;
		// 	if (connect) {
		// 		resolve(`The Promise Is Connected`);
		// 	} else {
		// 		reject(new Error("The Connect Is Rejected"));
		// 	}
		// });

		// // Then Method => Handle 2 Value Of The Promise [ Resolve & Reject ] From The Promise Constructor
		// myPromise.then(
		// 	(resolved) => console.log(resolved), // The Promise Is Connected
		// 	(rejected) => console.error(rejected) // The Connect Is Rejected
		// );

		// ================================
		// [2] The Second Example
		// const myPromise = new Promise((resolve, reject) => {
		// 	// We Create This Condition To Test If The Asynchronous Maybe Failed
		// 	if (Math.random() * 100 < 50) {
		// 		resolve("The Promise Is Success");
		// 	} else {
		// 		reject("The Promise Is Failed");
		// 	}
		// });
		// myPromise.then((resolve) => console.log(resolve));
		// myPromise.catch((reject) => console.log(reject));

		// ================================
		// [3] The Third Example => To Just Get The Idea Of The Promise In Easy Way
		// The Normall CallBack Without Promise Constructor => Maybe Make Mistake While Callback
		// firstRequest(function (response) {
		// 	secondRequest(
		// 		response,
		// 		function (nextResponse) {
		// 			thirdRequest(
		// 				nextResponse,
		// 				function (finalRequest) {
		// 					console.log(`Final Response: ${finalRequest}`);
		// 				},
		// 				failureCallback
		// 			);
		// 		},
		// 		failureCallback
		// 	);
		// }, failureCallback);

		// // The Promise Callback => Can't To Do Any Mistake While The Callback
		// firstRequest()
		// 	.then((response) => secondRequest(response))
		// 	.then((nextResponse) => thirdRequest(nextResponse))
		// 	.then((finalRequest) => console.log(`Final Response: ${finalRequest}`))
		// 	.catch((failureCallback) => console.error(failureCallback));
	*/
	// ========================================= Get Data From API =========================================
	/* 
		// [1] new XMLHttpRequest()
		function getReposBy_XMLHttpRequest(repoURL, num) {
			const myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function () {
				if (this.readyState === 4 && this.status === 200) {
					if (num != undefined) console.log(JSON.parse(this.responseText)[num]);
					else console.log(JSON.parse(this.responseText));
				}
			};
			myRequest.open("GET", repoURL, true);
			myRequest.send();
		}
		getReposBy_XMLHttpRequest("https://api.github.com/users/ElzeroWebSchool/repos");

		// [2] new Promise()
		function getReposBy_Promise(apiURL) {
			return new Promise((resolve, reject) => {
				const myRequest = new XMLHttpRequest();
				myRequest.onload = function () {
					if (this.readyState === 4 && this.status === 200) {
						return resolve(JSON.parse(this.responseText));
					} else {
						return reject(new Error(this.statusText));
					}
				};
				myRequest.open("GET", apiURL);
				myRequest.send();
			});
		}

		getReposBy_Promise("https://api.github.com/users/Shehab-Ayman-1/repos")
			.then((resolve) => console.log(resolve))
			.catch((err) => console.error(err)); 
	*/
	// ======================================== Training on Promise ========================================
	/*
		const myRequest = new Promise((resolve, reject) => {
			let myPosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
			let status = true;
			if (status) {
				resolve(myPosts);
			} else {
				reject("The Promise Has A Mistake");
			}
		});
		myRequest
			.then((resolve) => {
				console.log(`We Have => ${resolve.length} Posts`);
				console.log("#".repeat(15));
				return resolve; // We Return The Resolve To Get It In Another Then()
			})
			.then((resolve) => {
				console.log(`My First Post Is => ${resolve[0]}`);
				console.log("#".repeat(15));
				return resolve;
			})
			.then((resolve) => {
				console.log(`My Last Post Is => ${resolve[resolve.length - 1]}`);
				console.log("#".repeat(15));
				return resolve;
			})
			.then((resolve) => {
				console.log(`Because Every Page Have 2 Posts`);
				console.log("#".repeat(15));
				console.log(`We Have ${resolve.length / 2}`);
			})
			.catch((reject) => console.error(reject));
	*/
	// =========================================== Fetch Methode ===========================================
	/* 	
		fetch("https://api.github.com/users/ElzeroWebSchool/repos")
			.then((repos) => repos.json())
			.then((repos) => {
				console.log(repos);
				let div = document.createElement("div");
				div.className = "repos-container";
				div.append("My Repos Are: ");
				for (let Index in repos) {
					let h3 = document.createElement("h3");
					let textNode = document.createTextNode(repos[Index].name);
					h3.append(`${Index} => `);
					h3.append(textNode);
					div.appendChild(h3);
					document.body.appendChild(div);
				}
			}); 
	*/
	// ============================================ All & Race =============================================
	/* 	
		// All()
		let myPromise1 = new Promise((resolve, reject) => {
			let connect = true;
			if (connect) {
				return resolve("The Promise 1 Is Working");
			} else {
				return reject("The Promise 1 Is Not Working");
			}
		});
		let myPromise2 = new Promise((resolve, reject) => {
			let connect = true;
			if (connect) {
				return resolve("The Promise 2 Is Working");
			} else {
				return reject("The Promise 2 Is Not Working");
			}
		});
		// The 2 Promises Have To Be Working
		Promise.all([myPromise1, myPromise2]).then((result) => console.log(result)); // Promise 2 Is Not Working

		// Race()
		let myPromise3 = new Promise((resolve, reject) => {
			let connect = true;
			if (connect) {
				return setTimeout(() => resolve("The Promise 3 Is Working"), 500);
			} else {
				return reject("The Promise 2 Is Not Working");
			}
		});
		let myPromise4 = new Promise((resolve, reject) => {
			let connect = true;
			if (connect) {
				return setTimeout(() => resolve("The Promise 4 Is Working"), 200);
			} else {
				return reject("The Promise 2 Is Not Working");
			}
		});
		// Just The Fastest One Will Be Work
		Promise.race([myPromise3, myPromise4]).then((result) => console.log(result)); // Promise 2 Is Not Working 
	*/
}
