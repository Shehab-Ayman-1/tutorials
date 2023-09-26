import { ComponentPropsWithoutRef } from "react";

type LinkProps = ComponentPropsWithoutRef<"a"> & {
	text: string;
	to: string;
};

const NavLink = ({ text, to, ...rest }: LinkProps) => {
	return (
		<a href={to} {...rest}>
			{text}
		</a>
	);
};

export default NavLink;
