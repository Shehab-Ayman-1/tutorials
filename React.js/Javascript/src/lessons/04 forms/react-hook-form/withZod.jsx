import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	email: z.string().email().min(10).max(35).endsWith("@gmail.com"),
	password: z.string().min(10),
	confirmPassword: z.string().min(10),
});

const defaultValues = { email: "shehab@gmail.com", password: "123", confirmPassword: "123" };
export const WithZod = () => {
	const { register, handleSubmit, setError, getValues, reset, formState } = useForm({
		defaultValues,
		resolver: zodResolver(schema),
	});
	const { errors, isLoading, isSubmitting, isSubmitted } = formState;

	const onSubmit = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			throw new Error("Something went wrong");
			console.log(data);
			reset();
		} catch (error) {
			setError("email", { message: error?.response?.data?.error || "Server Error" });
			setError("password", { message: error?.response?.data?.error || "Server Error" });
			setError("confirmPassword", { message: error?.response?.data?.error || "Server Error" });
		}
	};

	return (
		<form className="f-20" onSubmit={handleSubmit(onSubmit)}>
			<div className="">
				<p>{isLoading}</p>
				<p>{isSubmitting}</p>
				<p>{isSubmitted}</p>
			</div>

			<div className="">
				<label>Email:</label> <br />
				<input type="email" placeholder="Email" {...register("email")} />
				<p className="second-color">{errors?.email?.message}</p> <br />
			</div>

			<div className="">
				<label>Password:</label> <br />
				<input type="password" placeholder="Password" {...register("password")} />
				<p className="second-color">{errors?.password?.message}</p> <br />
			</div>

			<div className="">
				<label>Confirm Password:</label> <br />
				<input type="confirmPassword" placeholder="ConfirmPassword" {...register("confirmPassword")} />
				<p className="second-color">{errors?.confirmPassword?.message}</p> <br />
			</div>

			<button type="submit" className="mybtn" disabled={isSubmitting}>
				Submit
			</button>
		</form>
	);
};
