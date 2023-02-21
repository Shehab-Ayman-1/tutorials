import React from "react";
import Image from "next/image";

export default function Login() {
	return (
		<main className="form-signin pt-5 w-50 m-auto text-center">
			<Image className="mb-4" src="/bootstrap.png" alt="bootstrap" width="72" height="57" />
			<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

			<div className="form-floating mb-2">
				<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
				<label htmlFor="floatingInput">Email address</label>
			</div>
			<div className="form-floating">
				<input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
				<label htmlFor="floatingPassword">Password</label>
			</div>

			<div className="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me" /> Remember me
				</label>
			</div>
			<button className="w-100 btn btn-lg btn-primary" type="submit">
				Sign in
			</button>
			<p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
		</main>
	);
}
