import Length from "../length/length.js";

export default function Repeat(myString, count, charactersLength = false) {
	let result = myString;
	if (Number(count)) for (let i = 0; i < count - 1; i++) result += ` | ${myString}`;
	else result = "Count Has To Be A Number";

	if (charactersLength) return `${Length(result, true)} Character | ${result}`;
	else return result;
}
