const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV == 'dev '
const isProd = !isDev

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra){
    loaders.push(extra)
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['./index.ts'],
  },

  output: {
    filename: '[name].js', //'[name].[contenthash].js'
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  devtool: isProd ? 'source-map' : false,

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
      '.jsx'
    ],
  },

  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      // minify: {
      //   collapseWhitespace: isProd
      // }
    }),

    // new CopyWebpackPlugin([
    //   {
    //     from: './img',
    //     to: './img'
    //   },
    // ]),
    
    new CleanWebpackPlugin(),

    //new BundleAnalyzerPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      minify: {
        collapseWhitespace: isProd
      }
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders()
      }, 

      { 
        test: /\.(js|ts|tsx|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      {
        test: /\.(sass|scss)$/i,
        use: cssLoaders('sass-loader')
      }, 

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  }
}