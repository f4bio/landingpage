import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { GitRevisionPlugin } from "git-revision-webpack-plugin";
import packageJson from "./package.json" assert { type: "json" };

const versionName = "v" + packageJson.version;
const versionCode = 1;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const entry = "./src/index.js";
export const mode = "development";
export const output = {
  path: path.resolve(__dirname, "./dist"),
  filename: "index_bundle.js",
};
export const devtool = "inline-source-map";
export const devServer = {
  contentBase: "./dist",
};
export const module = {
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          }
        },
        {
          loader: "postcss-loader"
        }
      ]
    }
  ],
};
export const plugins = [
  new CopyPlugin({
    patterns: [
      { from: "./src/profile.png" }
    ],
  }),
  new MiniCssExtractPlugin(),
  new GitRevisionPlugin(),
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    VERSION: JSON.stringify({
      name: versionName,
      code: versionCode,
      gitHash: JSON.stringify(new GitRevisionPlugin().commithash()),
    }),
    TIMESTAMP: JSON.stringify(Date.now())
  }),
  new FaviconsWebpackPlugin({
    logo: "./src/favicon.png"
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  })
];

export default {
  entry,
  mode,
  output,
  devtool,
  devServer,
  module,
  plugins
}
