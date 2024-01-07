import { useContext } from "react";
import { AuthContext } from "../context/create-context";

export default function FunctionContext() {
	const contextprops = useContext(AuthContext);
	return (
		<div className="f-20">
			<h3 className="dark-color">Third Component .js</h3>
			<span className="main-color">Theme Color: </span> <span className="second-color">{contextprops.theme}</span> <br />
			<span className="main-color">user data: </span>
			<span className="second-color">
				{contextprops.data.name} | {contextprops.data.age} | {contextprops.data.country}
			</span>
			<br />
			<button className="mybtn" onClick={() => contextprops.handleTheme()}>
				Change The Theme Color
			</button>
		</div>
	);
}
