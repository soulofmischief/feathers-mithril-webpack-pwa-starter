// @flow strict
import { isStale, throttle } from '@soulofmischief/js-utils'


// NOTE: Requires Node >8.5.0 (performance.now)
// Look for key corresponding to the parameter set
// Return it if it exists and isn't too old
// Otherwise fetch and save value to aforementioned key

/**
 * Cache expensive sync/async requests, automatically dropping/replacing
 * stale entries.
 * Pruning only happens when the cache is accessed, in an async manner.
 * Pruning takes place at most once every second by default.
 */
export function asyncCache({
  maxAge = 1000,
  load = ( val ) => val || false,
  pruneThrottleTime = 1000
}: {
  maxAge: number,
  load: ( ...args: *[]) => *,
  pruneThrottleTime: number,
} = {}) {
  // We use lexical binding for state instead of `this
  // in order to support arrow functions for `load.
  const state = {
    map: {}
  }

  // Throttle the pruning frequency.
  const pruneThrottled = throttle( prune, pruneThrottleTime )

  // Return a closure.
  return async function( ...args ) {
    // Each unique call should have its own cached value, so we use the
    // argument list as the key.
    const key = args.join()

    // Get node.
    let node = state.map[ key ]

    // Do we already have cached data?
    if ( node ) {
      // Re-cache if the data is stale.
      if ( isStale( node.time, maxAge ))
        set( node, load, args )
    }

    // If not, load it.
    else {
      node = state.map[ key ] = {}
      set( node, load, args )
    }

    // Remove old entries.
    //noinspection ES6MissingAwait
    pruneThrottled( state.map, maxAge )

    // Return node value.
    return node.val
  }
}

// Set a node's properties.
function set( node, cb, args ) {
  // Save a timestamp.
  node.time = performance.now()

  // Load and cache value using the provided callback and args.
  node.val = cb( ...args )
}

// Remove stale entries.
async function prune( map, maxAge ) {
  for ( let k of Object.keys( map )) {
    if ( isStale( map[k].time, maxAge )) {
      delete map[k]
    }
  }
}
