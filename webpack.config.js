const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        // frontendPackages: './src/frontend.packages.js',
        appModule: './src/app.module.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/template.html",
            title: "Registration Form",
            minify:{
                // collapseWhitespace:true
            },
            // hash: true
        }),
        // new BundleAnalyzerPlugin(),
        // new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name:'[name].[ext]',
                            outputPath:'img/',
                            publicPath:'img/'
                        }
                    }
                ],
            },
        ],
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //     },
    // },

};