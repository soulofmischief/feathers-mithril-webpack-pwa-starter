// @flow strict
import { appendStringToProps } from '@soulofmischief/js-utils'
import { appendForwardSlash } from 'Lib/strings'


/** Append root path to an object containing path strings */
export function appendRootPath(
  paths: {[ string ]: mixed },
  root: string
) {

  return appendStringToProps(
    paths,
    // Ensure we only have one trailing slash.
    appendForwardSlash( root )
  )
}
