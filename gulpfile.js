var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('default', function () {
  gulp.src([
      'index.js',
      'node_modules/hydrogen-boosted-engine/engine.js',
      'node_modules/Diary.js/src/**/*.js'
    ])
    .pipe(traceur({
      modules: 'amd'
    }))
    .pipe(gulp.dest('dist'));
});