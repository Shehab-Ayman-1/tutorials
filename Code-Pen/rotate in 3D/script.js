const box = document.querySelector(".box");
const boxImage = document.querySelector(".box .box-img");
const img = document.querySelector(".box .box-img img");

const boxImageRotationX = () => {
	const scrollY = window.scrollY;
	const boxImageY = box.offsetTop - 800;
	if (scrollY > boxImageY) {
		let rotation = (scrollY / boxImageY) * 25;
		console.log(rotation);
		boxImage.style.transform = `rotateX(${rotation > 50 ? 50 : rotation < 0 ? 0 : rotation}deg)`;
	} else {
		boxImage.style.transform = `rotateX(0deg)`;
	}
};

window.addEventListener("scroll", boxImageRotationX);
window.addEventListener("load", boxImageRotationX);
