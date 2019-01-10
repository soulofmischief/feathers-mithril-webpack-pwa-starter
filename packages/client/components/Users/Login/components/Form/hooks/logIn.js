// @flow strict
import m from 'mithril'
import { _authenticate } from './_authenticate'
import { _getCredentials } from './_getCredentials'
import { _handleError } from './_handleError'

//eslint-disable-next-line no-unused-vars
import type { Vnode } from 'Flow'


/**
 * Try to authenticate user with provided credentials.
 * @this {Vnode}
 * @return {Promise<void>}
 */
export async function logIn() {
  try { await _authenticate( _getCredentials( this ))}
  catch ( e ) { _handleError.call( this, e )}
  m.redraw()
}
