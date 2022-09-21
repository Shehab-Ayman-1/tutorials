export const assign1 = () => {
	console.log("The First Script Code In HTML Won't Work Because It Write In The Head Tag & Without Onload Function");
};

export const assign2 = () => {
	let elzero = document.getElementById("Elzero");
	elzero.style.color = "red";
	elzero.style.textAlign = "center";
	elzero.style.fontSize = "font-size: 80px";
	elzero.style.fontWeight = "bold";
	elzero.style.fontFamily = "Arial";
};
