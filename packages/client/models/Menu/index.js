// @flow strict
import { Model } from 'Models'
import * as ctrl from './controller'
import bind from '@soulofmischief/bind-props'


export const Menu = new class C_Menu extends Model {
  constructor() {
    super()
  }

  isOpen = false

  ctrl = bind( this, ctrl )
  //ctrl = { ...bindProps( this, ctrl ), ctrl.}
}
