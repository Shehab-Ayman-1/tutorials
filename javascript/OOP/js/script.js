// ============================================= Introdaction =============================================
/* (function Intro() {
	// We Just Put Every Thing In Simple Function To Fold It By VS Code
	// [1] Object Literal
	// [2] With New Object
	// [3] With Object.Create()
	// [4] With Object.assign()
	// [5] With Object.defineProperty()

	// ==========================
	// [1] Object Literal
	let mySimpleObj = {
		firstName: "Shehab",
		lastName: "Ayman",
		status: true,
		address: {
			egypt: "Alexandria",
			usa: "California",
			ksa: "Reyadh",
		},
		getFullName: function () {
			return `My Full Name Is ${mySimpleObj.firstName} ${mySimpleObj.lastName} & My Status Is [ ${this.status} ]`;
		},
	};
	console.log(mySimpleObj.firstName); // Shehab
	console.log(mySimpleObj["lastName"]); // Ayman
	console.log(mySimpleObj.address["egypt"]); // Alexandria
	console.log(mySimpleObj.getFullName()); // My Full Name Is Shehab Ayman & My Status Is [ true ]
	console.log("==".repeat(50));

	// ==========================
	// [2] With New Object
	let myNewObj = new Object();
	myNewObj.firstName = "Hesham";
	myNewObj.lastName = "Mohamed";
	myNewObj.status = true;
	myNewObj.address = { egypt: "Cairo", usa: "Chekago", ksa: "Maka" };
	myNewObj.getFullName = () =>
		`My Full Name Is ${myNewObj.firstName} ${myNewObj.lastName} & My Status Is [ ${myNewObj.status} ]`;

	console.log(myNewObj.firstName); // Shehab
	console.log(myNewObj["lastName"]); // Ayman
	console.log(myNewObj.address["egypt"]); // Alexandria
	console.log("==".repeat(50));

	// ==========================
	// [3] With Object.Create()
	let myCreateObj1 = Object.create(mySimpleObj);
	console.log(myCreateObj1.firstName); // Shehab
	console.log(myCreateObj1.lastName); // Ayman
	myCreateObj1.status = false;
	console.log(myCreateObj1.status); // False
	console.log(myCreateObj1.getFullName()); // Status [ false ] => Here It't False Because We Use This In The Function To Get The Status
	console.log("==".repeat(50));

	// ==========================
	let myCreateObj2 = Object.create(myNewObj);
	console.log(myCreateObj2.firstName); // Shehab
	console.log(myCreateObj2.lastName); // Ayman
	myCreateObj2.status = false;
	console.log(myCreateObj2.status); // False
	console.log(myCreateObj2.getFullName()); // Status [ True ] => Here It't True Becuase We Use The Name Of The Function So That The Compiler Get The Value Of the Status From The Main Object
	console.log("==".repeat(50));

	// ==========================
	// [4] With Object.assign()
	const src1 = {
		prop1: "Value1",
		prop2: "Value2",
		method1: () => `Method 1`,
	};
	const src2 = {
		prop3: "Value3",
		prop4: "Value4",
		method2: () => `Method 2`,
	};
	const target = {
		prop5: "Value5",
	};
	Object.assign(target, src1, src2, { prop6: "Value6" }); // Object.assign => Is Using To Copy The src Objects In The Target Object
	console.log(src1); // prop1, prop2, method1
	console.log(src2); // prop3, prop4, method2
	console.log(target); // prop1, prop2, prop3, prop4, prop5, prop6 method1, method2
})(); */

