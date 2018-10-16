// @flow strict
/* eslint-disable no-console */
import m from 'mithril'
import { client } from 'Client'
import { scrollToBottom } from 'Lib/mithril'

import type { Vnode } from 'Flow'


async function oninit( v: Vnode ) {
  await this.get( v )
}

function oncreate( v: Vnode ) {
  scrollToBottom.call( v )
}

function onbeforeupdate( v: Vnode, old: Vnode ) {
  // Scroll to bottom of feed if messages have been added or removed
  if ( v.state.messages.data.length !== old.state.messages.data.length )
    scrollToBottom.call( v )

  return true
}


function onremove() {
  // Unsubscribe from messages service
  this.MessageService.unsubscribe()
}

async function get( v: Vnode ) {
  try {
    // Subscribe to messages service
    this.MessageService = client.service( 'messages' ).watch()
      .find({
        query: {
          // Show newest message at bottom
          $sort: { createdAt: 1 },
          $limit: 100
        }
      }).subscribe( messages => {
        // Assign messages to component
        this.messages = messages

        // Set state
        this.isLoaded = true

        // Update UI
        m.redraw()

        // Scroll to bottom of messages
        scrollToBottom.call( v )
      })
  } catch ( e ) {
    console.error( e )
  }
}


export const hooks = {
  oninit,
  oncreate,
  onbeforeupdate,
  onremove,
  get,
}
