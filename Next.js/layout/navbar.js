import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
	const router = useRouter();
	const openSidebar = () => document.querySelector(".sidebar").classList.toggle("toggle-widget");

	return (
		<header className="p-3 text-bg-dark border border-secondary w-100%">
			<div className="container" style={{ padding: "0 " }}>
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<i className="fas fa-bars text-white me-3 fs-4" onClick={openSidebar}></i>
					</div>

					<Link href="/">
						<Image src="/bootstrap.png" alt="bootstrap" width={45} height={35} />
					</Link>

					<ul className="nav col-auto me-auto mb-0 justify-content-center align-items-center">
						<li>
							<Link href="/" className={`nav-link px-2 text-secondary ${router.pathname === "/" && "text-white"}`}>
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className={`nav-link px-2 text-secondary ${router.pathname === "/about" && "text-white"}`}>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/blogs"
								className={`nav-link px-2 text-secondary ${/\/blogs/.test(router.pathname) && "text-white"}`}>
								Blogs
							</Link>
						</li>
						<li>
							<Link href="/intro" className={`nav-link px-2 text-secondary ${router.pathname === "/intro" && "text-white"}`}>
								Intro
							</Link>
						</li>
					</ul>

					<div className="text-end d-flex me-5">
						<Link href="/login" className="btn btn-outline-light me-3">
							Login
						</Link>
						<Link href="/login" className="btn btn-warning">
							Signup
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
