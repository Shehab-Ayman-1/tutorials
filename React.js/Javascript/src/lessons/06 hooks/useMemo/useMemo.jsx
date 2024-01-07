import { useMemo, useState } from "react";

const USERS_LENGTH = 29_999_99;
const initUsers = Array(USERS_LENGTH)
	.fill("userName")
	.map((_, index) => ({
		id: index,
		name: `name-${index + 1}`,
		role: index === USERS_LENGTH - 1 ? "admin" : "user",
	}));

export const UseMemo = () => {
	const [count, setCount] = useState(0);
	const [users] = useState(initUsers);

	// const admin = users.find((user) => user.role === "admin");
	// console.log(admin.id);

	const admin = useMemo(() => {
		console.log("admin.id");
		return users.find((user) => user.role === "admin");
	}, [users]);

	return (
		<div className="f-30">
			<p>Problem: - React Go To Find The Admin User Each Time The Count Is Changing</p>
			<p>Solve: - We Use useMemo Hook To Mind Rerender Function That Is Not Neccessry Do It</p>
			<br />
			<p>count: {count}</p>
			<p>Admin User: {admin?.name}</p>
			<button className="mybtn" onClick={() => setCount((c) => c + 1)}>
				+
			</button>
		</div>
	);
};
