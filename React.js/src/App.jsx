/* React */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start, Header, Sidebar, NotFound } from "./layout";
import "./scss/style.scss";

/* Lessons */
// Basics
import { Components, Conditions, States, Props, Loop, Events, JsonLocalServer } from "./lessons/01 basics";

// Style
import { NormalStyle, MultipleStyle, StyledComponents } from "./lessons/02 style";

// Life Cicle
import { ComponentWillMount, ComponentDidMount, ComponentDidUnmount, ComponentDidUpdate } from "./lessons/03 lifeCicle";

// Forms
import { DefaultForm, FormikForm } from "./lessons/04 forms";

// Ajax Request
import { GetUsers, GetUser, AddUser, DeleteUser, UpdateUser } from "./lessons/05 ajax-request";

// Hooks
import { ContextApi, UseEffect, UseState, UseRef, UseReducer, UseNavigate, UseLocation, CustomeHook } from "./lessons/06 hooks";

// Redux
import { ReduxOldCounter, ReduxNewCounter, ReduxSignin, ReduxToDoList, ReduxThunk, ReduxThunkComponent } from "./lessons/07 redux";

// Material Ui
import { MaterialUi } from "./lessons/08 material-ui";

// Material Ui
import { Lang } from "./lessons/09 i18next";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Sidebar />
			<Routes>
				{/* Root */}
				<Route path="/">
					<Route path="/" element={<Start />} />
					<Route path="*" element={<NotFound />} />
				</Route>

				{/* Basics */}
				<Route path="/basics">
					<Route path="components" element={<Components />} />
					<Route path="props" element={<Props />} />
					<Route path="state" element={<States />} />
					<Route path="events" element={<Events />} />
					<Route path="loops" element={<Loop />} />
					<Route path="conditions" element={<Conditions />} />
					<Route path="json-local-server" element={<JsonLocalServer />} />
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
					<Route path="default-form" element={<DefaultForm />} />
					<Route path="formik" element={<FormikForm />} />
				</Route>

				{/* Ajax Request */}
				<Route path="/ajax-request">
					<Route path="get-all-users" element={<GetUsers />} />
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
					<Route path="use-location" element={<UseLocation />} />
					<Route path="custome-hook" element={<CustomeHook />} />
				</Route>

				{/* Redux */}
				<Route path="/redux">
					<Route path="old-counter" element={<ReduxOldCounter />} />
					<Route path="new-counter" element={<ReduxNewCounter />} />
					<Route path="sign-in" element={<ReduxSignin />} />
					<Route path="to-do-list" element={<ReduxToDoList />} />
					<Route path="redux-thunk">
						<Route path="view-posts" element={<ReduxThunk />} />
						<Route path="post/:thunkID" element={<ReduxThunkComponent />} />
					</Route>
				</Route>

				{/* Material Ui */}
				<Route path="/material-ui">
					<Route path="mui" element={<MaterialUi />} />
				</Route>

				{/* Multible Languages */}
				<Route path="/multible-langs">
					<Route path="lang" element={<Lang />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
