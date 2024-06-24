const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin  = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://13.127.168.75:8002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "Report",
      filename: "remoteEntry.js",
      remotes: {
       
      },
      exposes: {
        "./Report":"./src/App.js"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
    ,
    new CopyWebpackPlugin({
      patterns:[
        {
          from:'public',to:'public'
        }
      ]
    })
  ],
});
