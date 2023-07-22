import { EventEmitter } from "events";

export const events = () => {
	// EventEmitter -> Create A New Event Method
	let emitter = new EventEmitter();
	emitter.on("onName", () => console.log("From onName Event"));
	emitter.emit("onName");
};
