import path from 'path'
import { alias } from '../../alias'
import { paths } from '../../paths'


export const resolve = {
  alias,
  extensions: [ '.js', '.scss' ],
  modules: [
    path.resolve( paths.root, 'node_modules' ),
    paths.client.root,
    'node_modules'
  ],
}
