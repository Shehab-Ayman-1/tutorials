/* 
    -- Is Another Sort Of Array Type
    -- We Exactly Know How Many Elements In The Array
    -- We Know The Entries Type With Specific Position
*/

export default function Tuple() {
	// Simple Tuple
	const article1: [string, number, boolean] = ["Title", 1, true];
	article1.push("can add any thing in tuples by push method");
	console.log(article1);

	// Error Tuple
	// const errTuple: [string, number, boolean] = ["Title", "1", true, 21]; // Can't Assign UnAssinable Type OR Add More Element

	// Readonly Tuple
	const artical2: readonly [string, number, boolean] = ["Title", 2, false];
	// artical2.push("can't push any thing in the readonly tuple")

	// Destracturing
	const [title, id, isPublished] = artical2;
	console.log(title, id, isPublished);
}
