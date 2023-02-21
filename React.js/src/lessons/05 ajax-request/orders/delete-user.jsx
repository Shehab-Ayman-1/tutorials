import axios from "axios";

export async function DeleteRequest(id) {
	try {
		const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}
