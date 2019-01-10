/* eslint-disable max-len */
import m from 'mithril'
import { uiLikeLit } from '../../../stylesheets/themeExport.scss'

export default attrs => (
  <svg viewBox="0 0 24 24" { ...attrs }>
    { !!attrs.title && <title>{ attrs.title }</title> }
    <defs>
      <clipPath id="a">
        <path fill="#00695e" d="M-9.715 0H12v24H-9.715z"/>
      </clipPath>
    </defs>
    <path d="M12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54z"/>
    <path d="M7.5 3c1.74 0 3.41.81 4.5 2.09v16.26l-1.45-1.31C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3z" clip-path="url(#a)" fill={ uiLikeLit }/>
  </svg>
)
