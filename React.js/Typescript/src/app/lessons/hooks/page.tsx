"use client";
import { useRef, useState } from "react";
import { Button } from "@/components";

type Address = {
	[key: string]: any;
	town: string | string[];
	city: string | string[];
	country: string | string[];
};

type User = {
	[key: string]: any;
	name: string;
	age: number;
	skills: string[];
	isAvailable: boolean;
	isJoniour?: "no" | "yes";
	address: Address;
};

function Hooks() {
	const [users, setUsers] = useState<User[]>([]);
	const ref = useRef<HTMLButtonElement>(null);

	const createUser = (name: string, age: number, isAvailable: boolean, isJoniour: "no" | "yes", skills: string[], address: Address): User => {
		return { name, age, isAvailable, isJoniour, skills, address };
	};

	const handleClick = () => {
		if (users.length) return setUsers((u) => (u = []));
		const user1 = createUser("Shehab", 23, true, "no", ["html", "css", "js", "react"], { town: "sidi beshr", city: "alex", country: "egypt" });
		const user2 = createUser("Hesham", 24, false, "yes", ["python", "django", "gui"], { town: "sidi beshr", city: "alex", country: "egypt" });
		const user3 = createUser("Aya", 22, true, "yes", ["photoshop", "illistrutor"], { town: "sidi gaber", city: "alex", country: "egypt" });
		setUsers((u) => (u = [user1, user2, user3]));
	};
	return (
		<div className="flex justify-between items-center flex-wrap gap-4 m-4">
			{users.map((user, i) => (
				<div className="user p-4 bg-slate-800" key={i}>
					<h3 className="text-emerald-500 font-bold text-xl">{user.name}</h3>
					<div className="p-4">
						{Object.keys(user).map((key) =>
							key !== "address" ? (
								<p key={key} className="text-lg text-gray-400 capitalize">
									- <span className="font-bold">{key === "skills" ? `skills(${user[key].length})` : key}</span>: {`${key === "skills" ? user[key].join(" - ") : user[key]}`}
								</p>
							) : (
								<div className="" key={key}>
									{Object.keys(user[key]).map((key) => (
										<p key={key} className="text-lg text-gray-400 capitalize">
											- <span className="font-bold">{key}</span>: {user.address[key]}
										</p>
									))}
									<p className="text-lg text-gray-400 capitalize">
										- <span className="font-bold">Full Address</span>: {Object.values(user.address).join(", ")}
									</p>
								</div>
							)
						)}
					</div>
				</div>
			))}
			<Button text={users.length ? "Clear Users..." : "Fetch Users..."} variant="blue" className="btn w-full mb-[50px] p-5" type="button" ref={ref} autoFocus={false} onClick={handleClick} />
		</div>
	);
}

export default Hooks;
