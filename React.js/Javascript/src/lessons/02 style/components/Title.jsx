import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
	text-align: center;
	font-size: 25px;
	font-weight: 500;
	margin-bottom: 25px;
	white-space: nowrap;
	span {
		color: crimson;
	}
`;

export default function Title({ children }) {
	return <StyledTitle>{children}</StyledTitle>;
}
