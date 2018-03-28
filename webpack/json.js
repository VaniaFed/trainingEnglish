module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.json$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    },
                },
            ],
        },
    };
};