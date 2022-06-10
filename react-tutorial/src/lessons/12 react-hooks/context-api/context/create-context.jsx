import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [theme, setTheme] = useState("dark");
	const [data, setData] = useState({ name: "shehab", age: 21, country: "egypt" });

	let handleTheme = () => {
		let newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return (
		<AuthContext.Provider value={{ theme, setTheme, data, setData, handleTheme }}>{props.children}</AuthContext.Provider>
	);
};
