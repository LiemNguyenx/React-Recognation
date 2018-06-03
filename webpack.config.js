var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'C:\\Users\\liemn\\Desktop\\React-Recognation\\build');

var config = {
    entry: './index.js',
    output: {
        path: '/',
        filename: 'index.js',
        // path: BUILD_DIR,
        // filename: 'bundle1.js'
    },
    devServer: {
        inline: true,
        port: 3001
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}
module.exports = config;