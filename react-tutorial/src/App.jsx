/* React */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Css Style */
import "./scss/style.css";

/* Layout */
import Start from "./lessons/00 start/start";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";

/* Lessons */
// Basics
import Components from "./lessons/01 intro/components";
import Props from "./lessons/02 props/parent";
import State from "./lessons/03 state/state";
import Events from "./lessons/04 events/onchange";
import Loops from "./lessons/05 concepts/loops";
import Conditions from "./lessons/05 concepts/conditions";
import JsonLocalServerToDoList from "./lessons/14 json-local-server/json-local-server";

// Style
import NormalStyle from "./lessons/09 style/normal-style";
import MultipleStyle from "./lessons/09 style/multiple-style";
import StyledComponents from "./lessons/09 style/styled-components-lib";

// Life Cicle
import ComponentWillMount from "./lessons/06 lifeCicle/clock";
import ComponentDidMount from "./lessons/06 lifeCicle/component-did-mount";
import ComponentDidUpdate from "./lessons/06 lifeCicle/component-did-update";
import ComponentDidUnmount from "./lessons/06 lifeCicle/component-did-unmount";

// Forms
import DefaultForms from "./lessons/08 forms/defaultForm";
import Formik from "./lessons/08 forms/formik";

// Ajax Request
import GetAllUsers from "./lessons/10 ajax-request/get-all";
import GetUser from "./lessons/10 ajax-request/get-user";
import AddUser from "./lessons/10 ajax-request/add-user";
import DeleteUser from "./lessons/10 ajax-request/delete-user";
import UpdateUser from "./lessons/10 ajax-request/update-user";
import NotFound from "./lessons/11 not-found/not-found";

// Hooks
import ContextApi from "./lessons/12 react-hooks/context-api/context-api";
import UseEffect from "./lessons/12 react-hooks/use-effect/useEffect";
import UseState from "./lessons/12 react-hooks/use-state/useState";
import UseRef from "./lessons/12 react-hooks/use-ref/useRef";
import UseReducer from "./lessons/12 react-hooks/use-reducer/useReducer";
import UseNavigate from "./lessons/12 react-hooks/use-navigate/useNavigate";
import CustomeHook from "./lessons/12 react-hooks/custome-hook/customeHook";

// Redux
import ReduxOldCounter from "./lessons/13 redux/counter/old-counter";
import ReduxNewCounter from "./lessons/13 redux/counter/new-counter";
import ReduxSignin from "./lessons/13 redux/signin/signin";
import Ecommerce from "./lessons/13 redux/e-commerce/e-commerce";
import ReduxToDoList from "./lessons/13 redux/to-do-list/to-do-list";
import ReduxComponent from "./lessons/13 redux/redux-thunk/thunk-component";
import ReduxThunk from "./lessons/13 redux/redux-thunk/redux-thunk";

// Material Ui
import Materials from "./lessons/15 material-ui/materials";

// Practice
import ToDoList from "./lessons/07 practice/07 to-do-list/ToDoList";
import Login from "./lessons/07 practice/login/login";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Sidebar />
			<Routes>
				{/* 404 Page Now Found */}
				<Route path="*" element={<NotFound />} />

				{/* Home Page */}
				<Route path="/" element={<Start />} />

				{/* Basics */}
				<Route path="/basics">
					<Route path="components" element={<Components />} />
					<Route path="props" element={<Props />} />
					<Route path="state" element={<State />} />
					<Route path="events" element={<Events />} />
					<Route path="loops" element={<Loops />} />
					<Route path="conditions" element={<Conditions />} />
					<Route path="json-local-server" element={<JsonLocalServerToDoList />} />
				</Route>

				{/* Style */}
				<Route path="/style">
					<Route path="simple-style" element={<NormalStyle />} />
					<Route path="multiple-style" element={<MultipleStyle />} />
					<Route path="styled-components-library" element={<StyledComponents />} />
				</Route>

				{/* Life Cicle */}
				<Route path="/life-cicle">
					<Route path="clock" element={<ComponentWillMount />} />
					<Route path="component-did-mount" element={<ComponentDidMount />} />
					<Route path="component-did-update" element={<ComponentDidUpdate />} />
					<Route path="component-did-unmount" element={<ComponentDidUnmount />} />
				</Route>

				{/* Forms */}
				<Route path="/forms">
					<Route path="default-form" element={<DefaultForms />} />
					<Route path="formik" element={<Formik />} />
				</Route>

				{/* Ajax Request */}
				<Route path="/ajax-request">
					<Route path="get-all-users" element={<GetAllUsers />} />
					<Route path="user/:userID" element={<GetUser />} />
					<Route path="add-user" element={<AddUser />} />
					<Route path="delete-user" element={<DeleteUser />} />
					<Route path="update-user" element={<UpdateUser />} />
				</Route>

				{/* Hooks */}
				<Route path="/hooks">
					<Route path="context-api" element={<ContextApi />} />
					<Route path="use-effect" element={<UseEffect />} />
					<Route path="use-state" element={<UseState />} />
					<Route path="use-ref" element={<UseRef />} />
					<Route path="use-reducer" element={<UseReducer />} />
					<Route path="use-navigate" element={<UseNavigate />} />
					<Route path="custome-hook" element={<CustomeHook />} />
				</Route>

				{/* Redux */}
				<Route path="/redux">
					<Route path="old-counter" element={<ReduxOldCounter />} />
					<Route path="new-counter" element={<ReduxNewCounter />} />
					<Route path="sign-in" element={<ReduxSignin />} />
					<Route path="e-commerce" element={<Ecommerce />} />
					<Route path="to-do-list" element={<ReduxToDoList />} />
					<Route path="redux-thunk">
						<Route path="view-posts" element={<ReduxThunk />} />
						<Route path="post/:thunkID" element={<ReduxComponent />} />
					</Route>
				</Route>

				{/* Material Ui */}
				<Route path="/material-ui">
					<Route index element={<Materials />} />
				</Route>

				{/* Practice */}
				<Route path="/practice">
					<Route path="to-do-list" element={<ToDoList />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
