---
category: weekly-post
date: 2024-06-26
description: I change job next week, have learned the basics of Gulp, and took in a stray
index: last-week-in-systems
location: Devon, UK <span class="devon">〓〓</span>🇪🇺
tags:
  - cat
  - gulp
  - job-change
  - awesomeness
title: Last week in systems
type: post
view: post.html
---

[% USE relative_url %]
[% USE Highlight %]

I change jobs next week, which is super because its about time I wrote code to pay my mortgage. I've really enjoyed my time in Infrastructure, and wouldn't say I regretted spending time in sysadmin land, but the time has definitely come. We've also got a new dev starting on the 8<sup>th</sup> July, so I won't be a loner when starting, yay! 

I've been working on a SASS project again this week, and decided to use Gulp to build the SASS "properly". It was a handy experience, which led me to create a simple yet effective `Gulpfile.js`:

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

[% FILTER $Highlight "language-javascript" "line-numbers" "data-start"=5 %]
// build sass
function compileSass() {
  return gulp.src('scss/**/compiled.scss') // Path to your SASS files
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 3,
      errLogToConsole: true,
      includePaths: ['node_modules/']
    }).on('error', console.error))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
gulp.task('compile-sass', compileSass);
gulp.task('sass', compileSass);


// watch sass
function watchSass() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
}
gulp.task('sass-watch', watchSass);
[% END %]

It isn't anything amazing, but I'm very pleased!

![Stray cat in yard]([% 'assets/bitmaps/blog/2024-06-26-cat-in-yard.jpg' | $relative_url %])

Outside of techiness, we've had a stray cat coming in the yard. She's hands down the sweetest, chattiest &amp; friendliest cat I've ever had the pleasure of interacting with &ndash; and we grew up with cats.

Tragically, she appears to have fallen on hard times. She's very skinny, and has terribly matted fur. I've been putting food out for her since Monday, and will continue to do so. 

If she's still around next week, I'll get her to the vets, and give her a haircut..!
