import { devMode } from '../../var'

/**
 * Create .flow files alongside each source file
 * to enable completion and type-checking.
 */
export const cssFlowLoader = {
  loader: 'css-modules-flow-types-loader',
  options: {
    extension: '.scss',
    strict: true,
    watch: devMode,
  }
}
