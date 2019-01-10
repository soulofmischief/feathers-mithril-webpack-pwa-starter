// @flow strict
// @jsx m
import m from 'mithril'
import { handleMenuKeyEvent } from 'Lib/events'
import style from './item.scss'

import type { Component } from 'Flow'


export function Item(): Component { return {
  view({ attrs }) { return (
    <div
      role="menuitem"
      class={ style.body }
      onclick={ attrs.item[1] }
      onkeyup={ handleMenuKeyEvent.bind({
        callback: attrs.item[1],
        index: attrs.index
      })}
      tabIndex={ -1 }
    >
      { attrs.item[0] }
    </div>
  )}
}}
