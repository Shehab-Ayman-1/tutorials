export const response = () => {
	/* 
    Ajax
    - Ready State => Status Of The Request
    -- [0] Request Not Initialized
    -- [1] Server Connection Established
    -- [2] Request Received
    -- [3] Processing Request
    -- [4] Request Is Finished And Response Is Ready
    - Status
    [200] Response Is Successful
    [404] Not Found
    */

	let req = new XMLHttpRequest();
	req.open("Get", "./users.json");

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
