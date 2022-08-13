import axios from "axios";

export async function AddRequest(value) {
	try {
		const response = await axios.post("https://jsonplaceholder.typicode.com/users/", value);
		return response;
	} catch (err) {
		console.error(err);
	}
}
