export default function settings() {
	let settingSide = document.querySelector("aside.setting-side");
	let closeSetting = document.querySelector("aside.setting-side .close-setting");
	let openSetting = document.querySelector("header .right-icons .open-setting");
	closeSetting.addEventListener("click", () => settingSide.classList.remove("close"));
	openSetting.addEventListener("click", () => settingSide.classList.add("close"));
}
