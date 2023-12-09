export const assign01 = () => {
	let titleName = "Elzero",
		disc_content = "Elzero Web School",
		year_date = "25//10";
	let card = `
        <div style="padding-top: 20px;">
            <h1>Hello, ${titleName}</h1>
            <h3>${disc_content}</h3>
            <h4>${year_date}</h4>
        </div>
    `;
	document.body.innerHTML = card.repeat(4);
};

export const assign02 = () => {
	// Dont't Repeat Use Variables
	// Just Use Variables Value
	let a = "-100";
	let b = "20";
	let c = 30;
	let d = true;
	console.log(-a * +b); // 2000
	console.log(-a + ++d * ++b + ++c); // 173
};

export const assign03 = () => {
	let a = 1_00;
	let b = 2_00.5;
	let c = 1e2;
	let d = 2.4;

	// Find The Smallest Number And Return Int
	console.log(Number.parseInt(Math.min(a, b, c, d))); // 2

	// Use Variable a, d Just One Time To Return 10,000
	console.log(Math.pow(a, Math.floor(d))); // 10,000

	// Get Integar 2 From Variable d With 4 Differant Ways
	console.log(Math.floor(d)); // 2
	console.log(Math.trunc(d)); // 2
	console.log(Number.parseInt(d)); // 2
	console.log(Number.parseInt(d.toFixed(0))); // 2

	// Use Variable b , d To Get This Values
	console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string
	console.log(Math.trunc(Math.floor(b) / Math.ceil(d))); // 66 => number
};

export const assign04 = () => {
	let word = "Elzero Web School";

	// Use [Slice, CharAr] Methods
	console.log(word.charAt(2).toUpperCase() + word.slice(3, 6)); // Zero

	// Return 8H
	console.log(word.charAt(word.indexOf("h")).toUpperCase().repeat(8)); // 8 H

	// Return Array
	console.log(word.split(" ", 1)); // ["Elzero"]

	// Only Use substr Method + Template Literals
	console.log(word.substr(0, 6) + " " + word.substr(11)); // Elzero School

	// Make It Dynamic To Return The String With The First And The Last Letter Are Lower Case, And The Others Are Upper Case
	console.log(word[0].toLowerCase() + word.slice(1, -1).toUpperCase() + word[word.lastIndexOf("l")].toLowerCase()); // eLZERO WEB SCHOOl
};

export const assign05 = () => {
	// Convert The Code To Turnary If Syntax
	let a = 10;
	a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

	// Convert The Code To Turnary If Syntax
	let st = "Elzero Web School";

	st.length * 2 == "34" ? console.log("Good") : "";

	// W Position May Be Change
	st.charAt(st.indexOf("W")) == "W" ? console.log("Good") : "";

	typeof st.indexOf("W") !== "string" ? console.log("Good") : "";

	typeof st.indexOf("W") === "number" && st.indexOf("W") > 0 ? console.log("Good") : "";

	st.slice(0, 6).repeat(2) === "ElzeroElzero" ? console.log("Good") : "";
};

export const assign06 = () => {
	// Convert The If Statement To Switch Code
	let job = "Support";
	let salary = 0;

	switch (job) {
		case "Manager":
			salary = 8000;
			break;
		case "IT":
		case "Support":
			salary = 6000;
			break;
		case "Developer":
		case "Designer":
			salary = 7000;
			break;
		default:
			salary = 4000;
			break;
	}
	console.log(`My Salary Is: ${salary}`);

	// Convert The Switch Code To If Statement
	let holidays = 2;
	let money = 0;

	if (holidays === 0) {
		money = 5000;
	} else if (holidays === 1 || holidays === 2) {
		money = 4000;
	} else if (holidays === 3) {
		money = 3000;
	} else if (holidays === 4) {
		money = 2000;
	} else if (holidays === 5) {
		money = 1000;
	} else {
		money = 0;
	}
	console.log(`My Money Is: ${money || "Your Salary Is Suspended"}`);
};

