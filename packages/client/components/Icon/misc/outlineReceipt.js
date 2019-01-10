/* eslint-disable max-len */
import m from 'mithril'


export default attrs => (
  <svg viewBox="0 0 24 24" {...attrs}>
    {!!attrs.title && <title>{attrs.title}</title>}
    <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2L4.5,3.5L3,2v20l1.5-1.5L6,22l1.5-1.5L9,22l1.5-1.5
			L12,22l1.5-1.5L15,22l1.5-1.5L18,22l1.5-1.5L21,22V2L19.5,3.5z M19,19.09H5V4.91h14V19.09z"/>
    <rect x="6" y="15" width="12" height="2"/>
    <rect x="6" y="11" width="12" height="2"/>
    <rect x="6" y="7" width="12" height="2"/>
  </svg>
)
