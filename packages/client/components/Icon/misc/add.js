/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 16 16" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M6.666 3v3.645H3S2 7 2 7.978C2 8.955 3 9.31 3 9.31h3.666V13S7 14 8 14s1.334-1 1.334-1V9.31H13S14 9 14 8s-1-1.355-1-1.355H9.334V3S9 2 8 2 6.666 3 6.666 3z"/>
  </svg>
)
