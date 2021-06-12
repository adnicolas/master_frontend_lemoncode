const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const DotEnv = require ('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    stats: 'verbose',
    plugins: [
        new DotEnv({
            path: './prod.env'
        })
    ]
});
