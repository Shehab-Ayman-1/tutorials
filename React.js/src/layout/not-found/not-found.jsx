import React from "react";
import { useLocation } from "react-router-dom";

export function NotFound() {
	let { pathname } = useLocation();

	return (
		<div className="f-20">
			<h1 className="second-color">Error 404</h1>
			<p>Page Not Found, {pathname}</p>
		</div>
	);
}
