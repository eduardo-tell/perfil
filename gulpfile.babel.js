import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import browserSync from "browser-sync";

exports.sass = () => (
    gulp.src('./assets/scss/**/**')
    .pipe(sass({outputStyle: 'compressed', errLogToConsole: true }))
    .pipe(concat('global.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
);

gulp.task('watch', () => {
    gulp.watch('.dist/css/**', gulp.series('sass'))
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        },
        notify: false,
        injectChanges: true
    });

    gulp.watch('./assets/scss/**', gulp.series('sass'))
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
