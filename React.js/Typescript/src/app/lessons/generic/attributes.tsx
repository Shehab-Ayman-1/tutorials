// Now We Must To Get The Same Type Of Padding And Margin
type ButtonProps<T> = {
	backgroundColor: "red" | "green" | "blue";
	padding: T[];
	margin: T[];
};

const Button = <T,>({ backgroundColor, padding, margin }: ButtonProps<T>) => {
	const [pTop, pRight, pBottom, pLeft] = padding;
	const [mTop, mRight, mBottom, mLeft] = margin;
	const paddingSizes = `${pTop}px ${pRight}px ${pBottom}px ${pLeft}px`;
	const marginSizes = `${mTop}px ${mRight}px ${mBottom}px ${mLeft}px`;

	return (
		<button style={{ padding: paddingSizes, margin: marginSizes }} className={`btn p-4 m-4 !text-[22px] font-bold !bg-${backgroundColor}-300 rounded-lg w-1/2`}>
			Click Me
		</button>
	);
};

function Attributes() {
	return (
		<div className="">
			<Button backgroundColor="blue" padding={[10, 10, 10, 10]} margin={[10, 10, 10, 10]} />
			<Button backgroundColor="red" padding={["10", "10", "10", "10"]} margin={["10", "10", "10", "10"]} />
		</div>
	);
}

export default Attributes;
