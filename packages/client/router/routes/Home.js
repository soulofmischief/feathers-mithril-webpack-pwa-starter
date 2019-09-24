// @flow strict
import { applyLayout as render } from 'Lib/mithril'
import { protect, route } from 'Router/hooks'
import { paths } from 'Router/paths'


export const Home = {
  [ paths.home ]: { render,
    async onmatch() {
      return protect(() => import( /* webpackChunkName: "c-home" */
        'Components/Home' ).then( route()))
    },
  }
}
