// @flow strict
/* eslint-disable no-console */
import m from 'mithril'
import { client } from 'Client'
import { timeout } from 'Lib/utility'
import { getInput } from './getInput'


const
  // Artificially augment the time it takes to finish the request.
  // Rate limits should be enforced in the server, but this gives
  // the UI a chance to convey what's going on behind the scenes.
  requestDelay = 250,

  // Time before restoring the sent state back
  // to normal after a message has been sent.
  disableSentFlagDelay = 2000


/**
 * Create a message on the server.
 * @this {Vnode}
 */
export async function createMessage() {
  init( this )

  const input = getInput( this )
  if ( input ) {
    try {
      const startTime = performance.now()

      // Create message
      await client.service( 'messages' ).create({
        user: 'User',
        text: String( input.value )
      })

      // Wait for the provided delay, but subtract the amount of time it's
      // taken to wait for the input. A negative delay doesn't make sense.
      await timeout(
        Math.max( 0, requestDelay - ( performance.now() - startTime ))
      )

      // Set state
      this.state.error = null
      this.state.isSent = true

      // Disable isSent flag after a delay
      setTimeout(() => {
        this.state.isSent = false
        m.redraw()
      }, disableSentFlagDelay )

      await terminate( this )
    }

    catch ( e ) {
      // Propagate error
      console.error( e )

      // Set state
      this.state.error = e
      await terminate( this )
    }

    // Reset input
    input.value = ''
  }
}


function init( v ) {
  v.state.isSending = true
}


async function terminate( v ) {
  v.state.isSending = false

  // Update UI
  m.redraw()

  // Fix race bug where input doesn't always focus after error.
  await timeout( 100 )
  /* $FlowFixMe optional */
  getInput( v )?.focus()
}
