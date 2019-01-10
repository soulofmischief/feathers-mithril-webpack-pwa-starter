// @flow strict
import md5 from 'crypto-js/md5'

const
  // Gravatar URL prefix
  gravatarUrl = 'https://s.gravatar.com/avatar'


/**
 * Construct URL for avatar using gravatar API
 */
export function getDefaultAvatar( str: string, {
  size = 100,
  type = 'retro'
}: {
  size: number,
  type?: string
} = {}): string {
  const
    // Build an MD5 hash from the provide string.
    hash = md5( str.trim().toLowerCase()),

    // Build query from options
    query = `s=${ size }?&d=${ type }`

  // Return url
  return `${ gravatarUrl }/${ hash }?${ query }`
}
