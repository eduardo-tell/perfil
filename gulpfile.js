var gulp = require('gulp');

gulp.task('default', ['styles'], function() {});


gulp.task('styles', function() {
  var concat = require('gulp-concat');
  var autoprefix = require('gulp-autoprefixer');
  var minifyCSS = require('gulp-clean-css');

  var files = [
    'assets/css/src/styles.css',
    'assets/css/src/responsivo.css'
  ];

  gulp.src(files)
    .pipe(concat('global.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css/dist/'));
});

gulp.task('watch', function() {
  var watch = require('gulp-watch');
  gulp.watch('assets/css/src/*.css', ['styles']);
});

gulp.task('server', ['watch'], function() {
  var browserSync = require('browser-sync');

  var files = [
    '*.html',
    'assets/css/dist/*.css'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});