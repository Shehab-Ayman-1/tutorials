import styled from "styled-components";
import { logo } from "@/assets";

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const Box = styled.div`
	background: #222;
	width: 300px;
	padding: 15px;
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

const Title = styled.h1`
	text-align: center;
	font-size: 25px;
	font-weight: 500;
	margin-bottom: 25px;
	white-space: nowrap;
	span {
		color: crimson;
	}
`;

const Icon = styled.a.attrs(() => ({ target: "_blank" }))`
	color: white;
	font-size: 18px;
	margin-right: 10px;
	cursor: pointer;
	line-height: 60px;
	&:hover {
		color: crimson;
	}
`;

const SCategory = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px;
`;

function Category({ children }) {
	return <SCategory>{children}</SCategory>;
}

export function StyledComponents() {
	let iteration = [1, 2, 3, 4, 5];

	return (
		<main className="styled-components-container">
			<Title>
				New <span>Arrivals</span>
			</Title>
			<section className="Arrivals-section" id="Arrivals-section">
				<Category>
					{iteration.map((_, i) => (
						<Box key={i}>
							<BoxImage>
								<img src={logo} alt="box-img" className="fa-spin" />
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
								<Icon href="https://www.google.com" className="fab fa-facebook-f"></Icon>
								<Icon href="https://www.google.com" className="fab fa-twitter"></Icon>
								<Icon href="https://www.google.com" className="fab fa-instagram"></Icon>
								<Icon href="https://www.google.com" className="fab fa-google"></Icon>
							</Flex>
						</Box>
					))}
				</Category>
			</section>
		</main>
	);
}
