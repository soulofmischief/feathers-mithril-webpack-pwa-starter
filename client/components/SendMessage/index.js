// @flow strict
// @jsx m
import m from 'mithril'
import { oneLine } from 'common-tags'
import { doOnConfirm } from 'Lib/events'
import { hooks } from './hooks'
import style from './sendMessage.scss'

import type { Component } from 'Flow'


export function SendMessage(): Component { return {
  ...hooks,
  isSending: false,
  isSent: false,
  error: null,

  view( v ) { return (
    <div class={ style.body }>
      <fieldset
        class={ oneLine`
            ${ style.input }
            ${ this.isSent ? style.input__success : '' }
            ${ this.error ? style.input__error : '' }
          `}
        disabled={ this.isSending }
      >
        <legend>
          { this.isSending
            ? 'Sending'
            : this.isSent
              ? 'Message delivered.'
              : this.error
                ? String( this.error.message )
                : 'Send message'
          }
        </legend>

        <textarea
          data-name="message-input"
          placeholder="Say something..."
        />

        <button
          class={ style.btn }
          onclick={ this.createMessage.bind( v )}
          onkeydown={ doOnConfirm( this.createMessage.bind( v ))}
        >
          Send <br/>
          <span class={ style.btn_help }>
            ( <kbd>Ctrl</kbd> + <kbd>Enter</kbd> )
          </span>
        </button>
      </fieldset>
    </div>
  )}
}}
