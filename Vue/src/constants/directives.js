export const directives = {
	bold: {
		created: (el, weight) => {
			el.style.fontWeight = weight.value || "bold";
		},
	},

	gradientText: {
		created: (el) => {
			el.style.cssText = `background: linear-gradient(to right, rgb(255, 0, 0), rgb(255, 153, 0)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;
		},
		mounted: (el) => {
			console.log("mounted");
			el.addEventListener("mouseover", () => {
				el.style.fontWeight = "bold";
			});
			el.addEventListener("mouseout", () => {
				el.style.fontWeight = "normal";
			});
		},
		unmounted: (el) => {
			console.log("un mounted");
			el.removeEventListener("mouseout");
			el.removeEventListener("mouseout");
		},
	},

	style: {
		created: (el, bind) => {
			console.log(bind);
			el.style.cssText = "color: var(--primary)";
			const { primary, bold, bgSize, smSize } = bind.modifiers;

			if (primary) el.style.color = `var(--primary)`;
			if (bold) el.style.fontWeight = `bold`;
			if (bgSize) el.style.fontSize = `32px`;
			if (smSize) el.style.fontSize = `16px`;
		},
	},

	loopOn: {
		created: (el, { value }) => {
			value?.data.map((item, i) => {
				const element = document.createElement(value.tagName || "span");
				element.style.cssText = value.cssText;
				element.append(item);
				el.append(element, i + 1 === value.data.length ? "" : value.seperator || "");
			});
		},
	},
};
