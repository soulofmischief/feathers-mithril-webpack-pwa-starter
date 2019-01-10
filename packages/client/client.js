// @flow strict
// Set up socket.io connection
import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import rx from 'feathers-reactive'


const socket = io( process.env.FEATHERS_API || '' )


// Configure and export client
export const client = feathers()
  // Configure socket connection
  .configure( feathers.socketio( socket ))

  // Configure feathers-reactive
  .configure( rx({
    idField: process.env.DATABASE_ID_FIELD,
  }))

  // Use localStorage to hold authentication token
  .configure( feathers.authentication({
    storage: localStorage,
  }))
