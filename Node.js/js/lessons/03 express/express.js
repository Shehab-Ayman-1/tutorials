/* 
    Commands:
        -- install express                    =>  [ npm i express ]
        -- install express globall generator  =>  [ npm i express-generator -g ]
        -- create new express project         =>  [ express (project name) ]
*/

import express from "express";
import http from "http";

export default function Express() {
	const app = express();

	const readFile = app.use((req, res) => {
		res.json({
			name: "shehab",
			age: 21,
		});
	});

	http.createServer(readFile).listen(3000, "localhost", () => console.log("server running ...."));
}
