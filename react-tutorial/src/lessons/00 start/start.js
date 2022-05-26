import React from "react";

export default function start() {
	return (
		<div className="App">
			<main className="App-header">
				<img src="./logo192.png" className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<br />
				<div className="notics">
					<h3 className="main-color">Notics ☺</h3>
					<p className="f-20" style={{ paddingBottom: 0, paddingLeft: 0 }}>
						-- Routing {"=>"} Look To The <span className="main-color">Ajax Request</span> Lessons &&{" "}
						<span className="main-color">The App .jsx </span>
						How To Build All The Pages With Routes.
					</p>
					<p className="f-20" style={{ padding: 0, paddingLeft: 0 }}>
						-- We Can Use Routing Without Nested Route...
					</p>
				</div>
			</main>
		</div>
	);
}
