import { User, Hello, SendChildren } from "./childs";

export function Props() {
	return (
		<div>
			<h1 className="title main-color">User Information:</h1>
			<User name="Shehab" age="21" country="Egypt" />

			<h1 className="title main-color">Students Say Hello:</h1>
			<Hello name="Hesham" />
			<Hello name="Aya" />
			<Hello name="Farha" />
			<Hello name="Salma" />

			<h1 className="title main-color">Message From Me:</h1>
			<SendChildren>Message : </SendChildren>
		</div>
	);
}
