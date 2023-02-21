import { DELETETASK } from "../../redux-helper/new-redux/to-do-list-slice";

export default function DeleteTask(item, dispatch) {
	dispatch(DELETETASK(item));
}
