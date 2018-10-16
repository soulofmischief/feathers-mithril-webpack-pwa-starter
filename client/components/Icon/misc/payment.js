/* eslint-disable max-len */
import m from 'mithril'


export default attrs => (
  <svg viewBox="0 0 24 24" {...attrs}>
    {!!attrs.title && <title>{attrs.title}</title>}
    <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M19,18H5
		c-0.55,0-1-0.45-1-1v-5h16v5C20,17.55,19.55,18,19,18z M20,8H4V7c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1V8z"/>
  </svg>
)
