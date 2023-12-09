export const XMLHttpRequest = () => {
	/* 
		[1] readystate: 0 -> Not Initialized, 1 -> Server Connected, 2 -> Server Recieved Req , 3 -> Process The Req, 4 -> Req Is Finished & Res Is Ready
		[2] Status => The Server Response Flages
		-- Successfull => [200 -> Ok], [201 -> Created], [202 -> Accepted], [203 -> Non-Authoritative], [204 -> No-Content], [205 -> Reset-Content]
		-- Redirection => [300 -> Mult-Choices], [301 -> Moved-Parmanetly], [304 -> Not-Modified], [305 -> Use-Proxy]
		-- Client Error => [400 -> Bad-Req ], [401 -> Unauthorized ], [402 -> Payment-Required ], [403 -> Forbidden ], [404 -> Not-Found ], [405 -> Not-Allowed ]
		-- Server Error => [500 -> Internal-Server-Error], [501 -> Not-Implemented], [502 -> Bad-Gateway], [503 -> Service-Unavailable], [504 -> Gateway-Timeout]
    */

	let req = new XMLHttpRequest();
	req.open("Get", "./assets/users.json", true); // [req, url, async]

	req.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let data = JSON.parse(this.responseText);
			let div = document.createElement("div");
			for (let i in data) {
				let h3 = document.createElement("h3");
				h3.appendChild(document.createTextNode(data[i].name));
				div.appendChild(h3);
			}
			document.body.appendChild(div);
		}
	};

	req.send();
};

export const useJquery = () => {
	("use strict");
	$(function () {
		$.get("./assets/users.json", (data, status, xhr) => {
			console.log(data, status, xhr);
			$.each(data, (index, user) => $("#show").append(`<p>#${index} - ${user.name}</p>`));
		});

		let body = {};
		$.post("./assets/users.json", body, (data, status, xhr) => console.log(data));
	});
};
