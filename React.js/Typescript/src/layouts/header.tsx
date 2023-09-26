"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLink = {
	path: string;
	name: string;
	main?: boolean;
};

export const Header = ({ navLinks }: { navLinks: NavLink[] }) => {
	const pathname = usePathname();

	return (
		<header className="bg-slate-800 flex-between w-full p-4">
			<div className="logo">
				<Link href="/">
					<img className="relative dark:invert block w-[120px]" src="/next.svg" alt="Next.js" />
				</Link>
			</div>
			<div className="gap-2 flex-between">
				{navLinks.map(({ path, name }: NavLink) => (
					<Link key={name} className={`transition font-semibold block ${pathname === path ? "text-blue-500" : "text-white"} hover:text-blue-300`} href={path}>
						{name}
					</Link>
				))}
			</div>
		</header>
	);
};
