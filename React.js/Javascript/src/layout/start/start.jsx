import { logo } from "@/assets";
import "./style.scss";

export function Start() {
	return (
		<div className="App">
			<main className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code className="second-color">src/App.js</code> and save to reload.
				</p>
				<a className="App-link main-color" href="https://reactjs.org" target="_blank" rel="noreferrer">
					Learn React
				</a>
			</main>
		</div>
	);
}
