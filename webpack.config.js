const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html'
    })
  ],

  devServer: {
    static: './dist',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // This allows you to import JSX files without specifying the extension
  },
}