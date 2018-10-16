// @flow strict
/* eslint-disable no-console */
import type { FeathersError } from 'Flow'


export function _handleError( error: FeathersError ) {
  /* this = vnode */

  // Clear password
  this.dom.querySelector( '[data-name=password]' ).value = ''

  // Set error state based on type
  if ( error.errorType === 'uniqueViolated' )
    this.state.error = {
      message: uniqueViolatedMessage(
        this.dom.querySelector( '[data-name=username]' ).value
      )}
  else
    this.state.error = error

  // Log to console
  if ( process.env.NODE_ENV !== 'production' )
    console.error( error )
}


// We don't want to leak which usernames are available and which aren't,
// so we don't get into specifics with this error.
function uniqueViolatedMessage( username: number | string ) {
  const type = typeof username

  if ( type !== 'number' || type !== 'string' )
    return `${ username } is not available.`
  else
    return 'Username is invalid.'
}
