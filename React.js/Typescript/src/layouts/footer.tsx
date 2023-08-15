import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="bg-slate-800 flex-between w-full p-4 absolute bottom-0 left-0">
			<Image className="relative dark:invert block" src="/next.svg" alt="Next.js" width={120} height={120} priority />
		</footer>
	);
};
