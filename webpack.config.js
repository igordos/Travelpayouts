const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: env === 'develop' ? 'development' : 'production',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devtool: env === 'production' ? false : 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader:
              env === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              plugins: [new CleanCSSPlugin({ advanced: true })]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].bundle.css',
      chunkFilename: '[id].[hash].bundle.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
});
