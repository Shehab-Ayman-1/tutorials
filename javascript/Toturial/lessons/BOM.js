export const windowMessages = () => {
	window.alert("Message From Alert.");

	const confirmMsg = window.confirm("Message From Confirm");
	console.log(confirmMsg === true ? "Accepted" : "Rejected");

	const promptMsg = window.prompt("User Massage: ");
	console.log(promptMsg);
};

export const setTimes = () => {
	// setTimeout [function, time, ...arguments]
	const timeout = setTimeout(
		(name, age, isAvailable) => {
			console.log(`My Name Is: ${name}, Age Is: ${age}, Is Available: ${isAvailable}`);
		},
		1000,
		"Shehab",
		21,
		true
	);
	if (false) clearTimeout(timeout);

	const interval = setInterval(() => {
		console.log(`Message From Interval`);
	}, 1000);
	if (false) clearInterval(interval);
};

export const location = () => {
	/* 
	- href      -> Get & Set The URL Of The Page, Store The Page Location In The Browser History
	- host      -> Get & Set The Domain Of The Page.
	- protocol  -> Get & Set The Protocol Of The Page [http, https]
	- hash      -> Get & Set The Hash Part From URL
	- reload()  -> Reload The Page
	- replace() -> Go To Other Page, Remove The Current Page From The History
	- assign()  -> Go To Other Page, Doesn't Remove The Current Page From The History
	*/

	console.log(`href:     -> ${window.location.href}`);
	console.log(`host:     -> ${window.location.host}`);
	console.log(`protocol: -> ${window.location.protocol}`);
	console.log(`hash:     -> ${window.location.hash}`);
	console.log(`reload:   -> ${false && window.location.reload()}`);
	console.log(`replace:  -> ${false && window.location.replace("https://google.com")}`);
	console.log(`assign:   -> ${false && window.location.assign("https://google.com")}`);
};

export const history = () => {
	console.log(window.history.length); // History Pages Length
	// window.history.back(); // Go Back Page
	// window.history.forward(); // Go Forward Page
	// window.history.go(2); // go(index), Go To The Page Index In The History
};

export const scrolling = () => {
	/* 
	- scrollTo() -> Scroll To This coordinates
	- scrollBy() -> Scroll By This coordinates
	- innerHeight -> Get The Height Of The Page
	- innerWidth -> Get The Width Of The Page
	*/

	let top = document.querySelector(".scroll-top");
	let down = document.querySelector(".scroll-down");

	window.addEventListener("scroll", () => {
		window.scrollY >= 50 ? (top.style.display = "block") : (top.style.display = "none");
		window.scrollY >= window.innerHeight ? (down.style.display = "none") : (down.style.display = "block");
	});

	top.onclick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	down.onclick = () => window.scrollBy({ top: 50, left: 0, behavior: "smooth" });
};

export const storages = () => {
	/* 
	- localStorage -> Save The Data Forever
		-- getItem, setItem, removeItem, clear, key, length
	- sessionStorage -> Save The Data Untel Close The Tab
		-- getItem, setItem, removeItem, clear, key, length
	*/

	window.localStorage.clear();

	window.localStorage.setItem("theme-color", "dark");
	window.localStorage.main_color = "orange";
	window.localStorage["secondary_color"] = "#255";

	// window.localStorage.removeItem("secondary_color");

	console.log(window.localStorage.length);

	console.log(window.localStorage.getItem("theme-color")); // dark
	console.log(window.localStorage.main_color); // dark
	console.log(window.localStorage["secondary_color"]); // #255

	console.log(window.localStorage.key(2)); // secondary_color
};
