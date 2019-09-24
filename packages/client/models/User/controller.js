// @flow strict
import { getUser } from 'Hooks/users'


export async function update() {
  this.current = await getUser()
}
