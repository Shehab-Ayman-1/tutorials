/* We Have A Problem Now
   - If The value Attr Is A String -> Number Input Will Return An Error because The obj.number Is A Int
   - If The value Attr Is A Number -> String Input Will Return An Error because The obj.string Is A string
   Sothat We Need To Use The Generic To Make The Incomming value Datatype In The Same Type Of The Function Return
*/

import ConvertToArray from "./convertToArray";
import Attributes from "./attributes";

function Generic() {
	return (
		<div>
			{/* <ConvertToArray /> */}
			<Attributes />
		</div>
	);
}

export default Generic;
