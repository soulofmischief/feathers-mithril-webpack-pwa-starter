// @flow strict
import { getInput } from './getInput'
import { createMessage } from './createMessage'

import {
  handleTextAreaFocus,
  handleTextAreaInput,
  handleTextAreaKeys } from '../events'


function oncreate( v ) {
  // Add listeners to update text area on key events and focus.
  const input = getInput( v )

  input.addEventListener( 'focus', handleTextAreaFocus.bind( v ))
  input.addEventListener( 'input', handleTextAreaInput.bind( v ))
  input.addEventListener( 'keydown', handleTextAreaKeys.bind( v ))
  input.focus()
}


export const hooks: {} = {
  oncreate,
  createMessage,
}
