import axios from "axios";

export default async function getUsers() {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		return response;
	} catch (err) {
		console.error(err);
	}
}
