//const config = require( 'config' )
import CleanWebpackPlugin from 'clean-webpack-plugin'
import dotenv from 'dotenv-safe'
import Dotenv from 'dotenv-webpack'
import nodeExternals from 'webpack-node-externals'

import { optimization } from './common/optimization'
import alias from '../alias'
import paths from '../paths'

const dev = process.env.NODE_ENV !== 'production'

// Configure environment variables
dotenv.config()

module.exports = {
  context: paths.server,

  // Produce source maps.
  devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',

  entry: {
    index: './index.js',
  },

  // Ignore node_modules, we don't want to bundle these for backend apps.
  externals: [ nodeExternals()],

  mode: process.env.NODE_ENV,

  module: {
    rules: [{
      test: /\.(js)$/,
      include: [ paths.client, paths.server ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }
    }],
  },

  node: {
    console: true,
    global: true,
    process: true,
    __filename: true,
    __dirname: true,
    Buffer: true,
    setImmediate: true
  },

  optimization,

  output: {
    filename: '[name].js',
    //globalObject: 'this',
    path: paths.serverOutput,
    //publicPath: '/',
  },

  plugins: [
    new Dotenv({
      // Use .env.example like dotenv-safe
      safe: true,
      // Include system variables
      systemvars: true
    }),

    new CleanWebpackPlugin( paths.serverOutput, {
      allowExternal: true,
      root:     __dirname,
      verbose:  true,
    }),
  ],

  resolve: {
    alias,
    extensions: [ '.js' ],
    modules: [
      //paths.server,
      'node_modules'
    ],
  },

  // Ignore built-in node modules.
  target: 'node',
}
