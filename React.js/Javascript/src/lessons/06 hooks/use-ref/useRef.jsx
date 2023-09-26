import { useState, useRef, useEffect } from "react";

export function UseRef() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	let switchInput = (event) => {
		if (event.key === "Enter") {
			passwordRef.current.focus();
		}
	};

	let getValues = (event) => {
		if (event.key === "Enter") {
			document.querySelector(".useRef-hook .value").innerHTML = `
                <div>
					<h3><span class="main-color">My Email Is</span> : ${email}</h3>
					<h3><span class="main-color">My Password Is</span> : ${password}</h3>
                    <br />
				</div>
            `;
		}
	};

	return (
		<div className="useRef-hook f-20">
			<div className="value"></div>
			<div className="email">
				<label htmlFor="email">email: </label> <br />
				<input type="text" id="email" ref={emailRef} onKeyDown={switchInput} placeholder="Enter Your Email..." onChange={(event) => setEmail(event.target.value)} />
			</div>
			<div className="password">
				<label htmlFor="password">password: </label> <br />
				<input type="text" id="password" ref={passwordRef} onKeyDown={getValues} placeholder="Enter Your Password..." onChange={(event) => setPassword(event.target.value)} />
			</div>
		</div>
	);
}
