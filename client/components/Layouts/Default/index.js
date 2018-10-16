// @flow strict
// @jsx m
import m from 'mithril'
import { Header } from 'Components/Header'
import style from './default.scss'

import type { Vnode } from 'Flow'


export function Default() { return {
  view( v: Vnode ) { return (
    <div class={ style.body }>
      <Header/>
      { v.children }
    </div>
  )}
}}
