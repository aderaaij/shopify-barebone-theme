# Shopify Barebone Theme

The Shopify Barebone Theme is a custom, Node based, developers workflow / starting point for creating awesome Shopify themes, the sexy way! This repository makes us of gulp to support jade templating, template partials, scss partials, merging and uglifying scripts and styles, copying assets, building a shopify compatible build folder, syncing the whole lot with your dev / live store and much more!

### Contains
* [Jade templating language](http://jade-lang.com/ "Jade - Templating engine")
* [gulp-shopify-upload](https://www.npmjs.com/package/gulp-shopify-upload "Gulp Shopify Upload") syncing your local development with your dev / live store
* [Node Sass](http://libsass.org/) through [Gulp Sass](https://www.npmjs.com/package/gulp-sass)
* [Susy grid system](http://susy.oddbird.net/)
* [Breakpoint Sass](http://breakpoint-sass.com/)
* [SCSS Normalize](https://github.com/appleboy/normalize.scss)

## Installation

* Copy the repo into a local folder and run `npm install` to install the required node modules.
* Configure the shopify upload plugin by renaming the `/gulpfile.js/tasks/shopifywatch-sample.js` to `/gulpfile.js/tasks/shopifywatch.js` and fill in your shopify private app credentials which you can create on [https://myshop.myshopify.com/admin/apps](https://myshop.myshopify.com/admin/apps)
