// @flow strict
import m from 'mithril'
import { appendForwardSlash } from '@soulofmischief/strings'
import { routes } from './routes'


// Define root
const root = document.querySelector( '#root' )

// Configure
m.route.prefix = ''

// Route
m.route( root, appendForwardSlash( CONFIG.root ), routes )
