import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="bg-slate-800 flex-between w-full p-4">
			<div className="logo">
				<Link href="/">
					<Image className="relative dark:invert block" src="/next.svg" alt="Next.js Logo" width={120} height={120} priority />
				</Link>
			</div>
			<div className="gap-2 flex-between">
				<Link className="hover:text-gray-300 transition font-semibold block" href="/">
					Home
				</Link>
				<Link className="hover:text-gray-300 transition font-semibold block" href="/about">
					About
				</Link>
				<Link className="hover:text-gray-300 transition font-semibold block" href="/products">
					Products
				</Link>
				<Link className="hover:text-gray-300 transition font-semibold block" href="/login">
					Login
				</Link>
				<Link className="hover:text-gray-300 transition font-semibold block" href="/register">
					Register
				</Link>
			</div>
		</header>
	);
};
