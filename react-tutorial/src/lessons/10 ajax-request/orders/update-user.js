import axios from "axios";

export default async function updateUser(id, values) {
	try {
		const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values);
		return response;
	} catch (err) {
		console.error(err);
	}
}
