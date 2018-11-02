const HtmlWebpackPlugin = require("html-webpack-plugin");

const {join, resolve} = require('path');
const pkgConfig = require('./package.json').config;
const variables = require('@jetbrains/ring-ui/extract-css-vars');
const ringUiWebpackConfig = require('@jetbrains/ring-ui/webpack.config');
const ringConfig = require('@jetbrains/ring-ui/webpack.config').config;

const componentsPath = join(__dirname, pkgConfig.components);

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, pkgConfig.dist),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            ...ringUiWebpackConfig.config.module.rules,
            {
                test: /\.css$/,
                include: componentsPath,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:7]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {variables}
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: ringUiWebpackConfig.componentsPath,
                include: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [componentsPath],
                use: {
                    loader: "babel-loader?cacheDirectory"
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};