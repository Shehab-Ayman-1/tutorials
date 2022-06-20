// ============================================= Seven Boom =============================================
/* 
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7])           ➞ "Boom!"                      // 7 contains the number seven.
// sevenBoom([8, 6, 33, 100])                 ➞ "there is no 7 in the array" // None of the items contain 7 within them.
// sevenBoom([2, 55, 60, 97, 86])             ➞ "Boom!"                      // 97 contains the number seven.

function sevenBoom(Nums) {
	// [1] The First Way
	// console.log(Nums.join().includes("7") ? "Boom!" : "there is no 7 in the array");
	// [2] The Second Way
	// let arr = Array(Nums)[0].join().split(",");
	// let state;
	// arr.map((n) => (n.split("").includes("7") ? (state = n) : null));
	// if (state !== undefined) console.log(state, "Boom!");
	// else console.log("there is no 7 in the array");
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);
*/
// ========================================= Convert Age to Days ========================================
/* 
// Create a function that takes the age in years and returns the age in days.
function convert(age) {
	return age * 365;
}
console.log(convert(20));
 */

// ================================= Return the First Element in an Array ===============================
/* 
function getFirstValue(list) {
	return list[0];
}
console.log(getFirstValue([1, 2, 3]));
*/

// ========================================= Area of a Triangle =========================================
/* 
function triArea(base, height) {
	return 0.5 * (base * height);
}
console.log(triArea(7, 4)); 
*/

// =============================================  =============================================

// ========================================== What Is Happend ===========================================
// What Will Be Print In The Console
/* 
let x = {
	x: "code",
};
[x].map((x) => console.log(x)); // { x: "code" }
*/

// =============================================  =============================================

// =============================================  =============================================
