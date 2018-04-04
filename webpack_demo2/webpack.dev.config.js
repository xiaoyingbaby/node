var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = {
    entry : {
        main : './src/js/main.js',
        index : './src/js/index.js',
        list : './src/js/list.js',
        detail : './src/js/detail.js'
    },
    output : {
        path : __dirname + '/dist', //输出路径，要用绝对路径
        filename : 'js/[name]-[hash].bundle.js', //打包之后输出的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '博客首页-by ghostwu',
            filename : 'index.html',
            inject : true,
            excludeChunks : ['list','detail'],
            inlineSource : '.(js|css)$' //全部内嵌
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '列表页-by ghostwu',
            filename : 'list.html',
            inject : true,
            excludeChunks : ['index','detail']
        }),
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '文章详情页-by ghostwu',
            filename : 'detail.html',
            inject : true,
            excludeChunks : ['list','index']
        })
    ]
};