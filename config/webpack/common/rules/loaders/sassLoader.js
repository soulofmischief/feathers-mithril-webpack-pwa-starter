import importOnce from 'node-sass-import-once'
import { paths } from '../../../../paths'


export const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      importer: importOnce,
      importOnce: {
        index: true,
        css: false,
        bower: false
      },
      includePaths: [ paths.client.stylesheets ],
    },
  },
}
