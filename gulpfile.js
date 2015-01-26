'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var contentPath = 'content/js/';
var staticPath = 'static/js/';

gulp.task('default', function() {
	return gulp.src('main.js')
		.pipe(gulp.dest(contentPath))
		.pipe(uglify())
		.pipe(rename({extname: ".min.js"}))
		.pipe(gulp.dest(staticPath));
});