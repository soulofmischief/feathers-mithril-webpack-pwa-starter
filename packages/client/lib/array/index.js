// @flow strict

export const toObject = ( obj: Object, entry: * ) => {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return obj
}
