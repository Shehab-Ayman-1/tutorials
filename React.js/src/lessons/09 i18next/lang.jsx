import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Lang() {
	const [text, i18next] = useTranslation();
	const [lang, setLang] = useState("en");
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		i18next.changeLanguage(lang);

		if (i18next.language === "ar") document.querySelector("html").setAttribute("dir", "rtl");
		if (i18next.language === "en") document.querySelector("html").setAttribute("dir", "ltr");

		if (i18next.language === "ar") setCountries((c) => (c = ["مصر", "السعودية", "العراق", "سوريا"]));
		if (i18next.language === "en") setCountries((c) => (c = ["Egypt", "Saudia", "Iraq", "Seria"]));
	}, [lang]);

	return (
		<div className="f-20">
			<select style={{ width: "fit-content" }} value={lang} onChange={({ target: { value } }) => setLang(value)}>
				<option value="ar">Arabic</option>
				<option value="en">English</option>
			</select>
			<div style={{ marginInline: "20px" }}>
				<p>Title: {text("title")}</p>
				<p>Description: {text("description")}</p>
				<div>
					Countries: [{" "}
					{countries.map((country, i) => (
						<span key={i}>
							{country}
							{i !== countries.length - 1 ? " , " : ""}
						</span>
					))}
					]
				</div>
			</div>
		</div>
	);
}
