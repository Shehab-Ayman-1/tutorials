import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
	const { register, handleSubmit, reset, getValues, formState } = useForm();
	const { errors, isSubmitting } = formState;

	const emailValidate = register("email", {
		required: "Email Is A Required Field.",
	});

	const passwordValidate = register("password", {
		required: "Password Is A Required Field.",
		minLength: { value: 5, message: "Password Must Be Atleast 5 Characters." },
	});

	const confirmValidate = register("comfirm", {
		required: "Confirm Password Is A Required Field.",
		validate: (value) => value === getValues("password") || "Passwords Must Be Matching",
	});

	const onSubmit = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
		reset();
	};

	return (
		<form className="f-20" onSubmit={handleSubmit(onSubmit)}>
			<div className="">
				<label className="main-color" htmlFor="email">
					Email:
				</label>
				<br />
				<input {...emailValidate} type="email" id="email" placeholder="Email..." />
				{errors.email && <p className="second-color">{errors.email.message}</p>}
			</div>
			<div className="">
				<label className="main-color" htmlFor="password">
					Password:
				</label>
				<br />
				<input {...passwordValidate} type="text" id="password" placeholder="Password..." />
				{errors.password && <p className="second-color">{errors.password.message}</p>}
			</div>
			<div className="">
				<label className="main-color" htmlFor="confirm">
					Confirm Password
				</label>
				<br />
				<input {...confirmValidate} type="text" id="confirm" placeholder="Confirm Password..." />
				{errors.comfirm && <p className="second-color">{errors.comfirm.message}</p>}
			</div>
			<button type="submit" className="mybtn" disabled={isSubmitting} style={{ background: isSubmitting ? "gray" : "" }}>
				Submit
			</button>
		</form>
	);
};
