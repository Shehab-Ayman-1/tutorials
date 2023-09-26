import { useReducer } from "react";
import productAction, { init } from "./actions/product";

export default function Products() {
	const [phone, dispatch] = useReducer(productAction, {}, init);
	return (
		<div>
			<div className="phone-data">
				<h3>
					Phone Title:
					<ul className="second-color">
						<li>
							<span className="main-color">ID :</span> {phone.ID}
						</li>
						<li>
							<span className="main-color">name :</span> {phone.name}
						</li>
						<li>
							<span className="main-color">cost :</span> {phone.cost}
						</li>
						<li>
							<span className="main-color">color :</span> {phone.color}
						</li>
					</ul>
				</h3>
			</div>
			<button className="mybtn" onClick={() => dispatch({ type: "ANDROID", id: 1 })}>
				Andriod
			</button>
			<button className="mybtn" onClick={() => dispatch({ type: "IOS", id: 2 })}>
				IOS
			</button>
		</div>
	);
}
