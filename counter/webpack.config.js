module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./build/bundle.js"
    },
    devServer: {
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },
    devtool: 'source-map'
}