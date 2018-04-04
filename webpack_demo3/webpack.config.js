var htmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry : './src/main.js',
    output : {
        path : __dirname + '/dist',
        filename : 'js/[name].bundle.js',
    },
    plugins : [
        new htmlWebpackPlugin({
            filename : 'index.html',
            template : 'index.html',
            inject : true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader', {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    query : {
                        name : 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    }
}