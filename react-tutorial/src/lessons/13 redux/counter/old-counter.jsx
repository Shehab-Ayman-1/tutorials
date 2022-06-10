import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, reset } from "../redux-helper/old-redux/actions/count-actions";
import { addPayload as ADDPAYLOAD, minusPayload as MINUSPAYLOAD } from "../redux-helper/old-redux/actions/count-actions";

export default function Counter() {
	const [addNum] = useState(2);
	const [minusNum] = useState(2);
	const myStates = useSelector((state) => state.myCounter); // Recieve All The States From The Initial States From The Reducer
	const dispatch = useDispatch(); // Send All The Actions To The Reducer

	// The First Way
	let handleIncreament = () => {
		return dispatch(increament());
	};

	// The Second Way
	let handleDecreament = () => {
		return decreament(dispatch);
	};

	// The First Way
	let handleAddPayload = (value) => {
		return dispatch(ADDPAYLOAD(value));
	};

	// The Second Way
	let handleMinusPayload = (value) => {
		return MINUSPAYLOAD(value, dispatch);
	};

	// The First Way
	let handleReset = () => {
		return dispatch(reset());
	};

	return (
		<div className="count-redux f-20">
			<h2 className="main-color" style={{ textAlign: "center" }}>
				Hint: Please Open The Old Store In index.js
			</h2>
			<hr />
			<h3 className="counter">
				<span className="main-color">My Count :</span> {myStates.count}
			</h3>
			<hr />
			<button className="mybtn" onClick={handleIncreament}>
				INCREAMENT
			</button>
			<button className="mybtn" onClick={handleDecreament}>
				DECREAMENT
			</button>
			<hr />
			<button className="mybtn" onClick={() => handleAddPayload(addNum)}>
				Add {addNum}
			</button>
			<button className="mybtn" onClick={() => handleMinusPayload(minusNum)}>
				Minus {minusNum}
			</button>
			<hr />
			<button className="mybtn" onClick={handleReset}>
				RESET
			</button>
		</div>
	);
}
