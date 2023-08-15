import React from "react";
import styled from "styled-components";

const Icon = styled.a.attrs(() => ({
	target: "_blank",
}))`
	color: white;
	font-size: 18px;
	margin-right: 10px;
	cursor: pointer;
	line-height: 60px;
	&:hover {
		color: crimson;
	}
`;

export default function icons(props) {
	return <Icon {...props}></Icon>;
}
