var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./firework.js",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  devtool: 'source-maps',
};
