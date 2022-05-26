import { LOGIN, LOGOFF } from "./types";

export const Login = (val) => {
	return {
		type: LOGIN,
		name: val,
	};
};

export const LogOff = (dispatch) => {
	return dispatch({ type: LOGOFF });
};
