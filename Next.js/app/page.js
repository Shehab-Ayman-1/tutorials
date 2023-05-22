"use client";
import { Feed } from "@/components";

const HomePage = () => {
	return (
		<section className="w-full flex-center flex-col">
			<div className="head_text text-center">
				Discover And Share
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">AI-Powerd Prompts</span>
			</div>
			<p className="desc">Promptopia Is An Open Source AI Propting Tool For Modern World To Discover, Create And Share Creative Prompts</p>

			<Feed />
		</section>
	);
};

export default HomePage;
