// @flow strict
// @jsx m
import m from 'mithril'
import { Icon } from 'Components/Icon'
import { shortID } from 'Lib/utility/strings'
import { Menu as M_Menu } from 'Models/Menu'

import { PopUp } from './components/PopUp'
import { openMenu } from './events'
import { items } from './items'

import * as hooks from './hooks'
import style from './menu.scss'

import type { Component } from 'Flow'


type MenuComponent = Component & {
  items: Array<[ string, () => mixed, string ]>,
}


export function Menu(): MenuComponent {
  const id = shortID({ underscore: true })

  return {
    ...hooks,
    buttonID: `menubutton${ id }`,
    menuID: `menu${ id }`,
    // Global hotkey to activate menu
    hotkey: 'Escape',

    // TODO: Optimize this.listener to an array of codes
    // TODO: of which a listener in the Model keeps track
    listener: null,

    view( v ) { return (
      <div
        role="button"
        id={ this.buttonID }
        class={ style.body }
        aria-controls={ this.menuID }
        aria-label={ v.attrs.name }
        onclick={ M_Menu.ctrl.open }
        onkeyup={ openMenu.bind( v )}
        tabindex={ 0 }
        title={ v.attrs.name }
      >
        {/* Icon */}
        <div class={ style.icon_wrapper }>
          <Icon name="ui.menu"/>
        </div>

        <PopUp
          id={ this.menuID }
          buttonID={ this.buttonID }
          items={ items }
        />
      </div>
    )}
  }
}

