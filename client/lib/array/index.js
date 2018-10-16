// @flow strict

export const toObject = ( obj: {}, entry: * ) => {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return obj
}
