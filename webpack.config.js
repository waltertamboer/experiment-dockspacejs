const path = require('path');

module.exports = {
    entry: './public/js/application.ts',
    mode: 'production',
    target: ['web', 'es5'],
    plugins: [],
    module: {
        rules: [
            {
                test: /.\/public\/.+\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {}
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'application.js',
        globalObject: 'this',
        library: {
            name: 'Application',
            type: 'umd',
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
