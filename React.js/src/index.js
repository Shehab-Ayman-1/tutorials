// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Material Ui
import { ThemeProvider } from "@mui/material";
import theme from "./lessons/08 material-ui/theme/theme";

// Redux
import { Provider } from "react-redux";

// eslint-disable-next-line
import { newStore, oldStore } from "./lessons/07 redux/redux-helper/store/store";

// Use i18next
import "./constants/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			{/* <Provider store={oldStore}> */}
			<Provider store={newStore}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
