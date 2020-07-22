import path from 'path'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { config } from '../../../config'
import { paths } from '../../../paths'
//import dotenv from 'dotenv-safe'


// Configure environment variables
/*
dotenv.config({
  path: path.resolve( paths.root,
    `.env.${ process.env.NODE_ENV || 'development' }`
  )
})*/

const manifestIconDir = 'icons-manifest'


export default new WebpackPwaManifest({
  name: config.get( 'app.name' ),
  short_name: config.get( 'app.shortName' ),
  description: 'View and write messages with other users.',

  background_color: '#f2f2f2',
  crossorigin: 'use-credentials',
  theme_color: '#f2f2f2',

  icons: [
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/small.png' ),
      sizes: [ 24, 32 ] // multiple sizes
    },
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/medium.png' ),
      sizes: [ 48, 64, 96, 128, 192, 256, 384 ] // multiple sizes
    },
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/large.png' ),
      sizes: [ 512, 1024 ] // multiple sizes
    },
  ]
})
