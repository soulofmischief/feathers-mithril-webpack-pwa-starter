import OfflinePlugin from 'offline-plugin'
import webpack from 'webpack'
import { webpackConfig as commonConfig } from './common'


const BundleAnalyzerPlugin =
    require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin

const webpackConfig = {
  ...commonConfig,
  devServer: {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
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
      '/api/v1': {
        target: process.env.FEATHERS_API_V1,
        // Remove ^/api/v* prefix from the request URL
        pathRewrite: {'^/api/v1' : ''},
        secure: false
      },
      // Handle socket.io connections
      '/socket.io': {
        target: process.env.FEATHERS_API_V1,
        ws: true,
      }
    },
    // Trigger a page reload if `contentBase` is modified.
    watchContentBase: true,
  },
  devtool: 'cheap-module-eval-source-map',
}


webpackConfig.plugins.push( ...[
  new BundleAnalyzerPlugin({
    defaultSizes: 'gzip',
    openAnalyzer: false,
  }),

  new webpack.HotModuleReplacementPlugin(),

  // it's always better if OfflinePlugin is the last plugin added
  new OfflinePlugin({
    ServiceWorker: {
      // Instructs the service worker to redirect any non-cached
      // navigation request to the specified route.
      //appShell: '/',
      // Generate events
      events: true,
    },
  }),
])

module.exports = webpackConfig
