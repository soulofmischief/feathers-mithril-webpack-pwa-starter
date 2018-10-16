/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 100 100" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M35 15l37.516 35L35 85l-7.516-15 25-20-25-20z"/>
  </svg>
)
