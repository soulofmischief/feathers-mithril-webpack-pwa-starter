// @flow strict
// Files with hooks we don't want to inject into the component
// are differentiated by a leading underscore.
import type { Vnode } from 'Flow'

export function getInput({ dom }: Vnode ): ?HTMLInputElement {
  /* $FlowFixMe optional */
  return dom?.querySelector( '[data-name=message-input]' )
}
