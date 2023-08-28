type cards = {
	title: string;
	desc: string;
	price: number;
	available: boolean;
	company?: string;
};

export const Cards = ({ title, desc, price, available, company }: cards) => {
	return (
		<div className="bg-slate-700 p-4 mt-4 max-w-[300px]">
			<h3 className="text-white text-center">{title}</h3>
			<p className="text-gray-500 text-justify mt-2">{desc.slice(0, 150)}</p>
			<h3 className="text-white mt-4 mb-4">Price: ${price}</h3>
			<h3 className="text-white">{available}</h3>
			<h3 className="text-white">{company}</h3>
			<button className="btn w-full text-4xl">Buy Now</button>
		</div>
	);
};
