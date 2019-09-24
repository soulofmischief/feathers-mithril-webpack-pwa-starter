// @flow strict
import m from 'mithril'
import { paths } from 'Router/paths'


/** Create a map of each path with a method for routing to that path */
export const goTo = Object
// Get a list of each key and value
  .entries( paths )
  // Reduce it to a single object containing a new map
  // with corresponding keys and the goTo method for each path
  .reduce(( acc, path ) => {
    // Add goTo method for this path
    acc[ path[0] ] = ( data, options ) =>
      // We're using mithril, so use m.route
      m.route.set( path[1], data, options )
    return acc
    /* $FlowFixMe */
  }, ({}: Object ))
