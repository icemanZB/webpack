var path = require('path');

module.exports = {
	entry : './src/index2.js',
	output: {
		filename: 'bundle2.js',
		path    : path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use : [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use : [
					'file-loader'
				]
			}
		]
	}
};