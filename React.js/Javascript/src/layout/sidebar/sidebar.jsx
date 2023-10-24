import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "@/constants";
import "./style.scss";

export function Sidebar() {
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
				<Link to="/" className="head-title" onClick={closeNavbar}>
					React Tutorial
				</Link>
				<i className="fas fa-times cross" onClick={closeNavbar}></i>
			</div>

			{NavLinks.map(({ title, routes }, i) => (
				<div className={`phrase ${title}`} key={i}>
					<li className="main-link" onClick={toggleList}>
						<h3 className="link">{title.replaceAll("-", " ")}</h3>
						<i className="fas fa-angle-right" />
					</li>
					<ul className="main-list hide-height">
						{routes.map((route, i) => (
							<li className="nested-link" key={i}>
								<NavLink to={`${title}/${route}`} className="link" onClick={closeNavbar}>
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
