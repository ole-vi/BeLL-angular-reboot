var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader:'ts-loader',
                    },
                    {loader:'angular-router-loader'}
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.s?css$/,
                exclude: path.resolve(__dirname,'../src/app/'),
                loader: 'null-loader'
            },
            {
                test: /\.s?css$/,
                include: path.resolve(__dirname,'../src/app/'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname,'../src/'), // location of your src
            {} // a map of your routes
        )
    ]
}