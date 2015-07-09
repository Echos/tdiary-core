var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('spec/javascripts/lib'))
});
gulp.task('default', ['bower']);
