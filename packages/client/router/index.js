// @flow strict
import m from 'mithril'
import { appendForwardSlash } from '@soulofmischief/strings'
import { routes } from './routes/index.js'

// Define root
const root = document.querySelector( '#root' )

// Configure
m.route.prefix = ''

// Route
m.route( root, appendForwardSlash( process.env.ROOT ), routes )
