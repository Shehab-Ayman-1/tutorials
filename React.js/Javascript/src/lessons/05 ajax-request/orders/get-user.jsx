import axios from "axios";

export async function GetUserRequest(id) {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
		return response;
	} catch (err) {
		console.error(err);
	}
}
