// npm install gulp
// [All] npm i gulp-concat sass gulp-sass gulp-autoprefixer gulp-pug gulp-uglify gulp-minify

// Note: The Defferant Between Minify & Uglify Pluggins That
//       Minify => Create 2 Files The First Is Minified And The Second Is Not Minified
//       Uglify => Create 1 File Is Minified
const { src, dest, series, watch } = require("gulp");
const AutoPrefixer = require("gulp-autoprefixer");
const Sass = require("gulp-sass")(require("sass"));
const Concat = require("gulp-concat");
const GulpPug = require("gulp-pug");
const uglify = require("gulp-uglify");

function pug() {
	return src("./Project/pug/pages/*.pug").pipe(GulpPug()).pipe(dest("./dist/html/"));
}

function sass() {
	return src("./Project/sass/**/*.scss")
		.pipe(Sass({ outputStyle: "compressed" }).on("error", Sass.logError))
		.pipe(AutoPrefixer("last 2 versions"))
		.pipe(Concat("style.css"))
		.pipe(dest("./dist/css/"));
}

function js() {
	return src("./Project/js/**/*.js").pipe(uglify()).pipe(dest("./dist/js/"));
}

function Watch() {
	watch("./Project/pug/**/*.pug", pug);
	watch("./Project/sass/**/*.scss", sass);
	watch("./Project/js/**/*.js", js);
}

exports.default = series(pug, sass, js, Watch);
