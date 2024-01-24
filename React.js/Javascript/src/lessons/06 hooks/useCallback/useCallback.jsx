import { useCallback, useState, memo } from "react";

/* Problem:
	- Each Time We Change The Valud OR Shuffle The Users Array, Its Rerender SearchInput Component
	- Although We Use memo() Without useCallback() Its Still Render The Input While We Use Shuffle Function And We Don't Change The SearchText Value
		That Because useCallback() Make A Fixed ID For The Function That 
	memo:
	- Memo Is Used To Render The Component Just If Any Of The Props Are Change
	- In Our Example, If onChange Prop Is Change, So It Will Rerender The Input Component Else, It Wonn't
	useCallback:
	- Use To Freeze Everything In The Functions
	- Each Time handleSearch Log 'shehab', Because useCallback Freeze The Users[0],
		So That Each Render Its Not Get The Change In The Users
	Look For:
	- https://www.youtube.com/watch?v=MxIPQZ64x0I&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=4
*/

const SearchInput = memo(({ onChange }) => {
	console.log("render input!");
	return (
		<input type="text" placeholder="Search For User..." onChange={(event) => onChange(event.target.value)} />
	);
});

const initUsers = ["shehab", "ahmed", "mohamed", "ali", "aya", "salma", "nada", "nour", "lama"];
export const UseCallback = () => {
	const [users, setUsers] = useState(initUsers);
	const [searchText, setSearchText] = useState("");

	const handleSearch = useCallback(
		(event) => {
			console.log(users[0]); // shehab, shehab, shehab
			event.preventDefault();
			const newUsers = initUsers.filter((user) => user.includes(searchText));
			setUsers(newUsers);
			setSearchText("");
		},
		[searchText]
	);

	const handleShuffle = useCallback(
		(event) => {
			event.preventDefault();
			const shuffledUsers = users.slice().sort(() => Math.random() - 0.5);
			setUsers(shuffledUsers);
		},
		[users]
	);

	return (
		<div className="f-30">
			<div className="">
				<h3 className="main-color">UseCallback</h3>
				<div className="">
					<p>Problem:</p>
					<small>
						- Each Time We Change The Valud OR Shuffle The Users Array, Its Rerender SearchInput Component
					</small>{" "}
					<br />
					<small>
						- Although We Use memo() Without useCallback() Its Still Render The Input While We Use Shuffle
						Function And We Don't Change The SearchText Value That Because useCallback() Make A Fixed ID For
						The Function That
					</small>
				</div>
				<div className="">
					<p>memo:</p>
					<small>- Memo Is Used To Render The Component Just If Any Of The Props Are Change</small> <br />
					<small>
						- In Our Example, If onChange Prop Is Change, So It Will Rerender The Input Component Else, It
						Wonn't
					</small>
				</div>
				<div className="">
					<p>useCallback:</p>
					<small>- Use To Freeze Everything In The Functions</small> <br />
					<small>
						- Each Time handleSearch Log 'shehab', Because useCallback Freeze The Users[0], So That Each
						Render Its Not Get The Change In The Users
					</small>
				</div>
				<div className="">
					<p>Look For:</p>
					<small>
						- https://www.youtube.com/watch?v=MxIPQZ64x0I&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=4
					</small>
				</div>
			</div>

			<hr />

			<form className="">
				<SearchInput onChange={setSearchText} />
				<button type="submit" className="mybtn" onClick={handleSearch}>
					Search
				</button>
				<button className="mybtn" onClick={handleShuffle}>
					Shuffle
				</button>
			</form>
			{users.map((user, i) => (
				<p key={i}>{user}</p>
			))}
		</div>
	);
};
