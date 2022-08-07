/* 
    Union & InterSection
    -- Can To Compine More Types Without Any Extend 
*/

export default function Intersections() {
	type a = { one: string };

	type b = { two: string };

	type mix = a & b;

	const getActions = (btns: mix): string => `One: ${btns.one}, Two: ${btns.two}`;

	console.log(getActions({ one: "arrow up", two: "arrow down" }));
}
