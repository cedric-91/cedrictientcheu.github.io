var gulp = require("gulp")
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify'),
      jshint = require('gulp-jshint'),
      header  = require('gulp-header'),
      rename = require('gulp-rename'),
      cssnano = require('gulp-cssnano'),
      package = require('./package.json');
// Add a banner a the top on css/js file
var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

// Convert sass to Css file and make two copies with a .min file
gulp.task("sass", function() {
      return gulp.src("src/sass/**/*.sass")
      .pipe(sass({errLogToConsole: true}))
      .pipe(autoprefixer("last 4 version"))
      .pipe(gulp.dest("public/assets/css"))
      .pipe(cssnano())
      .pipe(rename({ suffix: ".min" }))
      .pipe(header(banner, { package : package }))
      .pipe(gulp.dest("public/assets/css"))
      .pipe(browserSync.reload({ stream: true }));
});

// Add banner and make two with a .min file
gulp.task("js", function() {
  gulp.src("src/js/main.js")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest("public/assets/js"))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("public/assets/js"))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task("browser-sync", function() {
      browserSync.init(null, {
          server: {
                  baseDir: "public"
          }
      });
});

gulp.task("bs-reload", function() {
      browserSync.reload();
});

// Watch for changes and reload the site
gulp.task("default", ["sass", "js", "browser-sync"], function() {
      gulp.watch("src/sass/**/*.sass", ["sass"]);
      gulp.watch("src/js/*.js", ["js"]);
      gulp.watch("public/*html", ["bs-reload"]);
});
