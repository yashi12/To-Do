const {merge} = require('webpack-merge');
const common =require('./webpack.common.js');

module.exports =merge(common,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //         {
    //             test: /\.html$/,
    //             loader: 'html-loader',
    //         },
    //         {
    //             test: /\.js$/,
    //             enforce: 'pre',
    //             use: ['source-map-loader'],
    //         },
    //         {
    //             test: /\.(png|svg|jpe?g|gif)$/i,
    //             use:[
    //                 'file-loader',
    //             ],
    //         },
    //     ],
    // },
});