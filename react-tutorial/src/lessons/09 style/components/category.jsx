import React from "react";
import styled from "styled-components";

const Category = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default function category(props) {
	return <Category>{props.children}</Category>;
}
