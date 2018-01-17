const path = require('path');

module.exports = {
    context: __dirname,

    entry: {
        multiselect: './src/index.js',
        demo: './demo/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'vue-multiselect',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    externals: {
        vue: 'vue'
    }
};
