module.exports = {
    devtool: "source-map",
    entry: {
        'sqlinq2string': './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    }
};