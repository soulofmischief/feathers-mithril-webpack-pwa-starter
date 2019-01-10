// @flow strict
import m from 'mithril'
import { routes } from './routes/index.js'

// Define root
const root = document.querySelector( '#root' )

// Configure
m.route.prefix( '' )

// Route
m.route( root, '/', routes )
