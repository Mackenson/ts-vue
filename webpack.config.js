const path = require('path')

const webpack = require('webpack')

let config ={
  entry: './src/mainjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  }
}

module exports = config
