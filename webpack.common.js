const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // mode: 'development',
    entry: {
        mainModule:'./src/index.js',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/template.html",
            title: "Registration Form",
            minify:{
                // collapseWhitespace:true
            },
            hash: true
        }),
        // new BundleAnalyzerPlugin(),
        // new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // use: ['to-string-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use:[
                    'file-loader',
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

};