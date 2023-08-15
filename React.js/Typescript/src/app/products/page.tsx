import { Cards } from "@/components";

const Products = () => {
	return (
		<h3 className="text-red-500 font-semibold text-2xl flex-between gap-5 mb-5 flex-wrap">
			<Cards title="keyboard" desc="Amazing keyboard" price={3000} available company="amazon" />
			<Cards title="keyboard" desc="Amazing keyboard" price={3000} available company="amazon" />
			<Cards title="keyboard" desc="Amazing keyboard" price={3000} available company="amazon" />
			<Cards title="keyboard" desc="Amazing keyboard" price={3000} available company="amazon" />
			<Cards title="keyboard" desc="Amazing keyboard" price={3000} available company="amazon" />
		</h3>
	);
};

export default Products;
