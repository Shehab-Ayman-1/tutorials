import { useForm } from "react-hook-form";

const Field = ({ type = "text", label, name, errors, register, options, className }) => {
	const style = errors[name]?.message ? { color: "red", fontWeight: "bold", fontSize: 14 } : undefined;
	const registerOptions = {
		required: `${name} Is A Required Field`,
		minLength: { value: 10, message: `${name} Must Be Atleast 10 Characters.` },
		...options,
	};

	return (
		<div className="">
			<label htmlFor={name} style={style}>
				{errors[name]?.message || label}
			</label>
			<br />
			<input
				type={type}
				id={name}
				name={name}
				placeholder={label}
				className={className}
				{...register(name, registerOptions)}
			/>
		</div>
	);
};

const defaultValues = { email: "shehab@gmail.com", password: "123", confirmPassword: "123" };
export const WithoutZod = () => {
	const { register, handleSubmit, getValues, setError, reset, formState } = useForm({ defaultValues });
	const { errors, isSubmitting } = formState;

	const onSubmit = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			// throw new Error("Something Has As Error");
			console.log(data);
			reset();
		} catch (error) {
			setError("email", { message: "This Email Is Already Exist" });
			setError("password", { message: "This Password Is Not Currect" });
			setError("confirmPassword", { message: "Passwords Are Not Match" });
		}
	};

	return (
		<form className="f-20" onSubmit={handleSubmit(onSubmit)}>
			<Field
				type="email"
				name="email"
				label="Email:"
				errors={errors}
				register={register}
				options={{
					validate: (value) =>
						!value.includes("@gmail") ? `Email Must Include @gmail.com As A Provider` : true,
				}}
			/>

			<Field type="password" name="password" label="Password:" errors={errors} register={register} />

			<Field
				type="password"
				name="confirmPassword"
				label="Comfimed Password:"
				errors={errors}
				register={register}
			/>

			<button
				type="submit"
				className="mybtn"
				disabled={isSubmitting}
				style={{ background: isSubmitting ? "gray" : "" }}>
				Submit
			</button>
		</form>
	);
};
