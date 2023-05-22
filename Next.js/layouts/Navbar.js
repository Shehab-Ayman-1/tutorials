"use client";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
	const [providers, setProviders] = useState({});
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const { data: session } = useSession(null);

	useEffect(() => {
		(async () => {
			const providers = await getProviders();
			setProviders((p) => (p = providers));
		})();
	}, []);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
				<p className="logo_text">Promptopia</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				{session?.user && (
					<div className="flex gap-3 md:gap-5">
						<Link href="/pages/create-prompt" className="black_btn">
							Create Post
						</Link>

						<button type="button" onClick={signOut} className="outline_btn">
							Sign Out
						</button>

						<Link href="/pages/profile">
							<Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" />
						</Link>
					</div>
				)}

				{!session?.user &&
					providers &&
					Object.values(providers).map((provider) => (
						<button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
							Sign in {provider.name}
						</button>
					))}
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{session?.user && (
					<div className="flex ">
						<Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" onClick={() => setToggleDropdown(!toggleDropdown)} />

						{toggleDropdown && (
							<div className="dropdown absolute top-20 right-0">
								<Link href="/pages/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
									My Profile
								</Link>
								<Link href="/pages/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
									Create Prompt
								</Link>
								<button
									type="button"
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
									className="mt-5 w-full black_btn">
									Sign Out
								</button>
							</div>
						)}
					</div>
				)}

				{!session?.user &&
					providers &&
					Object.values(providers).map((provider) => (
						<button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
							Sign in By {provider.name}
						</button>
					))}
			</div>
		</nav>
	);
};
