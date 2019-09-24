// @flow strict
import { authenticate } from 'Hooks/users'
import { paths } from 'Router/paths'
import { goTo, route } from 'Router/hooks'


export const Login = {
  [ paths.login ]: {
    async onmatch() {
      if ( await authenticate()) return goTo.home()

      else return import( /* webpackChunkName: "c-auth" */
        'Components/Users/Login' ).then( route())}},
}
