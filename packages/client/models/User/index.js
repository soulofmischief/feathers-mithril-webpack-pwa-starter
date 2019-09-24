// @flow strict
import bind from '@soulofmischief/bind-props'
import { Model } from 'Models'
import * as ctrl from './controller'

export const User = new class C_User extends Model {
  constructor() {
    super()
  }

  current = null

  get id() { return this.current?._id }

  get name() { return this.current?.username }

  ctrl = bind( this, ctrl )
}
