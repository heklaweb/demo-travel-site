var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

/* Überwachung */
gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    /* Änderungen an "index.html" überwachen */
    watch('./app/index.html', function () {
        // gulp.start('html');
        browserSync.reload();
    });

    /* Änderungen an *.css Dateien im "styles"-Verzeichnis überwachen */
    watch('./app/assets/styles/**/*.css', function () {
        // gulp.start('styles');
        gulp.start('cssInject');
    });

});

/* Änderungen an css-Dateien injizieren (ohne Reload!) */
gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});