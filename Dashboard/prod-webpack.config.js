const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const envFile =  '../.env'; 
  const envPath = path.resolve(__dirname, envFile);
  const envVars = require('dotenv').config({ path: envPath }).parsed || {};

  return {
    // output: {
    //   publicPath: `${envVars.APP_URL}/dashboard/`,
    // },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },

    resolve: {
      alias: {
        controllers: path.resolve(__dirname, '../Controllers'),
    },
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      historyApiFallback: true,
      client: {
        overlay: false,
      },
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
        name: "Dashboard",
        filename: "remoteEntry.js",
        remotes: {
          Auth: `Auth@${envVars.APP_URL}/auth/remoteEntry.js`,
        },
        exposes: {
          "./Dashboard": "./src/App.js",
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
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(envVars),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            to: ".",
          },
        ],
      }),
    ],
  };
};
