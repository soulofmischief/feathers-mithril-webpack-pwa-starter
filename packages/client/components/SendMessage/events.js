// @flow strict
import m from 'mithril'
import { createMessage } from './hooks/createMessage'


/*
* These methods expect vnode as `this`
*/

export async function handleTextAreaFocus() {
  // Reset error state
  this.state.error = null

  // Update UI
  //m.redraw()
}

/**
 * @this {Vnode}
 */
export async function handleTextAreaInput( e: Event ) {
  const target = e.currentTarget

  if ( target instanceof HTMLInputElement ) {
    // Update height
    target.style.height = 'auto'
    target.style.height = ( target.scrollHeight ) + 'px'
  }

  // Reset error state
  this.state.error = null

  // Update UI
  m.redraw()
}


export async function handleTextAreaKeys( e: KeyboardEvent ) {
  // Submit on Ctrl + Enter
  if ( e.ctrlKey && e.keyCode === 13 )
    await createMessage.call( this )
}
