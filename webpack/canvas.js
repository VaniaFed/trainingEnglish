const webpack = require('webpack');
module.exports = function() {
    return {
        plugins: [
            new webpack.canvas({
                commonjs: "canvas",
                commonjs2: "canvas",
                amd: "canvas",
                root: "_"
            })
        ]
    };
};
