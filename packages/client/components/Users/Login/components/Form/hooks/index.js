// @flow strict
import { handleInput, handleKeys } from '../events'
import type { Vnode } from 'Flow'

const { forEach } = Array.prototype

/**
 * Add listeners to update text area on key and input events.
 * The listeners will be automatically garbage-collected on remove.
 */
export function oncreate( v: Vnode ) {
  const inputs = v.dom.querySelector( '[data-name=input-container]' ).children

  forEach.call( inputs, input => {
    input.addEventListener( 'input', handleInput.bind( v ), false )
    input.addEventListener( 'keydown', handleKeys.bind( v ), false )
  })
}


export { logIn } from './logIn'
export { signUp } from './signUp'
