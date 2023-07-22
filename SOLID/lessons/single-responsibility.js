/** Single Responsibility:
 * Wrong: If We Have One Class Do Multiple Jobs
 * Right: We Must To Separates All Thes Jobs To Separate Class
 */

/** The Advantages:
 * Testing: Create Fewer Functionalities Make Fewer Tests
 * Lower Coupling: The Classes Not Depends On Each Other
 * Easier To Understand: Every Functionality Makes One Job So It's Easy To Understand
 */

export const singleResponsibility_1 = () => {
	// Wrong Way
	class _Customer {
		static name = "";
		static age = "";
		static address = "";

		storeCustomer = (name, age, address) => {
			return `Customer Name Is; ${name}, Age; ${age}, Address: ${address}`;
		};

		generateCustomerReport = (name) => {
			return `Customer Report Is; ${name}`;
		};
	}
	let customer1 = new _Customer();
	// console.log(`${customer1.storeCustomer("Shehab", 21, "alex")} | ${customer1.generateCustomerReport("Shehab")}`);

	// Right Way
	class Customer {
		name = "my name";
		age = "my age";
		address = "my address";
	}

	class CustomerDB extends Customer {
		storeOne = (name) => {
			return `Customer Name Is; ${name},`;
		};
	}

	class Generates extends Customer {
		generateReport = (name) => {
			return `Customer Report Is; ${name}`;
		};
	}
	const newCustomer = new CustomerDB();
	const generateReport = new Generates();
	console.log(newCustomer.storeOne("hesham", 21, "egypt"));
	console.log(generateReport.generateReport("hesham"));
	console.log(`Name: [${generateReport.name}], Age: [${generateReport.age}], Address: [${generateReport.address}]`);
};

export const singleResponsibility_2 = () => {
	class Book {
		name = "";
		author = "";
		year = "";
		price = "";
		constructor(name, price, author, year) {
			this.name = name;
			this.author = author;
			this.year = year;
			this.price = price;
		}
	}

	// Wrong Way
	class _Invoices extends Book {
		count = "";
		taxes = "";
		discount = "";
		total = "";

		constructor(name, price, count, taxes, discount) {
			super(name, price);
			this.count = count;
			this.taxes = taxes;
			this.discount = discount;
			this.total = this.getTotal();
		}

		getTotal = () => {
			let price = (this.price - this.price * this.discount) * this.count;
			let total = +price + this.taxes;
			return total;
		};

		printInvoice = () => {
			console.log(`${this.count} ${this.name} = ${this.price}$`);
			console.log(`Discount: ${this.discount * 100}%`);
			console.log(`Taxes: ${this.taxes}$`);
			console.log(`total: ${this.total}$`);
			return `thanks ❤️`;
		};

		saveToFile = () => {
			// Create A New File And Print The Invoice In It
			return `Save File`;
		};
	}

	const invoice1 = new _Invoices("King Kong", 100, 3, 20, 0.15);
	// console.log(invoice1.printInvoice());

	// Right Way
	// Note: We Didn't Seperate getTotal() Because The Class Name [Invoices] Is Normal To Return The Invoices Cost
	class Invoices extends Book {
		count = "";
		taxes = "";
		discount = "";
		total = "";

		constructor(name, price, count, taxes, discount) {
			super(name, price);
			this.count = count;
			this.taxes = taxes;
			this.discount = discount;
			this.total = this.getTotal();
		}

		getTotal = () => {
			let price = (this.price - this.price * this.discount) * this.count;
			let total = +price + this.taxes;
			return total;
		};
	}

	class InvoicesPrinter extends Invoices {
		constructor(name, price, count, taxes, discount, total) {
			super(name, price, count, taxes, discount, total);
		}

		printInvoice = () => {
			console.log(`${this.count} ${this.name} = ${this.count} x ${this.price}$`);
			console.log(`Discount: ${this.discount * 100}%`);
			console.log(`Taxes: ${this.taxes}$`);
			console.log(`total: ${this.total}$`);
			return `thanks ❤️`;
		};
	}

	const invoice2 = new InvoicesPrinter("bank", 100, 3, 15, 0.1);
	// console.log(invoice2.printInvoice());
	// console.log(invoice2.getTotal());
};
