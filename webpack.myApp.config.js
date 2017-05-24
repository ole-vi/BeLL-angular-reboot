var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    
var tsLintOpts = {
    configuration: {
        rules: {
            'no-import-side-effect':true,
            'curly':true,
            'forin':true,
            'no-conditional-assignment':true,
            'no-duplicate-variable':true,
            'no-construct':true,
            'no-empty':true,
            'no-eval':true,
            'no-switch-case-fall-through':true,
            'typeof-compare':true,
            'indent':[true,'spaces'],
            'arrow-return-shorthand':true,
            'prefer-switch': ['true',{'min-cases':3}]
        }
    }
};


// TS (or js) files to exclude
var excludeTs = [/(node_modules)/,'*.test'],
    testTs = function (modulePath) {
        return modulePath.endsWith('.ts') && !modulePath.endsWith('test.ts');
    };

module.exports = {
    entry:{
        'app':['./src/main.ts','./src/app/login/login.module.ts'],
        'vendor':'./src/vendor.ts',
        'polyfills':'./src/polyfills.ts'
    },
    output:{
        path:path.resolve(__dirname,'build/')
    },
    module:{
        rules:[
            {
                test: testTs,
                enforce: 'pre',
                use:[
                    {loader: 'tslint-loader',options: tsLintOpts}
                ],
                exclude:excludeTs
            },
            {
                test:testTs,
                use:[
                    {loader:'ts-loader'},
                    {loader:'angular-router-loader'}
                ],
                exclude:excludeTs
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
