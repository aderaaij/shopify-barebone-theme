// Distribution paths
var
  app_path              = './app/',
  src_path              = app_path + 'src/',
  build_path            = app_path + 'build/',
  bower_components      = './bower_components/';

// Requirements, gulp plugins loaded  with gulp-load-plugins
var
  gulp                = require('gulp'),
  gulpLoadPlugins     = require('gulp-load-plugins'),
  plugins             = gulpLoadPlugins();

module.exports = {

  templates: {
    source: [
      src_path+'layout/*.jade',
      src_path+'templates/**/*.jade',
      src_path+'snippets/**/*.jade',
    ],
    build: build_path,
    base: src_path
  },

  styles: {
    source: src_path+'assets/sass/screen.scss',
    build: build_path + 'assets/',
    base: src_path
  },

  scripts: {
    source: [
      src_path+'assets/js/vendor/*.js',
      src_path+'assets/js/partials/*.js',
      src_path+'assets/js/*.js'
    ],
    build: build_path + 'assets/',
    base: src_path
  },

  images: {
    source: src_path+'assets/img/**/**/*',
    build: build_path + 'assets/',
    base: src_path
  },

  clean: {
    build: build_path
  },

  bower: {
    dest: bower_components
  },

  copy: {
    font_src: src_path+'assets/fonts/**/*',
    font_build: build_path+'assets/fonts',
    config_src: src_path+'config/**/*',
    config_build: build_path+'config'
  },

  shopifywatch: {
    build_watch: build_path+'+(assets|layout|config|snippets|templates|locales)/**',
    build: build_path
  },

  watch: {
    source: {
      styles: src_path+'assets/sass/**/*.scss',
      templates: src_path+'**/*.jade',
      images: src_path+'assets/img/**/*',
      scripts: src_path+'assets/js/**/*.js',
      copy: [src_path+'assets/fonts/**/*',src_path+'config/**/*' ]
    }
  }
};
