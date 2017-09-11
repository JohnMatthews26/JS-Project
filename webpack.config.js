var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./test.js",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  devtool: 'source-maps',
};
