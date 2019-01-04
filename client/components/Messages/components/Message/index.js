// @flow strict
// @jsx m
import m from 'mithril'
import { oneLine } from 'common-tags'
import { getDayAndTime } from 'Lib/dates'
import { User } from 'Models/User'
import style from './message.scss'

import type { Vnode } from 'Flow'


export function Message({ attrs }: Vnode ) { return {
  date: new Date( attrs.message?.createdAt || 0 ),

  view({ attrs }: Vnode ) { return (
    <div
      class={ oneLine`
        ${ style.body }
        ${ attrs.message.user.username === User.current?.username
          ? style.body__mine
          : style.body__theirs
        }
      `}
      key={ attrs.message._id }>
      <img
        alt=""
        class={ style.avatar }
        src={ attrs.message.user.avatar }
        title={`${User.current?.username || '' }`}/>

      <div class={ style.content }>
        <div class={ style.content_header }>
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
