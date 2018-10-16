// @flow strict
// @jsx m
import m from 'mithril'
import { Menu } from 'Components/Menu'
import style from './header.scss'


export function Header() { return {
  view() { return (
    <header class={ style.body }>
      <div class={ style.title }>Messages</div>
      <Menu name="Menu"/>
    </header>
  )}
}}
