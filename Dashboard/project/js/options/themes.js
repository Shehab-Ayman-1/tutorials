export default function themes() {
	let btns = document.querySelectorAll("aside.setting-side .nested-ul .theme-option");
	let themesClasses = [];
	btns.forEach((btn) => {
		themesClasses.push(btn.dataset.theme);
		btn.addEventListener("click", () => {
			themesClasses.forEach((theme) => document.body.classList.remove(theme));
			document.body.classList.add(btn.dataset.theme);
		});
	});
}
