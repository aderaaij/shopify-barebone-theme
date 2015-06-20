var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')();

// Clear (image) cache
gulp.task('clear', function (done) {
    return plugins.cache.clearAll(done);
});