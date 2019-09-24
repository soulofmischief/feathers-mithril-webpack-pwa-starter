// @flow strict
import { goTo } from './goTo'
import { authenticate } from 'Hooks/users'


/** Redirect to login page if not authenticated */
export async function protect( cb: () => mixed ) {
  if ( await authenticate())
  // Execute callback, which is probably a dynamic import.
    return cb()
  // Route to login if not authenticated
  else return goTo.login()
}
