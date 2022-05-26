export default function subMenu(linkTitle, degree) {
	let linksTitles = document.querySelectorAll(linkTitle);
	linksTitles.forEach((title) => {
		title.addEventListener("click", () => {
			let ul = title.nextElementSibling;
			ul.classList.toggle("Hide");
			if (ul.classList.contains("Hide")) title.querySelector("i").style.transform = `rotate(${degree}deg)`;
			else title.querySelector("i").style.transform = "rotate(0)";
		});
	});
}
