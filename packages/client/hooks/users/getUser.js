// @flow strict
import ms from 'ms.macro'
import { client } from 'Client'
import { handleError } from 'Lib/async'
import { asyncCache } from 'Lib/asyncCache'


/**
 * Get user data from feathers server with provided ID.
 * Retrieves current user if no ID is supplied.
 * Implements rate-based caching.
 */
export const getUser: Promise<{}> = asyncCache({
  maxAge: ms`20s`, load, pruneThrottleTime: ms`1m`
})


async function load( id?: string ) {
  // Get user and remap _id -> id for convenience.
  try {
    if ( id )
      return await client.service( 'users' ).get( id )

    else return ( await client.get( 'authentication' )).user
  }

  catch( e ) { handleError( e )}
}
