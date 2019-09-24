// @flow strict
import nanoid from 'nanoid'
//import { getHSL } from './color'
import { trailingForwardSlashes } from 'Lib/regex'


/**
 * Generate random short ID using nanoid.
 * Useful for namespacing IDs for forms, menus, etc.
 */
export function shortID(
  { underscore = false }: {
    underscore: boolean // Append underscore to ID
  } = {}
) {
  return underscore ? `_${ nanoid( 6 )}` : nanoid( 6 )
}


export function getNumericalHash( string = '' ) {
  // Initialize hash value
  let hash = 0
  // Return if the string is empty.
  if ( string.length === 0 ) return hash


  for ( let i = 0; i < string.length; i++ ) {
    hash = string.charCodeAt( i ) + (( hash << 5 ) - hash )
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

export function appendForwardSlash( str: string ) {
  return `${ str.replace(
    trailingForwardSlashes,
    '' )
  }/`
}
