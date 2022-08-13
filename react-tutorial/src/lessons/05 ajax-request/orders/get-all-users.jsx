import axios from "axios";

export async function GetUsersRequest() {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		return response;
	} catch (err) {
		console.error(err);
	}
}
