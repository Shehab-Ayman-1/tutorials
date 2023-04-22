const rondomID = () => {
	let timmy = Date.now().toString(36).toLocaleUpperCase();
	let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER)
		.toString(36)
		.slice(0, 12)
		.padStart(12, "0")
		.toLocaleUpperCase();
	return `${timmy}-${randy}`;
};

let db = null;
export function indexedDB(data) {
	if (!document.querySelector(".list")) return;
	if (!data) return;

	let DBOpenReq = window.indexedDB.open("WhiskeyDB", 1);
	// [1] Error occurred while trying to open DB
	DBOpenReq.addEventListener("error", (err) => console.error(err));

	// [2] Work Only When The Database Is Creating, OR Create A New Version
	DBOpenReq.addEventListener("upgradeneeded", ({ target: { result }, oldVersion, newVersion }) => {
		console.log("DB updated from version", oldVersion, "to", newVersion);
		db = result;
		let isDBCreated = result.objectStoreNames.contains("whiskeyStore");
		if (!isDBCreated) result.createObjectStore("whiskeyStore", { keyPath: "id" });
	});

	// [3] Work Each Time The Page Refresh
	DBOpenReq.addEventListener("success", ({ target: { result } }) => {
		// DB has been opened... after upgradeneeded
		db = result;
		buildList(result);

		// If The Database Is Empty, Add The Data From The Api
		let tx = makeTX("whiskeyStore", "readwrite");
		let store = tx.objectStore("whiskeyStore");
		let request = store.getAll();

		request.onerror = (err) => console.log(err);
		request.onsuccess = ({ target: { result } }) => !result.length && data.map((item) => store.add(item));
	});

	document.querySelector(".list").addEventListener("click", GET_USER);
	document.getElementById("clear-btn").addEventListener("click", CLEAR_DB);
	document.getElementById("add-btn").addEventListener("click", ADD_USER);
	document.getElementById("delete-btn").addEventListener("click", DELETE_USER);
	document.getElementById("update-btn").addEventListener("click", UPDATE_USER);
}

function makeTX(storeName, mode) {
	let tx = db.transaction(storeName, mode);
	tx.onerror = (err) => console.warn(err);
	return tx;
}

function buildList() {
	// use getAll to get an array of objects from our store
	let list = document.querySelector(".list");
	list.innerHTML = `<li>Loading...</li>`;

	let tx = makeTX("whiskeyStore", "readonly");

	// transaction for reading all objects is complete
	tx.oncomplete = (ev) => {};

	let store = tx.objectStore("whiskeyStore");
	let getReq = store.getAll();

	getReq.onerror = (err) => console.warn(err);
	getReq.onsuccess = ({ target: { result } }) =>
		(list.innerHTML = result.map(({ id, name, age }) => `<li data-key="${id}">${name} ${age}</li>`).join(""));
}

function CLEAR_DB(event) {
	event && event.preventDefault();
	let form = document.whiskeyForm;
	form.reset();
	form.removeAttribute("data-key");
}

function GET_USER(event) {
	let id = event.target.closest("[data-key]").getAttribute("data-key");
	let tx = makeTX("whiskeyStore", "readonly");

	tx.oncomplete = (ev) => {}; // get transaction complete

	let store = tx.objectStore("whiskeyStore");
	let req = store.get(id);

	req.onerror = (err) => console.error(err);
	req.onsuccess = ({ target: { result } }) => {
		document.getElementById("name").value = result.name;
		document.getElementById("country").value = result.country;
		document.getElementById("age").value = result.age;
		document.getElementById("isOwned").checked = result.owned;
		document.whiskeyForm.setAttribute("data-key", result.id);
	};
}

function ADD_USER(event) {
	event.preventDefault();
	let name = document.getElementById("name").value.trim();
	let country = document.getElementById("country").value.trim();
	let age = parseInt(document.getElementById("age").value);
	let owned = document.getElementById("isOwned").checked;

	let newObj = { id: rondomID(), name, country, age, owned };

	let tx = makeTX("whiskeyStore", "readwrite");
	tx.oncomplete = () => {
		buildList();
		CLEAR_DB();
	};

	let store = tx.objectStore("whiskeyStore");
	let request = store.add(newObj);

	request.onsuccess = (ev) => {};
	request.onerror = (err) => {};
}

function UPDATE_USER(event) {
	event.preventDefault();
	let name = document.getElementById("name").value.trim();
	let country = document.getElementById("country").value.trim();
	let age = +document.getElementById("age").value;
	let owned = document.getElementById("isOwned").checked;

	let id = document.whiskeyForm.getAttribute("data-key");
	if (!id) return;

	let updatedObj = { id, name, country, age, owned };
	let tx = makeTX("whiskeyStore", "readwrite");
	tx.oncomplete = (ev) => {
		buildList();
		CLEAR_DB();
	};

	let store = tx.objectStore("whiskeyStore");
	let request = store.put(updatedObj);

	request.onsuccess = (ev) => {};
	request.onerror = (err) => {};
}

function DELETE_USER(event) {
	event.preventDefault();

	let id = document.whiskeyForm.getAttribute("data-key");
	if (!id) return;

	let tx = makeTX("whiskeyStore", "readwrite");
	tx.oncomplete = () => {
		buildList();
		CLEAR_DB();
	};

	let store = tx.objectStore("whiskeyStore");
	let request = store.delete(id);

	request.onsuccess = (ev) => {};
	request.onerror = (err) => {};
}

fetch("./api.json")
	.then((res) => res.json())
	.then((data) => indexedDB(data));
