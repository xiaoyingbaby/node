const webpack = require("webpack");
const path = require("path");
const copyWebpackPlugin = require('copy-webpack-plugin')	//复制静态文件

module.exports = {
	devtool: "eval-source-map",
	context: path.resolve(__dirname, "../"),
	entry: {
		"/js/main": "./src/js/main.js" //入口文件
	},
	output: {
		path: path.resolve(__dirname, "../dist"), //打包后的文件存放的地方
		filename: "[name].build.js" //打包后输出文件的文件名
	},
	plugins: [
		new copyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: path.resolve(__dirname, '../dist'),
			ignore: ['.*']
		}])
	]
}