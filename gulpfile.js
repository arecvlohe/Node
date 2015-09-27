var gulp   = require('gulp');
var babel  = require('gulp-babel');

gulp.task('script', function() {
  return gulp.src('es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('es5/'));
});
