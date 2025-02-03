const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: {
      layout: './assets/src/js/layout.js',
      modules: './assets/src/js/modules.js',
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'assets/dist/js'),
      clean: true,
      sourceMapFilename: '[name].min.js.map',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({ parallel: true, extractComments: false }),
      ],
    },
    plugins: [
      new ESLintPlugin({ extensions: ['js'] }),
    ],
    devtool: 'source-map',
  },
  {
    mode: 'production',
    entry: {
      styles: './assets/src/scss/styles.scss',
    },
    output: {
      path: path.resolve(__dirname, 'assets/dist/css'),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            'postcss-loader',
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].min.css' }),
      new StylelintPlugin({ files: 'assets/src/scss/**/*.{scss,sass,css}' }),
    ],
    devtool: 'source-map',
  }
];
