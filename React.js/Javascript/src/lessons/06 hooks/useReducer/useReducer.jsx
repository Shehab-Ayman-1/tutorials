import Count from "./count";
import Products from "./products";
import User from "./user";

export function UseReducer() {
	return (
		<div className="use-reducer f-20">
			<div className="counter">
				<h3 className="main-color">The First Way</h3>
				<Count />
			</div>
			<hr />
			<div className="product">
				<h3 className="main-color">The Second Way</h3>
				<Products />
			</div>
			<hr />
			<div className="user-form">
				<h3 className="main-color">The Third Way</h3>
				<User />
			</div>
		</div>
	);
}
