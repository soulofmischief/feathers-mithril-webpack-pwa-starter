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
export async function signUp(): Promise<void> | Error {
  // Attempt to authenticate user with provided credentials.
  try {
    const credentials = _getCredentials( this )

    // Attempt to create user
    await client.service( 'users' ).create( credentials )

    // Authenticate if successful
    await _authenticate( credentials )
  }

  catch ( e ) { _handleError.call( this, e )}

  // Update UI
  m.redraw()
}
