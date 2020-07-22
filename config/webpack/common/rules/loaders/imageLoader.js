import { devMode } from '../../var'


/**
 * Minify and compress images
 */
export const imageLoader = {
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
}
