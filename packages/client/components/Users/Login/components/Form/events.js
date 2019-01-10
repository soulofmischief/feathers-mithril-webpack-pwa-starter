// @flow strict
import m from 'mithril'
import { logIn, signUp } from './hooks'
//eslint-disable-next-line no-unused-vars
import type { Vnode } from 'Flow'


/**
 * Handle form input
 * @this {Vnode}
 */
export function handleInput() {
  // Reset error state
  this.state.error = null

  // Update UI
  m.redraw()
}

/**
 * Handle form key events
 * @this {Vnode}
 */
export function handleKeys( e: KeyboardEvent ) {
  // Submit on Enter
  if ( e.key === 'Enter' ) {
    if ( e.ctrlKey )
      signUp.call( this )
    else
      logIn.call( this )
  }
}
