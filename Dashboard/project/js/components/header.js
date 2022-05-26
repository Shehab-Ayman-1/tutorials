// ================== Open & Close in sidebar =================
export default function header() {
	let header = document.querySelector("header");
	let aside = document.querySelector("aside.sidebar#sidebar");
	let closeSidebar = document.querySelector("#close-sidebar");
	closeSidebar.addEventListener("click", () => {
		aside.classList.toggle("remove");
		header.classList.toggle("full");
	});
}
