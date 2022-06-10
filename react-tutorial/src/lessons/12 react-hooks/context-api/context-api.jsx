/* 
	-- Steps To Create Context Api
	[1] Create The Context [create-context.js]
	[2] Convert The App As A Provider For All The States & Then Enter The States Value
	[3] We Have 3 Ways To Use The Context
		-- useContext() In Functions
		-- contextName.consumer
		-- className.contextType = contextName
*/

import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/create-context";
import Component1 from "./components/component-1";
import Component2 from "./components/component-2";
import Component3 from "./components/component-3";

function ContextApi() {
	const props = useContext(AuthContext);
	return (
		<div className="f-20">
			<div className="parent">
				<h3 className="dark-color">Parent .js</h3>
				<span className="main-color">Theme Color: </span> <span className="second-color">{props.theme}</span> <br />
				<span className="main-color">user data: </span>
				<span className="second-color">
					{props.data.name} | {props.data.age} | {props.data.country}
				</span>
				<br />
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

export default function WithProvider() {
	return (
		<AuthProvider>
			<ContextApi />
		</AuthProvider>
	);
}
