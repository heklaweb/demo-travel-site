var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function () {
    console.log("Hurra - du hast eine Gulp task erstellt.");
});

// Änderungen in "index.html" verarbeiten
gulp.task('html', function () {
    console.log("Stell dir vor, dass hier etwas Sinnvolles mit deiner HMTL-Datei gemacht wird.");
});

// Änderungen an *.css Dateien im "styles"-Verzeichnis verarbeiten
gulp.task('styles', function () {
    // console.log("Stell dir vor, dass hier Sass oder PostCSS tasks 'laufen'!");
    console.log("Verarbeite Änderungen an *.css Dateien im 'styles'-Verzeichnis ...");
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

    // Anderungen an "index.html" überwachen
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    // Änderungen an *.css Dateien im "styles"-Verzeichnis überwachen
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });
});