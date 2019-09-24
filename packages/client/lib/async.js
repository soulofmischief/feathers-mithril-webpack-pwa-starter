// @flow strict
/* eslint-disable no-console */


export function handleError( error: Error ) {
  //if ( process.env.NODE_ENV !== 'production' )
  //  console.error( error )
  throw error
}
