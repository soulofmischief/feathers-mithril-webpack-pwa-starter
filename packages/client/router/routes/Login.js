// @flow strict
import { paths } from '../paths'


export const Login = {
  [ paths.login ]: {
    onmatch() { return import( /* webpackChunkName: "c-auth" */
      'Components/Users/Login' ).then( c => c.Login )}
  },
}
