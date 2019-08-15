const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
// const _ = require("dotenv").config();

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	entry: "./src/index",

	output: {
		filename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "public"),
		publicPath: '/'
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: "chattie",
			favicon: path.resolve(__dirname, "assets/img/favicon.ico"),
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
			}
		}),
		new Dotenv()
	],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				loader: "babel-loader",
				include: [path.resolve(__dirname, "src")],
				exclude: [/node_modules/]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: "async",
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true,
		proxy: {
			"/api": process.env.API_URL,
			"/websocket": process.env.WS_URL
		},
		historyApiFallback: true
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"~ui": path.resolve(__dirname, "./src/ui"),
			"~feautures": path.resolve(__dirname, "./src/feautures"),
			"~lib": path.resolve(__dirname, "./src/lib"),
			"~types": path.resolve(__dirname, "./src/types"),
			"~api": path.resolve(__dirname, "./src/api"),
			"~": path.resolve(__dirname, "./src/"),
		}
	}
};
