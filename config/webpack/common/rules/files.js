import { paths } from '../../../paths'
import { fileLoader, imageLoader } from './loaders'


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
  include: paths.resources,
  use: [
    fileLoader,
    imageLoader,
  ],
}
