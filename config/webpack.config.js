var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    
var tsLintOpts = require('./tslint.config.js');

/* Remove this for now, added because test files are linted but they don't seem to be added to the final build
// TS (or js) files to exclude
var excludeTs = [/(node_modules)/,'*.test'],
    testTs = function (modulePath) {
        return modulePath.endsWith('.ts') && !modulePath.endsWith('test.ts');
    };
*/

module.exports = {
    entry:{
        'app':['./src/main.ts','./src/app/login/login.module.ts'],
        'vendor':'./src/vendor.ts',
        'polyfills':'./src/polyfills.ts'
    },
    output:{
        path:path.resolve(__dirname,'../build/')
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                enforce: 'pre',
                use:[
                    {loader: 'tslint-loader',options: tsLintOpts}
                ]
            },
            {
                test:/\.ts$/,
                use:[
                    {loader:'ts-loader'},
                    {loader:'angular-router-loader'}
                ]
            },
            {
                test:/\.s?css$/,
                loaders:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devtool:'source-map',
    resolve:{modules: ['node_modules'],extensions:['.ts','.js']},
    plugins: [
    // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname,'./src/'), // location of your src
            {} // a map of your routes
        ),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor','polyfills']
        })
    ],
    stats:"verbose"
};
