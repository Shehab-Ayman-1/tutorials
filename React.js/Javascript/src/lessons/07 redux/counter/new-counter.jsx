import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, reset, addPayload, minusPayload } from "../redux-helper/new-redux/count-slice";

export function ReduxNewCounter() {
	const [addNum] = useState(2);
	const [minusNum] = useState(2);
	const myStates = useSelector((state) => state.myCounter); // Recieve All The States From The Initial States From The Reducer
	const dispatch = useDispatch(); // Send All The Actions To The Reducer

	console.log(myStates);
	// The First Way
	let handleIncreament = () => {
		return dispatch(increament());
	};

	// The Second Way
	let handleDecreament = () => {
		return dispatch(decreament());
	};

	// The First Way
	let handleAddPayload = (val) => {
		return dispatch(addPayload({ value: val }));
	};

	// The Second Way
	let handleMinusPayload = (val) => {
		return dispatch(minusPayload({ value: val }));
	};

	// The First Way
	let handleReset = () => {
		return dispatch(reset());
	};

	return (
		<div className="count-redux f-20">
			<h3>
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
