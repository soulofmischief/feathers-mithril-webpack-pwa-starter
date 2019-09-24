export function convertHRTime( hrtime ) {
  const
    ns = ( hrtime[0] * 1e9 ) + hrtime[1],
    ms = ns / 1e6,
    s = ns / 1e9

  return {
    ns,
    ms,
    s
  }
}
