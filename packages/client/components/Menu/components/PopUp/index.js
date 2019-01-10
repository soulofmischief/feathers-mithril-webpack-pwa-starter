// @flow strict
// @jsx m
import m from 'mithril'
import { doActionInMacros } from 'Lib/events'
import { Menu } from 'Models/Menu'
import { Item } from '../Item'
import style from './popUp.scss'

//eslint-disable-next-line no-unused-vars
import type { Component, KeyMacro, Vnode } from 'Flow'

/**
 * Map each menu item to a KeyMacro
 * and if the event code matches a macro code,
 * fire that macro's action.
 * @this {Vnode}
 */
function handlePopUpKeys( e: KeyboardEvent ) {
  if ( doActionInMacros.call( this.attrs.items.map(
    ( i ): KeyMacro => { return {
      action: i[1],
      code: i[2],
    }}
  ), e ))
    Menu.ctrl.close()
}


export function PopUp(): Component { return {
  view( v ) { return (
    <div
      role="menu"
      id={ v.attrs.id }
      class={ style.body }
      aria-expanded={ Menu.isOpen }
      aria-labelledby={ v.attrs.buttonID }

      onkeyup={ handlePopUpKeys.bind( v )}
      // Hide if menu isn't being displayed
      style={`display: ${ Menu.isOpen ? 'inline-block' : 'none' }`}
      tabindex={0}
    >
      { v.attrs.items.map(( item, index ) =>
        // Set key as item's hotkey, since these should be unique.
        <Item key={ item[2]} index={ index } item={ item }/>
      )}
    </div>
  )}
}}
