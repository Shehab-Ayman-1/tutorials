// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Material Ui
import { ThemeProvider } from "@mui/material";
import theme from "./lessons/15 material-ui/theme/theme";

// Redux
import { Provider } from "react-redux";
// eslint-disable-next-line
import { newStore, oldStore } from "./lessons/13 redux/redux-helper/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider store={oldStore}> */}
		<ThemeProvider theme={theme}>
			<Provider store={newStore}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
