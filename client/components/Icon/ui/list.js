/* eslint-disable max-len */
import m from 'mithril'


export default attrs => (
  <svg viewBox="0 0 24 24" {...attrs}>
    {!!attrs.title && <title>{attrs.title}</title>}
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
)
