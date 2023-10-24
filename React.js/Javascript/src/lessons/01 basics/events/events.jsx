import { Click, Change, Keydown } from "./";

export function Events() {
	return (
		<div className="f-30">
			<div className="">
				<h3 className="main-color">Click Event</h3>
				<hr />
				<Click />
			</div>

			<hr />

			<div className="">
				<h3 className="main-color">Keys Event</h3>
				<hr />
				<Keydown />
			</div>

			<hr />

			<div className="">
				<h3 className="main-color">Change Event</h3>
				<hr />
				<Change />
			</div>
		</div>
	);
}
