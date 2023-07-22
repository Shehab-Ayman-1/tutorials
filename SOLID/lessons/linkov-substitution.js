export const linkov_1 = () => {
	class Rectangle {
		constructor(width, height) {
			this.width = width;
			this.height = height;
		}
		calcArea() {
			return this.width * this.height;
		}
	}

	class Square extends Rectangle {
		constructor(width, height) {
			super(width, height);
			this.height = width;
		}
	}

	const square = new Square(10);
	const rectangle = new Rectangle(20, 10);
	console.log(square.calcArea(), rectangle.calcArea());
};

export const linkov_2 = () => {};
