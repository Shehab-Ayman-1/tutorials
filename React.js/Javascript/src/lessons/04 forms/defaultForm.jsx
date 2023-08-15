import React from "react";
import NormalForm from "./default-form/normal-method";
import MultipleForm from "./default-form/multible-method";
import "./style.scss";

export function DefaultForm() {
	return (
		<div className="parent-form f-20">
			<NormalForm />
			<MultipleForm />
		</div>
	);
}
