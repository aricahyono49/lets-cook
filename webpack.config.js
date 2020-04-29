const path = require("path");

module.exports = {
    entry: "./js/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}

