import webpack from 'webpack'
import { webpackConfig } from './common'
import { config } from '../config'
import { paths } from '../paths'

/*const options = {
  alias,
  paths: paths.client,
  webpack: {
    configDir: paths.appConfig,
    devServer: {
      proxy: {
        root: config.get( 'client.proxy.root' ),
        socket: config.get( 'client.proxy.socket' ),
        target: config.get( 'server.url' ),
      },
    },
    publicPath: config.get( 'client.root' ) || '/',
    includes: [
      paths.client.root,
      paths.server.root,
    ],
    loaders: {
      babel: [ paths.client.root, paths.flow ],
      css: paths.client.stylesheets,
      cssModules: paths.client.components,
      files: [ paths.resources, paths.client.resources ],
      shaders: paths.client.root,
    },
    modules: [
      paths.client.root,
      //paths.server.root,
    ],
    template: path.resolve( paths.client.templates, 'index.ejs' ),
    title: config.get( 'app.title' ),
    pwa: {
      name: config.get( 'app.name' ),
      shortName: config.get( 'app.shortName' ),
      description: 'Expanding human potential.',
      //bgColor: '#f2f2f2',
      //themeColor: '#f2f2f2',
    },
  },
}*/


const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' )


module.exports = function( env, argv ) {
  const c = webpackConfig( env, argv, { name: 'client' })

  c.plugins.push( ...[
    new BundleAnalyzerPlugin({
      defaultSizes: 'gzip',
      openAnalyzer: false,
    }),

    new webpack.HotModuleReplacementPlugin()

    // it's always better if OfflinePlugin is the last plugin added
    /*new OfflinePlugin({
      ServiceWorker: {
        // Generate events
        events: true,
      },
    }),*/
  ])

  return {
    ...c,
    devServer: {
      clientLogLevel: 'none',
      compress: true,
      contentBase: paths.client.output,

      historyApiFallback: {
        // Paths with dots should still use the history fallback.
        disableDotRule: true,
      },

      // Enable HMR
      hot: true,
      https: true,
      inline: true,
      // Display overlay on page containing error.
      overlay: true,
      port: config.get( 'client.port' ),
      // Proxy requests to API server
      proxy: {
        // Handle REST requests
        [ config.get( 'client.proxy.root' )]: {
          target: config.get( 'server.url' ),
          // Remove ^/api/v* prefix from the request URL
          pathRewrite: {
            [`^${ config.get( 'client.proxy.root' )}`]: ''
          },
          secure: false
        },
        // Handle socket.io connections
        [ config.get( 'client.proxy.socket' )]: {
          target: config.get( 'server.url' ),
          secure: false,
          ws: true,
        }
      },
      // Trigger a page reload if `contentBase` is modified.
      watchContentBase: true,
      //host: '0.0.0.0',
    },

    devtool: 'cheap-module-eval-source-map',
  }
}
