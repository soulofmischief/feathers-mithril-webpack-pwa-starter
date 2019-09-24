// @flow strict
import m from 'mithril'
import { routes } from './routes/index.js'
import { appendForwardSlash } from 'Lib/strings'

// Define root
const root = document.querySelector( '#root' )

// Configure
m.route.prefix = ''

// Route
m.route( root, appendForwardSlash( process.env.ROOT ), routes )
