var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express", state: false, skills: ["html", "css", "js", "bootstrap", "react", "Node.js"] });
});

module.exports = router;
