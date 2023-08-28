import { CreateElement } from "../types";

export const createElement = (tag: string, attrs?: CreateElement): any => {
	const element = document.createElement(tag);
	if (!attrs) return element;

	const attrsKeys = Object.keys(attrs);
	attrsKeys.forEach((attr) => attrs[attr] && element.setAttribute(attr, attrs[attr]));

	return element;
};
