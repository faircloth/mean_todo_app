// configuring webpack
var webpack = require('webpack'),
       path = require('path');

module.exports = {
    // where application source code lives
    context: __dirname + '/app',
    // first file webpack loads
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    // where the bundle will go when webpack finishes running
    output: {
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};