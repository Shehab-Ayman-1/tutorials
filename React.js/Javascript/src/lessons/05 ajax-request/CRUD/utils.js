import axios from "axios";

const router = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const GET_USERS = async () => {
	try {
		const response = await router.get("/users");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const GET_USER = async (id) => {
	try {
		const response = await router.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const ADD_USER = async (body) => {
	try {
		const response = await router.post("/users/", body);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const UPDATE_USER = async (id, body) => {
	try {
		const response = await router.get(`/users/${id}`, body);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const DELETE_USER = async (id) => {
	try {
		const response = await router.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
