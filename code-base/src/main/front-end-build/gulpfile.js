'use strict';

var chalk = require('chalk');

console.log(chalk.green('\n---Gulp In Action---\n'));

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
	less = require('gulp-less'),
	browserify = require("browserify"),
	path = require('path'),
	glob = require("glob"),
    imagemin = require('gulp-imagemin');


gulp.task('default', function() {
	console.log(chalk.green('\n---The Gulp Task has run.---\n'));
});

gulp.task('default_future', ['optimise_images', 'minify_css', 'minify_js'], function() {
	console.log(chalk.green('\n---The Gulp Task has run.---\n'));
});

gulp.task('optimise_images', function() {
	return gulp.src('./src/images/')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/images'));
});

gulp.task('minify_css', ['css_lint'], function() {

});

gulp.task('css_lint', ['css_base_64'], function(){

});

gulp.task('css_base_64', function(){

});

gulp.task('lint', ['minify'], function() {
	return gulp.src('webapp/asdf.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('less', function () {
	gulp.src('../webapp/asdf.less')
		.pipe(less())
		.pipe(gulp.dest('webapp'));
});



gulp.task('minify_css', function() {

});

gulp.task('minify_js', ['minify_common', 'minify_lib'], function() {

});

// TODO Order of scripts needs to be maintained

gulp.task('minify_common', function(){

	return;

	return gulp.src('../webapp/scripts/common/**/*.js')
		.pipe(concat('common.js'))
		.pipe(gulp.dest('../webapp/scripts/common'))
		.pipe(rename('common.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../webapp/scripts/common/'));
});

gulp.task('minify_lib', function(){

	return;

	return gulp.src('../webapp/scripts/lib/**/*.js')
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('../webapp/scripts/lib'))
		.pipe(rename('lib.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../webapp/scripts/lib/'));
});
