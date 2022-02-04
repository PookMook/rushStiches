/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: {
    index:'./src/index.ts',
    primitives: './src/primitives.ts',
    icons: './src/icons.ts',
    form: './src/custom/form.tsx',
    layout: './src/custom/layout.tsx',
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    library: "Welbi Design System",
    libraryTarget: 'umd',
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
    ],
  },
  externals: {
    'react': 'react', 
    'react-dom' : 'reactDOM' 
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};