const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var config = {
	mode: 'development',
	entry: {
        compliance: './src/index.ts'
    },

    output: {
        library: '[name]',
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist')
	},

    plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],

	module: {
		rules: [
			{
				test: /.(ts|tsx)?$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
            },
            {
                test: require.resolve("./js/lib/xrmquery/dg.xrmquery.web.promise.min.js"),
                use: ['script-loader']
            }
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
}
