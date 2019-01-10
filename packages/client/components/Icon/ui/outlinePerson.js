/* eslint-disable max-len */
import m from 'mithril'

export default attrs => (
  <svg viewBox="0 0 24 24" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <path d="M12,6c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6 M12,15c2.7,0,5.8,1.29,6,2v1H6l0-0.99C6.2,16.29,9.3,15,12,15
		M12,4C9.79,4,8,5.79,8,8s1.79,4,4,4s4-1.79,4-4S14.21,4,12,4L12,4z M12,13c-2.67,0-8,1.34-8,4v3h16v-3C20,14.34,14.67,13,12,13
		L12,13z"/>
  </svg>
)
