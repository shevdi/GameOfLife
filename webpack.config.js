module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/js",
        filename: "bundle.js"
    },    
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test   : /\.(ttf|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            { test: /vendor\/.+\.(jsx|js)$/,
              loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ]
    }
};