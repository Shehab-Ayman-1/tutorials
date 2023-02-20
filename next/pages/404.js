import React from "react";
import Link from "next/link";

export default function Error() {
	const flexCenter = { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" };
	return (
		<div style={{ minHeight: "100vh", fontSize: 30, ...flexCenter }}>
			<p className="text-danger">.This Page Is Not Found.</p>
			<Link href="/" className="btn btn-danger">
				Go To Home Page.
			</Link>
		</div>
	);
}
