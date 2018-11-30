const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass').default;
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const canvas = require('./webpack/canvas');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/ts/index.ts'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js',
            publicPath: '../'
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/index.pug'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new CopyWebpackPlugin([
                {
                  from: PATHS.source + '/json',
                  to: PATHS.build + '/json',
                  toType: 'dir'
                }
            ]),
            new CopyWebpackPlugin([
                {
                  from: PATHS.source + '/img',
                  to: PATHS.build + '/img',
                  toType: 'dir'
                }
            ]),
            new ExtractTextPlugin({filename: 'index.css'}),
        ],
    },
    pug()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            canvas,
            extractCSS()
            //uglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            canvas,
            devserver(),
        ])
    }
};