// =========================================== Object Meta Data ===========================================
/* (function metaData() {
	// defineProperty | defineProperties
	// [1] Value
	// [2] Writeable
	// [3] Enumerable
	// [4] Configurable
	// [5] getOwnPropertyDescriptor
	// =========================

	// [1] Value
	const myObj1 = { a: 1, b: 2 };
	myObj1.d = 4;
	Object.defineProperty(myObj1, "c", { value: 3 }); // Add { c: 3 } To myObj1
	console.log(myObj1);
	console.log("##".repeat(50));

	// [2] Writeable
	const myObj2 = { a: 3, b: 4 };
	Object.defineProperty(myObj2, "c", { value: 5, writable: true }); // Can't Edit { c: 5 } Because The Writable = False
	console.log((myObj2.c = 500));
	console.log("##".repeat(50));

	// [3] Enumerable
	const myObj3 = { a: 5, b: 6 };
	Object.defineProperty(myObj3, "c", { value: 7, writable: true, enumerable: false });
	for (let key in myObj3) console.log(key, " => ", myObj3[key]); // Can't Print { c: 7 } Because The Enumerable = False
	console.log(Object.getOwnPropertyNames(myObj3)); // We Can To Use This Method To Get All The Keys That Mind From Print In The Loop
	console.log("##".repeat(50));

	// [4] Configurable
	const myObj4 = { a: 7, b: 8 };
	Object.defineProperty(myObj4, "c", { value: 9, writable: true, enumerable: true, configurable: true });
	delete myObj4.c; // Can't Delete { c: 9 } Because The Configurable = False
	console.log(myObj4);
	console.log("##".repeat(50));

	// [5] getOwnPropertyDescriptor
	const myObj5 = { a: 10, b: 11 };
	myObj5.d = 13;
	Object.defineProperty(myObj5, "c", { value: 12 });
	console.log(Object.getOwnPropertyDescriptor(myObj5, "c")); // writable: [false], enumerable: [false], configurable: [false]
	console.log(Object.getOwnPropertyDescriptor(myObj5, "d")); // writable: [true], enumerable: [true], configurable: [true]
})();
 */

// ============================================ Delete Operators ==========================================
/* (function Operators() {
	const user = { name: "shehab", age: 21, country: "egypt" };
	delete user; // Can't Delete The Main Object
	console.log(user);

	delete user.name; // Delete Name
	console.log(user);

	delete user.age; // Delete Name
	console.log(user);

	console.log(delete user.age); // true

	console.log("##".repeat(50));

	// ==========================
	const myName = "shehab";
	delete myName;
	console.log(myName); // Shehab => Not Deleted
	console.log(delete myName); // False
	console.log("##".repeat(50));

	// ========== Object.freeze ==========
	const myObj = { name: "Hesham", age: 21 };
	delete myObj.name; // Delete Name
	console.log(myObj); // { age: 21 }

	Object.freeze(myObj); // Freeze The Object
	delete myObj.age; // Not Deleted
	console.log(delete myObj.age); // false
	console.log(myObj); // { age: 21 }
	console.log("##".repeat(50));

	// ========== Object.defineProperty ==========
	const emptyObj1 = {};
	Object.defineProperty(emptyObj1, "name", { value: "shehab", configurable: true });
	console.log(emptyObj1); // { name: "shehab" }
	delete emptyObj1.name; // Name Was Deleted Because The Configurable === true

	console.log(emptyObj1); // { }

	const emptyObj2 = {};
	Object.defineProperty(emptyObj2, "name", { value: "shehab", configurable: false });
	console.log(emptyObj2); // { name: "shehab" }
	delete emptyObj2.name; // Name Was Deleted Because The Configurable === False

	console.log(emptyObj2); // { name: "shehab" }
})();
 */

// ============================================ For ... In Loop ===========================================
/* (function forInLoop() {
	let list = ["Shehab", "Hesham", "Aya"];
	let obj = {
		name: "Rahma",
		age: 21,
		country: "Egypt",
	};

	for (let index in list) {
		console.log(`${index} => ${list[index]}`);
	}

	console.log("##".repeat(50));

	for (let info in obj) {
		console.log(info, " => ", obj[info]);
	}
})(); */

