import alias from '../../alias'
import paths from '../../paths'


export const resolve = {
  alias,
  extensions: [ '.js', '.scss' ],
  modules: [
    paths.client,
    'node_modules'
  ],
}
