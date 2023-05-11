import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Category from "./components/category";
import Icon from "./components/icons";

const Flex = styled.div`
	display: flex;
`;

const Box = styled.div`
	width: calc(100% / 8);
	@media (max-width: 1000px) {
		width: calc(100% / 4);
	}
	@media (max-width: 800px) {
		width: calc(100% / 3);
	}
	@media (max-width: 600px) {
		width: calc(100% / 3);
	}
	@media (max-width: 400px) {
		width: calc(100% / 1);
	}
`;

const BoxImage = styled.div`
	width: 100%;
	text-align: center;
	overflow: hidden;
	img {
		width: 80%;
		margin: auto;
	}
`;

const BoxContent = styled.div`
	text-align: center;
	color: white;
	font-size: 25px;
	line-height: 2;
	letter-spacing: 1px;
`;

const BoxPrice = styled.span`
	padding-right: 5px;
	span {
		text-decoration: line-through;
		font-size: 19px;
	}
`;

export function StyledComponents() {
	// let iteration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	let iteration = [1, 2, 3, 4, 5];

	let render = (i) => {
		return (
			<Box key={i}>
				<BoxImage>
					<img src="/assets/logo.png" alt="box-img" className="fa-spin" />
				</BoxImage>
				<BoxContent>
					<Title>
						Latest <span>Product</span>
					</Title>
					<BoxPrice>
						$19.99 <span className="second-color">$35.99</span>
					</BoxPrice>
				</BoxContent>
				<Flex>
					<Icon href="https://www.google.com/" className="fab fa-facebook-f"></Icon>
					<Icon href="https://www.google.com/" className="fab fa-twitter"></Icon>
					<Icon href="https://www.google.com/" className="fab fa-instagram"></Icon>
					<Icon href="https://www.google.com/" className="fab fa-google"></Icon>
				</Flex>
			</Box>
		);
	};

	return (
		<main className="styled-components-container">
			<Title>
				<h1>
					New <span>Arrivals</span>
				</h1>
			</Title>
			<section className="Arrivals-section" id="Arrivals-section">
				<Category>{iteration.map((item, i) => render(i))}</Category>
			</section>
		</main>
	);
}