export const assign07 = () => {
	let zero = 0;
	let count = 3;

	let my1 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
	// console.log(my1.reverse().slice(--count)); // ["Osama", "Elham", "Mazero", "Ahmed"]

	let my2 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
	// console.log(my2.reverse().splice(count, --count)); // ["Elham", "Mazero"]

	let my3 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
	// console.log(my3[--count].slice(zero, count) + my3[--count].slice(++count)); // "Elzero"

	let my4 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
	let r = my4[count - --count].slice(-count)[zero];
	let O = my4[--count].slice(--zero - count++)[--count].toUpperCase();
	console.log(r + O), count; // "rO"
};

export const assign08 = () => {
	let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Rahma"];
	let employees = ["Amgad", "Sameh", "Ameer", "Omar", "Aya", "Saif", "Samia", "Anwar", "Sherif", "Osama", "Ragab"];
	let avAdmins = [];

	// Admins Box
	let adminsDiv = document.createElement("div");
	let adminsNo = document.createElement("p");
	for (let i in admins) {
		if (admins[i] === "Stop") break;
		avAdmins.push(admins[i]);
	}
	adminsNo.innerText = `We Have ${avAdmins.length} Admins`;
	adminsDiv.appendChild(adminsNo);
	adminsDiv.appendChild(document.createElement("hr"));
	document.body.appendChild(adminsDiv);

	// Teams
	for (let i in avAdmins) {
		let teamAdmin = document.createElement("div");
		let teamMembers = document.createElement("h3");
		let membersDiv = document.createElement("div");
		teamAdmin.innerText = `${avAdmins[i]} Is The Admin For Team [ ${+i + 1} ]`;
		teamMembers.innerText = "Team Members:";

		let x = 0;
		for (let j in employees) {
			if (avAdmins[i][0] === employees[j][0]) {
				x++;
				let member = document.createElement("p");
				member.innerText = `${x}- ${employees[j]}`;
				membersDiv.appendChild(member);
			}
		}
		document.body.appendChild(teamAdmin);
		document.body.appendChild(teamMembers);
		document.body.appendChild(membersDiv);
		document.body.appendChild(document.createElement("hr"));
	}
};

