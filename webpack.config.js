var path = require("path");
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: process.env.ENV = process.env.NODE_ENV = 'development',
  HMR: hasProcessFlag("hot")
}

function entryConfig(path) {
  return [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    path,
  ]
}

module.exports = {
  metadata: {
    title: "Webpack Dev-server Demo",
  },
  entry: {
    app: entryConfig("./src/app/main.js")
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel?presets[]=es2015", exclude: /(node_modules|bower_components)/, },
      // { test: /\.css$/, loader: 'raw-loader' }, // for: angular
      { test: /\.css$/, loader: "style!css" }
    ],
  },
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]/bundle.js",
    // // webpack-dev-server コマンドオプション Alias: --content-base src/
    // publicPath: "/",
  },
  devServer : {
    host : 'localhost',
    port : '8080',
    publicPath: "http://localhost:8080/",
    hot  : METADATA.HMR,
    noInfo: false,
    historyApiFallback: true,
    // Display nothing to the console. Default: false
    // コンソールには何も表示されません デフォルト：false
    quiet: false,
    // Switch into lazy mode. Default: false
    // レイジー・モードでは：スイッチ要求は、コンパイルをトリガする必要があります。
    // ほとんどの場合、これはWebPACKの構成オプションoutput.filenameに等しいです。
    lazy: false,
    stats: { colors: true },
    watchOptions: {
      // Delay the rebuilt after the first change. Value is a time in ms.
      // 最初の変更後に再構築を遅らせます。値はミリ秒単位の時間です。
      aggregateTimeout: 300,
      // number: use polling with specified interval
      // 番号：指定された間隔でポーリングを使用します
      poll: 1000
    }
  },
  
  plugins: [
    /**
     * Plugin: DefinePlugin
     * Description: Define free variables.
     * Useful for having development builds with debug logging or adding global constants.
     *
     * Environment helpers
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     */
    // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      
      // inject: true | 'head' | 'body' | false Inject all assets into the given template or templateContent - When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element.
      // inject: "body",
    }),
    
    // グローバル変数にできる
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
};

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}
