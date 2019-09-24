import path from 'path'
import { devMode } from '../index'
import paths from '../../../paths'


/**
 * File toolchain,
 * Load file resources and replace import with generated URL.
 * Compatible with CSS modules.
 * @type {{test: RegExp, include: *, exclude: RegExp, use: *[]}}
 */
export const files = {
  // Currently just used for images.
  test: /\.(png|svg|jpg|gif)$/,
  // Load just from the resources folder
  include: path.resolve( paths.root, 'resources' ),
  use: [
    // Load files with full pathname
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    },
    // Minify and compress images
    {
      loader: 'image-webpack-loader',
      options: {
        // Use this to speed up initial and, to a lesser extent,
        // subsequent compilations while developing
        // or using webpack-dev-server.
        // Debug mode is deprecated in webpack@2.x
        bypassOnDebug: true,
        // Same as above, except for webpack@2.x and newer
        disable: devMode,
      },
    },
  ],
}
