const path = require('path');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: './src/scripts/app.js',
   output: {
      path: path.resolve(__dirname, 'dist/scripts'),
      filename: 'bundle.js'
   },

};