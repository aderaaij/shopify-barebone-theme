var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').scripts;

// Don't break watch on error
var onError = function (err) {
  plugins.util.beep();
  console.log(err);
  this.emit('end');
};

// Scripts
gulp.task('scripts', function() {
  return gulp.src(config.source)

    // Catch Errors
    .pipe(plugins.plumber({errorHandler: onError}))

    // Concatinate in one file
    .pipe(plugins.concat('script.js'))

    // Add a .min version
    .pipe(plugins.rename({ suffix: '.min' }))

    // Minify with jsUglify
    .pipe(plugins.uglify())

    // Distribute to build
    .pipe(gulp.dest(config.build))

    // Show notifcation
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Scripts task complete' })));
});