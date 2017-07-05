var path = require('path');

module.exports = {
    entry: './src/index1.js',
    output: {
        filename: 'bundle1.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};