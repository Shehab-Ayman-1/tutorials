export const openClosed_1 = () => {
	/* Problem -> We Need To Update The _shapePrinter everytime We Need To Append OR Remove One Of The Shapes */
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
	class _ShapePrinter {
		drawShape(shape1, shape2) {
			if (shape1 && shape2) {
				return `Rectangle Area: ${shape1.area}, And Square Area: ${shape2.area}`;
			}
			if (shape1 instanceof _Rectangle) {
				return `Rectangle Area: ${shape1.area}`;
			}
			if (shape1 instanceof _Square) {
				return `Square Area: ${shape1.area}`;
			}
		}
	}
	const _rectangle = new _Rectangle(10, 20);
	const _square = new _Square(10);
	const _shape = new _ShapePrinter();
	// console.log(_shape.drawShape(_square, _rectangle));

	/* Currect -> We Don't Need To Update The ShapePrinter everytime We Need To Append OR Remove One Of The Shapes, We Have A Module (Shape), And We Make It Working Multible Job (Rectangle, Square) Area */
	class Shape {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.area = width * height;
		}
		draw() {
			return "Please Use The Shapes For Current Information";
		}
	}

	class Rectangle extends Shape {
		constructor(width, height) {
			super(width, height);
		}
		draw() {
			return `Rectangle Area: ${this.area}`;
		}
	}

	class Square extends Shape {
		constructor(width) {
			super(width, width);
		}
		draw() {
			return `Square Area: ${this.area}`;
		}
	}

	// Open New Class, And Closed With New Modification
	class ShapePrinter {
		drawShape(shape) {
			return shape.draw();
		}
	}

	const square = new Square(5);
	const rectangle = new Rectangle(10, 5);
	const shape = new ShapePrinter();
	console.log(`${shape.drawShape(square)}, ${shape.drawShape(rectangle)}`);
};

export const openClosed_2 = () => {
	class Phone {
		constructor(size, color, price, year) {
			this.size = size;
			this.color = color;
			this.price = price;
			this.year = year;
		}
	}

	class Samsung extends Phone {
		constructor(size, color, price, year, module) {
			super(size, color, price, year);
			this.module = module;
		}
	}

	class Apple extends Phone {
		constructor(size, color, price, year, isTablet) {
			super(size, color, price, year);
			this.isTablet = isTablet;
		}
	}

	const samsung = new Samsung("6 inch", "black", 5000, 2022, "A10");
	const apple = new Apple("5.4 inch", "red", 4500, 2023, true);
	console.log(samsung, apple);
};
