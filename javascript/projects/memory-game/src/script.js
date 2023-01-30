// Variables
let player = document.querySelector(".top-widget .player span");
let tries = document.querySelector(".top-widget .tries span");
let boxes = document.querySelectorAll("main .box");
let imgs = document.querySelectorAll("main img");
let winAudio = document.getElementById("win");
let failAudio = document.getElementById("fail");

let chosen = [];
let wrongTries = 0;
let currectTries = 0;

// player.innerHTML = window.prompt("Player Name: ");

// Change The Cards Position
boxes.forEach((box) => (box.style.order = Math.floor(Math.random() * boxes.length)));

setTimeout(() => {
	boxes.forEach((box) => {
		box.querySelector(".unknown").classList.add("active");
		box.querySelector(".pic").classList.remove("active");
		box.addEventListener("click", () => chooseMemory(box));
	});
}, 3000);

function chooseMemory(box) {
	if (box.querySelector(".pic").classList.contains("active")) return;

	box.querySelector(".unknown").classList.remove("active");
	box.querySelector(".pic").classList.add("active");
	chosen.push(box.dataset.name);

	checker();
}

function checker() {
	if (chosen.length < 2) return;
	let pointer = (pointer) => (boxes[0].parentElement.style.pointerEvents = pointer);

	pointer("none");
	if (chosen[0] === chosen[1]) {
		winAudio.play();
		boxes.forEach((box) => box.dataset.name === chosen[0] && box.classList.add("currect"));
		currectTries++;
		chosen = [];
		pointer("initial");
	} else {
		setTimeout(() => {
			failAudio.play();
			tries.textContent = ++wrongTries;
			let matches = Array.from(boxes).filter((box) => box.dataset.name === chosen[0] || box.dataset.name === chosen[1]);
			matches.forEach((el) => {
				el.querySelector(".unknown").classList.add("active");
				el.querySelector(".pic").classList.remove("active");
			});
			chosen = [];
			pointer("initial");
		}, 500);
	}

	let allCurrect = Array.from(boxes).every((box) => box.classList.contains("currect"));
	if (allCurrect) {
		alert("Congratolations, You Find All The Blocks");
	}
	if (wrongTries === 30) {
		let again = window.confirm("Sorry, You Are Big Looser...");
		again ? location.reload() : window.close();
	}
}
