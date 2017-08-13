require('colors');
const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;
const failPlugin = require('webpack-fail-plugin');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
var nodeExternals = require('webpack-node-externals');

if (minimize) {
    console.log('Building minified version of the library'.bgGreen.red);
} else {
    console.log('Building non minified version of the library'.bgGreen.red);
}

// Fail plugin will allow the webpack ts-loader to fail correctly when the TS compilation fails
var plugins = [failPlugin];

plugins.push(new webpack.HotModuleReplacementPlugin({
    multiStep: true
}));

if (minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}


module.exports = {
    name: 'client',
    target: 'node',
    entry: ['./src/coveo-client.ts'],
    output: {
        path: path.resolve('./bin/'),
        filename: 'coveo-client.js',
        library: 'CoveoClient',
        publicPath: '/bin/'
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['', '.ts', '.js'],
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: plugins,
    bail: true
}