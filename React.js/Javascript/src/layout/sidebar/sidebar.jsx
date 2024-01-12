import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { NavLinks } from "@/constants";
import "./style.scss";

export function Sidebar({ open, setOpen }) {
	const [openList, setOpenList] = useState({ index: -1, state: false });

	let handleToggleList = (index) => {
		setOpenList((open) => ({ index: index === open.index ? -1 : index, state: !open.state }));
	};

	let handleCloseSidebar = () => {
		setOpen((open) => !open);
	};

	return (
		<nav className={`nav-bar ${open ? "" : "hide-left-clip"}`}>
			<div className="navbar-head">
				<Link to="/" className="head-title" onClick={handleCloseSidebar}>
					React Tutorial
				</Link>
				<i className="fas fa-times cross" onClick={handleCloseSidebar} />
			</div>

			{NavLinks.map(({ title, routes }, i) => (
				<div className={`phrase ${title}`} key={i}>
					<li className="main-link" onClick={() => handleToggleList(i)}>
						<h3 className="link">{title.replaceAll("-", " ")}</h3>
						<i className="fas fa-angle-right" />
					</li>
					<ul className={`main-list ${openList.index === i ? "" : "hide-height"}`}>
						{routes.map((route, i) => (
							<li className="nested-link" key={i}>
								<NavLink to={`${title}/${route}`} className="link" onClick={handleCloseSidebar}>
									{route.replaceAll("-", " ")}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
}
