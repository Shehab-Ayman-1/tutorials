import React from "react";
import Image from "next/image";

export function Sidebar() {
	const styles = { width: "280px", height: "100vh", zIndex: 10, position: "fixed", top: 0, left: -280 };

	const closeWidget = () => document.querySelector(".sidebar").classList.toggle("toggle-widget");

	return (
		<div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark  border border-secondary" style={styles}>
			<i className="far fa-times-circle" style={{ position: "absolute", top: 20, right: 20, fontSize: 20 }} onClick={closeWidget}></i>
			<h3 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<Image src="/bootstrap.png" alt="bootstrap" width={45} height={35} />
				<span className="fs-4">Sidebar</span>
			</h3>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a href="#" className="nav-link active" aria-current="page">
						<i className="fas fa-house-damage"></i> Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-chart-line"></i> Dashboard
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-table"></i> Orders
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-th-large"></i> Products
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-user"></i> Customers
					</a>
				</li>
			</ul>
			<hr />
			<div className="dropdown">
				<a
					href="#"
					className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					<Image src="/bootstrap.png" alt="github" width={32} height={32} className="rounded-circle me-2" />
					<strong>mdo</strong>
				</a>
				<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
					<li className="nav-item">
						<a className="dropdown-item" href="#">
							New project...
						</a>
					</li>
					<li className="nav-item">
						<a className="dropdown-item" href="#">
							Settings
						</a>
					</li>
					<li className="nav-item">
						<a className="dropdown-item" href="#">
							Profile
						</a>
					</li>
					<li className="nav-item">
						<hr className="dropdown-divider" />
					</li>
					<li className="nav-item">
						<a className="dropdown-item" href="#">
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
