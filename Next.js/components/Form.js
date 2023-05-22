import Link from "next/link";

export const Form = ({ type, submitting, post, setPost, handleSubmit }) => {
	const handlePost = ({ target: { name, value } }) => setPost((p) => (p = { ...p, [name]: value }));

	return (
		<section className="w-full flex-start flex-col">
			<div className="">
				<span className="head_text text-right blue_gradient">{type} Post</span>
			</div>
			<p className="desc text-left max-w-md">{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform</p>

			<form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism" onSubmit={handleSubmit}>
				<div className="">
					<label className="font-satoshi font-semibold text-base text-gray-700" htmlFor="tag">
						Tag <span className="font-normal">( #webdevelopement )</span>
					</label>
					<input className="form_input" name="tag" id="tag" value={post.tag} onChange={handlePost} placeholder="#tag" required />
				</div>
				<div className="">
					<label className="font-satoshi font-semibold text-base text-gray-700" htmlFor="prompt">
						Your AI Prompt
					</label>
					<textarea className="form_textarea" name="prompt" id="prompt" value={post.prompt} onChange={handlePost} placeholder="Enter Your Prompt" required />
				</div>
				<div className="flex-end mx-3 mb-5 gap-4">
					<Link className="text-gray-500 text-sm" href="/">
						Cancel
					</Link>
					<button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" type="submit" disabled={submitting}>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};
