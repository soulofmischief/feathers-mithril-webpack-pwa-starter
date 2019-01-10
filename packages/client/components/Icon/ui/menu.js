/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 100 86" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <rect width="100" height="18.412" rx="9.211" ry="9.206"/>
    <rect ry="9.206" rx="9.211" y="67.588" height="18.412" width="100"/>
    <rect width="100" height="18.412" y="33.794" rx="9.211" ry="9.206"/>
  </svg>
)
