import { INCREAMENT, DECREAMENT, ADDPAYLOAD, MINUSPAYLOAD, RESET } from "./types";

export function increament() {
	return {
		type: INCREAMENT,
	};
}

export function decreament(dispatch) {
	return dispatch({ type: DECREAMENT });
}

export function addPayload(value) {
	return {
		type: ADDPAYLOAD,
		payload: value,
	};
}

export function minusPayload(value, dispatch) {
	return dispatch({ type: MINUSPAYLOAD, payload: value });
}

export function reset() {
	return {
		type: RESET,
	};
}
