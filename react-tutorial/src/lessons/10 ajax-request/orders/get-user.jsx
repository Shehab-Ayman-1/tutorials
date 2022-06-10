import axios from "axios";

export default async function getUser(id) {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
		return response;
	} catch (err) {
		console.error(err);
	}
}
