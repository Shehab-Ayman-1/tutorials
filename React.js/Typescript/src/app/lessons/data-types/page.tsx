"use client";
import { useState } from "react";

type Address = {
	[key: string]: any;
	town: string;
	city: string;
	country: string;
};

type User = {
	[key: string]: any;
	name: string;
	age: number;
	skills: string[];
	address: Address;
};

type Owner = {
	id: string;
	name: string;
	age: number;
};

type Guest = Omit<Owner, "age">; // { id: string, name: string }

const DataTypes = () => {
	const [user, setUser] = useState<User>({ name: "shehab", age: 23, skills: ["frontend", "backend", "MERN Stack"], address: { town: "sidi beshr", city: "alex", country: "egypt" } });
	const [owner, setOwner] = useState<Owner>({ id: "1", name: "shehab", age: 23 });
	const [guest, setGuest] = useState<Guest>({ id: "2", name: "hesham" });

	return (
		<div className="flex justify-between items-center flex-wrap gap-4 m-4">
			<div className="user p-4 bg-slate-800">
				<h3 className="text-emerald-500 font-bold text-xl">DataTypes:</h3>
				<div className="p-4">
					{Object.keys(user).map((key) =>
						key !== "address" ? (
							<p key={key} className="text-lg text-gray-400 capitalize">
								- <span className="font-bold">{key === "skills" ? `skills(${user[key].length})` : key}</span>: {`${key === "skills" ? user[key].join(" - ") : user[key]}`}
							</p>
						) : (
							<div className="" key={key}>
								{Object.keys(user.address).map((key) => (
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
		</div>
	);
};

export default DataTypes;
