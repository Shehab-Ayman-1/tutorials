// Variables
let widgets = document.querySelector(".widgets");
let imgs = widgets.querySelectorAll("img");
let navigation = document.querySelector(".navigation");
let pagination = document.querySelector(".pagination");

// Create The Current Slide Index
let current = 0;

// Put Index On The Images
imgs.forEach((img, i) => (img.dataset.index = i));

// Navigation Arrows
let navs = [
	{ span: "slide-left", icon: "fas fa-chevron-circle-left", functionality: "left" },
	{ span: "slide-right", icon: "fas fa-chevron-circle-right", functionality: "right" },
];
for (let i = 0; i < navs.length; i++) {
	let span = document.createElement("span");
	let icon = document.createElement("i");
	span.className = navs[i].span;
	icon.className = navs[i].icon;
	span.appendChild(icon);
	navigation.appendChild(span);
	span.addEventListener("click", () => navigate(navs[i].functionality));
}

// Pagination Bollets
for (let i = 0; i < imgs.length; i++) {
	let bollet = document.createElement("span");
	bollet.dataset.index = i;
	bollet.appendChild(document.createTextNode(i + 1));
	pagination.appendChild(bollet);
	bollet.addEventListener("click", () => {
		current = +bollet.dataset.index;
		navigate();
		pagination.querySelectorAll("span").forEach((bol) => bol.classList.remove("active"));
		bollet.classList.add("active");
	});
}
// Make The First Span Is Active As A Default
pagination.querySelector("span").classList.add("active");

function navigate(dir = false) {
	if (dir === "left") current === 0 ? (current = imgs.length - 1) : (current -= 1);
	if (dir === "right") current >= imgs.length - 1 ? (current = 0) : (current += 1);

	imgs.forEach((img) => {
		img.classList.remove("active");
		if (+img.dataset.index === current) img.classList.add("active");
	});
	pagination.querySelectorAll("span").forEach((span) => span.classList.remove("active"));
	pagination.querySelector(`span[data-index='${current}']`).classList.add("active");
}
