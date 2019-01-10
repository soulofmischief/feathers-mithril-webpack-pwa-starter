import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import paths from '../../../paths'
import minifyOptions from '../../../minify'


export default [
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    favicon: path.resolve( paths.root, 'resources/favicon.ico' ),
    minify: minifyOptions,
    template: path.resolve( paths.client, 'templates/index.ejs' ),
    // There's a bug in webpack in which imported variables don't
    // pass through to EJS templates, so I'm hard-code the tile for now till
    // I feel like figuring it out.
    title: 'Messages',
  }),

  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
  }),
]
