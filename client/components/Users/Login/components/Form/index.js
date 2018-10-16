// @flow strict
// @jsx m
import m from 'mithril'
import { doOnConfirm } from 'Lib/events'
import { oneLine } from 'common-tags'
import * as hooks from './hooks'
import style from './form.scss'


export function Form() { return {
  ...hooks,
  // Error to display in fieldset legend
  error: null,
  // Message is currently sending
  isSending: false,
  // Message has recently been sent
  isSent: false,

  view( v ) { return (
    <fieldset
      class={ oneLine`
            ${ style.body }
            ${ this.isSent ? style.body__success : '' }
            ${ this.error ? style.body__error : '' }
          `}
      disabled={ this.isSending }
    >
      <legend>
        { this.error
          ? String( this.error.message )
          : 'Please enter your credentials'
        }
      </legend>

      <form class={ style.input } data-name="input-container">
        <input
          type="text"
          data-name="username"
          autocomplete="username"
          autofocus="autofocus"
          placeholder="Username"/>
        <input
          type="password"
          data-name="password"
          autocomplete="current-password"
          placeholder="Password"/>
      </form>

      {[ // Map each label, callback and element to a button
        [ 'Log In', this.logIn.bind( v ),
          <span key={ 0 }>
            &#40; <kbd>Enter</kbd> &#41;
          </span>
        ],
        [ 'Sign Up', this.signUp.bind( v ),
          <span key={ 1 }>
            &#40; <kbd>Ctrl</kbd> + <kbd>Enter</kbd> &#41;
          </span>
        ],
      ].map( b => (
        <button
          key={ b[0] }
          class={ style.btn }
          onclick={ b[1] }
          onkeydown={ doOnConfirm( this.logIn.bind( v ))}
        >
          { b[0] }

          <div class={ style.btn_help }>{ b[2] }</div>
        </button>
      ))}
    </fieldset>
  )}
}}
