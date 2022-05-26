import axios from "axios";

export default async function addUser(value) {
	try {
		const response = await axios.post("https://jsonplaceholder.typicode.com/users/", value);
		return response;
	} catch (err) {
		console.error(err);
	}
}
