import { paths } from '../../../paths'
import * as l from './loaders'


/**
 * Regular stylesheet toolchain.
 * Imported into client to ensure base styles are loaded.
 * @type {{test: RegExp, include: *, exclude: RegExp, use: *[]}}
 */
export const styles = {
  // Standard processing for Sass stylesheets
  test: /\.scss$/,
  include: paths.client.stylesheets,
  exclude: /\.flow$/,
  use: [
    l.cssExtractLoader,
    l.cssLoader,
    l.postCSSLoader,
    l.sassLoader,
  ]
}
