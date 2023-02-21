export const INITIAL_STATES = {
	fName: "",
	lName: "",
	jobTitle: "",
	minBudged: 0,
	isAvailable: false,
	skills: ["html", "css", "js"],
	images: { sm: "", md: "", lg: "" },
};

export const Reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_INPUT":
			return { ...state, [action.payload.name]: action.payload.value };

		case "CHANGE_NUMBER":
			return { ...state, [action.payload.name]: +action.payload.value };

		case "CHANGE_CHECKED":
			return { ...state, [action.payload.name]: action.payload.value };

		case "CHANGE_ARRAY":
			return { ...state, [action.payload.name]: action.payload.value.split(", ").map((item) => item) };

		case "REMOVE_ARRAY":
			return { ...state, [action.payload.name]: state[action.payload.name].filter((item) => item !== action.payload.value) };

		case "CHANGE_FILE":
			return { ...state, [action.payload.name]: { sm: action.payload.value, md: action.payload.value, lg: action.payload.value } };

		default:
			return state;
	}
};
