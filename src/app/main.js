require("./main.css");

global.app = {};

app.header = require("./header");
app.header();

var $body = $("body");
$body.prepend("test5");

console.log( "main.js 17" );
$body.append("yuta nakamura");


if (module.hot) {
  
  module.hot.accept(function(err) {
    if (err) console.error(err);
    
    console.log( "### main.js: HMR accept" );
  });
  
  module.hot.dispose(function() {
    
    console.log( "### main.js: HMR dispose" );
  });
}




// var $urls = $(`<div style="background:black;color:white;width:100%;overflow-x: scroll; white-space:pre-wrap;">
//   
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.dev.js | angular2-webpack-starter/webpack.dev.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.dev.js | angular2-webpack-starter/webpack.dev.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.dev.js | angular2-webpack-starter/webpack.dev.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.dev.js | angular2-webpack-starter/webpack.dev.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/index.html | angular2-webpack-starter/index.html at master · AngularClass/angular2-webpack-starter
//   https://webpack.github.io/docs/webpack-dev-middleware.html | webpack dev middleware
//   https://webpack.github.io/docs/configuration.html#node | configuration
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/helpers.js | angular2-webpack-starter/helpers.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.common.js | angular2-webpack-starter/webpack.common.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/ampedandwired/html-webpack-plugin | ampedandwired/html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.dev.js | angular2-webpack-starter/webpack.dev.js at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter/blob/master/package.json | angular2-webpack-starter/package.json at master · AngularClass/angular2-webpack-starter
//   https://github.com/AngularClass/angular2-webpack-starter | AngularClass/angular2-webpack-starter: An Angular 2 Starter kit featuring Angular 2 (Router, Http, Forms, Services, Tests, E2E, Dev/Prod), Material Design, Karma, Protractor, Jasmine, Istanbul, TypeScript, TsLint, Codelyzer, Hot Module Replacement, Typings, and Webpack by @AngularClass
//   http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories | configuration
//   https://github.com/webpack/raw-loader | webpack/raw-loader: raw loader module for webpack
//   http://thujikun.github.io/blog/2014/12/07/webpack/ | webpackを使い倒す - Thujikun blog
// 
//   
// </div>`);
// $body.append($urls);
