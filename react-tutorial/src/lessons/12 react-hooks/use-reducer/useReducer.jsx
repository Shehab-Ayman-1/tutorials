import React from "react";
import Count from "./count";
import Products from "./products";

export default function UseReducer() {
	return (
		<div className="use-reducer f-20">
			<h3 className="main-color">The First Way</h3>
			<Count />
			<hr />
			<h3 className="main-color">The Second Way</h3>
			<Products />
		</div>
	);
}
