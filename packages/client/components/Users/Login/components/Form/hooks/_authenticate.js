// @flow strict
import { client } from 'Client'
import { goTo } from 'Router/paths'


export async function _authenticate( credentials: {
  username: string,
  password: string
}) {
  // Wait for response from server
  await client.authenticate({ ...credentials, strategy: 'local' })

  // Route to home
  goTo.home()
}
