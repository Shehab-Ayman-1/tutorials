export const DT_Assign3 = () => {
	// Write Your Code Here
	type Info = {
		theName: string;
		theAge: number;
	};
	type Full = Info & {
		country: string;
	};

	// Do Not Edit Here
	function showInfo(data: Info) {
		console.table(data);
	}
	showInfo({ theName: "Elzero", theAge: 40 });

	function showFullInfo(data: Full) {
		console.table(data);
	}
	showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" });
};
