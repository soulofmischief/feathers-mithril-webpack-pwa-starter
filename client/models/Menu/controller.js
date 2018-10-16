// @flow strict
import m from 'mithril'
import { debounce } from 'Lib/utility'
import { Menu } from './index'


export const close = debounce(() => {
  Menu.isOpen = false
  window.removeEventListener( 'click', close )
  m.redraw()
}, 50 )

export const open = debounce(() => {
  Menu.isOpen = true
  window.addEventListener( 'click', close )
  m.redraw()
}, 50 )

export function toggle() { Menu.isOpen ? close() : open()}
