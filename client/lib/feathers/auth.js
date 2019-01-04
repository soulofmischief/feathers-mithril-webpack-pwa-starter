// @flow strict
/* eslint-disable no-console */
import m from 'mithril'
import jwt from 'jsonwebtoken'

import { client } from 'Client'
import { handleError } from 'Lib/utility'
import { goTo } from 'Router/paths'

import type { Credentials } from 'Flow'


export async function authenticateUser( credentials: Credentials ) {
  /**
   * Await authentication, either with
   * credentials or a token in localStorage
   * @return {Boolean} Allows for chaining with other functions
   */
  try {
    // First try with credentials, then try with default (token)
    if ( credentials ) await client.authenticate( credentials )
    else await client.authenticate()

    // Return true to allow chaining
    return true
  }

  catch ( e ) {
    // Log error and return false
    console.error( e )
    return false
  }
}


/**
 * Get user data from feathers server with provided ID.
 *
 * Retrieves current user if no ID is supplied.
 */
export async function getUser( id?: string ) {
  try {
    const localCredentials = localStorage[ 'feathers-jwt' ]

    if ( id )
      return await client.service( 'users' )
        .get( id )
    else if ( localCredentials )
      return await client.service( 'users' )
        .get( jwt.decode( localCredentials )?.userId || '' )
    else return null
  }

  catch( e ) { handleError( e )}

  return null
}


export async function logOut() {
  /**
   * Log user out and refresh view
   */
  client.logout()
  m.redraw()
  goTo.home()
}
