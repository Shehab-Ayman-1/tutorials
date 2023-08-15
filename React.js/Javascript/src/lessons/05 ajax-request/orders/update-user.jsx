import axios from "axios";

export async function UpdateRequest(id, values) {
	try {
		const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values);
		return response;
	} catch (err) {
		console.error(err);
	}
}
