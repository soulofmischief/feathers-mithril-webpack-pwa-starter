// @flow strict
import { getDefaultAvatar } from './get-default-avatar'

// eslint-disable-next-line no-unused-vars
export function gravatar ( options: {} = {}) {
  return async ( context: { data: { avatar: string, username: string }}) => {
    context.data.avatar =
      getDefaultAvatar( context.data.username, { size: 100 })
    return context
  }
}


