/* 
    Generics
    -- Help To Write A Rausable Code
    -- Allow To Pass Type As A Parameter To Other Type
    -- You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
    -- We Can Create:
    -- -- Generic Classes.
    -- -- Generic Functions.
    -- -- Generic Methods.
    -- -- Generic Interfaces.
*/

export function OneType() {
	const returnString = (val: string): string => val;

	const returnNumber = (val: number): number => val;

	const returnBoolean = (val: boolean): boolean => val;

	const GenericTypes = <genType>(val: genType): genType => val;

	console.log(returnString("shehab"));
	console.log(returnNumber(150));
	console.log(returnBoolean(true));
	console.log(GenericTypes<number>(100));
}
