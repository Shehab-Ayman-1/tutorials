import axios from "axios";
import { ref, toValue, watchEffect } from "vue";

function useFetch(method, url, body, options) {
	const data = ref(null);
	const loading = ref(false);
	const error = ref(null);
	const isSubmitted = ref(false);

	const fetchData = async (method, url, body, options) => {
		if (!method || !url) return;

		data.value = null;
		isSubmitted.value = false;

		loading.value = true;
		error.value = null;

		try {
			const request = {
				url: typeof url === "string" ? url : toValue(url),
				method: method.toLowerCase(),
				data: body,
				...options,
			};
			const response = await axios.request(request);
			const jsonData = response.data;

			setTimeout(() => (data.value = jsonData), 1000);

			return { data: jsonData, loading: false, error: false, isSubmitted: true };
		} catch (err) {
			const message = err.message || err?.response?.data?.message || "Something Has An Error";

			console.error(err);
			error.value = message;

			return { data: null, loading: false, error: message, isSubmitted: true };
		} finally {
			setTimeout(() => {
				loading.value = false;
				isSubmitted.value = true;
			}, 1000);
		}
	};

	watchEffect(() => {
		fetchData(method, url, body, options);
	});

	const refetch = async (method, url, body, options) => await fetchData(method, url, body, options);

	return { data, loading, error, isSubmitted, refetch };
}
export default useFetch;
