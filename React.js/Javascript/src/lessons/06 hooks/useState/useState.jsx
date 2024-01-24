import { Counter } from "./counter";
import { Explain } from "./explain";
import { FormStates } from "./formStates";

export function UseState() {
	return (
		<div className="f-20">
			<Explain />

			<hr />

			<Counter />

			<hr />

			<FormStates />
		</div>
	);
}
