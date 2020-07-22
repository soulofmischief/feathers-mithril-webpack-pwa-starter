// @flow strict
// Set up socket.io connection
import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import rx from 'feathers-reactive'


const socket = io( CONFIG.url, {
  path: CONFIG.proxy.socket
})

// Configure and export client
export const client = feathers()
  // Configure socket connection
  .configure( feathers.socketio( socket ))

  // Configure feathers-reactive
  .configure( rx({
    idField: CONFIG.idField,
  }))

  // Use localStorage to hold authentication token
  .configure( feathers.authentication({
    storage: localStorage,
  }))
