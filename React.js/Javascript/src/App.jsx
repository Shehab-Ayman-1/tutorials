// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start, Header, Sidebar, NotFound } from "@/layout";

// Basics
import { Components, Conditions, Props, Loop, Events, JsonLocalServer } from "@/lessons/01 basics";

// Style
import { Style, StyledComponents } from "@/lessons/02 style";

// Life Cicle
import {
	ComponentWillMount,
	ComponentDidMount,
	ComponentDidUnmount,
	ComponentDidUpdate,
} from "@/lessons/03 lifeCicle";

// Forms
import { DefaultForm, FormikForm, ReactHookForm } from "@/lessons/04 forms";

// Ajax Request
import {
	GetUsers,
	GetUser,
	AddUser,
	DeleteUser,
	UpdateUser,
	TrackLoading,
	UseAxios,
} from "@/lessons/05 ajax-request";

// Hooks
import {
	ContextApi,
	UseEffect,
	UseState,
	UseRef,
	UseReducer,
	UseNavigate,
	UseLocation,
	UseMemo,
	UseCallback,
	CustomeHook,
} from "@/lessons/06 hooks";

// Redux
import { ReduxCounter, ReduxSign, ReduxTodos, ReduxThunk } from "@/lessons/07 redux";

// Multi Languages
import { I18next, CustomeWay } from "@/lessons/08 multi langs";

import { AIImageGeneration, VideosDownloader } from "@/lessons/09 examples";

export const App = () => {
	return (
		<BrowserRouter>
			<Header />

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
					<Route path="events" element={<Events />} />
					<Route path="loops" element={<Loop />} />
					<Route path="conditions" element={<Conditions />} />
					<Route path="json-local-server" element={<JsonLocalServer />} />
				</Route>

				{/* Style */}
				<Route path="/style">
					<Route path="simple-style" element={<Style />} />
					<Route path="styled-components-lib" element={<StyledComponents />} />
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
					<Route path="formik-form" element={<FormikForm />} />
					<Route path="react-hook-form" element={<ReactHookForm />} />
				</Route>

				{/* Ajax Request */}
				<Route path="/ajax-request">
					<Route path="get-users" element={<GetUsers />} />
					<Route path="get-user/:userId" element={<GetUser />} />
					<Route path="add-user" element={<AddUser />} />
					<Route path="update-user" element={<UpdateUser />} />
					<Route path="delete-user" element={<DeleteUser />} />
					<Route path="track-loading" element={<TrackLoading />} />
					<Route path="useAxios" element={<UseAxios />} />
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
					<Route path="use-memo" element={<UseMemo />} />
					<Route path="use-callback" element={<UseCallback />} />
					<Route path="custome-hook" element={<CustomeHook />} />
				</Route>

				{/* Redux */}
				<Route path="/redux">
					<Route path="counter" element={<ReduxCounter />} />
					<Route path="sign" element={<ReduxSign />} />
					<Route path="todos" element={<ReduxTodos />} />
					<Route path="redux-thunk" element={<ReduxThunk />} />
				</Route>

				{/* Multible Languages */}
				<Route path="/multible-langs">
					<Route path="i18next" element={<I18next />} />
					<Route path="custome" element={<CustomeWay />} />
				</Route>

				{/* Examples */}
				<Route path="/examples">
					<Route path="ai-image-generation" element={<AIImageGeneration />} />
					<Route path="youtube-downloader" element={<VideosDownloader />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
