/* ================================================== Variables ================================================== */
// Top Widget
let topWidget = document.getElementById("top-widget");
let catLang = topWidget.querySelector(".catagory-lang span");
let quesCount = topWidget.querySelector(".question-no span");

// Mid Widget
let midWidget = document.getElementById("mid-widget");
let openQuiz = midWidget.querySelector(".open");
let title = openQuiz.querySelector(".question-title");
let inputs = openQuiz.querySelectorAll(".question-answers input");
let labels = openQuiz.querySelectorAll(".question-answers label");
let no = openQuiz.querySelector(".no b");
let subBtn = openQuiz.querySelector(".submit-btn");
let closeQuiz = midWidget.querySelector(".close");
let score = closeQuiz.querySelector(".score");
let totalScore = closeQuiz.querySelector(".total-score");
let state = closeQuiz.querySelector(".state");
let againBtn = midWidget.querySelector(".again-btn");

// Bottom Widget
let bottomWidget = document.getElementById("bottom-widget");
let bollets = bottomWidget.querySelectorAll(".bollets .bollet");
let time = bottomWidget.querySelector(".time");

// Fetch Data
(async function fetchData() {
	let fetchData = await fetch("./questions.json");
	logic(await fetchData.json());
})();

// All Application Logic
// Logic Variables
let rightAnswer = 0;
let wrongAnswer = 0;
let questionNo = 0;
let interval;

function logic(data) {
	quesCount.textContent = data.html.length;
	catLang.textContent = Object.keys(data)[0];

	showAnswers(data.html);
	subBtn.addEventListener("click", () => nextQuestion(data.html));

	againBtn.addEventListener("click", () => againQuiz(data.html));
}

function showAnswers(html) {
	countDown(5);
	no.textContent = questionNo < 10 ? `0${questionNo + 1}` : questionNo + 1;
	title.textContent = html[questionNo].title;
	labels.forEach((label, i) => (label.textContent = html[questionNo][`answer_${i + 1}`]));
	bollets.forEach((bollet) => {
		if (+bollet.dataset.index === questionNo) {
			bollet.classList.add("active");
		}
	});
}

function nextQuestion(html) {
	clearInterval(interval);
	// Quiz Is Working Now
	if (questionNo !== html.length - 1) {
		inputs.forEach((input) => {
			if (input.checked) {
				input.value = input.nextElementSibling.textContent;
				input.value === html[questionNo].right_answer ? rightAnswer++ : wrongAnswer++;

				questionNo++;
				showAnswers(html);
			}
		});
		inputs[0].checked = true;
	}
	// Quiz Is Done
	else {
		score.textContent = rightAnswer;
		totalScore.textContent = html.length;
		if (parseInt(score.textContent) > html.length / 2) {
			state.textContent = "CONGRATOLATIONS GO TO THE NEXT LEVEL NOW.";
			score.style.color = "green";
			state.style.color = "green";
		} else {
			state.textContent = "SORRY YOU ARE NOT READY TO THE NEXT LEVEL.";
			score.style.color = "red";
			state.style.color = "red";
		}
		closeQuiz.style.display = "block";
		openQuiz.style.display = "none";
	}
}

function againQuiz(html) {
	questionNo = 0;
	inputs.forEach((input) => (input.checked = false));
	bollets.forEach((bollet) => (bollet.className = "bollet"));
	inputs[0].checked = true;
	closeQuiz.style.display = "none";
	openQuiz.style.display = "block";
	showAnswers(html);
}

function countDown(duration) {
	let minutes, seconds;

	interval = setInterval(() => {
		minutes = parseInt(duration / 60);
		seconds = parseInt(duration % 60);
		if (--duration < 0) {
			clearInterval(interval);
			subBtn.click();
		}
		time.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	}, 1000);
}
