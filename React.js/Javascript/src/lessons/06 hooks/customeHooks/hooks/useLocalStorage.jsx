export const useLocalStorage = () => {
	const getItem = (key) => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	};

	const setItem = (key, value) => {
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	const removeItem = (key) => {
		window.localStorage.removeItem(key);
	};

	return { getItem, setItem, removeItem };
};
