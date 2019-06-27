'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: [
    './resources/assets/js/main.js',
    './resources/assets/scss/main.scss'
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    filename: 'javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
					{
						loader: 'file-loader',
						options: {
							name: 'stylesheets/style1.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}