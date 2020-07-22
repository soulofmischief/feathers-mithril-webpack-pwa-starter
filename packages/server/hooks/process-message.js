// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'


const domPurify = DOMPurify( new JSDOM( '' ).window )


// eslint-disable-next-line no-unused-vars
export function processMessage( options = {}) {
  return async context => {
    let { data } = context

    // Throw an error if we didn't get a text
    if( !data.text ) {
      throw new Error( 'Message is empty.' )
    }

    // Message is too long.
    if( data.text.length > CONFIG.messages.maxLength ) {
      throw new Error( 'Message cannot be longer than 400 characters.' )
    }

    // Get authenticated user
    const
      { user } = context.params,
      text = domPurify.sanitize( data.text )
        // Truncate message
        .substring( 0, Number( CONFIG.messages.maxLength ))

    // Extract wanted parameters into new object )
    context.data = {
      text,
      // Set the user id
      userId: user._id,
      // Add the current date
      createdAt: new Date().getTime()
    }

    // Best practice: hooks should always return the context
    return context
  }
}
