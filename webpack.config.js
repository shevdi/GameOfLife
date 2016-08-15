module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test   : /\.(ttf|otf|svg)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            {
                test: /\.js$/,
                loader: "imports-loader?$=jquery&jQuery=jquery"
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
};