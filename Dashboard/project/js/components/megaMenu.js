export default function megaMenu() {
	let userInfo = document.querySelector("header .user-info");
	let megaMenu = document.querySelector("header .mega-menu");
	userInfo.addEventListener("click", () => megaMenu.classList.toggle("open"));
}
