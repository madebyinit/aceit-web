var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Copy = require('copy-webpack-plugin');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
      {test: /^raw.*$/, loader: 'file-loader'},
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/, /mazerace/, /tower/, /parkinglot/, /mousetrap/, /tower_e.htm/, /parkinglot_e.htm/, /mousetrap_e.htm/, /mazerace_e.htm/, /parkinglotLast_e.htm/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),
    new Copy([{from: 'mazerace', to: 'mazerace'}]),
    new Copy([{from: 'mousetrap', to: 'mousetrap'}]),
    new Copy([{from: 'parkinglot', to: 'parkinglot'}]),
    new Copy([{from: 'tower', to: 'tower'}]),
    new Copy([{from: 'audio', to: 'audio'}]),
    new Copy([{from: 'video', to: 'video'}]),
    new Copy([{from: 'tower_e.htm', to: 'tower_e.htm'}]),
    new Copy([{from: 'parkinglot_e.htm', to: 'parkinglot_e.htm'}]),
    new Copy([{from: 'parkinglotLast_e.htm', to: 'parkinglotLast_e.htm'}]),
    new Copy([{from: 'mousetrap_e.htm', to: 'mousetrap_e.htm'}]),
    new Copy([{from: 'mazerace_e.htm', to: 'mazerace_e.htm'}])
  ]
};
