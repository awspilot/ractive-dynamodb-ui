const webpack = require('webpack');
const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // no support for ES6+
const TerserPlugin = require('terser-webpack-plugin'); // support for ES6+ (succesor of uglify-es)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	node: false,
	node: {
		fs: 'empty'
	},
	mode: 'development',
	// devtool:
	devServer: {
		//contentBase: path.join(__dirname, 'demo'),
		//compress: true,
		port: 8888,
		writeToDisk: true,
	},

	target: 'web',
	context: path.resolve(__dirname, 'src'),
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				cache: false,
				//test: /\.js(\?.*)?$/i,
				test: /\.min\.js$/
			}),
		],
		// minimizer: [new UglifyJsPlugin({
		// 	//uglifyOptions: { ecma: 7 },
		// 	//sourceMap: true,
		// 	include: /\.min\.js$/
		// })]
	},

	entry: {
		'ractive-dynamodb-ui': path.resolve(__dirname, './src/index.js'),
		'ractive-dynamodb-ui.min': path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'ractive-dynamodb-ui',

		// var, this, window, umd , amd, commonjs, global
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true   // Important
	},
	externals: {
		ractive: {
			commonjs: 'ractive',  // require
			commonjs2: 'ractive', // require + module.exports - used by nodejs
			amd: 'ractive',
			root: 'Ractive'
		},
		// '@awspilot/dynamodb': {
		// 	'commonjs': '@awspilot/dynamodb',
		// 	'commonjs2': '@awspilot/dynamodb',
		// 	root: 'ractive-dynamodb-ui',
		// },
		"aws-sdk": {
				commonjs: 'AWS',
				commonjs2: 'AWS',
				amd: 'AWS',
				root: 'AWS'
		},
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }) // { filename: "[name].[contentHash].css" }
	],
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader, // extract css into files

					// {
					// 	loader: 'style-loader', // creates style nodes from JS strings
					// },

					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
						// options: {
						//	paths: [path.resolve(__dirname, 'node_modules')],
						// 	strictMath: true,
						// 	noIeCompat: true,
						// },
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
					test: /\.ractive\.html$/,
					use: 'babel-loader'
			},
			{
				test: /\.ractive\.html$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'ractive-bin-loader'
					}
				]
			}
		]
	}
}
