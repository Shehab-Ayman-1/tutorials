export const selectors = () => {
	/* 
	- getElementById | querySelector | querySelectorAll
	- getElementsByClassName | getElementsByName | getElementsByTagName
	- body | title | images | links | forms
	*/

	let id = document.getElementById("my-div");
	let query1 = document.querySelector(".special");
	let query2 = document.querySelector("#my-div");
	let query3 = document.querySelector("[name='username']");
	let queryAll = document.querySelectorAll("p");
	let className = document.getElementsByClassName("my-span");
	let name = document.getElementsByName("input");
	let tagName = document.getElementsByTagName("form");
	let body = document.body;
	let title = document.title;
	let images = document.images[0];
	let links = document.links[0];
	let forms = document.forms[0];

	console.log("id           =>", id);
	console.log("query1       =>", query1);
	console.log("query2       =>", query2);
	console.log("query3       =>", query3);
	console.log("queryAll[0]  =>", queryAll[0]);
	console.log("className[0] =>", className[0]);
	console.log("name[0]      =>", name[0]);
	console.log("tagName[0]   =>", tagName[0]);

	console.log(`#`.repeat(50));
	console.log("title        =>", title);
	console.log("body         =>", body);
	console.log("images       =>", images);
	console.log("links        =>", links);
	console.log("forms        =>", forms);
};

export const attributes = () => {
	/* 
	- Get & Set The Elements
	- attributes | getAttribute() | setAttribute() | hasAttribute()
	- innerHTML | innerText | textContent
	*/

	// Set Attributes
	let span = document.querySelector(".my-span");

	span.textContent = "Span From DOM.js <br/>"; // Span From DOM.js <br/>
	span.innerText = "Span From DOM.js <br/>"; // Span From DOM.js <br/>
	span.innerHTML = "Span From DOM.js <br/>"; // From DOM.js

	document.links[0].textContent = "Github.com"; // Set The Content Of The Link
	document.links[1].textContent = "Twitter.com"; // Set The Content Of The Link

	document.links[0].href = "https://github.com"; // Set The Attribute Of The Link
	document.links[1].setAttribute("href", "https://twitter.com"); // Set The Attribute Of The Link

	// Get Attributes
	console.table({
		textContent: span.textContent, // Get The Text Content Of The Element
		innerText: span.innerText, // Get The Text Inside The Element
		innerHTML: span.innerHTML, // Get The HTML Content
		getAttribute1: document.links[0].getAttribute("href"), // Get The href Attrebute Content
		getAttribute2: document.links[1].getAttribute("href"), // Get The href Attrebute Content
	});

	// Check Attributes
	let paragraph = document.querySelector("p");
	console.log(span.attributes); // Return All The Attributes Of The Element
	console.log(span.hasAttribute("id")); // true, Check If This Element Has The ID Attribute OR Not
	console.log(span.hasAttributes()); // true, Check If Has Attributes OR Not
	console.log(paragraph.hasAttributes()); // false, Check If Has Attributes OR Not
};

export const elements = () => {
	/* 
	- createElement(), createComments(), createTextNode(), createAttributes(), appendChild()
	- append, prepend, after, before, remove
	*/

	let br = document.createElement("br");
	let h1 = document.createElement("h1");
	let textNode = document.createTextNode("My h1 Title");
	let attribute = document.createAttribute("data-product");
	let comment = document.createComment("My New Comment");

	h1.className = "container-box";
	h1.setAttributeNode(attribute); // <data-product>
	h1.setAttribute("data-index", "2"); // <data-index='2'>
	h1.appendChild(textNode);
	h1.appendChild(comment);

	document.body.appendChild(br);
	document.body.appendChild(h1);

	// =======================================================================
	let afterP = document.createElement("h4");
	let beforeP = document.createElement("h4");
	let appendP = document.createElement("p");
	let prependP = document.createElement("p");

	let afterText = document.createTextNode(" After, Outside Element ");
	let beforeText = document.createTextNode(" Before, Outside Element ");
	let appendText = document.createTextNode(" Append, Inside Element ");
	let prependText = document.createTextNode(" Prepend, Inside Element ");

	afterP.appendChild(afterText); // [Element || Text]
	beforeP.appendChild(beforeText); // [Element || Text]
	appendP.appendChild(appendText); // [Element || Text]
	prependP.appendChild(prependText); // [Element || Text]

	h1.after(afterP);
	h1.before(beforeP);
	h1.append(appendP);
	h1.prepend(prependP);
	document.querySelector("p").remove();
};

