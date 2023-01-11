import { users } from "../constants/constants.js";

export default function () {
	let request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let users = JSON.parse(this.responseText);
			users.map((user) => {
				let el = document.createElement("h3");
				el.append(`${user.name} => ${user.age}`);
				document.body.append(el);
			});
		}
	};

	request.open("Get", users, true);
	request.send();
}
