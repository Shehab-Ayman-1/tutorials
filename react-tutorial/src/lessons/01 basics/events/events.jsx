import React from "react";
import { Click, Change, Keydown } from "./";

export function Events() {
	return (
		<div className="f-30">
			<Click />
			<hr />
			<Keydown />
			<hr />
			<Change />
		</div>
	);
}
