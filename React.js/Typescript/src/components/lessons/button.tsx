import { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
	text: string;
	variant: "red" | "green" | "blue";
};

export const Button = ({ text, variant, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={className ? `!bg-${variant}-300 ${className}` : `!bg-${variant}-300`}>
			{text}
		</button>
	);
};
