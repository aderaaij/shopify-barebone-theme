var
    gulp                = require('gulp'),
    del                 = require('del'),
    config              = require('../config').clean;

// Clean out build
gulp.task('clean', function(cb) {
  del(config.build, cb);
});