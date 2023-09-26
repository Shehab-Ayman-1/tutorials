/* Inherit The Elements Props From React To Be Able To Recieve The Attribute In The Conponent -> Look To Button Component
	- ComponentProps<> -> Get Element Props
	- ComponentPropsWithRef<> -> Get Element Props With ref Attribute
	- ComponentPropsWithoutRef<> -> Get Element Props Without ref Attribute
*/
"use client";
import { MouseEvent } from "react";
import Button from "./button";
import NavLink from "./navLink";

function Elements() {
	const handleClick = ({ currentTarget: { name } }: MouseEvent<HTMLButtonElement>) => {
		console.log(`Button Name: ${name}`);
	};

	return (
		<div>
			<NavLink text="Custome Link" to="#top-section" className="text-3xl hover:text-blue-300" />
			<Button text="Click Me!" name="submit" className="btn block text-3xl" onClick={handleClick} />
		</div>
	);
}

export default Elements;
