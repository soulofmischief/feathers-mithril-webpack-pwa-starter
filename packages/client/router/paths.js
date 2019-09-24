// @flow strict
import { appendRootPath } from 'Router/hooks/appendRootPath'


export const paths = appendRootPath({
  home: '',
  login:  'login',
}, process.env.ROOT )
