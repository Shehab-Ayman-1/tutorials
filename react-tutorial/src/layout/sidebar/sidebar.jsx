import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

export function Sidebar() {
	let [hide] = useState("hide-height");

	let toggleList = (event) => {
		let head = event.target.closest(".main-link");
		let angle = head.querySelector(".fas");

		head.nextElementSibling.classList.toggle("hide-height");
		if (!head.nextElementSibling.classList.contains("hide-height")) angle.style.transform = "rotate(90deg)";
		else angle.style.transform = "rotate(0deg)";
	};

	let closeNavbar = () => {
		let navbar = document.querySelector("nav.nav-bar");
		navbar.classList.add("hide-left-clip");
	};

	return (
		<nav className="nav-bar hide-left-clip">
			<div className="navbar-head">
				<i className="fas fa-times cross" onClick={closeNavbar}></i>
				<Link to="/" className="head-title" onClick={closeNavbar}>
					React Tutorial
				</Link>
			</div>

			<div className="phrase basics">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Basics</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"basics/components"} className="link" onClick={closeNavbar}>
							components
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"basics/props"} className="link" onClick={closeNavbar}>
							props
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"basics/state"} className="link" onClick={closeNavbar}>
							State
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"basics/events"} className="link" onClick={closeNavbar}>
							Events
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"basics/loops"} className="link" onClick={closeNavbar}>
							Loops
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"basics/conditions"} className="link" onClick={closeNavbar}>
							conditions
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"/basics/json-local-server"} className="link" onClick={closeNavbar}>
							json local server
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase style">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">style</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"style/simple-style"} className="link" onClick={closeNavbar}>
							simple style
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"style/multiple-style"} className="link" onClick={closeNavbar}>
							Multiple Style
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"style/styled-components-library"} className="link" onClick={closeNavbar}>
							styled-component library
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase forms">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Forms</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"forms/default-form"} className="link" onClick={closeNavbar}>
							default form
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"forms/formik"} className="link" onClick={closeNavbar}>
							Formik
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase life-cicles">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Life Cicles</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"/life-cicle/clock"} className="link" onClick={closeNavbar}>
							Clock
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"/life-cicle/component-did-mount"} className="link" onClick={closeNavbar}>
							component Did Mount
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"/life-cicle/component-did-update"} className="link" onClick={closeNavbar}>
							Component Did Update
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"/life-cicle/component-did-unmount"} className="link" onClick={closeNavbar}>
							Component Did UnMount
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase ajax-requests">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Ajax Requests</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"ajax-request/get-all-users"} className="link" onClick={closeNavbar}>
							All Users
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"ajax-request/add-user"} className="link" onClick={closeNavbar}>
							add User
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"ajax-request/delete-user"} className="link" onClick={closeNavbar}>
							delete User
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"ajax-request/update-user"} className="link" onClick={closeNavbar}>
							update User
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase hooks">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Hooks</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"hooks/use-state"} className="link" onClick={closeNavbar}>
							Use State
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/use-effect"} className="link" onClick={closeNavbar}>
							use effect
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/use-navigate"} className="link" onClick={closeNavbar}>
							Use Navigate
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/use-reducer"} className="link" onClick={closeNavbar}>
							Use Reducer
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/use-ref"} className="link" onClick={closeNavbar}>
							Use Ref
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/custome-hook"} className="link" onClick={closeNavbar}>
							Custome Hook
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"hooks/context-api"} className="link" onClick={closeNavbar}>
							context Api
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase redux">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Redux</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"redux/old-counter"} className="link" onClick={closeNavbar}>
							The Old Syntex
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"redux/new-counter"} className="link" onClick={closeNavbar}>
							counter
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"redux/sign-in"} className="link" onClick={closeNavbar}>
							Sign In
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"redux/to-do-list"} className="link" onClick={closeNavbar}>
							to do list
						</NavLink>
					</li>
					<li className="nested-link">
						<NavLink to={"redux/redux-thunk/view-posts"} className="link" onClick={closeNavbar}>
							Redux Thunk
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="phrase redux">
				<li className="main-link" onClick={toggleList}>
					<h3 className="link">Material Ui</h3>
					<i className="fas fa-angle-right"></i>
				</li>
				<ul className={`main-list ${hide}`}>
					<li className="nested-link">
						<NavLink to={"material-ui/"} className="link" onClick={closeNavbar}>
							Materials
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
