const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");

config.output = {
  filename: "[name].bundle.js",
  // publicPath: 'http://app.aceitapp.net/',
  // publicPath: 'https://www.aceit-ccapp.com/',
  // publicPath: 'https://www.aceitapp-demo.com/',
  // publicPath: "https://aceit.qarea.org/",
  publicPath: "/",

  path: path.resolve(__dirname, "dist")
};

//        DEPRECATED
// config.plugins = config.plugins.concat([

//   // Reduces bundles total size
//   new webpack.optimize.UglifyJsPlugin({
//     mangle: {

//       // You can specify all variables that should not be mangled.
//       // For example if your vendor dependency doesn't use modules
//       // and relies on global variables. Most of angular modules relies on
//       // angular global variable, so we should keep it unchanged
//       except: ['$super', '$', 'exports', 'require', 'angular']
//     },
//   }),
// ]);

module.exports = config;
