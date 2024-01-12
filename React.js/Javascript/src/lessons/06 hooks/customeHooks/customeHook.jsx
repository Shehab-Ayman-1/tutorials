import { useEffect, useState } from "react";
import { useGenerateColor } from "./hooks/useGenerateColor";
import { useDebounce } from "./hooks/useDebounce";
import { useCount } from "./hooks/useCounter";
import { users } from "@/constants";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Count
const Count = () => {
	const { count, handleIncreament, handleDecreament } = useCount();
	return (
		<div className="counter">
			<span className="main-color">Counter: {count}</span>
			<br />
			<button className="mybtn" onClick={handleIncreament}>
				Increament
			</button>
			<button className="mybtn" onClick={handleDecreament}>
				Decreament
			</button>
		</div>
	);
};

// Generate Colors
const GenerateColor = () => {
	const { color, generate } = useGenerateColor();
	const [colors, setColors] = useState([]);

	const handleGeneration = () => {
		setColors((prev) => prev.concat(generate()));
	};

	const style = (bg) => ({
		width: 18,
		height: 18,
		background: bg,
		borderRadius: "50%",
	});
	return (
		<div className="color-generation">
			<div className="colors flex-start">
				{colors.concat(color).map((color, i) => (
					<div style={style(color)} key={i} />
				))}
			</div>
			<button className="mybtn" onClick={handleGeneration}>
				Generate
			</button>
		</div>
	);
};

// Debounce
const fetchUsers = async (name) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return users.filter((user) => user.toLowerCase().includes(name.toLowerCase()));
};

const Debounce = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const debounce = useDebounce(search);

	useEffect(() => {
		(async () => {
			setLoading(true);

			setUsers([]);
			const users = await fetchUsers(debounce);

			setUsers(users);
			setLoading(false);
		})();
	}, [debounce]);

	return (
		<div className="debounce">
			<div className="">
				<input
					type="text"
					value={search}
					placeholder="Search..."
					onChange={(event) => setSearch(event.target.value)}
				/>
				{loading && <h3>Loading...</h3>}
				{(!users.length && !loading) || (
					<ul>
						{users.map((user, i) => (
							<li key={i}>{user}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

// Local Storage
const LocalStorage = () => {
	const { getItem, setItem, removeItem } = useLocalStorage();
	const [value, setValue] = useState("");
	const [storageValue, setStorageValue] = useState("");

	const handleGet = () => {
		setStorageValue(getItem("value"));
	};

	return (
		<div className="f-30">
			<input
				type="text"
				value={value}
				placeholder="Storage Value"
				onChange={(event) => setValue(event.target.value)}
			/>

			<br />

			<button className="mybtn" onClick={() => setItem("value", value)}>
				SET
			</button>
			<button className="mybtn" onClick={handleGet}>
				GET
			</button>
			<button className="mybtn" onClick={() => removeItem("value")}>
				REMOVE
			</button>

			<br />

			<span>{storageValue}</span>
		</div>
	);
};

export function CustomeHook() {
	return (
		<div className="f-20">
			{/* <Count /> */}

			{/* <GenerateColor /> */}

			{/* <Debounce /> */}

			<LocalStorage />
		</div>
	);
}
