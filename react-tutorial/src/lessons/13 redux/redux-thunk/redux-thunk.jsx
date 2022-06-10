import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData, RESETDATA } from "../redux-helper/new-redux/thunk-slice";

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
							<h3 className="main-color"> My users: </h3>
						</>
					) : null}
					<ul style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "0 0" }}>
						{state.data.map((user, i) => (
							<li className="user" key={i} style={{ width: "calc(100% / 2)", fontWeight: "bold" }}>
								<p>
									<span className="second-color">Name:</span> {user.name}
								</p>
								<p>
									<span className="second-color">Username:</span> {user.username}
								</p>
								<br />
							</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	);
}
