'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: [
    './public/javascripts/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}