export const children = () => {
	/* 
	- children, childNode
	- firstChild, lastChild
	- firstElementChild, lastElementChild
	*/

	let div = document.querySelector(".DOM");
	console.log(div.children); // All The Children [Just Elements]
	console.log(div.childNodes); // All The Children Nodes [Elements, Texts]
	console.log(div.firstChild); // First Node Child
	console.log(div.lastChild); // Last Node Child
	console.log(div.firstElementChild); // First Element
	console.log(div.lastElementChild); // Last Element
};

export const events = () => {
	/* 
	- addEventListener, removeEventListener
	- onclick, oninput, oncontextmenu, onmouseenter, onmouseleave
	- onload, onscroll, onresize
	- onfocus, onblur, onsubmit
	- click, submit, focus, blur
	*/

	let btn = document.querySelector(".btn");
	let inputs = document.querySelectorAll("input");
	let form = document.querySelector("form");
	let links = document.querySelectorAll(".my-link");
	let div = document.querySelector(".divs .my-div");

	div.addEventListener("click", () => console.log("Hello, Add Event Listener."));

	btn.onclick = () => console.log("Hello, On Click.");
	btn.oncontextmenu = () => console.log("Hello, On Context Menu.");
	btn.onmouseenter = () => console.log("Hello, On Mouse Enter.");
	btn.onmouseleave = () => console.log("Hello, On Mouse Leave.");

	window.onload = () => console.log("Hello, On Load");
	window.onscroll = () => console.log("Hello, On Scroll");
	window.onresize = () => console.log("Hello, On Resize");

	inputs[0].onfocus = () => console.log("Hello, On Focus");
	inputs[0].onblur = () => console.log("Hello, On Blur");
	form.onsumbit = () => console.log("Hello, On Submit");

	// Check Input Validity
	let isUserValid = false;
	let isAgeValid = false;
	inputs[0].oninput = () => {
		if (inputs[0].value.length > 10 && inputs[0].value.length < 20) {
			isUserValid = true;
			inputs[1].focus();
		}
	};
	inputs[1].oninput = () => {
		if (inputs[1].value.length) {
			isAgeValid = true;
			inputs[1].blur();
		}
	};
	form.onsubmit = (event) => {
		if (!isUserValid || !isAgeValid) {
			event.preventDefault();
		} else {
			form.submit();
		}
	};
	links.forEach((link) => {
		link.onclick = (event) => {
			if (!isUserValid || !isAgeValid) {
				event.preventDefault();
			} else {
				form.submit();
			}
		};
	});
};

export const classList = () => {
	let element = document.querySelector(".my-div");
	element.onclick = () => {
		element.className = "from-class-name"; // Delete All The Classes, Then Add This Class

		element.classList.add("red"); // Can Add Multiple Class [...classes]

		element.classList.remove("hide"); // Can Remove Multiple Class [...classes]

		element.classList.toggle("show"); // Toggle Class [classes, force]

		console.log(element.classList.length); // 5

		console.log(element.classList.item("3")); // red

		console.log(element.classList.contains("show")); // true
	};
};

export const styles = () => {
	let div = document.querySelector(".my-div");

	div.style.cssText = `font-size: 25px; line-height: 2; padding-left: 20px`;

	div.style.backgroundColor = "#333";
	div.style.color = "orange";

	div.style.setProperty("margin", "10px 20px"); // [property, value, important?]
	div.style.removeProperty("transition"); // [property, value, important?]
};

export const siblings = () => {
	/* 
	- nextSibling, previousSibling
	- nextElementSibling, previousElementSibling
	- parentElement
	*/
	let p = document.querySelectorAll("p")[1];
	console.log(p.parentElement); // Parent Element
	console.log(p.previousSibling); // Previous Node
	console.log(p.nextSibling); // Next Node
	console.log(p.previousElementSibling); // Previous Element
	console.log(p.nextElementSibling); // Next Element
};

export const clone = () => {
	/* 
	- true -> Clone The Entries Elements As Well
	- false -> Clone The Paragraph Only
	*/
	let div = document.querySelector(".divs #my-div");
	let p = document.querySelector("p").cloneNode(true);
	div.after(p);

	let container = document.querySelector(".product-container");
	let template = document.querySelector("template").cloneNode(true).content.children[0];
	container.append(template);
};
