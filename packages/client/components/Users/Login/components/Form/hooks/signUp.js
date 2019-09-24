// @flow strict
import m from 'mithril'
import { client } from 'Client'
import { _authenticate } from './_authenticate'
import { _getCredentials } from './_getCredentials'
import { _handleError } from './_handleError'

//eslint-disable-next-line no-unused-vars
import type { Vnode } from 'Flow'


/**
 * Begin sign up process
 * @this {Vnode}
 */
export async function signUp( e: Event ): Promise<void> | Error {
  e.preventDefault()

  // Update busy state
  this.state.isBusy = true

  // Attempt to create user with provided credentials.
  try {
    const credentials = _getCredentials( this )

    // Create user
    await client.service( 'users' ).create( credentials )

    // Authenticate with new credentials
    await _authenticate( credentials )
  }

  catch ( e ) { _handleError.call( this, e )}

  m.redraw()

  // Delay re-enabling the form by half a
  // second to give the action some weight.
  setTimeout(() => {
    // Update busy state
    this.state.isBusy = false

    // Update UI
    m.redraw()

    // Focus on first input element
    this.dom.querySelector( 'input' ).focus()
  }, 500 )
}
