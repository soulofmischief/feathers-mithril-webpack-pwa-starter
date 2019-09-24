// @flow strict
import m from 'mithril'
import { debounce } from '@soulofmischief/js-utils'


export const close = debounce( function() {
  this.isOpen = false
  window.removeEventListener( 'click', this.ctrl.close )
  m.redraw()
}, 50 )


export const open = debounce( function() {
  this.isOpen = true
  window.addEventListener( 'click', this.ctrl.close )
  m.redraw()
}, 50 )


//export function close() { _close.call( this )}
//export function open() { _open.call( this )}

export function toggle() {
  this.isOpen
    ? this.ctrl.close()
    : this.ctrl.open()
}
