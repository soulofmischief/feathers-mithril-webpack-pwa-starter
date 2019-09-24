import path from 'path'
import CompressionPlugin from 'compression-webpack-plugin'
import OfflinePlugin from 'offline-plugin'
import { webpackConfig as commonConfig } from './common'
import paths from '../paths'

const BundleAnalyzerPlugin =
        require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin


module.exports = function( env, argv ) {
  const config = commonConfig( env, argv )

  config.plugins.concat([
    // Emit gzip-compressed bundles
    new CompressionPlugin({
      algorithm: 'gzip',
      cache: true,
      filename: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 4096,
      minRatio: 0.8
    }),

    // Analyze bundles
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      generateStatsFile: true,
      openAnalyzer: false,
      reportFilename: path.resolve( paths.root, 'logs/webpack/report.html' ),
      statsOptions: { source: false },
      statsFilename: path.resolve( paths.root, 'logs/webpack/stats.json' ),
    }),

    // It's always better if OfflinePlugin is the last plugin added
    new OfflinePlugin(),
  ])

  return { ...config }
}
