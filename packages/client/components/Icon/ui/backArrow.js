/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 100 100" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M65 15L27.484 50 65 85l7.516-15-25-20 25-20z"/>
  </svg>
)
