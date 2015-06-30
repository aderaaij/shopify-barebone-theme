var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  gulp.src(config.layout_src)
  .pipe(plugins.changed(config.layout_build, {extension: '.liquid'}))
  .pipe(gulp.dest(config.layout_build));

  gulp.src(config.snippets_src)
  .pipe(plugins.changed(config.snippets_build, {extension: '.liquid'}))
  .pipe(gulp.dest(config.snippets_build));

  gulp.src(config.templates_src)
  .pipe(plugins.changed(config.templates_build, {extension: '.liquid'}))
  .pipe(gulp.dest(config.templates_build));

  // fonts and font icons
  gulp.src(config.font_src)
  .pipe(plugins.flatten())
  .pipe(gulp.dest(config.font_build));

  // Shopify config files
  gulp.src(config.config_src)
  .pipe(plugins.changed(config.config_build))
  .pipe(gulp.dest(config.config_build));

});