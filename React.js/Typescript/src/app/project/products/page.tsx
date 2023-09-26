"use client";

import { useEffect, useState } from "react";
import { Cards } from "@/components";
import axios from "axios";

type Product = {
	id: number;
	title: string;
	body: string;
};

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
				setProducts(() => response.data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<h3 className="text-red-500 font-semibold text-2xl flex-between gap-5 mb-5 flex-wrap">
			{products && products.map(({ id, title, body }: Product) => <Cards key={id} title={title} desc={body} price={3000} available={id % 2 ? true : false} />)}
		</h3>
	);
};

export default Products;
