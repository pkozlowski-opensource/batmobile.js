var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('default', function () {
  gulp.src([
      'batmobile.js',
      'index.js',
      'node_modules/hydrogen-boosted-engine/engine.js',
      'node_modules/Diary.js/src/**/*.js',
      'node_modules/di/src/*.js'
    ])
    .pipe(traceur({
      types: true,
      annotations: true,
      modules: 'amd'
    }))
    .pipe(gulp.dest('dist'));
});