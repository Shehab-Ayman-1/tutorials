export function init(state) {
	console.log(state);
	return {
		ID: "...",
		name: "...",
		color: "...",
		cost: "...",
	};
}

export default function Products(state, action) {
	console.log(state);
	switch (action.type) {
		case "ANDROID":
			return {
				ID: action.id,
				name: "Sumsung",
				color: "red",
				cost: "Cheap",
			};

		case "IOS":
			return {
				ID: action.id,
				name: "Apple",
				color: "black",
				cost: "Expensive",
			};

		default:
			throw new Error(action.type + "Please Enter Your Favourit Type, Apple | Android");
	}
}
