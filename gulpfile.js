const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// build sass
gulp.task('compile-sass', function() {
  return gulp.src('_sass/compiled.scss') // Path to your SASS files
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 3,
      errLogToConsole: true,
      includePaths: ['node_modules/']
    }).on('error', console.error))
    .pipe(gulp.dest('assets/css')); // Output directory for CSS files
});
gulp.task('sass', gulp.series('compile-sass'));


// watch sass
gulp.task('watch-sass', function() {
  gulp.watch('_sass/*.scss', gulp.series('compile-sass'));
});
gulp.task('watch', gulp.series('watch-sass'));
