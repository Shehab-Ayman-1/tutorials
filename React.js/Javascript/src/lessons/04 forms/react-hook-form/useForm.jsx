import { Fragment } from "react";
import { Explain } from "./explain";
import { WithZod } from "./withZod";
import { WithoutZod } from "./withoutZod";

export const ReactHookForm = () => {
	return (
		<Fragment>
			<Explain />
			{/* <WithoutZod /> */}
			<WithZod />
		</Fragment>
	);
};
