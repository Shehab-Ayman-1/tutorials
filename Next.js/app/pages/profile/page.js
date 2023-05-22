"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { PromptCard } from "@/components";
import axios from "axios";

const MyProfile = () => {
	const [posts, setPosts] = useState([]);
	const { data: session } = useSession();

	useEffect(() => {
		(async () => {
			if (!session?.user.id) return;
			const response = await axios.get(`/api/users/${session?.user.id}`);
			const posts = response.data;
			setPosts((p) => (p = posts));
		})();
	}, [session?.user]);

	const handleDelete = async (id) => {
		await axios.delete(`/api/prompt/${id}`);
		let index = posts.findIndex((item) => item._id === id);
		posts.splice(index, 1);
	};

	return (
		<div className="w-full">
			<h1 className="head_text text-left">
				<span className="blue_gradient">My Profile</span>
			</h1>
			<p className="desc text-left">Welcome To My Personalize Profile</p>
			<div className="prompt_layout mt-16">{session?.user && posts.map((post, i) => <PromptCard post={post} handleTagClick={() => {}} handleDelete={handleDelete} key={i} />)}</div>
		</div>
	);
};

export default MyProfile;
