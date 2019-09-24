// @flow strict
import type { Credentials } from 'Flow/types/Credentials'

import { client } from 'Client'


/**
 * Await authentication, either with
 * credentials or a token in localStorage
 * @return {Boolean} Allows for chaining with other functions
 */
export async function authenticate(
  credentials?: Credentials,
  throwError?: boolean = false
) {
  try {
    // First try with credentials, then try with default (token)
    if ( credentials )
      await client.authenticate({ strategy: 'local', ...credentials })
    else await client.reAuthenticate()

    // Return boolean to allow function composition.
    return true
  }

  catch ( e ) {
    //eslint-disable-next-line no-console
    console.error( e )

    if ( throwError ) throw e
    else return false
  }
}
