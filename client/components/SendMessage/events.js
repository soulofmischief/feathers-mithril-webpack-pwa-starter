import m from 'mithril'
import { createMessage } from './hooks/createMessage'


/*
* These methods expect vnode as `this`
*/

export async function handleTextAreaFocus() {
  // Reset error state
  this.state.error = null

  // Update UI
  m.redraw()
}


export async function handleTextAreaInput( e ) {
  // Update height
  e.target.style.height = 'auto'
  e.target.style.height = ( e.target.scrollHeight ) + 'px'

  // Reset error state
  this.state.error = null

  // Update UI
  m.redraw()
}


export async function handleTextAreaKeys( e ) {
  // Submit on Ctrl + Enter
  if ( e.ctrlKey && e.keyCode === 13 )
    await createMessage.call( this )
}
