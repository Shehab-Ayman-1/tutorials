import { useEffect, useState } from "react";
import axios from "axios";

let router = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

const useAxios = (method, url, body, options) => {
	const [data, setData] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(null);

	const fetcher = async (method, url, body, options) => {
		if (!method || url === "/") return;

		setLoading(true);
		setIsSubmitted(false);
		setError("");

		try {
			let response;

			if (method === "get") response = await router.get(url, options);
			else response = await router[method](url, body, options);

			setData(() => response?.data);
			setStatus(() => response?.status);
			setLoading(() => false);
			setIsSubmitted(() => true);

			return { data: response.data, loading: false, error: false, status: response.status, isSubmitted: true };
		} catch (error) {
			const err = error?.response?.data?.error || error?.message || "Network Error";

			setError(() => err);
			setStatus(error?.status);
			setLoading(() => false);
			setIsSubmitted(() => true);

			console.log(error);
			return { data: null, loading: false, error: err, isSubmitted: true, status: error?.status };
		}
	};

	useEffect(() => {
		fetcher(method, url, body, options);
	}, [method, url, body, options]);

	const refetch = async (method, url, body, options) => await fetcher(method, url, body, options);

	return { data, loading, error, isSubmitted, status, refetch };
};

export const UseAxios = () => {
	const { data: users, loading, error, isSubmitted, refetch } = useAxios();

	useEffect(() => {
		(async () => await refetch("get", "/users"))();
	}, []);

	if (!isSubmitted && loading) return <h3 className="f-30">Loading....</h3>;
	if (isSubmitted && error) return <h3 className="f-30">Error: {error}</h3>;

	return (
		<div className="fa-20">
			<div className="users" style={{ display: "flex", flexWrap: "wrap" }}>
				{users?.map(({ id, name, email }) => (
					<div
						className="user f-20"
						key={id}
						style={{
							background: "#333",
							width: "400px",
							padding: 20,
							margin: "20px",
							borderRadius: 10,
							boxShadow: "inset 0 0 20px var(--second-color)",
						}}>
						<div style={{ display: "flex", gap: 10 }}>
							<h3 style={{ color: "var(--second-color)" }}>ID:</h3>
							<p> {id}</p>
						</div>
						<div style={{ display: "flex", gap: 10 }}>
							<h3 style={{ color: "var(--second-color)" }}>Name:</h3>
							<p>{name}</p>
						</div>
						<div style={{ display: "flex", gap: 10 }}>
							<h3 style={{ color: "var(--second-color)" }}>email:</h3>
							<p>{email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
