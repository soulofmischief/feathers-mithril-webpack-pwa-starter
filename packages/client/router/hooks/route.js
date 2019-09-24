// @flow strict


/** Route to a component upon resolution of a Promise */
export function route( component?: string ) {
  // Potential logic to run before routing to any component
  return ( module: * ) => {
    // Return the provided export,
    // or the first export in module.
    return module[ component ? module[ component ] : Object.keys( module )[0]]
  }
}
