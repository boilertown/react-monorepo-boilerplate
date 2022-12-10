const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

dotenv.config();

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, '../src/main.tsx'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				/**
				 * No `ts-loader` since we need faster build speed.
				 */
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
		],
	},
	output: {
		filename: '[name].[chunkhash].bundle.js',
		chunkFilename: '[name].[chunkhash].chunk.js',
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../src/index.ejs'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new CssMinimizerPlugin(),
		process.env.WEBPACK_ANALYZER ? new BundleAnalyzerPlugin() : () => null,
	],
});
