// hint: => Formik Is Using To Handling The States Easy, While I Want to Use States With Input Fields
import React from "react";
import { Formik } from "formik";
import { FirstForm, SecondForm } from "./formik/createForm";
import * as Yup from "yup";

export function FormikForm() {
	let submitForm = (initialValues) => {
		console.log(initialValues); // => { username: "", email: "", selected: "", checkbox: false, message: "", radio: "" }
	};

	let createForm = (props) => {
		return (
			<div className="parent-form f-20">
				<FirstForm values={props} />
				<SecondForm values={props} />
			</div>
		);
	};

	let schema = () => {
		const schema = Yup.object().shape({
			username: Yup.string().required(),
			email: Yup.string().required(),
			selected: Yup.string().required(),
			checkbox: Yup.string().required(),
			message: Yup.string().required(),
			radio: Yup.string().required(),
			social: Yup.object().shape({
				facebook: Yup.string().required("facebook Account Is Required ☺"),
				twitter: Yup.string().required("Twitter Account Is Required ☺"),
			}),
			friends: Yup.array().of(Yup.string().required("Enter Your New Friend")),
		});
		return schema;
	};

	let initialValues = {
		username: "",
		email: "",
		selected: "",
		checkbox: false,
		message: "",
		radio: "",
		social: { facebook: "", twitter: "" },
		friends: [""],
	};
	// initialValues() => To Create The Default Value Of The Props
	// onSubmit) => To Do Any Functionality While Submit The Form
	// render() => To Fetch The Elements In The Page [Can To Render createForm In The Formit Directly Like Now]
	return (
		<Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={schema}>
			{createForm}
		</Formik>
	);
}
