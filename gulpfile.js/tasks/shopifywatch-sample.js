var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').shopifywatch,
    options             = { "basePath": config.build };

// Shopifywatch
// https://www.npmjs.com/package/gulp-shopify-upload
gulp.task('shopifywatch', function() {
  return plugins.watch(config.build)

  // Add secret key, etc to gulp shopify upload
  .pipe(plugins.shopifyUpload(
    'API_KEY',
    'PASSWORD',
    'mysite.myshopify.com',
    'THEME ID', //THEME ID is the ID of your theme and is **OPTIONAL**, if not passed in, the current working theme will be used. Fill in null to leave empty
    options
  ));
});