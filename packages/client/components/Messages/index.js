// @flow strict
// @jsx m
import m from 'mithril'
import { Icon } from 'Components/Icon'
import { Message } from './components/Message'
import { hooks } from './hooks'
import style from './messages.scss'

import type { Vnode } from 'Flow'


/** Fetches and displays a list of recent messages */
export function Messages() { return {
  ...hooks,
  /** Have messages initially loaded? */
  isLoaded: false,
  /** Messages store */
  messages: { data: []},
  /** Reference to message service subscriber */
  MessageService: null,

  view({ attrs }: Vnode ) { return (
    <div
      class={ this.messages.data.length ? style.body : style.empty }
      key="messages"
      data-name="messages"
    >
      { this.messages.data.length ?
        <div class={ style.messageContainer }>
          { this.messages.data.map( msg =>
            <Message message={ msg } key={ m.id }/>
          )}
        </div>
        : this.isLoaded &&
        [
          <Icon
            name="ui.message"
            class={ style.empty_icon }
            key="icon" noDefault/>,

          <div key="inputs">
            <span class="line">No messages to show.</span>&nbsp;
            <span class="line">Why not send one?</span>
          </div>
        ]
      }
    </div>
  )}
}}
