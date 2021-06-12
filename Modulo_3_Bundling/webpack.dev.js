const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const DotEnv = require ('dotenv-webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        port: 8081,
    },
    plugins: [
        new DotEnv({
            path: './dev.env'
        })
    ]
});
