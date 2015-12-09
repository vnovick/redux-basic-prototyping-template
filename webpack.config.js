var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "."],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:4545',
            './entry.js'
        ]
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: ".",
        inline: true,
        port: 4545,
        watch: true,
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap&sourceMapContents")
            },
            {
                test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/,
                loader: 'url',
                query: {
                    name: '[name][hash].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/,
                    /bower_components/,
                ]
            },
            {
                test: /\.css$/,
                loader: "style!css?sourceMap",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/
                ]
            },
            {
                test: "\.html$",
                loader: "html"
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("styles.css?[hash]")
    ]
};
