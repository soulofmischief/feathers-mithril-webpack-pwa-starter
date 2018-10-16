
// Files with hooks we don't want to inject into the component
// are differentiated by a leading underscore.
export function getInput( vnode ) {
  return vnode.dom.querySelector( '[data-name=message-input]' )
}
