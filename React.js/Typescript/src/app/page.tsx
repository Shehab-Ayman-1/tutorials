import Link from "next/link";

export default function Home() {
	return (
		<main className="main-section p-4">
			<h1 className="text-emerald-500 text-2xl font-semibold mt-4 mb-4">Welcome To Typescript With Next.js 13 Toturial</h1>
			<hr className="mt-10 mb-10" />
			<h3 className="text-2xl font-bold text-emerald-600">Go To The Main Routes</h3>
			<nav>
				<Link href="/project/home" className="text-gray-300 text-xl font-semibold block hover:text-blue-400">
					# Project
				</Link>
				<Link href="/lessons/data-types" className="text-gray-300 text-xl font-semibold block hover:text-blue-400">
					# Lessons
				</Link>
			</nav>
		</main>
	);
}
