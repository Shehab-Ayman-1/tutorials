import { LOGIN, LOGOFF } from "../actions/types";

const initialState = { type: "", name: "undefined", myState: false };

export default function Reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return { ...state, name: action.name, myState: true };

		case LOGOFF:
			return { ...state, name: undefined, myState: false };

		default:
			return state;
	}
}
