var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/router.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                test: /\.js|\.jsx$/,
                loader: 'babel-loader',
                options: {
                    babelrc: true
                }
            }
        ]
    },
};
