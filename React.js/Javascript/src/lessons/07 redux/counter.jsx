import { useSelector, useDispatch } from "react-redux";
import { INCREAMENT, DECREAMENT, ADD_PAYLOAD, MINUS_PAYLOAD, RESET_COUNTER } from "./slices";

export function ReduxCounter() {
	const states = useSelector((state) => state.counter); // Recieve All The States From The Initial States From The Reducer
	const dispatch = useDispatch(); // Send All The Actions To The Reducer
	const num = 2;

	// Empty Payload
	let handleIncreament = () => dispatch(INCREAMENT());
	let handleDecreament = () => dispatch(DECREAMENT());

	// With Payload
	let handleAddPayload = (value) => dispatch(ADD_PAYLOAD({ value }));
	let handleMinusPayload = (value) => dispatch(MINUS_PAYLOAD({ value }));

	// Reset States
	let handleReset = () => dispatch(RESET_COUNTER());

	return (
		<div className="count-redux f-20">
			<h3>
				<span className="main-color">My Count :</span> {states.count}
			</h3>
			<hr />
			<div className="">
				<button className="mybtn" onClick={handleIncreament}>
					INCREAMENT
				</button>
				<button className="mybtn" onClick={handleDecreament}>
					DECREAMENT
				</button>
			</div>
			<hr />
			<div className="">
				<button className="mybtn" onClick={() => handleAddPayload(num)}>
					Add Payload {num}
				</button>
				<button className="mybtn" onClick={() => handleMinusPayload(num)}>
					Minus Payload {num}
				</button>
			</div>
			<hr />
			<button className="mybtn" onClick={handleReset}>
				RESET
			</button>
		</div>
	);
}
