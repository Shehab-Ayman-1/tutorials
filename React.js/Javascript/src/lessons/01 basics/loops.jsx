export const Loop = () => {
	const skills = ["html", "css", "js", "react", "bootstrap", "scss", "gulp.js", "pug.js", "json", "ajax"];

	return (
		<div>
			<h3 className="f-30 main-color">My Skills Are: </h3>
			<ul>
				{skills.map((skill, i) => (
					<li className="f-20" key={i}>
						{i + 1} - {skill}
					</li>
				))}
			</ul>
		</div>
	);
};
