// @flow strict
import type { Vnode } from 'Flow'


export function _getCredentials( v: Vnode ) {
  const credentials = {
    username: v.dom.querySelector( '[data-name="username"]' ).value,
    password: v.dom.querySelector( '[data-name="password"]' ).value
  }

  if ( credentials.username === '' || credentials.password === '' )
    throw new Error( 'Missing credentials' )

  return credentials
}
