import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  // mode
  mode: "production",
  // entry
  entry: {
    main: path.resolve("./src/js/main.js"),
    about: path.resolve("./src/js/about.js"),
  },
  // output
  output: {
    path: path.resolve("./public"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  // devServer
  devServer: {
    static: {
      directory: path.resolve("./public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // modeule
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Countries | Home",
      template: path.resolve("./src/index.html"),
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Countries | About",
      template: path.resolve("./src/about.html"),
      filename: "about.html",
      chunks: ["about"],
    }),
    new MiniCssExtractPlugin(),
  ],
};
