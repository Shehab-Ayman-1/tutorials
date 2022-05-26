import uid from "./Exports.js";
import { fetchData } from "./Exports.js";

// Import The fetchData From The Other File To Fetch Data Here
fetchData(init);

// The Main Function
function init(apiData) {
	// ========================================= Create The Database =========================================
	let db = null;
	let DBOpenReq = indexedDB.open("WhiskeyDB", 3);
	// Print The Error If Defined
	DBOpenReq.addEventListener("error", (err) => {
		// Error occurred while trying to open DB
		console.error(err);
	});

	// Work Each Time The Page Refresh
	DBOpenReq.addEventListener("success", (ev) => {
		// DB has been opened... after upgradeneeded
		db = ev.target.result;
		buildList();

		// If The Database Is Empty, Add The Data From The Api
		let tx = makeTX("whiskeyStore", "readwrite");
		let store = tx.objectStore("whiskeyStore");
		let request = store.getAll();

		request.onerror = (err) => console.log(err);

		request.onsuccess = (event) => {
			let res = event.target.result;
			if (res.length <= 0) apiData.map((item) => store.add(item));
		};
	});

	// Work When The Database Is Creating
	DBOpenReq.addEventListener("upgradeneeded", (ev) => {
		// first time opening this DB
		// OR a new version was passed into open()
		db = ev.target.result;
		console.log("DB updated from version", ev.oldVersion, "to", ev.newVersion);
		if (!db.objectStoreNames.contains("whiskeyStore")) db.createObjectStore("whiskeyStore", { keyPath: "id" });
	});

	// ================================= Controle In The Database In The Form =================================
	// Get User
	document.querySelector(".wList").addEventListener("click", (ev) => {
		let li = ev.target.closest("[data-key]");
		let id = li.getAttribute("data-key");

		let tx = makeTX("whiskeyStore", "readonly");
		tx.oncomplete = (ev) => {
			// get transaction complete
		};
		let store = tx.objectStore("whiskeyStore");
		let req = store.get(id);
		req.onerror = (err) => console.error(err);
		req.onsuccess = (ev) => {
			let request = ev.target;
			let whiskey = request.result;
			document.getElementById("name").value = whiskey.name;
			document.getElementById("country").value = whiskey.country;
			document.getElementById("age").value = whiskey.age;
			document.getElementById("isOwned").checked = whiskey.owned;
			// put the whiskey id into a form attribute
			document.whiskeyForm.setAttribute("data-key", whiskey.id);
		};
	});

	// Reset
	document.getElementById("btnClear").addEventListener("click", clearForm);

	// Add
	document.getElementById("btnAdd").addEventListener("click", (ev) => {
		ev.preventDefault();
		//one of the form buttons was clicked

		let name = document.getElementById("name").value.trim();
		let country = document.getElementById("country").value.trim();
		let age = parseInt(document.getElementById("age").value);
		let owned = document.getElementById("isOwned").checked;

		let whiskey = { id: uid(), name, country, age, owned };

		let tx = makeTX("whiskeyStore", "readwrite");
		tx.oncomplete = (ev) => {
			// console.log(ev);
			buildList();
			clearForm();
		};

		let store = tx.objectStore("whiskeyStore");
		let request = store.add(whiskey); //request an insert/add

		request.onsuccess = (ev) => {
			// console.log("successfully added an object");
			// move on to the next request in the transaction or
			// commit the transaction
		};
		request.onerror = (err) => {
			// console.log("error in request to add");
		};
	});

	// Delete
	document.getElementById("btnDelete").addEventListener("click", (ev) => {
		ev.preventDefault();
		//id
		let key = document.whiskeyForm.getAttribute("data-key");
		if (key) {
			let tx = makeTX("whiskeyStore", "readwrite");
			tx.oncomplete = (ev) => {
				// console.log(ev);
				buildList();
				clearForm();
			};

			let store = tx.objectStore("whiskeyStore");
			let request = store.delete(key); //request a delete

			request.onsuccess = (ev) => {
				// console.log("successfully deleted an object");
				//move on to the next request in the transaction or
				//commit the transaction
			};
			request.onerror = (err) => {
				// console.log("error in request to delete");
			};
		}
	});

	// Update
	document.getElementById("btnUpdate").addEventListener("click", (ev) => {
		ev.preventDefault();

		let name = document.getElementById("name").value.trim();
		let country = document.getElementById("country").value.trim();
		let age = parseInt(document.getElementById("age").value);
		let owned = document.getElementById("isOwned").checked;
		//id
		let key = document.whiskeyForm.getAttribute("data-key");
		if (key) {
			let whiskey = { id: key, name, country, age, owned };
			let tx = makeTX("whiskeyStore", "readwrite");
			tx.oncomplete = (ev) => {
				buildList();
				clearForm();
			};

			let store = tx.objectStore("whiskeyStore");
			let request = store.put(whiskey); //request a put/update

			request.onsuccess = (ev) => {
				// console.log("successfully updated an object");
				//move on to the next request in the transaction or
				//commit the transaction
			};
			request.onerror = (err) => {
				// console.log("error in request to update");
			};
		}
	});

	function buildList() {
		//use getAll to get an array of objects from our store
		let list = document.querySelector(".wList");
		list.innerHTML = `<li>Loading...</li>`;
		let tx = makeTX("whiskeyStore", "readonly");
		tx.oncomplete = (ev) => {
			//transaction for reading all objects is complete
		};
		let store = tx.objectStore("whiskeyStore");
		let getReq = store.getAll();
		//returns an array
		//option can pass in a key or a keyRange
		getReq.onerror = (err) => console.warn(err);
		getReq.onsuccess = (ev) => {
			//getAll was successful
			let request = ev.target; //request === getReq === ev.target
			// console.log({ request });
			list.innerHTML = request.result
				.map((whiskey) => `<li data-key="${whiskey.id}"><span>${whiskey.name}</span> ${whiskey.age}</li>`)
				.join("\n");
		};
	}

	function makeTX(storeName, mode) {
		let tx = db.transaction(storeName, mode);
		tx.onerror = (err) => {
			// console.warn(err);
		};
		return tx;
	}

	function clearForm(ev) {
		if (ev) ev.preventDefault();
		document.whiskeyForm.reset();
		document.whiskeyForm.removeAttribute("data-key");
	}
}
