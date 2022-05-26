import React from "react";
import NormalForm from "./default-form/normal-method";
import MultipleForm from "./default-form/multible-method";

export default function Forms() {
	return (
		<div className="parent-form f-20">
			<NormalForm />
			<MultipleForm />
		</div>
	);
}
