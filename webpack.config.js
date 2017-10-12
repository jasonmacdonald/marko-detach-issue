
let path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    filename: `[name].js`,
    chunkFilename: `[name].js`,
    path: path.resolve('./', 'dist/')
  },
  resolve: {
    extensions: ['.js', '.marko']
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    open: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.marko$/,
        loader: 'marko-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './tpl.ejs'
  })]
}