"use client";

import { useMemo, useState } from "react";

const CalculateIncome = ({ counter }: { counter: number }) => {
	let total = 0;
	for (let i = 0; i < counter; i++) {
		total += counter;
	}
	return total;
};

export const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [calc, setCalc] = useState(false);
	const income = useMemo(() => CalculateIncome({ counter }), [calc]);

	const handleIncreament = () => {
		setCounter((c) => c + 1);
		if (counter >= 10) {
			setCalc(() => true);
		}
	};

	const handleDecreament = () => {
		setCounter((s) => s - 1);
	};

	return (
		<section>
			<h1 className="text-2xl text-emerald-500 font-bold mb-4 mt-4">Counter Section:</h1>
			<div className="ml-5">
				<h3 className="count">Counter: {counter}</h3>
				<h3 className="income">Income By useMemo: {income}</h3>
				<h3 className="income">
					Income Directly: <CalculateIncome counter={counter} />
				</h3>
				<button className="btn" onClick={handleIncreament}>
					Increament
				</button>
				<button className="btn ml-3" onClick={handleDecreament}>
					Decreament
				</button>
			</div>
		</section>
	);
};
