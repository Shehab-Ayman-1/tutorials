import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { Sidebar } from "..";
import "./style.scss";

export function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<header className="header">
			<div className="logo">
				<i className="fa fa-bars" onClick={() => setOpenSidebar((open) => !open)}></i>
				<Link to="/" className="logo-title">
					<img src={logo} alt="logo" className="logo-img fa-spin" />
					React Tutorial
				</Link>
			</div>
			<h3 className="time-now main-color">
				Time Now: <span className="second-color">{time.toLocaleTimeString()}</span>
			</h3>
			<Sidebar open={openSidebar} setOpen={setOpenSidebar} />
		</header>
	);
}
