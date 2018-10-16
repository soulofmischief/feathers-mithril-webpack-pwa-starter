// @flow strict
// @jsx m
import m from 'mithril'
import { Icon } from 'Components/Icon'
import { hooks } from './hooks'
import { getDayAndTime } from 'Lib/dates'
import style from './messages.scss'
import { Message } from 'Components/Messages/components/Message'

/** Fetches and displays a list of recent messages */
export function Messages() { return {
  ...hooks,
  /** Have messages initially loaded? */
  isLoaded: false,
  /** Messages store */
  messages: { data: [] },
  /** Reference to message service subscriber */
  MessageService: null,

  view() { return (
    <div
      class={ this.messages.data.length ? style.body : style.empty }
      key="messages"
      data-name="messages"
    >
      { this.messages.data.length ?
        <div class={ style.message_container }>
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
