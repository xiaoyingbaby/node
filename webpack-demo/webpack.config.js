var path = require("path");

module.exports = {
	devtool: "eval-source-map",
	entry: __dirname + "/src/js/main.js", //已多次提及的唯一入口文件
	output: {
		//path:path.resolve(__dirname,"build"),
		path: __dirname + "/dist/js", //打包后的文件存放的地方
		publicPath:"/assets/",
		filename: "main.bundle.js" //打包后输出文件的文件名
	},
	devServer: {
		host: "192.168.0.95", //主机名
		port: 9000, //端口号
		contentBase: "./", //本地服务器所加载的页面所在的目录
		//openPage: "index.html", //首页
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
		//hot: true	//热加载
	}
}