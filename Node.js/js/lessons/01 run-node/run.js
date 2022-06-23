/* 
	We Have 2 Ways To Run Node Files:
	[1] Old Way => Use module.exports = [ function name ]  =>  require("filePath.js")
	[2] New Way => Use Es6 => export default [ function name ]  =>  import fileName from "filePath.js"
		-- To Using Es6 => We Have To Add [ "type": "module" ] In Package.json
*/

function runNode() {
	// Run This File In Terminal [node app [file name]]
	console.log("Hello World"); // Hello world
}

// module.exports = runNode;

export default runNode;
