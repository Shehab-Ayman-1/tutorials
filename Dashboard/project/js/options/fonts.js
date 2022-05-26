export default function fonts() {
	let btns = document.querySelectorAll("aside.setting-side .nested-ul .font-option");
	let fontClasses = [];

	btns.forEach((btn) => {
		fontClasses.push(btn.dataset.font);
		btn.addEventListener("click", () => {
			fontClasses.forEach((font) => document.body.classList.remove(font));
			document.body.classList.add(btn.dataset.font);
		});
	});
}
