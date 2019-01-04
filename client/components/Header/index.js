// @flow strict
// @jsx m
import m from 'mithril'
import { Menu } from 'Components/Menu'
import { shortID } from 'Lib/utility/strings'
import { User } from 'Models/User'
import style from './header.scss'


export function Header() { return {
  id: shortID({ underscore: true }),

  view() { return (
    <header class={ style.body }>
      <div class={ style.username }>{ User.current?.username }</div>
      <div class={ style.title }>
        <span role="img" aria-labelledby={`${ this.id }title`}>
          💬
        </span>&nbsp;
        <span id={`${ this.id }title`}>
          Messages
        </span>
      </div>

      <Menu name="Menu"/>
    </header>
  )}
}}
