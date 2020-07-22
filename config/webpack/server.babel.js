import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import NodemonPlugin from 'nodemon-webpack-plugin'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

import { alias } from '../alias'
import { config } from '../config'
import { paths } from '../paths'


const dev = process.env.NODE_ENV !== 'production'


module.exports = function( env, argv ) {
  const webpackConfig = {
    context: paths.server.root,

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
        include: [ paths.client.root, paths.server.root ],
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
      path: paths.server.output,
      publicPath: config.get( 'client.root' ) || '/',
    },

    plugins: [
      new CleanWebpackPlugin({
        dangerouslyAllowCleanPatternsOutsideProject: true,
        dry: false,
        root:     __dirname,
        verbose:  true,
      }),

      new webpack.DefinePlugin({
        CONFIG: JSON.stringify( config.get( 'server' )),
        'process.env.NODE_CONFIG_DIR': JSON.stringify( paths.appConfig ),
      }),
    ],

    resolve: {
      alias,
      extensions: [ '.js' ],
      modules: [
        paths.server.root,
        'node_modules'
      ],
    },

    // Ignore built-in node modules.
    target: 'node',
  }

  if ( argv.mode !== 'production' )
    webpackConfig.plugins.push( new NodemonPlugin())

  return webpackConfig
}
