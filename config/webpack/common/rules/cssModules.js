import path from 'path'
import { paths } from '../../../paths'
import * as l from './loaders'


/**
 * Component styles toolchain using SASS + CSS Modules.
 * When imported, the class names in each .scss file are appended with
 * a file-specific unique ID and returned as an object.
 * The css with the modified class names is either injected into the DOM
 * or extracted into css files using webpack's chunking algorithm.
 *
 * @type {{test: RegExp, include: *[], exclude: RegExp, use: *[]}}
 */
export const cssModules = {
  test: /\.scss$/,
  include: paths.client.components,
  exclude: /\.flow$/,
  use: [
    l.cssExtractLoader,
    l.cssFlowLoader,
    l.cssModulesLoader,
    l.postCSSLoader,
    l.sassLoader,
  ]
}
