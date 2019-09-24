// @flow strict
import { getActiveElement } from 'Lib/dom'
import { Menu } from 'Models/Menu'
import { toggleMenu } from './events'


export function oncreate( v ) {
  this.listener = toggleMenu.bind( v )
  window.addEventListener( 'keyup', this.listener )
}

export function onupdate( v ) {
  // If we opened the menu with a keyboard and no
  // item is selected, focus on the first item.
  const menu = v.dom.querySelector( '[role=menu]' )

  if (
    Menu.isOpen
    && !getActiveElement( menu.children )
    && this.openedWithKeyboard
  ) {
    this.openedWithKeyboard = false
    menu.children[0].focus()
  }
}

export function onremove() {
  Menu.ctrl.close()
  window.removeEventListener( 'keyup', this.listener )
}
