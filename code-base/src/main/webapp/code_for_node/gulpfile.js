'use strict';

var chalk = require('chalk');

console.log(chalk.green('\n---Gulp In Action---\n'));

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var less = require('gulp-less');

gulp.task('less', function () {
	gulp.src('../webapp*//**//*.less')
		.pipe(less())
		.pipe(gulp.dest('webapp'));
});

// TODO Order of scripts needs to be maintained

gulp.task('minify_common', function(){
	return gulp.src('../webapp/scripts/common/**/*.js')
		.pipe(concat('common.js'))
		.pipe(gulp.dest('../webapp/scripts/common'))
		.pipe(rename('common.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../webapp/scripts/common/'));
});

gulp.task('minify_lib', function(){
	return gulp.src('../webapp/scripts/lib/**/*.js')
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('../webapp/scripts/lib'))
		.pipe(rename('lib.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../webapp/scripts/lib/'));
});

gulp.task('lint', function() {
	return gulp.src('webapp*//**//*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['minify_common', 'minify_lib'], function() {
	console.log(chalk.green('\n---The Gulp Task has run.---\n'));
});