// @flow strict
import m from 'mithril'
import type { Vnode } from 'Flow'


async function oninit( v: Vnode ) {
  this.icon = await import( /* webpackPreload: true */ `${
    // Append default namespace if there isn't one.
    // Then dynamically import the resulting path.
    v.attrs.name.includes( '.' )
      ? './'
      : './misc/'
    }${ v.attrs.name.replace( /\./g,'/' )}.js`
  )

  m.redraw()
}


export const hooks = {
  oninit,
}
