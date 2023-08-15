type cards = {
	title: string;
	desc: string;
	price: number;
	available: boolean;
	company?: string;
};

export const Cards = ({ title, desc, price, available, company }: cards) => {
	return (
		<div className="bg-slate-700 p-4 mt-4 text-center">
			<h3 className="text-white">{title}</h3>
			<h3 className="text-white">{desc}</h3>
			<h3 className="text-white">{price}</h3>
			<h3 className="text-white">{available}</h3>
			<h3 className="text-white">{company}</h3>
			<button className="btn">Buy Now</button>
		</div>
	);
};
