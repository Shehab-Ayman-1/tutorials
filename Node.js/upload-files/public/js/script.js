const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const files = document.querySelector("#input-files").files;
	const success = document.querySelector(".success");
	const error = document.querySelector(".error");
	const formData = new FormData();

	Object.keys(files).forEach((key) => {
		let name = files.item(key).name;
		let value = files.item(key);
		formData.append(name, value);
	});

	const response = await fetch("http://localhost:5000/api/upload-files", { method: "POST", body: formData });
	const json = await response.json();

	if (json.status === 200) success.innerHTML = `Status: ${json.status} <br /> Message: ${json.message}`;
	else error.innerHTML = `Status: ${json.status} <br /> Message: ${json.message}`;

	setTimeout(() => {
		// success.textContent = "";
		// error.textContent = "";
	}, 2000);
});
