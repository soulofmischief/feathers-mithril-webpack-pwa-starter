// @flow strict
//eslint-disable-next-line no-unused-vars
import type { Vnode } from 'Flow'

import m from 'mithril'
import { _authenticate } from './_authenticate'
import { _getCredentials } from './_getCredentials'
import { _handleError } from './_handleError'





/**
 * Try to authenticate user with provided credentials.
 * @this {Vnode}
 * @return {Promise<void>}
 */
export async function logIn( e: Event ): Promise<void> | Error {
  e.preventDefault()

  // Update busy state
  this.state.isBusy = true

  // Attempt to authenticate user with provided credentials.
  try { await _authenticate( _getCredentials( this ))}
  catch ( e ) { _handleError.call( this, e )}

  m.redraw()

  // Delay re-enabling the form by half a
  // second to give the action some weight.
  setTimeout(() => {
    // Update busy state
    this.state.isBusy = false

    // Update UI
    m.redraw()
  }, 500 )
}
