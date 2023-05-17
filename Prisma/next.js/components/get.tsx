import { Delete } from "./delete";
import { Update } from "./update";

type recipesType = { id: string; region: string };

export const GetAll = ({ recipes }: { recipes: recipesType[] }) => {
	return (
		<div className="container">
			{recipes.map(({ id, region }) => {
				return (
					<div key={id}>
						<h2>
							<Delete id={id} /> <Update id={id} region={region} /> # {id} | {region}
						</h2>
					</div>
				);
			})}
		</div>
	);
};
