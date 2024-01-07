export default function Actions(state, action) {
	switch (action) {
		case "INCREAMENT":
			return (state = state + 1);

		case "DECREAMENT":
			return !state <= 0 ? (state = state - 1) : 0;

		default:
			return state;
	}
}
