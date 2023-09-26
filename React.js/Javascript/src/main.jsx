// React
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Redux
import { Provider } from "react-redux";
import { store } from "@/lessons/07 redux/store";

// Styles
import "@/constants/i18n";
import "@/assets/fonts/fontAwasome.css";
import "@/assets/scss/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
