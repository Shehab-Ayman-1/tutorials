import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [theme, setTheme] = useState("dark");
	const [data, setData] = useState({ name: "shehab", age: 21, country: "egypt" });

	let handleTheme = () => setTheme((theme) => (theme === "dark" ? "light" : "dark"));

	const value = { theme, setTheme, data, setData, handleTheme };
	return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
