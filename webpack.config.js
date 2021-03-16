const path = require("path")

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    bundle: "./src/index.js"
  },

  output: {
    filename: "dependencies/[name].js",
    path: path.resolve(__dirname, ".tmp/public/")
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/styles/[name].css",
      chunkFilename: "[id].css"
    }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),
  ]
}
