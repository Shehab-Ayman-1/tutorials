import { useState } from "react";

export const FormStates = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [passwordType, setPasswordType] = useState("password");

	const handleChange = (event) => {
		setFormData((form) => ({ ...form, [event.target.name]: event.target.value }));
	};

	return (
		<div>
			<h3 className="main-color">Email: {formData.email}</h3>
			<h3 className="main-color">Password: {formData.password}</h3>

			<input type="text" name="email" placeholder="Enter Your Email" onChange={handleChange} />
			<div className="">
				<input type={passwordType} name="password" placeholder="Enter Your Password" onChange={handleChange} />
				<i
					className={`fa ${passwordType === "password" ? "fa-eye-slash" : "fa-eye"}`}
					style={{ color: "white" }}
					onClick={() => setPasswordType((type) => (type === "password" ? "text" : "password"))}
				/>
			</div>
		</div>
	);
};
