var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'source');

module.exports = {
    entry: __dirname + '/source/App.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                include: [
                    APP_DIR
                ]
            }
        ]
    }
};