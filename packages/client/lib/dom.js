// @flow strict
import type { DOMSearch } from 'Flow/types/DOMSearch'


const { find } = Array.prototype


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
