const path = require('path');

module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
   
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
         {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: { 
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors', 
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};