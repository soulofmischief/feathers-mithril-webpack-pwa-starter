// @flow strict
// @jsx m
import m from 'mithril'
import { Messages } from 'Components/Messages'
import { SendMessage } from 'Components/SendMessage'
import { User } from 'Models/User'
import style from './home.scss'


export function Home() { return {
  async oncreate() {
    // Cache user
    User.ctrl.update()
    m.redraw()
  },

  view() { return (
    <div class={ style.body }>
      <Messages user={ this.user }/>
      <SendMessage/>
    </div>
  )}
}}
