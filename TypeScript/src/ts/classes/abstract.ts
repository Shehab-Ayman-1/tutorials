/* 
    Abstract
    -- We Can't Create An Instance From The Abstract Class
    -- Abstract Is Using To Make The Class Is Just For Inherits From The Other Classes
    -- The Abstracted Functions Make The Other Classes Have These Methods
*/

export function Abstract() {
	abstract class Foods {
		constructor(public title: string) {}
		abstract getFoodTime(): void;
	}

	class Pizza extends Foods {
		constructor(title: string, public price: number) {
			super(title);
		}

		getFoodTime = (): void => console.log("Pizza Was Cooked At 1 Hour");
	}

	class Burger extends Foods {
		constructor(title: string, public price: number) {
			super(title);
		}
		getFoodTime = (): void => console.log("Burger Was Cooked At 2 Hour");
	}

	// const food = new Foods() // error => Cannot create an instance of an abstract class
	const pizza = new Pizza("Awasome Pizza", 100);
	const burger = new Burger("Awasome Burger", 150);
	console.log(pizza.title);
	console.log(burger.price);
	pizza.getFoodTime();
}
