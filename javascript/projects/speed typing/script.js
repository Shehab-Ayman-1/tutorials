/* 
    [1] Get The Player Name
    [2] Choose The Game Level
    [3] Remove The Start Game Page And Bigen The Game
*/

import words from "./words.js";

/* Variables */
let startBtn = document.querySelector(".start-game .start-btn");
let select = document.querySelector("select");

let player = document.querySelector(".player span");

let word = document.querySelector(".word");
let input = document.querySelector(".input");
let nextWords = document.querySelector(".next-words");
let level = document.querySelector(".heading span");

let timerEl = document.querySelector(".bottom-widget .timer");
let timeEl = document.querySelector(".mid-widget .time");
let totalScoreEl = document.querySelector(".bottom-widget .total-score");
let wrongeEl = document.querySelector(".bottom-widget  .wronge-tries .wronge");
let currectEl = document.querySelector(".bottom-widget .currect");

let success = document.querySelector("#success");
let win = document.querySelector("#win");
let failed = document.querySelector("#failed");

startBtn.addEventListener("click", startGame);
window.addEventListener("load", () => startBtn.click());

/* Logic Variables */
let time = select.value === "easy" ? 6 : select.value === "medium" ? 5 : 4;
let duration = time;
let currectAnswers = 0;
let wrongeAnswers = 0;

/* Start Game */
function startGame() {
	// player.textContent = prompt("Player Name: ") || "Unknown";
	startBtn.parentElement.remove();

	level.textContent = `[${select.value}]`;

	totalScoreEl.textContent = words.length;

	timerEl.textContent = duration;
	timeEl.textContent = `[${duration} Seconds]`;

	input.focus();

	logic();
}

/* Logic */
function logic() {
	let randomWords = randomWorks();

	/* Add List Of Random Words Under The Input Field */
	randomWords.forEach((word, i) => {
		let p = document.createElement("p");
		p.setAttribute("data-index", i);
		p.appendChild(document.createTextNode(word));
		nextWords.appendChild(p);
	});

	/* Create The Initial Index Of The Showen Word */
	let index = 0;
	word.textContent = randomWords[index];

	let interval = setInterval(() => {
		timerEl.textContent = --duration;

		/* The Time Is End */
		if (duration !== 0) return;
		duration = time;

		if (input.value === word.textContent) {
			currectEl.textContent = ++currectAnswers;
			win.play();
		} else {
			wrongeEl.textContent = ++wrongeAnswers;
			failed.play();
		}

		let currentWord = Array.from(nextWords.querySelectorAll("p")).filter((el) => el.dataset.index == index);
		nextWords.removeChild(currentWord[0]);

		input.value = "";
		word.textContent = randomWords[++index];

		/* The Game Is End */
		if (index === 30) {
			clearInterval(interval);
			if (currectAnswers > words.length / 2) {
				word.textContent = `Congratolations [${player.textContent}], You Can To Write [${currectAnswers}] Words In Currect`;
				word.style.fontSize = "14px";
				success.play();
			} else {
				word.textContent = `You Are A Big Loooser [${player.textContent}], You Just Can To Write [${wrongeAnswers}] Words In Currect`;
				word.style.fontSize = "14px";
				failed.play();
			}
		}
	}, 1000);
}

/* Create A Randome Array Of The Words */
function randomWorks() {
	let keys = [...words.keys()];
	keys = keys.map((key) => (key = words[Math.floor(Math.random() * keys.length)]));

	return keys;
}
