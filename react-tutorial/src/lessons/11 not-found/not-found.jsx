import React from "react";

export default function notFound() {
	return (
		<div className="f-20">
			<h1 className="second-color">Error 404</h1>
			<p>This Page Not Found, {window.location.href}</p>
		</div>
	);
}
