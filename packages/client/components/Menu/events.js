// @flow strict
import { isConfirm } from 'Lib/events'
import { Menu } from 'Models/Menu'

//eslint-disable-next-line no-unused-vars
import type { Vnode } from 'Flow'


/**
 * Toggle menu if event key matches the hotkey
 * @this {Vnode}
 */
export function toggleMenu({ key }: KeyboardEvent ) {
  if ( key === this.state.hotkey ) {
    if ( Menu.isOpen ) {
      // If we close the menu with toggleMenu right after opening it,
      // `this.state.openedWithKeyboard` is still flagged.
      // We need to disable it again.
      this.state.openedWithKeyboard = false
      Menu.ctrl.close()
    } else {
      this.state.openedWithKeyboard = true
      Menu.ctrl.open()
    }
  }
}


/**
 * Open menu on confirmation
 * @this {Vnode}
 */
export function openMenu( e: KeyboardEvent ) {
  // Open menu on Confirm or if Down Arrow is pressed
  if ( isConfirm( e ) || e.code === 'ArrowDown' ) {
    this.dom.blur()
    this.state.openedWithKeyboard = true
    Menu.ctrl.open()
  }
}
