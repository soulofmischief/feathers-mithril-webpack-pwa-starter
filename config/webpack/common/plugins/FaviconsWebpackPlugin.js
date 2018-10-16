import path from 'path'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import { paths } from '../paths'
import { title } from '../index'


const faviconLocation =
        path.resolve( paths.root, 'resources/pwa/icons/small.png' )


export default new FaviconsWebpackPlugin({
  // Inject the html into the html-webpack-plugin
  inject: true,
  logo: faviconLocation,
  persistentCache: true,
  title,

  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: true
  },
})
