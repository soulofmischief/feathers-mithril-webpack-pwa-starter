// @flow strict
//noinspection ES6PreferShortImport
import { prependRootPath } from './hooks/prependRootPath'


export const paths = prependRootPath({
  home: '',
  login:  'login',
}, CONFIG.root || '/' )
