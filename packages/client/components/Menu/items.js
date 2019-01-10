// @flow strict
import { goTo } from 'Router/paths'
import { logOut } from 'Lib/feathers'


export const items: [ string, () => mixed, string ][] = [
  [ 'Home', goHome, 'KeyH' ],
  [ 'Logout', logOut, 'KeyL' ],
]

// Wrap functions if necessary so that they
// aren't passed arguments from the event
function goHome() { goTo.home()}
