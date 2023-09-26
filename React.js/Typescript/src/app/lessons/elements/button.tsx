import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	text: string;
};

const Button = ({ text, ...rest }: ButtonProps) => {
	return <button {...rest}>{text}</button>;
};

export default Button;
