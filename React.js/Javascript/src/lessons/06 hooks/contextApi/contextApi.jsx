/* 
	-- Steps To Create Context Api
	[1] Create The Context [create-context.js]
	[2] Convert The App As A Provider For All The States & Then Enter The States Value
	[3] We Have 3 Ways To Use The Context
		-- useContext() In Functions
		-- contextName.consumer
		-- className.contextType = contextName
*/

import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/create-context";
import Component1 from "./components/one";
import Component2 from "./components/two";
import Component3 from "./components/three";

function ParentContext() {
	const props = useContext(AuthContext);

	return (
		<div className="f-20">
			<div className="parent" style={{ paddingLeft: "20px" }}>
				<h3 className="dark-color">Parent .js</h3>
				<div>
					<span className="main-color">Theme Color: </span>
					<span className="second-color">{props.theme}</span>
				</div>
				<div>
					<span className="main-color">user data: </span>
					<span className="second-color">
						{props.data.name} | {props.data.age} | {props.data.country}
					</span>
				</div>
				<button className="mybtn" onClick={() => props.handleTheme()}>
					Change The Theme Color
				</button>
			</div>
			<hr />
			<Component1 />
			<hr />
			<Component2 />
			<hr />
			<Component3 />
		</div>
	);
}

export function ContextApi() {
	return (
		<AuthProvider>
			<ParentContext />
		</AuthProvider>
	);
}
