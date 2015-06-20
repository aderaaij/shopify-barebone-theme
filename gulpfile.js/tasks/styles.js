var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').styles;

// Don't break watch on error
var onError = function (err) {
  plugins.util.beep();
  console.log(err);
  this.emit('end');
};

// Styles
gulp.task('styles', function() {
  return gulp.src(config.source)

    // Catch errors
    .pipe(plugins.plumber({errorHandler: onError}))

    // Specify output style
    .pipe(plugins.sass({outputStyle: 'nested'}))

    // Autoprefixer
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

    // Distribute to build
    // .pipe(gulp.dest(build_path + 'assets/css/'))

    // Add a .min version
    .pipe(plugins.rename({
      suffix: '.css',
      extname: '.liquid'
    }))

    // Minify .min version
    // .pipe(plugins.minifyCss())

    // Distribute to build path
    .pipe(gulp.dest(config.build))

    // Show notification
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Styles task complete' })));
});