var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').shopifywatch,
    options             = { "basePath": config.build };

// Set shopify watch options


// Shopifywatch
gulp.task('shopifywatch', function() {
  return plugins.watch(config.build_watch)

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    '40227a870f369ef7839269553f7db71b',
    'c6788a254bd985ea3488f7ae805c6aa8',
    'cfye-2.myshopify.com',
    null,
    options
  ));
});