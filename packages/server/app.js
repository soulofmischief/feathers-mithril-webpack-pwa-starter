import cors from 'cors'
import compress from 'compression'
import helmet from 'helmet'

import configuration from '@soulofmischief/feathers-configuration'
import express from '@feathersjs/express'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio'
import rx from 'feathers-reactive'

import appHooks from './app.hooks'
import authentication from './authentication'
import channels from './channels'
import { logger } from './logger'
import middleware from './middleware'
import services from './services'


export const app = express( feathers())

// Load app configuration
app.configure( configuration( 'server' ))



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
  idField: CONFIG.idField,
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
