const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: path.resolve(__dirname, 'node_modules'),
			include: path.resolve(__dirname, "src"),
		}, {
			test: /\.scss$/,
			include: path.resolve(__dirname),			
			use: ExtractTextPlugin.extract({ 
				fallback:'style-loader',
				// use:['rtlcss-loader','sass-loader'],
				use:['css-loader','sass-loader'],				
			})
		}, {
			test: /\.css$/,
			include: path.resolve(__dirname),
			use: ExtractTextPlugin.extract({ 
				fallback:'style-loader',
				use:'css-loader',				
			})
		}, {
			test: /\.(ico|png|jpg)/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'assets/img/'
			}
		}, {
			test: /\.(ttf|woff2|woff|eot|svg)/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'assets/fonts/'
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin({filename:'app.bundle.css'}),
		new HtmlWebpackPlugin({
			chunksSortMode: 'dependency',
			template: path.resolve(__dirname, './src/index.html')
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		})
	]
}