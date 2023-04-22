export const constructor = () => {
	// Constructor -> Is A Normal Function Using To Create An Object Will Callback [Constructor]
	// =============================================================================
	// Using Normal Way When Update Multiple Objects:
	// ===============
	let phone1 = { id: 101, brand: "Samsung", salary: 1000 };
	let phone2 = { id: 102, brand: "Oppo", salary: 2000 };
	let phone3 = { id: 103, brand: "Realme", salary: 3000 };
	phone1.salary = phone1.salary + 500;
	phone2.salary = phone2.salary + 500;
	phone3.salary = phone3.salary + 500;
	console.table({ phone1, phone2, phone3 });

	// ===============
	// Using OOP When Update Multiple Objects:
	// ===============
	class Phone {
		static count = 0;
		constructor(id, brand, salary) {
			// We Update The Properties By Add The Addition Next To The Attribute
			// Properties
			this.id = id || new Date().getTime();
			this.brand = brand || "None Brand";
			this.salary = salary <= 2000 ? salary + 500 : salary;
			this.msg = () => `Message From Class Properties`;
			Phone.count++;
		}

		// Methods
		newBrand(newBrand) {
			this.brand = newBrand;
		}
		static membersCount() {
			return `We Have: ${Phone.count} Members For Now.`;
		}
	}
	let phone4 = new Phone(104, "Sumsung", 1000);
	let phone5 = new Phone("", "Oppo", 2000);
	let phone6 = new Phone(106, "", 3000);
	console.table({ phone4, phone5, phone6, instanceof: phone4 instanceof Phone, constructor: phone5.constructor === Phone });

	console.log(phone4.brand); // Samsung
	phone4.newBrand("Apple");
	console.log(phone4.brand); // Apple

	console.log(Phone.membersCount());
};

export const inheritance = () => {
	// super(properties) -> Inherits The Properties That Already Create In The Extends Class
	class Employee {
		static count = 0;
		constructor(id, name, email, phone) {
			this.id = id;
			this.name = name;
			this.email = email;
			this.phone = phone;
			Employee.count++;
		}
	}
	let employee1 = new Employee(1, "Mahmoud", "mah@oo.com", "0123 456 789");
	let employee2 = new Employee(1, "Mahmoud", "mah@oo.com", "0123 456 789");

	class Manager extends Employee {
		static count = 0;
		constructor(id, name, email, phone, permissions) {
			super(id, name, email, phone);
			this.permissions = permissions;
			Manager.count++;
		}
		employeesCount() {
			return `All Employees Members: ${Employee.count}`;
		}
	}
	let manager1 = new Manager(1, "Mahmoud", "mah@oo.com", "0123 456 789", true);
	let manager2 = new Manager(1, "Mahmoud", "mah@oo.com", "0123 456 789", true);
	console.log(manager1.employeesCount()); // 4

	class Owner extends Manager {
		constructor(id, name, email, phone, permissions, abilities) {
			super(id, name, email, phone, permissions);
			this.abilities = abilities;
		}
		managerCount() {
			return `All Manager Members: ${Manager.count}`;
		}
	}
	let owner1 = new Owner(1, "Mahmoud", "mah@oo.com", "0123 456 789", true, "control");
	console.log(owner1.employeesCount()); // 5
	console.log(owner1.managerCount()); // 3
};

export const encapsulation = () => {
	/* 
	Class Fields:
	- Are Public By Default

	Encapsilation:
	- [#] -> Use # Before The Property Name, Then Declear This Property In The Top Of The Class
	- Save The Class Data From The illegal Access
	- Help To Achieve The Target Without Revealing It's Complex Details
	- Reduce Human Errors
	- Make The App More Flexible And Manageable
	*/

	class User {
		#password;
		constructor(username, password) {
			this.username = username;
			this.#password = password;
		}
		static staticPassword() {
			return this.#password;
		}
		getPassword() {
			return `User Password Is: ${this.#password}`;
		}
	}
	let user = new User("shehab.ayman", 123);
	// console.log(user.#password); // Property '#password' is not accessible outside class 'User' because it has a private identifier.

	class Developer extends User {
		constructor(username, password, permissions) {
			super(username, password);
			this.permissions = permissions;
		}
		getStaticPassword() {
			return User.staticPassword();
		}
		getUserPassword() {
			return this.getPassword();
		}
	}
	let developer = new Developer("developer.man", 123, true);
	// console.log(developer.getStaticPassword()); // Error, Can't Read Private Member
	console.log(developer.getUserPassword());
};

export const prototype = () => {
	/* prototype:
	- Each Class Is Created Has A Prototype Inside It
	- The Prototype Contain The [methods] Of The Class
	- When Use Prototype As Line 159, We Create A New Method In The Class
	- We Can Create A New Methods Not Builtin In Javascript Language By Prototype As Line 
	*/
	class User {
		constructor(username, email) {
			this.username = username;
			this.email = email;
		}
		getEmail() {
			return `User Email Is: ${this.email}`;
		}
	}
	let user = new User("shehab.ayman", "she@ee.org");
	console.log(user);

	console.log(User.prototype); // {constructor, getEmail}
	User.prototype.getUser = () => `Username Is: ${user.username}`;
	console.log(User.prototype); // {constructor, getUser, getEmail}

	console.log(user.getUser()); // shehab.ayman

	// ====================================================
	Object.prototype.zFill = function (len, char) {
		if (typeof len !== "number") return console.error("zeros Attribute Has To Be A Number");
		if (this.length > len) return this; // "1234"

		let result = this.split("");
		for (let i = 0; i < len - this.length; i++) result.unshift(char);

		return result.join("");
	};
	console.log("1234".zFill(5, 0));
};
