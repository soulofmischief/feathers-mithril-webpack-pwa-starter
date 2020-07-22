//import { promises as fsp } from 'fs'
import fs from 'fs'
import https from 'https'
import path from 'path'
import { promisify } from 'util'
import { app } from './app'
import { logger } from './logger'


const
  port = app.get( 'port' ),
  readFileAsync = promisify( fs.readFile )


/** Create server for use in a FeathersJS app. */
export async function createServer( app ) {
  let server

  // In development mode, create and bind custom HTTPS server.
  if ( process.env.NODE_ENV === 'development' ) {
    server = https.createServer({
      key: await readFileAsync(
        path.resolve( __dirname, app.get( 'ssl' ).key )
      ),
      cert: await readFileAsync(
        path.resolve( __dirname, app.get( 'ssl' ).cert )
      ),
    }, app ).listen( port )

    // Call app.setup to initialize all services and socketIO
    app.setup( server )
  } else server = app.listen( port )

  process.on( 'unhandledRejection', ( reason, p ) =>
    logger.error( 'Unhandled Rejection at: Promise ', p, reason )
  )

  server.on( 'listening', () =>
    logger.info(
      `Feathers application started on ${app.get( 'protocol' )}://%s:%d`,
      app.get( 'host' ),
      port
    )
  )

  return server
}
