import webpack from 'webpack'
import { webpackConfig as commonConfig } from './common'


const BundleAnalyzerPlugin =
    require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin


module.exports = function( env, argv ) {
  const config = commonConfig( env, argv )

  config.plugins.push( ...[
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
    ...config,
    devServer: {
      // Silence WebpackDevServer's own logs.
      // It will still show compile warnings and errors.
      clientLogLevel: 'none',
      compress: true,
      contentBase: 'public',
      historyApiFallback: {
        // Paths with dots should still use the history fallback.
        disableDotRule: true,
      },
      // Enable HMR
      hot: true,
      https: true,
      inline: true,
      // Display overlay on page containing error
      overlay: true,
      port: 4001,
      // Proxy requests to API server
      proxy: {
        // Handle REST requests
        [ process.env.API_URL_V1 ]: {
          target: process.env.FEATHERS_API_V1,
          // Remove ^/api/v* prefix from the request URL
          pathRewrite: {
            [`^${ process.env.API_URL_V1 }`]: ''
          },
          secure: false
        },
        // Handle socket.io connections
        [ process.env.SOCKETIO_URL_V1 ]: {
          target: process.env.FEATHERS_API_V1,
          secure: false,
          ws: true,
        }
      },
      // Trigger a page reload if `contentBase` is modified.
      watchContentBase: true,
    },
    devtool: 'cheap-module-eval-source-map',
    //mode: 'development',
  }
}
