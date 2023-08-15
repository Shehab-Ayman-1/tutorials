const whiteList = ["http://localhost:5173", "http://localhost:5000", "http://127.0.0.1:5000"];

export const corsConfigs = {
	origin: (origin, callback) => {
		// origin = undefined -> on localhost
		const isAcceptable = whiteList.some((site) => site === origin);
		if (isAcceptable || origin === undefined) callback(null, origin);
		else callback(`${origin}: Not Allowed By CORS`);
	},
	credentials: true,
	optionsSuccessStatus: 200,
};
