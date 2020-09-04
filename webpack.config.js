const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '代码分离',
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),
    },
};