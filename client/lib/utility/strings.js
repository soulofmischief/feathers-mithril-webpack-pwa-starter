// @flow strict
import md5 from 'crypto-js/md5'
import nanoid from 'nanoid'

const
  // Gravatar URL prefix
  gravatarUrl = 'https://s.gravatar.com/avatar'


/**
 * Construct URL for avatar using gravatar API
 */
export function getDefaultAvatar( str, {
  size = 100,
  type = 'retro'
}: {
  size: number,
  type: string
} = {}): string {
  const
    // Build an MD5 hash from the provide string.
    hash = md5( str.trim().toLowerCase()),

    // Build query from options
    query = `s=${ size }?&d=${ type }`

  // Return url
  return `${ gravatarUrl }/${ hash }?${ query }`
}


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
