import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { newStore, oldStore } from "./lessons/13 redux/redux-helper/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider store={oldStore}> */}
		<Provider store={newStore}>
			<App />
		</Provider>
	</React.StrictMode>
);
