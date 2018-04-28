const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')	//复制静态文件

module.exports = {
	devtool: "eval-source-map",
	context: path.resolve(__dirname, "../"), //基础目录
	entry: {
		"js/main": "./src/js/main.js" //入口文件，指向output.filename中的[name]，可以是单文件名，也可以是路径
	},
	output: {
		path: path.resolve(__dirname, "../dist"), //打包后的文件存放的地方
		publicPath: "assets/", //虚拟路径，
		filename: "[name].build.js" //打包后输出文件的文件名,[name]可以是路径/js/main
	},
	devServer: {
		host: "192.168.0.95", //主机名
		port: 9000, //端口号
		contentBase: "./", //本地服务器所加载的页面所在的目录
		//openPage: "index.html", //首页
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
		//hot: true	//热加载
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),//复制来源
			to: path.resolve(__dirname, '../dist'),//复制到哪
			ignore: ['.*']
		}])
	]
}