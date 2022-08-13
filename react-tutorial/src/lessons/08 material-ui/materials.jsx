// React
import React from "react";

// Material Ui
import { Container, Box, Typography, Divider } from "@mui/material";

// Components
import Theme from "./theme/themeFile";

export function MaterialUi() {
	return (
		<Container className="material-ui" maxWidth="lg">
			<Box className="theme">
				<Typography variant="h3" color="myColor.main">
					Themes
				</Typography>

				<br />
				<Theme />
			</Box>
			<Divider sx={{ mt: 2, mb: 2 }} />
		</Container>
	);
}
