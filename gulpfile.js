(() => {
	"use strict";

	var gulp = require("gulp");
	var connect = require("gulp-connect");
	var open = require("gulp-open");
	var browserify = require("browserify");
	var reactify = require("reactify");
	var source = require("vinyl-source-stream");
	var concat = require("gulp-concat");
	var lint = require("gulp-eslint");

	var config = {
		port: 9005,
		devBaseUrl: "http://localhost",
		paths: {
			html: "./src/*.html",
			js: "./src/**/*.js",
			jsx: "./src/**/*.jsx",
			images: "./src/images/*",
			css: [
				"node_modules/bootstrap/dist/css/bootstrap.min.css",
				"node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
				"node_modules/toastr/toastr.css"
			],
			dist: "./dist",
			mainJs: "./src/main.js"
		}
	}

	//Start a local development server
	gulp.task("connect", () => {
		connect.server({
			root: ["dist"],
			port: config.port,
			base: config.devBaseUrl,
			livereload: true
		});
	});

	gulp.task("open", ["connect"], () => {
		gulp.src("dist/index.html")
			.pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
	});

	gulp.task("html", () => {
		gulp.src(config.paths.html)
			.pipe(gulp.dest(config.paths.dist))
			.pipe(connect.reload());
	});

	gulp.task("images", () => {
		gulp.src(config.paths.images)
			.pipe(gulp.dest(config.paths.dist + "/images"))
			.pipe(connect.reload());
	});

	gulp.task("js", () => {
		browserify(config.paths.mainJs)
			.transform(reactify)
			.bundle()
			.on("error", console.error.bind(console))
			.pipe(source("bundle.js"))
			.pipe(gulp.dest(config.paths.dist + "/scripts"))
			.pipe(connect.reload());
	});

	gulp.task("css", () => {
		gulp.src(config.paths.css)
			.pipe(concat("bundle.css"))
			.pipe(gulp.dest(config.paths.dist + "/css"));
	});

	gulp.task("lint", () => {
		return gulp.src(config.paths.js)
			.pipe(lint({ config: "eslint.config.json" }))
			.pipe(lint.format());
	});

	gulp.task("watch", () => {
		gulp.watch(config.paths.html, ["html"]);
		gulp.watch(config.paths.js, ["js", "lint"]);
		gulp.watch(config.paths.jsx, ["js", "lint"]);
	});

	gulp.task("start", ["html", "images", "js", "css", "lint", "open", "watch"]);

})();