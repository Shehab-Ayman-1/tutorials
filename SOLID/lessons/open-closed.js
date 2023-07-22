export const openClosed_1 = () => {
	// Wrong
	class _Rectangle {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.area = width * height;
		}
	}
	class _Square {
		constructor(width) {
			this.width = width;
			this.area = width * width;
		}
	}
	class _shapePrinter {
		drawShape(shape1, shape2) {
			if (shape1 && shape2) return `Rectangle Area: ${shape1.area}, And Square Area: ${shape2.area}`;
			else if (shape1 instanceof _Rectangle) return `Rectangle Area: ${shape1.area}`;
			else if (shape1 instanceof _Square) return `Square Area: ${shape1.area}`;
		}
	}
	const _rectangle = new _Rectangle(10, 20);
	const _square = new _Square(10);
	const _shape = new _shapePrinter();
	console.log(_shape.drawShape(_square, _rectangle));

	// Right
	class Shape {
		draw() {
			return "From The Main Draw Method";
		}
	}

	class Rectangle extends Shape {
		constructor(width, height) {
			super();
			this.width = width;
			this.height = height;
			this.area = width * height;
		}

		// Overwrite The Draw Method From The Main Class
		draw() {
			return `Rectangle Area: ${this.area}`;
		}
	}

	class Square extends Shape {
		constructor(width) {
			super();
			this.width = width;
			this.area = width * width;
		}

		// Overwrite The Draw Method From The Main Class
		draw() {
			return `Square Area: ${this.area}`;
		}
	}
	const square = new Square(10);
	const rectangle = new Rectangle(10, 20);
	// console.log(`${square.draw()}, ${rectangle.draw()}`);
};

export const openClosed_2 = () => {
	class Phone {
		constructor(size, color, price) {
			this.size = size;
			this.color = color;
			this.price = price;
		}
	}

	class Sumsung extends Phone {
		constructor(size, color, price, brand, year) {
			super(size, color, price);
			this.brand = brand;
			this.year = year;
		}
	}

	class Apple extends Phone {
		constructor(size, color, price, brand, year) {
			super(size, color, price);
			this.brand = brand;
			this.year = year;
		}
	}

	const sumsung = new Sumsung("260 x 380", "red", 220, "S4", 2023);
	const apple = new Apple("260 x 380", "black", 240, "Note Book", 2022);
	console.log(sumsung, apple);
};
