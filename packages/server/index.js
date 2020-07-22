/* eslint-disable no-console */
import { convertHRTime } from 'RootLib/node'
import { app } from './app'
import { createServer } from './createServer'


const initTime = process.hrtime()

// Create feathers server.
createServer( app )
  .catch( e => console.error( e ))

// Server creation time.
console.log(
  'Startup time:',
  `${ convertHRTime( process.hrtime( initTime )).ms }ms`
)
