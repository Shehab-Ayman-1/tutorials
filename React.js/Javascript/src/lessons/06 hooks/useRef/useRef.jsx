import { useState, useEffect, useRef } from "react";

const FormData = () => {
	const [formData, setFormData] = useState({ show: false, email: "", password: "" });
	const emailRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const handleChange = (event) => {
		if (event.target.name === "email") return setFormData((form) => ({ ...form, email: event.target.value }));
		setFormData((form) => ({ ...form, password: event.target.value }));
	};

	const handlePress = (event) => {
		if (event.target.name === "email" && event.key === "Enter") passwordRef.current.focus();
		if (event.target.name === "password" && event.key === "Enter")
			setFormData((form) => ({ ...form, show: true }));
	};

	return (
		<div className="">
			<div className="email">
				<label htmlFor="email">email: </label> <br />
				<input
					name="email"
					ref={emailRef}
					onKeyDown={handlePress}
					placeholder="Email..."
					onChange={handleChange}
				/>
			</div>

			<div className="password">
				<label htmlFor="password">password: </label> <br />
				<input
					name="password"
					ref={passwordRef}
					onKeyDown={handlePress}
					placeholder="Password..."
					onChange={handleChange}
				/>
			</div>

			{formData.show && (
				<div className="value">
					<div>
						<div className="flex-start">
							<h3 className="main-color">My Email Is: </h3>
							<span>{formData.email}</span>
						</div>
						<div className="flex-start">
							<h3 className="main-color">My Password Is: </h3>
							<span>{formData.password}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const Count = () => {
	/* State:
		- Its Synchronous Function
		- Allow The Component To Rerender While The State Is Change
		Ref:
		- Its Asynchronous Function
		- Not Allow The Component To Rerender While The State Is Change
	*/

	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	const handleState = () => {
		setCount(count + 1);
		console.log(`State: ${count}`); // State: 0
	};

	const handleRef = () => {
		countRef.current++;
		console.log(`Ref: ${countRef.current}`); // Ref: 1
	};

	return (
		<div>
			<div className="flex-start">
				<h3>State: {count}</h3>
				<h3>Ref: {countRef.current}</h3>
			</div>
			<button className="mybtn" onClick={handleState}>
				State Inc
			</button>
			<button className="mybtn" onClick={handleRef}>
				Ref Inc
			</button>
		</div>
	);
};

export function UseRef() {
	return (
		<div className="useRef-hook f-20">
			{/* <FormData /> */}
			<Count />
		</div>
	);
}
