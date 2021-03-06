var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src'
  ],
  output: {
    filename: './dist/[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loaders: ['babel'] },
      { test: /\.json$/, loader: 'json' },
    ]
  }
}

