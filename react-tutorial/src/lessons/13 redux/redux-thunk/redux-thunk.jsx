import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData, RESETDATA } from "../redux-helper/new-redux/thunk-slice";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryCards = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 0;
	gap: 1rem;
`;

const Card = styled.div`
	background: var(--light-bg);
	color: var(--black);
	flex: 480px 1 1;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	overflow: hidden;
	border-radius: 15px 15px 0 0;
`;

const CardImage = styled.img`
	width: 100%;
`;

const CardTitle = styled.h3`
	color: var(--dark-color);
	font-size: 18px;
	padding: 0 20px;
`;

const CardParagraph = styled.p`
	color: var(--light-color);
	font-size: 16px;
	padding: 0 20px;
`;

const CardLink = { width: "fit-content", color: "black", margin: "20px", display: "block", whiteSpace: "nowrap", fontSize: "1.6rem" };

export default function ReduxThunk() {
	const state = useSelector((state) => state.myThunk);
	const dispatch = useDispatch();
	return (
		<div className="f-20">
			{state.error ? <h3 className="second-color">Oobs! Maybe You Have A Problem In The Api Request Method</h3> : null}

			{state.loading ? (
				<>
					<h3>Loading....</h3>
				</>
			) : !state.loading ? (
				<>
					{state.error === null ? (
						<button className="mybtn" onClick={() => dispatch(fetchApiData())}>
							Fetch
						</button>
					) : state.loading === false ? (
						<>
							<button className="mybtn" onClick={() => dispatch(RESETDATA())}>
								Reset
							</button>
						</>
					) : null}
					<CategoryCards>
						{state.data.map((card, i) => {
							return (
								<Card key={i}>
									<CardImage src={card.img} alt="img-logo" />
									<CardTitle className="main-color">{card.title}</CardTitle>
									<CardParagraph>{card.body}</CardParagraph>
									<Link className="mybtn" to={`../post/${card.id}`} style={CardLink}>
										Read More
									</Link>
								</Card>
							);
						})}
					</CategoryCards>
				</>
			) : null}
		</div>
	);
}
