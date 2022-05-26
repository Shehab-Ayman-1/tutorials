import { INCREAMENT, DECREAMENT, ADDPAYLOAD, MINUSPAYLOAD, RESET } from "../actions/types";

const initialState = { count: 0, payload: 1 };

export default function Reducer(state = initialState, action) {
	switch (action.type) {
		case INCREAMENT:
			return { ...state, count: state.count + state.payload };

		case DECREAMENT:
			return { ...state, count: state.count > 0 ? state.count - state.payload : state.count };

		case ADDPAYLOAD:
			return { ...state, count: state.count + action.payload };

		case MINUSPAYLOAD:
			return { ...state, count: state.count > 0 ? state.count - action.payload : state.count };

		case RESET:
			return { ...state, count: 0 };

		default:
			return state;
	}
}
