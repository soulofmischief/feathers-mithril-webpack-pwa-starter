/* eslint-disable max-len */
import m from 'mithril'


export default attrs => (
  <svg viewBox="0 0 24 24" {...attrs}>
    {!!attrs.title && <title>{attrs.title}</title>}
    <path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
  </svg>
)
