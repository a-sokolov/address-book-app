const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const {join, resolve} = require('path');

const pkgConfig = require('./package.json').config;
const componentsPath = join(__dirname, pkgConfig.components);

module.exports = {
    entry: `${componentsPath}/app.js`,
    output: {
        path: resolve(__dirname, pkgConfig.dist),
        publicPath: '/',
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|svg|jpg|png|ico)$/,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CopyWebpackPlugin([{
            from: "./src/images/favicon.ico"
        }])
    ]
};