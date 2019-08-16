const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    clientLogLevel: "warn",
    host: "0.0.0.0",
    port: 5000
  }
};
