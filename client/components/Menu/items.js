import { goTo } from 'Router/paths'
import { logOut } from 'Lib/feathers'


export const items = [
  [ 'Home', goHome, 'KeyH' ],
  [ 'Logout', logOut, 'KeyL' ],
]

// Wrap functions so that they aren't passed arguments from the event
function goHome() { goTo.home()}
