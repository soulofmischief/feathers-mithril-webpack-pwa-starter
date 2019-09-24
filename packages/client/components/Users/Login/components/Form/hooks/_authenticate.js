// @flow strict
import { authenticate } from 'Hooks/users'
import { goTo } from 'Router/hooks'


export async function _authenticate( credentials: {
  username: string,
  password: string
}) {
  // Wait for response from server
  await authenticate( credentials, true )

  // Route to home
  goTo.home()
}
