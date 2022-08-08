const GetSet = () => {
	class User {
		public msg: () => string;

		constructor(private _username: string, protected _salary: number) {
			this.msg = () => `username: ${this._username}, salary: ${this._salary}`;
		}

		get username(): string {
			return this._username;
		}

		set newUsername(val: string) {
			this._username = val;
		}
	}

	const user = new User("shehab", 5000);

	user.newUsername = "hesham"; // set

	console.log(user.username); // get
	console.log(user.msg()); // get
};

export default GetSet;
