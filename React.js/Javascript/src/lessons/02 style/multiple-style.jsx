import React from "react";
import classNames from "classnames";

export function MultipleStyle() {
	function simpleWay() {
		let multipleClasses = "";
		if (true) multipleClasses += "green ";
		if (true) multipleClasses += "bold ";
		if (true) multipleClasses += "black-text ";
		if (true) multipleClasses += "pointer ";
		return multipleClasses;
	}

	function ClassNames() {
		let Classes = classNames("crimson", { bold: 1 > 2, pointer: 10 > 0 }, ["white-text", "f-20"]);
		return Classes;
	}

	return (
		<div className="styles f-20">
			<h3 className="main-color">The Normal Way To Add Multiple Classes</h3>
			<p className={simpleWay()}>Add Multiple Classes</p>

			<hr />

			<h3 className="main-color">ClassNames Library</h3>
			<p className={ClassNames()} style={{ padding: 0 }}>
				Add Multiple Classes With ClassNames Library
			</p>
		</div>
	);
}
