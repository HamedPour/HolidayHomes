var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
hash = require('gulp-hash'),
browserSync = require('browser-sync').create();


// ============================================================================


gulp.task('build', [
    'deleteDistFolder',
    'optimizeImages',
    'useminTrigger',
    'minifyHTML',
    'hashHTML',
    'cleanHTML'
  ]);
// ============================================================================
gulp.task('deleteDistFolder', ['icons'], function(){
  return del('./docs')
});

// ============================================================================
gulp.task('optimizeImages', ['deleteDistFolder',], function(){
  return gulp.src([
    "./app/assets/images/**/*",
    "!./app/assets/images/icons",
    "!./app/assets/images/icons/**/*"
  ])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});
// ============================================================================
gulp.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start("usemin")
});

// ============================================================================
gulp.task('usemin', ['styles', 'scripts'], function(){
  return gulp.src('./app/*.html')
    .pipe(usemin({
      css: [function(){return rev()}, function(){return cssnano()}],
      js: [function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});
// ===============================================================Minify html

gulp.task('minifyHTML', ['usemin'], function(){
  return gulp.src('./app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./docs'));
});
// ===============================================================Hashing html
gulp.task('hashHTML', ['minifyHTML'], function(){
  return gulp.src('./docs/*.html')
    .pipe(hash())
    .pipe(gulp.dest('./docs'));
});
// ================================================================Clean old-html
gulp.task('cleanHTML', [ 'minifyHTML', 'hashHTML'], function(){
  return del(['./docs/index.html', './docs/house.html'])
});
// ============================================================================
gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

// ============================================================================
