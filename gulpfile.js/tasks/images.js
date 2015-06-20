var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').images;

// Images
gulp.task('images', function() {
  return gulp.src(config.source)

    // Image optimization
    .pipe(plugins.cache(plugins.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))

    // Distribute to build path
    .pipe(gulp.dest(config.build))

    // Show notification
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Images task complete' })));
});