/* eslint-disable no-console */
import './env' // Load environment variables first

import { logger } from './logger'
import { app } from './app'


const port = app.get( 'port' )
const server = app.listen( port )

//noinspection ES6ModulesDependencies
process.on( 'unhandledRejection', ( reason, p ) =>
  logger.error( 'Unhandled Rejection at: Promise ', p, reason )
)

server.on( 'listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get( 'host' ),
    port
  )
)
