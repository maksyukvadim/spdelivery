"use strict";

var path = require('path');

var config = {
    entry: {
        app: './src/app.js',
        vendor: ['lodash']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"]
                },
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "build")
                ]
            },
            {
                test: /\.css$/,
                use: 'css-loader',
                loader: "style-loader!css-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "build")
                ]
            },
        ]
    }

};

module.exports = config;