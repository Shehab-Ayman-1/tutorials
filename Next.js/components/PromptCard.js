import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
	const [copied, setCopied] = useState("");
	const { data: session } = useSession();
	const pathname = usePathname();

	const handleCopy = () => {
		setCopied((c) => (c = post.prompt));
		navigator.clipboard.writeText(post.prompt);
		setTimeout(() => setCopied((c) => (c = "")), 3000);
	};

	return (
		<div className="prompt_card">
			<div className="flex justify-between items-start gap-2">
				<div className="flex-start min-w-[40px] gap-3 cursor-pointer">
					<Image className="rounded-full object-contain" src={post.creator.image} alt="user_img" width={40} height={40} />
				</div>
				<div className="flex-1">
					<h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
					<p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
				</div>
				<div className="copy_btn" onClick={handleCopy}>
					<Image src={`/assets/icons/${copied === post.prompt ? "tick" : "copy"}.svg`} alt="prompt_img" width={12} height={12} />
				</div>
			</div>
			<p className="font-satoshi my-4 text-sm text-gray-700">{post.prompt}</p>
			<p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick(post.tag)}>
				#{post.tag}
			</p>
			{pathname === "/pages/profile" && session?.user.id === post.creator?._id && (
				<div className="flex-end gap-4">
					<Link className="text-sm font-inter rounded-full bg-green-500 cursor-pointer text-white px-3 py-1" href="/pages/update-prompt">
						Edit
					</Link>
					<p className="text-sm font-inter rounded-full bg-red-500 cursor-pointer text-white px-3 py-1" onClick={() => handleDelete(post._id)}>
						Delete
					</p>
				</div>
			)}
		</div>
	);
};
