var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

module.exports = [
	{
		entry: __dirname + "/scripts/script.ts",
		output: {
			path: __dirname + "/js",
			filename: "script.js"
		},
		resolve: {
			extensions: [".ts"]
		},
		devtool: "source-map",
		module: {
			rules: [{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: "ts-loader"
			}]
		},
		plugins: [new webpack.optimize.UglifyJsPlugin()]
	},
	{
		entry: __dirname + "/sass/style.scss",
		output: {
			path: __dirname + "/css",
			filename: "style.css"
		},
		resolve: {
			extensions: [".css", ".scss"]
		},
		devtool: "source-map",
		module: {
			rules: [
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader?minimize&sourceMap!postcss-loader!sass-loader"
					})
				},
				{
					test: /\.svg$/,
					exclude: /node_modules/,
					use: "svg-url-loader"
				}
			]
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				options: {
					context: "/",
					postcss: [autoprefixer({browsers: [
						"last 2 versions",
						"ie >= 11",
						"Android >= 4",
						"ios_saf >= 9"
					]})]
				}
			}),
			new ExtractTextPlugin("style.css")
		]
	}
];