// ============================================== Constructor =============================================
/* (function Constructor() {
// The Constructor Is An Object Build By Function
// [1] Create Multible Objects
// [2] Create Constructor
// ==========================

	// [1] The Simple Way To Create Multible Objects
	const phone1 = {
		serial: 123,
		color: "Red",
		price: 1500 - 100,
	};
	const phone2 = {
		serial: 456,
		color: "Black",
		price: 1500 - 100,
	};
	const phone3 = {
		serial: 789,
		color: "Silver",
		price: 1500 - 100,
	};
	console.log(phone1, phone2, phone3);
	console.log("##".repeat(50));

	// =========================
	// [2] The Constructor Way To Create Multible Objects
	function Phone(serial, color, price) {
		// This => Back To The Main Constructor
		// First serial => Back To The serial Key In The Constructor
		// Second serial => Back To The Parameter Value
		this.serial = serial;
		this.color = color;
		this.prive = price - 100;
	}
	// new => Is Using To Call Contructor Function | Not Simple Function
	let phone4 = new Phone(123, "Red", 1500);
	let phone5 = new Phone(456, "Black", 1500);
	let phone6 = new Phone(789, "Silver", 1500);
	let phone7 = new Phone();
	console.log(phone4);
	console.log(phone5);
	console.log(phone6);
	console.log(phone7); // Undefined, Undefined, Undefined, Undefined, Undefined
	console.log("##".repeat(50));

	// =========================
	function User(fName, friend, age, email, emailState) {
		this.firstName = fName;
		this.myFriend = friend;
		this.myAge = Number(age);
		this.myCountry = "Egypt";
		this.fullName = () => `My Full Name Is: [ ${this.firstName} ${this.myFriend} ]`;
		this.ageInDays = () => `My Age In Days Is: [ ${this.myAge * 365.25} ]`;
		this.updateName = function (newName) {
			if (this.myAge > 18) {
				this.firstName = newName;
			} else {
				return "Sorry, Your Age Is Less Than 18 Years";
			}
		};
		this.email = () => {
			if (emailState === "private") return "This Email Is From The private Data";
			else if (emailState === "show") return `Your Email Is => ${email}`;
			else return "Please Enter Right Options [ Show, Private ]";
		};
	}
	const user = new User("Shehab", "Hesham", 21, "shehabayman365@gmail.com", "private");
	console.log(user); // { firstName: "Shehab" }
	console.log(user.fullName()); // { firstName: "Shehab", myFriend: "Hesham", myAge: 21 }
	console.log(user.ageInDays()); // { firstName: "Shehab", myFriend: "Hesham", myAge: 21 }
	console.log(user.email()); // { firstName: "Aya", myFriend: "Hesham", myAge: 21 }
	user.updateName("Aya");
	console.log(user); // { firstName: "Aya" }
})();
 */

// =============================================== ProtoType ==============================================
/* (function Prototype() {
	// [1] Intro To Prototype
	// [2] Add Constructor To The Prototype
	// ==========================

	// [1] Intro To Prototype
	function User(fName, lName, age) {
		this.first_Name = fName;
		this.last_Name = lName;
		this.days = () => age * 365;
		this.fullName = () => `My Full Name IS: ${this.first_Name} ${this.last_Name}`;
	}

	let user1 = new User("shehab", "Ayman", 21);
	let user = User.prototype;
	let string = String.prototype;
	let array = Array.prototype;
	let object = Object.prototype;
	let test = new String("shehab");
	console.log("User => ", user);
	console.log("String => ", string);
	console.log("Array => ", array);
	console.log("Object => ", object);
	console.log(test.toUpperCase());
	console.log("##".repeat(50));

	// ==========================
	// [2] Add Constructor To The Prototype
	Object.prototype.newSerial = function (newSerial) {
		return `The Default Serial Is ${newSerial}`;
	};
	Object.prototype.sayHello = function () {
		return "Hello Bro";
	};
	function Phone(name) {
		this.name = name;
		this.serial = "12345";
		if (!new.target) {
			// If The Developer Not Exist [ new ] Before The Name Of The Contructor, Print An Error In The Console
			throw new Error("Please Write [ new ] Before The Constructor To Create A New Contructor");
		}
	}
	let newUser = new Phone("Shehab Ayman Awad");
	console.log(newUser);
	console.log("##".repeat(50));

	// ==========================
	// [3] Create 2 Simple Prototype
	String.prototype.sayYouLaveMe = function () {
		let result = this;
		return `I Love You [ ${result} ]`;
	};
	console.log("Shehab".sayYouLaveMe()); // I Love You Shehab

	String.prototype.zFill = function (width) {
		let result = this;
		while (result.length < width) {
			result = `0${result}`;
		}
		return result.toString();
	};
	console.log("1".zFill(4)), console.log("12".zFill(4)), console.log("123".zFill(4)), console.log("1234".zFill(4));
})();
 */

