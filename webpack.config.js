import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: path.resolve(__dirname, 'src', 'scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    watchFiles: path.join(__dirname, 'src'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src', 'scripts'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules)/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.pug'),
        filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src', 'assets'),
              to: path.resolve(__dirname, 'dist', 'assets'),
          },
      ],
    })]
};

export default config;