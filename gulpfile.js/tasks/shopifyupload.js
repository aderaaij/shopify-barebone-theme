var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').shopifywatch,
    credentials         = require('../shopify-config').shopifyCredentials,
    options             = { "basePath": config.build };

// Shopifywatch
gulp.task('shopifyupload', function() {
  return gulp.src(config.build_watch)

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    credentials.api_key,
    credentials.password,
    credentials.url,
    credentials.theme_id,
    options
  ));
});