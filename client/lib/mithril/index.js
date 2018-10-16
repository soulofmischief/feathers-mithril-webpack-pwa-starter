// @flow strict
import m from 'mithril'
import { Default } from 'Components/Layouts/Default'

import type { DOMSearch, Vnode } from 'Flow'

const { find } = Array.prototype

export function applyLayout( v: Vnode ) { return m( Default, v )}

/**
 * Return active element from a list of elements.
 * If there are none, return undefined.
 */
export const getActiveElement: DOMSearch = list => {
  return find.call(
    list,
    ( element: HTMLElement ) => element === document.activeElement
  )
}

export function scrollToBottom() {
  const vnode = this

  if ( vnode.dom )
    vnode.dom.scrollTop = vnode.dom.scrollHeight
}


