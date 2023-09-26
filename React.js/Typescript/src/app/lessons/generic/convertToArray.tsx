/* We Have A Problem Now
   - If The value Attr Is A String -> Number Input Will Return An Error because The obj.number Is A Int
   - If The value Attr Is A Number -> String Input Will Return An Error because The obj.string Is A string
   Sothat We Need To Use The Generic To Make The Incomming value Datatype In The Same Type Of The Function Return
*/

"use client";
import { ChangeEvent, useState } from "react";

function ConvertToArray() {
	const [obj, setObj] = useState({ string: "", number: 0 });
	const [output, setOutput] = useState({ string: [""], number: [0] });

	const convertToArray = <T,>(name: string, value: T): T[] => {
		return [value];
	};

	function _convertToArray<T>(name: string, value: T): T[] {
		return [value];
	}

	const handleChange = ({ currentTarget: { name, value } }: ChangeEvent<HTMLInputElement>) => {
		setObj((o) => (o = { ...o, [name]: name === "number" ? +value : value }));

		const output = convertToArray(name, name === "number" ? +value : value);
		setOutput((o) => (o = { ...o, [name]: output }));
	};

	const handleClick = () => {
		console.log(output);
	};

	return (
		<div className="p-4">
			<input className="block p-4 text-xl text-black rounded-lg w-1/2 mb-3" type="text" name="string" value={obj.string} placeholder="Enter A String" onChange={handleChange} />
			<input className="block p-4 text-xl text-black rounded-lg w-1/2 mb-3" type="number" name="number" value={obj.number} placeholder="Enter A Number" onChange={handleChange} />
			<button className="btn p-4 !text-[22px] font-bold !bg-blue-300 rounded-lg w-1/2" onClick={handleClick}>
				Click Me
			</button>
			<div className="">
				<h1 className="font-bold text-4xl mb-4">Outputs: </h1>
				<p className="text-4xl">
					Type - {typeof output.string[0]}[] = {JSON.stringify(output.string)}
				</p>
				<p className="text-4xl">
					Type - {typeof output.number[0]}[] = {JSON.stringify(output.number)}
				</p>
			</div>
		</div>
	);
}

export default ConvertToArray;
