// @flow strict
import type { Vnode } from 'Flow'

import m from 'mithril'
import { merge } from '@soulofmischief/js-utils'
import { Default } from 'Components/Layouts/Default'


export function applyLayout( v: Vnode ) { return m( Default, v )}


export function scrollToBottom() {
  const vnode = this

  if ( vnode.dom )
    vnode.dom.scrollTop = vnode.dom.scrollHeight
}


export function updateHistory( state, replace = false ) {
  // Deep merge history.state with new state
  m.route.set(
    m.route.get(),
    null,
    { // Merge mutates the first object, so pass an empty object
      state: merge(
        window.history.state || {},
        state || {}
      ),
      replace: replace,
    }
  )
}
