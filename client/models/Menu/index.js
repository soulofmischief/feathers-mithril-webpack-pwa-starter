// @flow strict
import { Model } from 'Models'
import * as ctrl from './controller'
import { bindProps } from 'Lib/utility/bindProps'


export const Menu = new class C_Menu extends Model {
  constructor() {
    super()
  }

  isOpen = false

  ctrl = bindProps( this, ctrl )
}
