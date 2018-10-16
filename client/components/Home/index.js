// @flow strict
// @jsx m
import m from 'mithril'
import { Messages } from 'Components/Messages'
import { SendMessage } from 'Components/SendMessage'
import style from './home.scss'


export function Home() { return {
  view() { return (
    <div class={ style.body }>
      <Messages/>
      <SendMessage/>
    </div>
  )}
}}
