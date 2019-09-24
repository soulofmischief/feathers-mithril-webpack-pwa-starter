import path from 'path'
import cors from 'cors'
import compress from 'compression'
import helmet from 'helmet'

import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio'
import rx from 'feathers-reactive'

import paths from 'Config/paths'

// Load dotenv if webpack isn't injecting environment vars.
if ( !process.env.ENVIRONMENT_VARS_PRESENT ) {
  const dotenv = require( 'dotenv-safe' )

  dotenv.config({
    path: path.resolve( paths.root,
      `.env.${ process.env.NODE_ENV || 'development' }`
    )
  })
}


import appHooks from './app.hooks'
import authentication from './authentication'
import channels from './channels'
import { logger } from './logger'
import middleware from './middleware'
import services from './services'


export const app = express( feathers())

// Load app configuration
app.configure( configuration())

// Enable security, CORS, compression, favicon and body parsing
app.use( helmet())
app.use( cors())
app.use( compress())
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
//app.use( favicon( path.join( app.get( 'public' ), 'favicon.ico' )))

// Host the public folder
//app.use( '/', express.static( app.get( 'public' )))

// Set up Plugins and providers
app.configure( express.rest())
app.configure( socketio())
app.configure( rx({
  idField: process.env.DATABASE_ID_FIELD
}))

// Configure other middleware (see `middleware/index.js`)
app.configure( middleware )
app.configure( authentication )
// Set up our services (see `services/index.js`)
app.configure( services )

// Set up event channels (see channels.js)
app.configure( channels )

// Configure a middleware for 404s and the error handler
app.use( express.notFound())
app.use( express.errorHandler({ logger }))

app.hooks( appHooks )
