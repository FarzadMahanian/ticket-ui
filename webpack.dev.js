const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve('dist'),
		port: 9000,
		open: true,
		historyApiFallback: true
	}
})