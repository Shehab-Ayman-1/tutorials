export function Interfaces() {
	interface Book {
		item: string;
		title: string;
		isbn?: number;
	}

	interface Game extends Book {
		style: string;
		price: number;
	}

	class Collection<genType> {
		public data: genType[] = [];

		addItem(item: genType): void {
			this.data.push(item);
		}
	}

	const collection1 = new Collection<Book>();
	collection1.addItem({ item: "Book", title: "Atomic Habits", isbn: 15051 });
	collection1.addItem({ item: "Book", title: "Follow Your Heart", isbn: 650365 });
	collection1.addItem({ item: "Book", title: "One Hour In The Day", isbn: 22315 });
	console.log(collection1);

	const collection2 = new Collection<Game>();
	collection2.addItem({ item: "Game", title: "Conquar", style: "Fantacy", price: 150 });
	collection2.addItem({ item: "Game", title: "Crossfire", style: "Action", price: 250 });
	collection2.addItem({ item: "Game", title: "S4", style: "Action", price: 450 });
	console.log(collection2);
}
