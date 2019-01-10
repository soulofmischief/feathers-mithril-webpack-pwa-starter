/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 24 24" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
)
