const path = require('path');
const webpack = require('webpack');
const tsNameof = require('ts-nameof');

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
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: [/node_modules/],
                options: {
                    getCustomTransformers: () => ({ before: [tsNameof] })
                }
            },
            {
                test: require.resolve("./js/lib/xrmquery/dg.xrmquery.web.promise.min.js"),
                use: ['script-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // Suppress fatal error: Cannot resolve module 'fs'
    // @relative https://github.com/pugjs/pug-loader/issues/8
    // @see https://github.com/webpack/docs/wiki/Configuration#node
    node: {
        fs: 'empty'
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};