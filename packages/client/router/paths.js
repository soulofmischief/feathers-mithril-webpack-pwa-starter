// @flow strict
import { prependRootPath } from 'Router/hooks/prependRootPath'


export const paths = prependRootPath({
  home: '',
  login:  'login',
}, process.env.ROOT )