// ============================================= Class Syntax =============================================
/* (function Classes() {
	// This IS The New Syntax Of The Contructor In ES6
	// [1] Class Syntax
	// [2] Static Method
	// [3] Inheritance
	// [4] Getter & Setter Accessors
	// =====================

	// [1] Class Syntax
	class myClass {
		// Note: We Can Write The Methods In The Costructor || Out Of It
		constructor(fName, lName, email, phone) {
			this.name = {
				firstName: fName,
				lastName: lName,
			};
			this.email = email;
			this.phone = phone;
			this.sayHello = function () {
				return `Hello [ ${this.name.firstName} ]`;
			};
		}
		sayEmail = function () {
			return `Your Email IS [ ${this.email} ]`;
		};
		writeMsg() {
			return "Message From Parent Class";
		}
		// No Problem If We Use async & Await Here
		async fetchData(path, ...Functions) {
			await fetch(path)
				.then((res) => res.json())
				.then((data) => Functions.map((method) => method(data)));
		}
	}
	let user1 = new myClass("Shehab", "Ayman", "shehabAyman365@gmail.com", "01067421381");
	let user2 = new myClass("Rahma", "Mahmoud", "rahmaMahmoud265@gmail.com", "01554566092");
	console.log(user1), console.log(user1.sayHello()), console.log(user2.sayEmail());
	user2.fetchData("../data/departments.json", home, about);
	function home(data) {
		return data;
	}
	function about(data) {
		return data;
	}
	console.log("##".repeat(50));

	// =====================
	// [2] Static Method
	class staticClass {
		static counter = 0;
		constructor(name, email, counter) {
			this.name = name;
			this.email = email;
			this.counter = counter;
			staticClass.counter++; // We Use The Class Name To Call The Variable In The Main Class
		}
		sayName() {
			return `My Name IS ${this.name}`;
		}
		sayEmail() {
			return `My Email IS ${this.email}`;
		}
		sayCounter() {
			return `My Counter IS ${this.counter}`;
		}
		static objectCounter() {
			return `You Have ${this.counter} Object Was Created By staticClass`;
		}
	}
	new staticClass("shehab", "s@gmail.com", 1), new staticClass("Rahma", "r@gmail.com", 2);
	new staticClass("shehab", "s@gmail.com", 3), new staticClass("Rahma", "r@gmail.com", 4);
	new staticClass("shehab", "s@gmail.com", 5), new staticClass("Rahma", "r@gmail.com", 6);
	// console.log(staticClass1.objectCounter()); // Error
	console.log(staticClass.objectCounter());
	console.log("##".repeat(50));

	// =====================
	// [3] Inheritance
	class childClass extends myClass {
		constructor(serial, fName, lName, email, phone = "Phone Number => Not Exist") {
			super(fName, lName, email, phone);
			this.serial = serial;
		}
		sayName() {
			return `Your Name Is ${this.name.fName}`;
		}
		saySerial() {
			return `Your Serial Number IS: ${this.serial}`;
		}
		writeMsg() {
			return "Message From Child Class";
		}
	}
	let inheritanceUser = new childClass(123, "Shehab", "Ayman", "ShehabAyman365@gmail.com");
	console.log(inheritanceUser.phone); // From The Child Class
	console.log(inheritanceUser.saySerial()); // From The Child Class
	console.log(inheritanceUser.sayHello()); // From The Parent Class
	console.log(inheritanceUser.sayEmail()); // From The Child Class
	console.log(inheritanceUser.writeMsg()); // From The Child Class [ Overwrite ]
	console.log(user1.writeMsg()); // From The Child Class
	console.log("##".repeat(50));

	// =====================
	// [4] Getter & Setter Accessors
	class Accessors extends myClass {
		constructor(fName, lName, email, phone) {
			super(fName, lName, email, phone);
		}
		// When We Convert The Function To Getter Accessor, Its Not Function Now, It Just A Simple Property
		get showInfo() {
			return `Your Information IS: Name => ${this.name.firstName} | Email =>  ${this.email} | Phone => ${this.phone}`;
		}
		// We Have 2 Ways To Chengs The Property Value
		// [1] The Normal Way
		changeName(newName) {
			this.name.firstName = newName;
			return `Your New Name IS: ${this.name.firstName}`;
		}
		// [2] Setter Accessory
		set changeEmail(newEmail) {
			this.email = newEmail;
			return `Your New Email IS: ${this.email}`;
		}
	}
	let accessorsUser = new Accessors("Shehab", "Ayman", "shehabayman365@gmail.com", "01067421381");
	console.log(accessorsUser); // "Shehab Ayman", "shehabayman365@gmail.com", "01067421381"
	console.log(accessorsUser.showInfo); // Without Brackets Because It Is Just A Simple Property
	accessorsUser.changeName("Rahma");
	console.log(accessorsUser); // "Rahma Mahmoud", "shehabayman365@gmail.com", "01067421381"
	accessorsUser.changeEmail = "RahmaMahmoud265@gmail.com";
	console.log(accessorsUser); // "Rahma Mahmoud", "RahmaMahmoud265@gmail.com"", "01067421381"
})();
 */
