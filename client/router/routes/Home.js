// @flow strict
import { authenticateUser } from 'Lib/feathers'
import { goTo, paths } from 'Router/paths'
import { applyLayout as render } from 'Lib/mithril'


export const Home = {
  [ paths.home ]: { render,
    async onmatch() {
      if ( await authenticateUser())
        return import( /* webpackChunkName: "c-home" */
          'Components/Home' ).then( c => c.Home )
      // Route to login if not authenticated
      else goTo.login()
    },
  }
}
