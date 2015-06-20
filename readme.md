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

* Copy the repo into a local folder and run `npm install`
* Configure the shopify upload plugin by renaming the `/gulpfile.js/shopify-config-sample.js` to `/gulpfile.js/tasks/shopify-config.js` and fill in your shopify private app credentials which you can find on [https://myshop.myshopify.com/admin/apps](https://myshop.myshopify.com/admin/apps)
* For initial build and upload Run default `gulp` task. This will fire the following things:
  * Check if Bower dependencies are installed and if not, installs them
  * Cleans build folder if exists
  * Builds templates, scripts, styles and distribute to appropiate folder in build
  * copies images and config files to build folder
* Run `gulp watch` to compile templates on changes and upload them directly to your shopify theme

## Build file/folder structure

When you build the app by running `gulp` it will distribute your files into the build folder with the following Shopify compatible file/folder structure:

```
.
├── assets
│   ├── screen.css.liquid
│   └── script.min.js
├── config
│   ├── settings.html
│   └── settings_data.json
├── layout
│   └── theme.liquid
├── snippets
│   ├── article-grid-item.liquid
│   ├── collection-grid-item.liquid
│   ├── collection-listing.liquid
│   ├── open-graph-tags.liquid
│   ├── product-grid-item.liquid
│   ├── site-nav.liquid
│   ├── social-links.liquid
│   └── twitter-card.liquid
└── templates
    ├── 404.liquid
    ├── article.liquid
    ├── blog.grid.liquid
    ├── blog.liquid
    ├── cart.liquid
    ├── collection.liquid
    ├── index.liquid
    ├── list-collections.liquid
    ├── page.liquid
    ├── product.liquid
    └── search.liquid
```

## Credits

* The theme is heavily based on the [Shopify skeleton theme](https://github.com/Shopify/skeleton-theme)