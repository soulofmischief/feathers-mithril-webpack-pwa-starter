// @flow strict
// @jsx m
import m from 'mithril'
import { Icon } from 'Components/Icon'
import { Form } from './components/Form'
import style from './login.scss'


export function Login() { return {
  view() { return (
    <div class={ style.body }>
      <div class={ style.filler }>
        <Icon name="ui.account" class={ style.filler_icon } noDefault/>
        Please log in or create an account.
      </div>

      <Form/>
    </div>
  )}
}}
