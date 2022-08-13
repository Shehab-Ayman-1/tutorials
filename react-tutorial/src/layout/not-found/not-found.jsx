import React from "react";

export function NotFound() {
	return (
		<div className="f-20">
			<h1 className="second-color">Error 404</h1>
			<p>This Page Is Not Found, {window.location.href}</p>
		</div>
	);
}
