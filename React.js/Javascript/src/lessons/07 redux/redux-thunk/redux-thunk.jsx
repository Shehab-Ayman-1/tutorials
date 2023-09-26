import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData, RESETDATA } from "./slices";
import styled from "styled-components";

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
export function ReduxThunk() {
	const { data, loading, error } = useSelector(({ thunk }) => thunk);
	const dispatch = useDispatch();

	const handleFetch = () => dispatch(fetchApiData());

	const handleReset = () => dispatch(RESETDATA());

	return (
		<div className="f-20">
			{error && <h3 className="second-color">Oobs! Maybe You Have A Problem In The Api Request Method</h3>}
			{loading && <h3>Loading....</h3>}

			{!loading && (
				<Fragment>
					{!error && (
						<button className="mybtn" onClick={handleFetch}>
							Fetch
						</button>
					)}

					{!data.length && (
						<button className="mybtn" onClick={handleReset}>
							Reset
						</button>
					)}

					<CategoryCards>
						{data.map((card, i) => {
							return (
								<Card key={i}>
									<CardImage src={card.img} alt="logo" />
									<CardTitle className="main-color">{card.title}</CardTitle>
									<CardParagraph>{card.body}</CardParagraph>
									<Link className="mybtn" to={`../post/${card.id}`} style={CardLink}>
										Read More
									</Link>
								</Card>
							);
						})}
					</CategoryCards>
				</Fragment>
			)}
		</div>
	);
}