export const assign09 = () => {
	// Print -> Hello [name], Your Age Is: [age], You [Are/Not] Available For Hire
	function showDetails(a, b, c) {
		let arr = Array(a, b, c);
		let name = "";
		let age = "";
		let isAvailable = "";
		for (let value of arr) {
			typeof value === "string"
				? (name = `Hello ${value}, `)
				: typeof value === "number"
				? (age = `Your Age Is: ${value}, `)
				: typeof value === "boolean"
				? (isAvailable = `${value === true ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
				: "";
		}
		console.log(name + age + isAvailable);
	}

	showDetails("Shehab", 38, true);
	showDetails(38, "Hesham", true);
	showDetails(false, 38, "Aya");
	showDetails(false, "Rahma", 38);

	// Print -> [Osama], [Mohamed], [Ali], [Ibrahim] => Done!
	let names = (...names) => `[${names.join("], [")}] Done!`;
	console.log(names("shehab", "hesham", "aya", "salma"));

	// print -> 80
	let numbers = [20, 50, 10, 60];
	let calc = (num1, num2, ...nums) => num1 + num2 + nums[0];
	console.log(calc(10, numbers[0], numbers[1]));
};

export const assign10 = () => {
	// Return "Elzero Web School" With Using Map, Filter, Reduce, And Chain Methods
	let string = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
	let solution = string
		.split("")
		.filter((ele) => isNaN(ele) && ele !== ",")
		.map((ele, i, array) => (ele === "_" ? " " : ele))
		.slice(+!false, -true)
		.reduce((acc, cur, i, arr) => acc + cur);
	console.log(solution); // Elzero Web School
};

export const assign11 = () => {
	/* 
	- Create Container Element Has A Class Name = Product
	- The Container Has 2 Element [h3, p], And The Element Have Any Text
	- Repeat The Container 100 Time
	*/

	let container = document.createElement("div");
	for (let i = 1; i <= 100; i++) {
		let div = document.createElement("div");
		let h3 = document.createElement("h3");
		let p = document.createElement("p");
		let h3Text = document.createTextNode(`Product Name: ${i}`);
		let pText = document.createTextNode("Product Description");

		container.classList = "product-container";
		div.classList = "product";
		h3.classList = "product-title";
		p.classList = "product-desciption";

		h3.appendChild(h3Text);
		p.appendChild(pText);

		container.appendChild(div);
		div.appendChild(h3);
		div.appendChild(p);
		document.body.appendChild(container);
	}
};

export const assign12 = () => {
	// ======== Header ========
	// Elements
	let header = document.createElement("header");
	let title = document.createElement("h3");
	let navbar = document.createElement("nav");

	// Texts
	let titleText = document.createTextNode("Elzero");
	let linksText = ["Home", "About", "Services", "Contant"];

	// Appends
	header.append(title);
	title.appendChild(titleText);
	header.append(navbar);
	linksText.forEach((lnk) => {
		let link = document.createElement("a");
		link.className = "link";
		link.href = "#";
		link.append(lnk);
		link.style.cssText = `font-family: cursive`;
		navbar.appendChild(link);
	});
	document.body.prepend(header);

	// Attributes
	navbar.className = "navbar";
	header.className = "header";
	title.className = "title";

	// Styling
	let flex = `display: flex; justify-content: space-between; align-items: center;`;
	header.style.cssText = `${flex} background-color: #333; padding: 0 15px; border-radius: 10px`;
	title.style.cssText = `color: orange; letter-spacing: 2px; font-family: cursive`;
	navbar.style.cssText = flex;

	// ======== Section ========
	let section = document.createElement("section");
	for (let i = 1; i <= 15; i++) {
		// Elements
		let product = document.createElement("div");
		let description = document.createElement("p");

		// Texts
		let descText = document.createTextNode("Product");
		let count = document.createElement("span");

		// Appends
		header.after(section);
		section.appendChild(product);
		product.prepend(count);
		product.append(description);
		description.append(descText);
		count.prepend(i);

		// Attributes
		product.className = "product-box";
		count.className = "product-count";
		description.className = "product-desc";

		// Styling
		section.style.cssText = `${flex} flex-wrap: wrap; padding: 10px 0; gap: 10px`;
		product.style.cssText = `background-color: #333; width: calc((100% / 3) - 30px); display: flex; flex-direction: column; align-items: center; padding: 10px; border-radius: 10px`;
		count.style.cssText = `font-size: 30px; font-family: cursive`;
		description.style.cssText = `color: #999; font-size: 14px; font-family: cursive`;
	}

	// ======== Footer =========
	// Elements
	let footer = document.createElement("footer");
	let copyright = document.createElement("h3");

	// Texts
	let copyrightText = document.createTextNode("Copyright");

	// Appends
	section.after(footer);
	footer.append(copyright);
	copyright.appendChild(copyrightText);

	// Attributes
	footer.className = "footer";
	footer.id = "footer";
	copyright.className = "text";

	// Styles
	footer.style.cssText = `background: #333; width: 100%; text-align: center; border-radius: 10px`;
	copyright.style.cssText = "padding: 10px; letter-spacing: 2px; font-family: cursive";
};

export const assign13 = () => {
	/* 
	[1] Create The Order Section
	[2] Show Tasks Section
	[3] Add Data From The Tasks
	[4] Delete Data From The Tasks
	*/

	// [1] Create The Order Section
	// Create
	let todos = document.createElement("section");
	let getTask = document.createElement("div");
	let input = document.createElement("input");
	let addBtn = document.createElement("button");
	let addBtnText = document.createTextNode("add");

	// Attribute
	todos.className = "todos-section";
	todos.id = "todos-section";
	getTask.className = "get-task";
	input.className = "input-task";
	addBtn.className = "add-btn";

	// Appends
	document.body.prepend(todos);
	todos.prepend(getTask);
	getTask.append(addBtn);
	getTask.prepend(input);
	input.placeholder = "new task";
	addBtn.appendChild(addBtnText);

	// Styles
	let flex = `display: flex; justify-content: space-between; align-items: center;`;
	document.body.style.cssText = "display: flex; justify-content: center";
	todos.style.cssText = `background: #444; width: 400px; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 20px 0`;
	getTask.style.cssText = `${flex} background: #333; width: 90%; position:`;
	addBtn.style.cssText = `background: orange; color: black; font-size: 14px; font-weight: bold; padding: 10px 10px; border-radius: 5px; cursor: pointer`;
	input.style.cssText = "font-size: 16px";

	// [2] Add Data To The Tasks
	let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

	function addNewTask() {
		if (input.value === "") return;
		if (!Array.isArray(tasks)) return console.log(`tasks Is Not An Array: ${tasks}`);

		tasks.push({ id: new Date().getTime(), task: input.value });
		window.localStorage.setItem("tasks", JSON.stringify(tasks));
		input.value = "";
		tasksList();
	}

	addBtn.addEventListener("click", addNewTask);
	window.addEventListener("keypress", (event) => event.key === "Enter" && addNewTask());

	// [3] Show Tasks Section
	let showTasks = document.createElement("div");
	showTasks.className = "tasks-list";
	todos.append(showTasks);
	function tasksList() {
		showTasks.innerHTML = "";
		for (let i in tasks) {
			// Create
			let task = document.createElement("div");
			let taskField = document.createElement("input");
			let deleteBtn = document.createElement("button");
			let index = document.createElement("span");
			let deleteBtnText = document.createTextNode("delete");

			// Attribute
			taskField.disabled = true;
			task.className = "task";
			taskField.className = "task-field";
			deleteBtn.className = "delete-btn";

			// Appends
			showTasks.append(task);
			task.prepend(index);
			task.append(taskField);
			task.append(deleteBtn);
			index.innerHTML = `${+i + 1}-`;
			deleteBtn.append(deleteBtnText);
			deleteBtn.setAttribute("data-task-index", i);
			taskField.value = tasks[i].task;

			// Styles
			showTasks.style.cssText = `width: 90%`;
			task.style.cssText = `${flex} background: #333; padding: 5px; margin: 5px 0`;
			deleteBtn.style.cssText = `background: red; color: white; font-size: 12px; font-weight: bold; padding: 5px; border-radius: 5px; cursor: pointer`;

			// [4] Delete Data From The Tasks
			deleteBtn.addEventListener("click", () => {
				let taskIndex = deleteBtn.getAttribute("data-task-index");
				tasks.splice(taskIndex, 1);
				window.localStorage.setItem("tasks", JSON.stringify(tasks));
				tasksList();
			});
		}
	}
	tasksList();
};

export const assign14 = () => {
	let i = 1;

	let friends = [
		{ title: "shehab", age: 23, avail: true, skills: ["html", "css"] },
		{ title: "hesham", age: 22, avail: false, skills: ["python", "django"] },
		{ title: "aya", age: 22, avail: true, skills: ["php", "laravel"] },
	];
	let {
		title,
		age,
		avail,
		skills: [, two],
	} = friends[i];

	console.log(`Name Is: ${title}, age Is: ${age}, Is ${avail ? "Available" : "Not Available"}, skill: ${two}`);
};

export const assign15 = () => {
	/*
	Requirements: 
	- Print 210 In The Console
	- Can't Use Numbers, True OR False
	- Can't Use Array Indexes Methods
	- Can't Use Loops OR Heigher Order Functions
	- Solution In One Line Inside The Console
	- Can Use Length Just One Time

	Hints To Make Solation Easy:
	- In Calculations Just Use [*] Operator
	- Set
	- Spread Operator [...arr]
	- Math Object Method
	*/

	let n1 = [10, 30, 10, 20];
	let n2 = [30, 20, 10];

	console.log(++n1[new Set(n1).size] * n1[--n2.length]); // 210
};

export const assign16 = () => {
	let url1 = "elzero.org";
	let url2 = "http://elzero.org";
	let url3 = "https://elzero.org";
	let url4 = "https://www.elzero.org";
	let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

	let regex = /(https?:\/\/)?(www.)?\w+.\w+((:\d{4})?(\/.+)\??)?/gi; //
	console.log(url1.match(regex));
	console.log(url2.match(regex));
	console.log(url3.match(regex));
	console.log(url4.match(regex));
	console.log(url5.match(regex));
};

export const assign17 = () => {};

export const assign18 = () => {};

export const assign19 = () => {};

export const assign20 = () => {};
