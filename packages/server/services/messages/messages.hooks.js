import * as feathersAuthentication from '@feathersjs/authentication'
import { isNonEmpty, isString } from '../../hooks/common/verification'
import { populateUser } from '../../hooks/populate-user'
import { processMessage } from '../../hooks/process-message'
import { trim } from '../../hooks/trim'


const { authenticate } = feathersAuthentication.hooks


export default {
  before: {
    all: [authenticate( 'jwt' )],
    find: [],
    get: [],
    create: [
      isString( 'text', 'Message is invalid'  ),
      trim( 'text' ),
      isNonEmpty( 'text', 'Message is empty'  ),
      processMessage()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
