import React from "react";
import styled from "styled-components";

const Title = styled.div`
	text-align: center;
	font-size: 35px;
`;

const Category = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Box = styled.div`
	width: calc(100% / 8);
`;

const BoxImage = styled.div`
	width: 100%;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const IconsContainer = styled.div`
	text-align: center;
	position: absolute;
	top: 0;
	right: -60px;
	z-index: 2;
`;

const Icon = styled.i`
	background: white;
	width: 60px;
	height: 60px;
	font-size: 25px;
	border-radius: 50%;
	margin-top: 15px;
	display: block;
	cursor: pointer;
	line-height: 60px;
`;

const BoxContent = styled.div`
	text-align: center;
	color: white;
	font-size: 25px;
	line-height: 2;
	letter-spacing: 1px;
`;

const ContentSpan = styled.span`
	text-decoration: line-through;
	font-size: 19px;
	padding-left: 5px;
`;

export default function StyleComponentsLib() {
	let iteration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	let render = (i) => {
		return (
			<Box data-aos="zoom-in-right" key={i}>
				<IconsContainer>
					<Icon className="fa fa-shopping-cart"></Icon>
					<Icon className="fa fa-eye"></Icon>
					<Icon className="fa fa-share"></Icon>
				</IconsContainer>
				<BoxImage>
					<Image src="../../logo192.png" />
				</BoxImage>
				<BoxContent>
					<h3 className="main-color">Latest Product</h3>
					<h4>
						$19.99 <ContentSpan className="second-color">$35.99</ContentSpan>
					</h4>
				</BoxContent>
			</Box>
		);
	};

	return (
		<main className="styled-components-container">
			<Title as="section" className="main-color">
				<h1>
					New <span>Arrivals</span>
				</h1>
			</Title>
			<section className="Arrivals" id="Arrivals">
				<Category>{iteration.map((item, i) => render(i))}</Category>
			</section>
		</main>
	);
}
