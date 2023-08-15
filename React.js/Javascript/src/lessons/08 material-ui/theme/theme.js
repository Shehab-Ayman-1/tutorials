import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

const myTheme = createTheme({
	palette: {
		primary: {
			main: blue[700],
			light: blue[400],
			dark: blue[600],
		},
		secondary: {
			main: "#bc9147",
			light: purple[400],
			dark: purple[600],
		},
		myColor: {
			main: "var(--main-color)",
			second: "var(--second-color)",
		},
	},
});

export default myTheme;
