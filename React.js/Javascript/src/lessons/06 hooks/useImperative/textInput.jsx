import { useImperativeHandle, useRef } from "react";

export const TextInput = ({ inputRef }) => {
	const localRef = useRef(null);

	const reset = () => {
		if (!localRef.current) return;

		localRef.current.value = "";
		localRef.current.focus();
	};

	useImperativeHandle(inputRef, () => ({ reset }));

	return (
		<div className="">
			<input type="text" ref={localRef} placeholder="Enter Your Text" />
		</div>
	);
};
