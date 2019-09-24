import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import dotenv from 'dotenv-safe'
import Dotenv from 'dotenv-webpack'
import nodeExternals from 'webpack-node-externals'

import alias from '../alias'
import paths from '../paths'

const dev = process.env.NODE_ENV !== 'production'

// Configure environment variables
dotenv.config({
  path: path.resolve( paths.root,
    `.env.${ process.env.NODE_ENV || 'development' }`
  )
})

module.exports = function( env, argv ) { return {
  context: paths.server,

  // Produce source maps.
  devtool: dev
    ? 'cheap-module-eval-source-map'
    : 'cheap-module-source-map',

  entry: { index: './index.js' },
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

  optimization: {
    // Minimize in production mode.
    minimize: argv.mode === 'production',
  },

  output: {
    filename: '[name].js',
    path: paths.serverOutput,
    publicPath: process.env.ROOT || '/',
  },

  plugins: [
    new Dotenv({
      // Load appropriate .env file
      path: path.resolve( paths.root,
        `.env.${ process.env.NODE_ENV || 'development' }`
      ),
      // Use .env.example like dotenv-safe
      safe: true,
      // Include system variables
      systemvars: true
    }),

    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
      dry: false,
      root:     __dirname,
      verbose:  true,
    }),
  ],

  resolve: {
    alias,
    extensions: [ '.js' ],
    modules: [
      paths.server,
      'node_modules'
    ],
  },

  // Ignore built-in node modules.
  target: 'node',
}}
