// @flow strict
// @jsx m
import m from 'mithril'
import { getDayAndTime } from 'Lib/dates'
import style from './message.scss'

import type { Vnode } from 'Flow'


export function Message({ attrs }: Vnode ) { return {
  date: new Date( attrs.message.createdAt ),

  view({ attrs }: Vnode ) { return (
    <div class={ style.body } key={ attrs.message._id }>
      <img
        alt=""
        class={ style.avatar }
        src={ attrs.message.user.avatar }/>

      <div class={ style.content }>
        <div>
          <span class={ style.content_name }>
            { attrs.message.user.username }
          </span>
          <time
            class={ style.content_time }
            datetime={`${ this.date.toISOString() }`}
          >
            { getDayAndTime( this.date, { short: true })}
          </time>
        </div>

        <div class={ style.content_text }>
          { attrs.message.text }
        </div>
      </div>
    </div>
  )}
}}
