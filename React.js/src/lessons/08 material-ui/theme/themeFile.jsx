import React from "react";
import { Typography } from "@mui/material";

export default function ThemeFile() {
	const url = "https://mui.com/material-ui/getting-started/overview/";

	return (
		<div>
			<Typography variant="h4" color="secondary" component="a" href={url} sx={{ textDecoration: "underline !important" }}>
				[ # ] Go To Material Ui Docs
			</Typography>
			<Typography variant="h4" color="primary">
				[ 1 ] Create The Theme File
			</Typography>
			<Typography variant="h4" color="secondary">
				[ 2 ] Provide This Theme In Index.js File
			</Typography>
			<Typography variant="h4" color="skyblue">
				[ 3 ] Use Theme In Any File Now
			</Typography>
			<Typography variant="h5" color="myColor.main">
				--- We Can Create Custome Theme In The Palette {" => "} ./theme.js
			</Typography>
			<Typography variant="h5" color="myColor.second">
				--- We Can Create Custome Style For Just One Element Like Unique Button
			</Typography>
		</div>
	);
}
