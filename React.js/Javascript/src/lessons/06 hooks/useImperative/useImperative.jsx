import { useRef } from "react";
import { Counter } from "./counter";
import { TextInput } from "./textInput";

export const UseImperative = () => {
	const counterRef = useRef(null);
	const inputRef = useRef(null);

	const handleResetCounter = () => {
		counterRef.current?.reset();
	};

	const handleResetInput = () => {
		inputRef.current?.reset();
	};

	return (
		<div className="f-30">
			<div className="">
				<h3 className="main-color">UseImperative</h3>
				<small>It Used To Handle The Functions In The Child Component From The Parent Component</small>
			</div>

			<hr />

			<div className="">
				<Counter counterRef={counterRef} />
				<button className="mybtn" onClick={handleResetCounter}>
					Reset Counter From Parent
				</button>
			</div>

			<hr />

			<div className="">
				<TextInput inputRef={inputRef} />
				<button className="mybtn" onClick={handleResetInput}>
					Reset Input From Parent
				</button>
			</div>
		</div>
	);
};
