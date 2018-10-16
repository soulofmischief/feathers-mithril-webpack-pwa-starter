/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 16 16" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M3 6.667S2 7.022 2 8s1 1.333 1 1.333h10s1-.31 1-1.31-1-1.356-1-1.356z"/>
  </svg>
)
