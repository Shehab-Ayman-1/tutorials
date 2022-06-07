// npm i gulp gulp-concat gulp-pug sass gulp-sass gulp-autoprefixer
// npm i gulp-uglify gulp-minify gulp-terser gulp-imagemin gulp-webp

// Minify Vs Uglify Vs Terser
//       Minify => Create 2 Files The First Is Minified And The Second Is Not Minified
//       Uglify => Create 1 File Is Minified
//       Terser => Read The Documentation

const { src, watch, dest, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const terser = require("gulp-terser");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify");

// Pug
function html() {
	return src("./project/pug/pages/*.pug").pipe(pug()).pipe(dest("./dist/html/"));
}

// Scss
function css() {
	return (
		src("./project/scss/**/*.scss")
			// Note: Compressed Output & Log The Error => Make The Comliper Take More Mili Second In Compile
			.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
			.pipe(autoprefixer("last 2 versions"))
			.pipe(concat("style.css"))
			.pipe(dest("./dist/css/"))
	);
}

// JavaScript
function javaScript() {
	return src("./project/js/**/*.js").pipe(terser()).pipe(dest("./dist/js/"));
}

// Json Api
function json() {
	return src("./project/api/**/*.json").pipe(dest("./dist/api/"));
}

// Watch
function Watch() {
	watch("./project/pug/pages/*.pug", html);
	watch("./project/scss/**/*.scss", css);
	watch("./project/js/**/*.js", javaScript);
	watch("./project/api/**/*.json", json);
}

exports.default = series(html, css, javaScript, json, Watch);

/* 
	// Video Toturial
	// see video explanation: https://youtu.be/ubHwScDfRQA

	const { src, dest, watch, series} = require('gulp');
	const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
	const prefix = require('gulp-autoprefixer');
	const minify = require('gulp-clean-css');
	const terser = require('gulp-terser');
	const imagemin = require('gulp-imagemin');
	const imagewebp = require('gulp-webp');

	//compile, prefix, and min scss
	function compilescss() {
		return src('src/scss/*.scss') // change to your source directory
			.pipe(sass())
			.pipe(prefix('last 2 versions'))
			.pipe(minify())
			.pipe(dest('dist/css')) // change to your final/public directory
	};

	//optimize and move images
	function optimizeimg() {
		return src('src/images/*.{jpg,png}') // change to your source directory
			.pipe(imagemin([
				imagemin.mozjpeg({ quality: 80, progressive: true }),
				imagemin.optipng({ optimizationLevel: 2 }),
			]))
			.pipe(dest('dist/images')) // change to your final/public directory
	};

	//optimize and move images
		function webpImage() {
			return src('dist/images/*.{jpg,png}') // change to your source directory
				.pipe(imagewebp())
				.pipe(dest('dist/images')) // change to your final/public directory
		};


	// minify js
		function jsmin(){
			return src('src/js/*.js') // change to your source directory
				.pipe(terser())
				.pipe(dest('dist/js')); // change to your final/public directory
		}

	//watchtask
		function watchTask(){
			watch('src/scss/** /*.scss', compilescss); // change to your source directory
			watch('src/js/*.js', jsmin); // change to your source directory
			watch('src/images/*', optimizeimg); // change to your source directory
			watch('dist/images/*.{jpg,png}', webpImage); // change to your source directory
		}


	// Default Gulp task 
		exports.default = series(compilescss, jsmin, optimizeimg, webpImage, watchTask );
*/
