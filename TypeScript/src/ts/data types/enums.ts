/* 
    Enums
    -- We Have Multible Types Of Enums 
    ----- [1] Numeric Enums [Numbers]
    ----- [2] String Based Enums [String]
    ----- [3] Heterogeneous Enums [String, Number]
    -- Start From 0 As A Default, Then 1, 2, 3, 4, 5, ...
    -- Can Set The Key Number
*/

export default function Enums() {
	// We Create The Enum As A Variable To Organize The Code In Js File
	const enum kidsAges {
		toSeven = 7,
		toTen = 10,
		toSixteen = 16,
	}

	const getHardSeconds = (): number => 6;

	enum levels {
		zero, // 0
		one, // 1

		five = 5, // 5
		six, // 6

		babeKid = kidsAges.toSeven,
		youngKid = kidsAges.toSixteen,

		kids = 15, // 15
		easy = kids - 3, // 12
		medium = easy - 3, // 9
		hard = getHardSeconds(), // 6
	}
	let lvl: string = "hard";
	if (lvl === "kids") {
		console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.kids} ] To Write This Word`);
	} else if (lvl === "easy") {
		console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.easy} ] To Write This Word`);
	} else if (lvl === "medium") {
		console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.medium} ] To Write This Word`);
	}
}
