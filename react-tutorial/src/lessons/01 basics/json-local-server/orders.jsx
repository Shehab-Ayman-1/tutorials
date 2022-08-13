import axios from "axios";

export async function getTodos() {
	const response = await axios.get("http://localhost:5000/todos/");
	const data = await response.data;
	return data;
}
export async function updateIsFinished(id, value) {
	const response = await axios.put(`http://localhost:5000/todos/${id}`, value);
	const data = await response.data;
	return data;
}
export async function addNewTask(task) {
	const response = await axios.post("http://localhost:5000/todos/", task);
	return response;
}
export async function deleteNewTask(id) {
	const response = await axios.delete(`http://localhost:5000/todos/${id}`);
	return response;
}
export async function updateNewTask(id, newTask) {
	const response = await axios.put(`http://localhost:5000/todos/${id}`, newTask);
	return response;
}
