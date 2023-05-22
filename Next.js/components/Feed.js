import { useEffect, useState } from "react";
import { PromptCard } from "./PromptCard";
import axios from "axios";

export const Feed = () => {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);

	const handleSearch = ({ target: { value } }) => setSearchText((s) => (s = value));

	useEffect(() => {
		(async () => {
			const response = await axios.get("/api/prompt");
			const posts = response.data;
			setPosts((p) => (p = posts));
		})();
	}, []);

	return (
		<section className="feed">
			<form className="w-full relative flex-center">
				<input className="search_input peer" type="text" placeholder="Search on prompts by tag OR Username" value={searchText} onChange={handleSearch} required />
			</form>
			<div className="prompt_layout mt-16">
				{posts.map((post, i) => (
					<PromptCard post={post} handleTagClick={() => {}} key={i} />
				))}
			</div>
		</section>
	);
};
