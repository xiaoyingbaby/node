const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')	//复制静态文件
const ImageminPlugin = require('imagemin-webpack-plugin').default //压缩图片

module.exports = {
	devtool: "eval-source-map",
	context: path.resolve(__dirname, "../"), //基础目录
	entry: {
		"js/main": "./src/js/main.js" //入口文件，指向output.filename中的[name]，可以是单文件名，也可以是路径
	},
	output: {
		path: path.resolve(__dirname, "../dist"), //打包后的文件存放的地方
		filename: "[name].build.js" //打包后输出文件的文件名
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),//复制来源
			to: path.resolve(__dirname, '../dist'),//复制到哪
			ignore: ['.*']
		}])
		
		
	]
}