var gulp = require('gulp');
var traceur = require('gulp-traceur');

var paths = {
  scripts: [
    'batmobile.js',
    'index.js',
    'node_modules/hydrogen-boosted-engine/engine.js',
    'node_modules/Diary.js/src/**/*.js',
    'node_modules/di/src/*.js'
  ]
};

gulp.task('default', function () {
  gulp.src(paths.scripts)
    .pipe(traceur({
      types: true,
      annotations: true,
      modules: 'amd'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['default']);
});
