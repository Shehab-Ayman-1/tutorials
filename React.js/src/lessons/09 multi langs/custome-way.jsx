import React, { useEffect, useState } from "react";

let phrases = {
	title: { en: "title is writting here", ar: "يتم كتابة العنوان هنا" },
	description: { en: "description is writting here", ar: "يتم كتابة التفاصيل هنا" },
	countries: { en: ["Egypt", "Saudia", "Iraq", "Seria"], ar: ["مصر", "السعودية", "العراق", "سوريا"] },
};

export const CustomeWay = () => {
	const [lang, setLang] = useState("ar");
	const [data, setData] = useState({ title: "", description: "", countries: [] });

	useEffect(() => {
		let keys = Object.keys(phrases);
		setData((d) => (d = []));

		if (lang === "en") {
			document.querySelector("html").setAttribute("dir", "lrt");
			keys.forEach((key) => {
				setData((d) => (d = { ...d, [key]: phrases[key].en }));
			});
		}

		if (lang === "ar") {
			document.querySelector("html").setAttribute("dir", "rtl");
			keys.forEach((key) => {
				setData((d) => (d = { ...d, [key]: phrases[key].ar }));
			});
		}
	}, [lang]);

	return (
		<div className="f-20">
			<select style={{ width: "fit-content" }} value={lang} onChange={({ target: { value } }) => setLang((l) => (l = value))}>
				<option value="ar">Arabic</option>
				<option value="en">English</option>
			</select>

			<div className="">
				<p>Title: {data.title}</p>
				<p>Desctiption: {data.description}</p>
				<div>
					<span>countries:</span> [ {data?.countries.join(", ")} ]
				</div>
			</div>
		</div>
	);
};
